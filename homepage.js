/* ==========================================================================
   homepage.js — 首頁所有互動功能
   Card Gallery · Quote Rotator · Feature Navigation · Three-Card Synthesis
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────
     1. 名言輪播 Quote Rotator
  ──────────────────────────────────────────── */
  const quotes = [
    '牌不預測未來，它映照你內心已知的真相。',
    '每一次翻牌，都是與自己潛意識的一次對話。',
    '塔羅是問題，不是答案；答案永遠在你心中。',
    '宇宙透過象徵說話，而塔羅是它的語言。',
    '占卜的目的不是消除不確定性，而是幫你面對它。',
    '那些讓你不安的牌，往往是最需要傾聽的信息。',
    '每張牌都是一面鏡子，照見此刻你的振動頻率。',
    '大阿爾克那記錄人類靈魂的22個永恆課題。',
    '逆位不代表壞事，它代表能量尚未完全流通。',
    '真正的塔羅讀牌者，解讀的是整個故事，而非單張牌。',
  ];
  const quoteEl = document.getElementById('quote-text');
  if (quoteEl) {
    let qi = 0;
    setInterval(() => {
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        qi = (qi + 1) % quotes.length;
        quoteEl.textContent = quotes[qi];
        quoteEl.style.opacity = '1';
      }, 500);
    }, 6000);
    quoteEl.style.transition = 'opacity 0.5s';
  }

  /* ────────────────────────────────────────────
     2. 側邊展示牌隨機輪播
  ──────────────────────────────────────────── */
  function loadSideShowcaseCards() {
    const allCards = (typeof tarotCards !== 'undefined') ? [...tarotCards] : [];
    if (!allCards.length) return;

    const leftEl = document.getElementById('showcase-mini-left');
    const rightEl = document.getElementById('showcase-mini-right');

    function setRandomCard(el, excludeId) {
      if (!el) return;
      const pool = allCards.filter(c => c.id !== excludeId);
      const card = pool[Math.floor(Math.random() * pool.length)];
      const img = new Image();
      img.src = `assets/card_${card.id}.png`;
      img.onload = () => {
        el.style.backgroundImage = `url('assets/card_${card.id}.png')`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.innerHTML = '';
      };
    }

    setRandomCard(leftEl, 0);
    setRandomCard(rightEl, 0);

    // Rotate every 8s
    setInterval(() => {
      setRandomCard(leftEl, 0);
      setRandomCard(rightEl, 0);
    }, 8000);
  }

  setTimeout(loadSideShowcaseCards, 300);

  /* ────────────────────────────────────────────
     3. 卡片圖庫展示條 Card Gallery Strip
  ──────────────────────────────────────────── */
  function buildCardGallery() {
    const strip = document.getElementById('card-gallery-strip');
    if (!strip) return;

    const allCards = [
      ...(typeof tarotCards !== 'undefined' ? tarotCards : []),
      ...(typeof minorCards !== 'undefined' ? minorCards : []),
    ];
    if (!allCards.length) return;

    strip.innerHTML = '';
    allCards.forEach(card => {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-card-thumb';
      thumb.title = `${card.name} — ${card.englishName || ''}`;
      thumb.setAttribute('data-card-id', card.id);

      const icon = document.createElement('div');
      icon.className = 'thumb-icon';
      icon.innerHTML = card.icon || '<i class="fa-solid fa-star"></i>';
      thumb.appendChild(icon);

      const name = document.createElement('div');
      name.className = 'gallery-thumb-name';
      name.textContent = card.name;
      thumb.appendChild(name);

      // Load image
      const img = new Image();
      img.src = `assets/card_${card.id}.png`;
      img.onload = () => {
        thumb.style.backgroundImage = `url('assets/card_${card.id}.png')`;
        thumb.style.backgroundSize = 'cover';
        thumb.style.backgroundPosition = 'center';
        icon.style.display = 'none';
      };

      // Click → open card modal
      thumb.addEventListener('click', () => {
        if (typeof window.openCardModal === 'function') {
          window.openCardModal(card, false);
        }
      });

      strip.appendChild(thumb);
    });
  }

  setTimeout(buildCardGallery, 200);

  /* ────────────────────────────────────────────
     4. 功能卡導航 Feature Card Navigation
  ──────────────────────────────────────────── */
  const navMap = {
    'feat-library':  'section-library',
    'feat-spreads':  'section-spreads',
    'feat-daily':    'section-home',
    'feat-guide':    'section-guide',
  };
  Object.entries(navMap).forEach(([featId, targetId]) => {
    const el = document.getElementById(featId);
    if (!el) return;
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const link = document.querySelector(`[data-target="${targetId}"]`);
      if (link) link.click();
      if (targetId === 'section-home') {
        setTimeout(() => {
          document.getElementById('daily-tarot-widget')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  });

  // home-cta-library button
  document.getElementById('home-cta-library')?.addEventListener('click', () => {
    document.querySelector('[data-target="section-library"]')?.click();
  });

  /* ────────────────────────────────────────────
     5. 三牌占卜「總結解讀」Synthesis
     ─── 掛鉤到 revealInterpretation() ───────
  ──────────────────────────────────────────── */
  // We monkey-patch: intercept after the interpretation panel is shown
  // by observing the interpretation panel becoming visible
  const interpretationPanel = document.getElementById('interpretation-panel');
  if (interpretationPanel) {
    const observer = new MutationObserver(() => {
      if (!interpretationPanel.classList.contains('hidden')) {
        // Small delay to let existing content render
        setTimeout(() => injectSynthesis(), 400);
      }
    });
    observer.observe(interpretationPanel, { attributes: true, attributeFilter: ['class'] });
  }

  function injectSynthesis() {
    const panel = document.getElementById('interpretation-panel');
    if (!panel) return;

    // Only for three-card spreads
    const rows = panel.querySelectorAll('.card-analysis-row');
    if (rows.length !== 3) return;

    // Avoid duplicate
    if (panel.querySelector('.synthesis-panel')) return;

    // Extract card data from DOM
    const cardData = [];
    rows.forEach((row, i) => {
      const nameEl = row.querySelector('h4');
      const name = nameEl ? nameEl.firstChild?.textContent?.trim() || nameEl.textContent.trim() : '';
      const isReversed = row.querySelector('.reversed-tag') !== null;
      const posLabels = ['過去・根源', '現在・現狀', '未來・趨勢'];
      const meaningEl = row.querySelector('.analysis-meaning-desc');
      const meaning = meaningEl ? meaningEl.textContent.replace(/[✦💕💼🌟]/g, '').replace(/綜合涵意：|愛情解讀：|事業與財務：/g, '').trim() : '';
      cardData.push({ name, isReversed, position: posLabels[i], meaning });
    });

    const question = document.getElementById('display-question')?.textContent || '';
    const synthesis = generateSynthesisText(cardData, question);

    const synthEl = document.createElement('div');
    synthEl.className = 'synthesis-panel';
    synthEl.innerHTML = `
      <div class="synthesis-header">
        <div class="synthesis-icon"><i class="fa-solid fa-crystal-ball" style="font-size:1rem"></i>✦</div>
        <div class="synthesis-header-text">
          <h3>✦ 三牌綜合神諭解讀</h3>
          <p>以下為針對您的問題，整合三張牌能量的完整回應</p>
        </div>
      </div>
      <div class="synthesis-body">${synthesis}</div>
      <div class="synthesis-tags" id="synthesis-tags-row"></div>
    `;

    // Append after drawn-cards-analysis
    const analysisDiv = document.getElementById('drawn-cards-analysis');
    if (analysisDiv) {
      analysisDiv.after(synthEl);
    } else {
      panel.querySelector('.interpretation-footer')?.before(synthEl);
    }

    // Add keyword tags
    const tagsRow = synthEl.querySelector('#synthesis-tags-row');
    cardData.forEach(cd => {
      const tag = document.createElement('span');
      tag.textContent = `${cd.name} ${cd.isReversed ? '逆' : '正'}`;
      tagsRow?.appendChild(tag);
    });

    // Scroll to synthesis
    setTimeout(() => synthEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 300);
  }

  function generateSynthesisText(cards, question) {
    const [past, present, future] = cards;
    const q = question ? `「${question}」` : '您的問題';

    // Pull actual card objects from the global card arrays for richer data
    const allCards = (typeof tarotCards !== 'undefined' ? tarotCards : [])
      .concat(typeof minorCards !== 'undefined' ? minorCards : []);

    function getCardObj(name) {
      return allCards.find(c => c.name === name) || null;
    }

    const pastObj = getCardObj(past.name);
    const presentObj = getCardObj(present.name);
    const futureObj = getCardObj(future.name);

    // Extract the first meaningful sentence from Waite meaning
    function extractCore(cardObj, isReversed) {
      if (!cardObj) return '';
      const src = isReversed ? cardObj.reversed : cardObj.upright;
      if (!src) return '';
      // Strip the 【偉特原文】 label and get the raw meaning
      const raw = (src.meaning || '').replace(/【偉特原文】/g, '').trim();
      // Get first sentence or first 80 chars
      const first = raw.split('。')[0];
      return first.length > 5 ? first : raw.substring(0, 80);
    }

    function getDesc(cardObj) {
      if (!cardObj) return '';
      return (cardObj.description || '').split('。')[0];
    }

    const pastCore = extractCore(pastObj, past.isReversed);
    const presentCore = extractCore(presentObj, present.isReversed);
    const futureCore = extractCore(futureObj, future.isReversed);

    const pastOrient = past.isReversed ? '逆位' : '正位';
    const presentOrient = present.isReversed ? '逆位' : '正位';
    const futureOrient = future.isReversed ? '逆位' : '正位';

    // Specific position analysis with actual Waite meaning
    const pastLine = pastCore
      ? `根源處的<strong>${past.name}（${pastOrient}）</strong>揭示：${pastCore}。此為當前局面的起點與底蘊。`
      : `根源處的<strong>${past.name}（${pastOrient}）</strong>奠定了此次問卜的底層基礎。`;

    const presentLine = presentCore
      ? `現狀中的<strong>${present.name}（${presentOrient}）</strong>顯示：${presentCore}。這是您此刻真實面對的能量場域。`
      : `現狀中的<strong>${present.name}（${presentOrient}）</strong>定義了您當下所處的位置。`;

    const futureLine = futureCore
      ? `趨向中的<strong>${future.name}（${futureOrient}）</strong>指出：${futureCore}。此為若當前方向不變時，最可能顯現的走向。`
      : `趨向中的<strong>${future.name}（${futureOrient}）</strong>標示了事態的可能發展方向。`;

    // Cross-card thematic connection note
    const bothReversed = past.isReversed && present.isReversed;
    const trendNote = future.isReversed
      ? '未來牌為逆位，依偉特的解讀傳統，逆位並非凶兆，而是指示該牌所代表的能量尚未完全流通，或以較收斂的方式呈現，需要主動的覺察與調整。'
      : '未來牌正位出現，顯示事態的走向與該牌的核心意義相符合，偉特的解讀中，這通常代表能量正在正常流動的狀態。';

    return `
      <p>針對${q}，三牌牌陣的整體閱讀如下——</p>
      <p>${pastLine}</p>
      <p>${presentLine}</p>
      <p>${futureLine}</p>
      <p>三牌的整體脈絡：<strong>${past.name}</strong>所積累的底蘊，正透過<strong>${present.name}</strong>的當下狀態轉化，並指向<strong>${future.name}</strong>所代表的發展走向。${trendNote}</p>
      <p style="font-size:0.82em;opacity:0.6;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px;margin-top:12px">
        ◎ 以上解讀依據 A.E. Waite《The Pictorial Key to the Tarot》（1910/1911）原著意涵。牌義為方向性參考，最終判斷與行動由問卜者自行決定。
      </p>
    `;
  }

});
