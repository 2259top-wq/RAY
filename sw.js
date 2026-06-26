/**
 * AETHERIA 星寰塔羅學院 - Service Worker
 * PWA 離線快取策略：Cache-first for assets, Network-first for pages
 */

const CACHE_NAME = 'aetheria-tarot-v4';
const STATIC_CACHE = 'aetheria-static-v4';
const IMAGE_CACHE = 'aetheria-images-v4';

// Core files to cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/cards.js',
  '/minor_cards.js',
  '/manifest.json',
  '/assets/tarot_card_back.png',
  '/assets/cosmic_background.png',
];

// ─── Install: Pre-cache critical files ───
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Pre-caching static assets');
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// ─── Activate: Clean up old caches ───
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== IMAGE_CACHE)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ─── Fetch: Smart caching strategies ───
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Strategy 1: Cache-first for card images (large files)
  if (url.pathname.startsWith('/assets/card_') || url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;

        try {
          const response = await fetch(request);
          if (response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        } catch {
          // Return placeholder if offline and image not cached
          return new Response('', { status: 404, statusText: 'Offline' });
        }
      })
    );
    return;
  }

  // Strategy 2: Network-first for HTML/JS/CSS (always try fresh)
  if (url.pathname === '/' || url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(request).then((response) => {
        if (response.ok) {
          caches.open(STATIC_CACHE).then(cache => cache.put(request, response.clone()));
        }
        return response;
      }).catch(() => {
        return caches.match(request);
      })
    );
    return;
  }

  // Strategy 3: Stale-while-revalidate for everything else
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request).then((response) => {
        if (response.ok) {
          caches.open(STATIC_CACHE).then(cache => cache.put(request, response.clone()));
        }
        return response;
      });
      return cached || fetchPromise;
    })
  );
});

// ─── Background sync for offline actions ───
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-readings') {
    console.log('[SW] Background sync: syncing saved readings');
  }
});

// ─── Push notifications (future feature) ───
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || '星寰塔羅', {
      body: data.body || '今日塔羅運勢已更新，點擊查看！',
      icon: '/assets/icon-192.png',
      badge: '/assets/icon-192.png',
      tag: 'daily-tarot',
      requireInteraction: false,
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
