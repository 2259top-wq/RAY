/* ==========================================================================
   Tarot Learning Hub - Application JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global States
  const allTarotCards = [...tarotCards, ...minorCards];
  let currentSpread = 'single'; // 'single' or 'three'
  let currentDeckMode = 'major'; // 'major' or 'full'
  let drawnCards = []; // Array of drawn card objects { card, isReversed, slotIndex, flipped }
  let quizQuestions = [];
  let currentQuizIndex = 0;
  let quizScore = 0;
  let answerSelected = false;

  // Helper to dynamically check if card illustration exists, and apply it
  function checkAndApplyImage(element, cardId) {
    if (!element) return;
    const imgUrl = `assets/card_${cardId}.png`;
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      element.classList.add('illustrated-card');
      element.style.backgroundImage = `url('${imgUrl}')`;
    };
    img.onerror = () => {
      element.classList.remove('illustrated-card');
      element.style.backgroundImage = '';
    };
  }

  /* ==========================================================================
     1. Animated Stars Canvas Background
     ========================================================================== */
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  
  let stars = [];
  const starCount = window.innerWidth < 768 ? 80 : 180;
  let mouse = { x: null, y: null, radius: 100 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }

  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5;
      this.baseAlpha = Math.random() * 0.5 + 0.2;
      this.alpha = this.baseAlpha;
      this.speed = Math.random() * 0.02 + 0.005;
      this.direction = Math.random() > 0.5 ? 1 : -1;
      this.angle = Math.random() * Math.PI * 2;
    }

    update() {
      // Twinkle alpha variation
      this.alpha += this.speed * this.direction;
      if (this.alpha >= 1 || this.alpha <= 0.1) {
        this.direction *= -1;
      }

      // Parallax hover effect
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x += (dx / distance) * force * 2;
          this.y += (dy / distance) * force * 2;
        }
      }
    }

    draw() {
      ctx.fillStyle = `rgba(223, 184, 108, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animateStars);
  }

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  resizeCanvas();
  animateStars();


  /* ==========================================================================
     2. SPA Router (Tab Switching)
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link, .sidebar-link, .footer-nav-link');
  const sections = document.querySelectorAll('.page-section');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

  // Switch to specific section function
  function navigateTo(targetId) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active state in nav links
    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    mobileSidebar.classList.remove('open');

    // Trigger section-specific initializations
    if (targetId === 'section-library') {
      renderLibraryGrid(allTarotCards);
    }
  }

  // Bind navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      navigateTo(targetId);
    });
  });

  // Mobile Drawer Toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileSidebar.classList.add('open');
  });

  sidebarCloseBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('open');
  });

  // Home Page CTA Buttons binding
  document.getElementById('home-cta-spreads').addEventListener('click', () => navigateTo('section-spreads'));
  document.getElementById('home-cta-guide').addEventListener('click', () => navigateTo('section-guide'));
  document.getElementById('feat-guide').addEventListener('click', () => navigateTo('section-guide'));
  document.getElementById('feat-library').addEventListener('click', () => navigateTo('section-library'));
  document.getElementById('feat-spreads').addEventListener('click', () => navigateTo('section-spreads'));


  /* ==========================================================================
     3. Card Library Logic (Encyclopedia)
     ========================================================================== */
  const libraryGrid = document.getElementById('library-card-grid');
  const searchInput = document.getElementById('library-search');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderLibraryGrid(cards) {
    libraryGrid.innerHTML = '';
    
    if (cards.length === 0) {
      libraryGrid.innerHTML = `
        <div class="glass-panel" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; margin-bottom: 15px; color: var(--gold);"></i>
          <p>找不到符合條件的卡牌。試著輸入別的關鍵字吧！</p>
        </div>
      `;
      return;
    }

    cards.forEach(card => {
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'library-card-wrapper';
      const suitClass = card.suit ? `card-suit-${card.suit}` : '';
      cardWrapper.innerHTML = `
        <div class="tarot-card" data-card-id="${card.id}">
          <div class="card-inner">
            <div class="card-front-design ${suitClass}">
              <div class="card-glow"></div>
              <div class="card-header">
                <span class="card-num">${card.number}</span>
                <span class="card-el">${card.element}</span>
              </div>
              <div class="card-artwork">
                ${card.icon}
              </div>
              <div class="card-footer-info">
                <span class="card-cn-name">${card.name}</span>
                <span class="card-en-name">${card.englishName}</span>
              </div>
            </div>
            <div class="card-back-design">
              <div class="card-back-pattern">
                <div class="astrological-circle"></div>
                <div class="center-star">✦</div>
              </div>
            </div>
          </div>
        </div>
      `;

      const cardFront = cardWrapper.querySelector('.card-front-design');
      checkAndApplyImage(cardFront, card.id);

      // Click card to open Detail Modal
      cardWrapper.querySelector('.tarot-card').addEventListener('click', () => {
        openCardModal(card);
      });

      libraryGrid.appendChild(cardWrapper);
    });
  }

  // Search & Filter Logic
  function handleSearchAndFilter() {
    const query = searchInput.value.toLowerCase().trim();
    
    const activeDeckBtn = document.querySelector('.deck-filter-btn.active');
    const deckFilter = activeDeckBtn ? activeDeckBtn.getAttribute('data-deck') : 'all';

    const activeElementBtn = document.querySelector('#element-filter-group .filter-btn.active');
    const elementFilter = activeElementBtn ? activeElementBtn.getAttribute('data-filter') : 'all';

    const activeSuitBtn = document.querySelector('#suit-filter-group .filter-btn.active');
    const suitFilter = activeSuitBtn ? activeSuitBtn.getAttribute('data-suit') : 'all';

    const filtered = allTarotCards.filter(card => {
      // 1. Search query filter
      const matchesSearch = 
        card.name.includes(query) || 
        card.englishName.toLowerCase().includes(query) || 
        card.keywords.some(kw => kw.includes(query)) ||
        card.description.includes(query);

      if (!matchesSearch) return false;

      // 2. Deck mode filter
      if (deckFilter === 'major' && (card.id < 0 || card.id > 21)) return false;
      if (deckFilter === 'minor' && (card.id < 22 || card.id > 77)) return false;

      // 3. Sub-filter (elements for major, suits for minor)
      if (deckFilter === 'minor') {
        if (suitFilter !== 'all' && card.suit !== suitFilter) return false;
      } else {
        if (elementFilter !== 'all' && card.element !== elementFilter) return false;
      }

      return true;
    });

    renderLibraryGrid(filtered);
  }

  searchInput.addEventListener('input', handleSearchAndFilter);

  // Deck filter tabs binding
  const deckFilterButtons = document.querySelectorAll('.deck-filter-btn');
  const elementFilterGroup = document.getElementById('element-filter-group');
  const suitFilterGroup = document.getElementById('suit-filter-group');

  deckFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      deckFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const deckFilter = btn.getAttribute('data-deck');
      if (deckFilter === 'minor') {
        elementFilterGroup.classList.add('hidden');
        suitFilterGroup.classList.remove('hidden');
      } else {
        elementFilterGroup.classList.remove('hidden');
        suitFilterGroup.classList.add('hidden');
      }

      // Reset sub-filters to 'all' when switching deck mode
      document.querySelectorAll('#element-filter-group .filter-btn').forEach(b => {
        if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });
      document.querySelectorAll('#suit-filter-group .filter-btn').forEach(b => {
        if (b.getAttribute('data-suit') === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });

      handleSearchAndFilter();
    });
  });

  // Bind element and suit buttons click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Find sibling filter buttons and deactivate them
      const parent = btn.parentElement;
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      handleSearchAndFilter();
    });
  });


  /* ==========================================================================
     4. Card Detail Modal Controller
     ========================================================================== */
  const cardModal = document.getElementById('card-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFlipBtn = document.getElementById('modal-flip-btn');
  const modalCardWrapper = document.getElementById('modal-card-wrapper');

  function openCardModal(card) {
    // Reset modal card flipping
    modalCardWrapper.classList.remove('flipped');
    
    // Inject card display details
    const modalFront = modalCardWrapper.querySelector('.card-front-design');
    const suitClass = card.suit ? `card-suit-${card.suit}` : '';
    if (modalFront) {
      // Clear previous suit classes
      modalFront.className = 'card-front-design';
      if (suitClass) modalFront.classList.add(suitClass);
      
      checkAndApplyImage(modalFront, card.id);
    }
    
    document.getElementById('modal-card-num').textContent = card.number;
    document.getElementById('modal-card-el').textContent = card.element;
    document.getElementById('modal-card-art').innerHTML = card.icon;
    document.getElementById('modal-card-cn-name').textContent = card.name;
    document.getElementById('modal-card-en-name').textContent = card.englishName;

    // Inject Text details
    document.getElementById('modal-info-number').textContent = `No. ${card.id}`;
    
    let elementEmoji = "💨";
    if (card.element === '火') elementEmoji = "🔥";
    if (card.element === '水') elementEmoji = "💧";
    if (card.element === '土') elementEmoji = "🌿";
    document.getElementById('modal-info-element').textContent = `${elementEmoji} ${card.element}元素`;
    
    document.getElementById('modal-info-title').textContent = `${card.name} ${card.englishName}`;
    document.getElementById('modal-info-description').textContent = card.description;

    // Keywords
    const keywordsContainer = document.getElementById('modal-info-keywords');
    keywordsContainer.innerHTML = '';
    card.keywords.forEach(kw => {
      const tag = document.createElement('span');
      tag.className = 'keyword-tag';
      tag.textContent = `# ${kw}`;
      keywordsContainer.appendChild(tag);
    });

    // Upright
    document.getElementById('modal-info-upright-title').textContent = '正位 △';
    document.getElementById('modal-info-upright-meaning').textContent = card.upright.meaning;
    document.getElementById('modal-info-upright-love').textContent = card.upright.love;
    document.getElementById('modal-info-upright-career').textContent = card.upright.career;
    document.getElementById('modal-info-upright-advice').textContent = card.upright.advice;

    // Reversed
    document.getElementById('modal-info-reversed-title').textContent = '逆位 ▽';
    document.getElementById('modal-info-reversed-meaning').textContent = card.reversed.meaning;
    document.getElementById('modal-info-reversed-love').textContent = card.reversed.love;
    document.getElementById('modal-info-reversed-career').textContent = card.reversed.career;
    document.getElementById('modal-info-reversed-advice').textContent = card.reversed.advice;

    // Open Modal overlay
    cardModal.classList.add('open');
  }

  // Close Modal binding
  modalCloseBtn.addEventListener('click', () => {
    cardModal.classList.remove('open');
  });

  // Click outside modal content to close
  cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
      cardModal.classList.remove('open');
    }
  });

  // Toggle flipping of card in modal
  modalFlipBtn.addEventListener('click', () => {
    modalCardWrapper.classList.toggle('flipped');
  });


  /* ==========================================================================
     5. Interactive Spreads (Tarot Simulator)
     ========================================================================== */
  const spreadConfigPanel = document.getElementById('spread-config-panel');
  const spreadWorkspace = document.getElementById('spread-workspace');
  const displayQuestion = document.getElementById('display-question');
  const slotsContainer = document.getElementById('slots-container');
  const cardsToDrawCount = document.getElementById('cards-to-draw-count');
  const interpretationPanel = document.getElementById('interpretation-panel');
  const drawnCardsAnalysis = document.getElementById('drawn-cards-analysis');
  const deckTrigger = document.getElementById('deck-trigger');
  
  const spreadCards = document.querySelectorAll('.spread-card');
  const startSpreadBtn = document.getElementById('start-spread-btn');
  const backToConfigBtn = document.getElementById('back-to-config-btn');
  const shuffleDeckBtn = document.getElementById('shuffle-deck-btn');
  const restartSpreadBtn = document.getElementById('restart-spread-btn');
  const saveReadingBtn = document.getElementById('save-reading-btn');
  const questionInput = document.getElementById('spread-question-input');

  // Select Spread type
  spreadCards.forEach(sc => {
    sc.addEventListener('click', () => {
      spreadCards.forEach(s => s.classList.remove('active'));
      sc.classList.add('active');
      currentSpread = sc.getAttribute('data-spread');
    });
  });

  // Select Deck Mode
  const deckModeOptions = document.querySelectorAll('.deck-mode-option');
  deckModeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      deckModeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentDeckMode = opt.getAttribute('data-deck-mode');
    });
  });

  // Shuffling State simulation
  let isShuffling = false;
  shuffleDeckBtn.addEventListener('click', () => {
    if (isShuffling || drawnCards.some(d => d.flipped || d.drawn)) return;
    
    audio.playShuffle();
    isShuffling = true;
    shuffleDeckBtn.disabled = true;
    
    const deck = document.getElementById('interactive-deck');
    deck.style.animation = 'pulseGlow 0.5s infinite alternate';
    
    // Animate shuffling deck visual
    let count = 0;
    const interval = setInterval(() => {
      const cardBacks = deck.querySelectorAll('.deck-card-back');
      cardBacks.forEach((cb, idx) => {
        if (idx < 3) {
          const shiftX = (Math.random() - 0.5) * 50;
          const shiftY = (Math.random() - 0.5) * 30;
          cb.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${(Math.random() - 0.5) * 15}deg)`;
        }
      });
      count++;
      if (count > 6) {
        clearInterval(interval);
        // Reset positions
        deck.querySelector('.shadow-1').style.transform = 'translate(6px, 6px)';
        deck.querySelector('.shadow-2').style.transform = 'translate(3px, 3px)';
        deck.querySelector('.shadow-3').style.transform = 'translate(0px, 0px)';
        deck.querySelector('.clickable').style.transform = '';
        deck.style.animation = '';
        isShuffling = false;
        shuffleDeckBtn.disabled = false;
      }
    }, 150);
  });

  // Start Drawing Workspace
  startSpreadBtn.addEventListener('click', () => {
    const qText = questionInput.value.trim() || '問卜者對當前生活方向的探索指引';
    displayQuestion.textContent = qText;
    
    // Clear and Setup slots
    slotsContainer.innerHTML = '';
    drawnCards = [];
    interpretationPanel.classList.add('hidden');
    
    const slotConfigs = {
      single: [{ label: '今日能量 / 單牌指引', icon: '✦', color: '#dfb86c' }],
      three: [
        { label: '過去', sublabel: 'PAST・根源', icon: '◁', color: '#9b8fcc', num: '①' },
        { label: '現在', sublabel: 'PRESENT・現狀', icon: '◈', color: '#dfb86c', num: '②' },
        { label: '未來', sublabel: 'FUTURE・趨勢', icon: '▷', color: '#7adfc0', num: '③' }
      ]
    };

    const activeConfigs = slotConfigs[currentSpread];
    cardsToDrawCount.textContent = activeConfigs.length;

    activeConfigs.forEach((cfg, idx) => {
      const slotDiv = document.createElement('div');
      slotDiv.className = 'slot';
      const isThree = currentSpread === 'three';
      slotDiv.innerHTML = isThree ? `
        <div class="slot-label slot-label--three" style="--slot-color:${cfg.color}">
          <span class="slot-num">${cfg.num}</span>
          <span class="slot-title">${cfg.icon} ${cfg.label}</span>
          <span class="slot-sub">${cfg.sublabel}</span>
        </div>
        <div class="slot-card-wrapper" id="slot-${idx}">
          <i class="fa-solid fa-bahai slot-placeholder-icon"></i>
        </div>
      ` : `
        <div class="slot-label">${cfg.label}</div>
        <div class="slot-card-wrapper" id="slot-${idx}">
          <i class="fa-solid fa-bahai slot-placeholder-icon"></i>
        </div>
      `;
      slotsContainer.appendChild(slotDiv);
      
      // Setup state object
      drawnCards.push({
        card: null,
        isReversed: false,
        slotIndex: idx,
        drawn: false,
        flipped: false
      });
    });

    // Update first slot to active glow
    document.getElementById('slot-0').classList.add('active-slot');

    // Switch panels
    spreadConfigPanel.classList.add('hidden');
    spreadWorkspace.classList.remove('hidden');
  });

  // Drawing cards logic
  deckTrigger.addEventListener('click', () => {
    if (isShuffling) return;

    // Find next undrawn slot
    const nextIndex = drawnCards.findIndex(d => !d.drawn);
    if (nextIndex === -1) return; // All cards drawn

    audio.playCardSlide();

    const targetSlot = document.getElementById(`slot-${nextIndex}`);
    
    // Lock drawing mechanism visually
    deckTrigger.style.pointerEvents = 'none';

    // Flying Card animation
    const rectDeck = deckTrigger.getBoundingClientRect();
    const rectSlot = targetSlot.getBoundingClientRect();

    const dx = rectSlot.left - rectDeck.left;
    const dy = rectSlot.top - rectDeck.top;

    const fly = document.createElement('div');
    fly.className = 'flying-card';
    fly.style.left = `${rectDeck.left + window.scrollX}px`;
    fly.style.top = `${rectDeck.top + window.scrollY}px`;
    
    // Setup astrological star back on flying element
    fly.innerHTML = `
      <div class="card-back-pattern">
        <div class="astrological-circle"></div>
        <div class="center-star">✦</div>
      </div>
    `;

    document.body.appendChild(fly);

    // Apply translation styles
    fly.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    setTimeout(() => {
      fly.style.transform = `translate(${dx}px, ${dy}px)`;
    }, 10);

    // After animation arrives
    setTimeout(() => {
      document.body.removeChild(fly);

      // Select random card that hasn't been drawn in this spread
      let cardPool = (currentDeckMode === 'full') ? allTarotCards : tarotCards;
      let randomCard;
      do {
        const randId = Math.floor(Math.random() * cardPool.length);
        randomCard = cardPool[randId];
      } while (drawnCards.some(d => d.card && d.card.id === randomCard.id));

      // Decide if card is reversed (50% probability)
      const reversed = Math.random() < 0.5;

      // Update state
      drawnCards[nextIndex].card = randomCard;
      drawnCards[nextIndex].isReversed = reversed;
      drawnCards[nextIndex].drawn = true;

      // Render card face down into the slot
      targetSlot.classList.remove('active-slot');
      targetSlot.classList.add('occupied');
      
      const playableCard = document.createElement('div');
      playableCard.className = 'playable-card flipped'; // initially card back shown
      const suitClass = randomCard.suit ? `card-suit-${randomCard.suit}` : '';
      playableCard.innerHTML = `
        <div class="card-inner">
          <div class="card-front-design ${reversed ? 'card-reversed-view' : ''} ${suitClass}">
            <div class="card-header">
              <span class="card-num">${randomCard.number}</span>
              <span class="card-el">${randomCard.element}</span>
            </div>
            <div class="card-artwork">
              ${randomCard.icon}
            </div>
            <div class="card-footer-info">
              <span class="card-cn-name">${randomCard.name}</span>
              <span class="card-en-name">${randomCard.englishName}</span>
            </div>
          </div>
          <div class="card-back-design">
            <div class="card-back-pattern">
              <div class="astrological-circle"></div>
              <div class="center-star">✦</div>
            </div>
          </div>
        </div>
      `;

      const cardFront = playableCard.querySelector('.card-front-design');
      checkAndApplyImage(cardFront, randomCard.id);

      targetSlot.innerHTML = '';
      targetSlot.appendChild(playableCard);

      // Click card in slot to flip
      playableCard.addEventListener('click', () => {
        if (drawnCards[nextIndex].flipped) return; // already flipped
        
        audio.playChime();
        audio.playCardSlide();
        playableCard.classList.remove('flipped');
        drawnCards[nextIndex].flipped = true;

        // Check if all drawn cards are flipped
        if (drawnCards.every(d => d.flipped)) {
          revealInterpretation();
        }
      });

      // Update draw count UI
      const undrawnCount = drawnCards.filter(d => !d.drawn).length;
      cardsToDrawCount.textContent = undrawnCount;

      // Glow the next slot if available
      if (nextIndex + 1 < drawnCards.length) {
        document.getElementById(`slot-${nextIndex + 1}`).classList.add('active-slot');
      }

      // Unlock deck clicking
      deckTrigger.style.pointerEvents = 'auto';

      if (undrawnCount === 0) {
        document.querySelector('.deck-area').style.opacity = '0.3';
        deckTrigger.style.pointerEvents = 'none';
      }

    }, 600);
  });

  // Reveal Interpretation Analysis Report
  function revealInterpretation() {
    drawnCardsAnalysis.innerHTML = '';

    // ─── Timestamp & spread type header ───
    const now = new Date();
    const dateStr = now.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
    const weekDay = ['日','一','二','三','四','五','六'][now.getDay()];
    const spreadName = currentSpread === 'three' ? '三牌牌陣（過去・現在・未來）' : '單牌指引';
    const slotLabels = currentSpread === 'three'
      ? [{ tag: '① 過去・根源', color: '#9b8fcc' }, { tag: '② 現在・現狀', color: '#dfb86c' }, { tag: '③ 未來・趨勢', color: '#7adfc0' }]
      : [{ tag: '✦ 今日能量', color: '#dfb86c' }];

    // Insert timestamp banner into panel header area
    const existingBanner = interpretationPanel.querySelector('.reading-timestamp-banner');
    if (existingBanner) existingBanner.remove();
    const banner = document.createElement('div');
    banner.className = 'reading-timestamp-banner';
    banner.innerHTML = `
      <div class="rtb-inner">
        <div class="rtb-spread-type"><i class="fa-solid fa-wand-magic-sparkles"></i> ${spreadName}</div>
        <div class="rtb-time">
          <i class="fa-regular fa-calendar"></i>
          <span>${dateStr}（週${weekDay}）</span>
          <i class="fa-regular fa-clock" style="margin-left:10px"></i>
          <span>${timeStr}</span>
        </div>
        <div class="rtb-question"><i class="fa-solid fa-circle-question"></i> ${document.getElementById('display-question')?.textContent || ''}</div>
      </div>
    `;
    interpretationPanel.querySelector('.interpretation-intro')?.after(banner);
    
    drawnCards.forEach((dc, i) => {
      const card = dc.card;
      const reversed = dc.isReversed;
      const details = reversed ? card.reversed : card.upright;
      const posLabel = slotLabels[i] || { tag: `第 ${i+1} 張`, color: '#dfb86c' };

      const analysisRow = document.createElement('div');
      analysisRow.className = 'card-analysis-row';
      const suitClass = card.suit ? `card-suit-${card.suit}` : '';
      analysisRow.innerHTML = `
        <div class="library-card-wrapper" style="pointer-events:none;">
          <div class="tarot-card">
            <div class="card-inner">
              <div class="card-front-design ${reversed ? 'card-reversed-view' : ''} ${suitClass}">
                <div class="card-header">
                  <span class="card-num">${card.number}</span>
                  <span class="card-el">${card.element}</span>
                </div>
                <div class="card-artwork">${card.icon}</div>
                <div class="card-footer-info">
                  <span class="card-cn-name">${card.name}</span>
                  <span class="card-en-name">${card.englishName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="analysis-text-col">
          <div class="analysis-position-badge" style="--pos-color:${posLabel.color}">
            ${posLabel.tag}
          </div>
          <div class="analysis-card-title">
            <h4>${card.name} <small style="font-size:0.75em;opacity:0.7">${card.englishName}</small></h4>
            <span class="orientation-tag ${reversed ? 'reversed-tag' : 'upright-tag'}">
              ${reversed ? '逆位 ▽' : '正位 △'}
            </span>
            <span class="analysis-element-badge">元素：${card.element}</span>
          </div>
          <div class="analysis-meaning-section">
            <p class="analysis-meaning-main">${details.meaning}</p>
          </div>
          <div class="analysis-detail-grid">
            <div class="analysis-detail-item">
              <span class="detail-label">關係・情感</span>
              <span class="detail-value">${details.love}</span>
            </div>
            <div class="analysis-detail-item">
              <span class="detail-label">事業・財務</span>
              <span class="detail-value">${details.career}</span>
            </div>
          </div>
          <div class="analysis-advice-box">
            <span class="advice-label">偉特的核心詮釋</span>
            <p>${details.advice}</p>
          </div>
          <div class="analysis-keywords">
            ${(card.keywords || []).map(k => `<span class="kw-tag">${k}</span>`).join('')}
          </div>
        </div>
      `;

      const cardFront = analysisRow.querySelector('.card-front-design');
      checkAndApplyImage(cardFront, card.id);
      drawnCardsAnalysis.appendChild(analysisRow);
    });

    // Reveal panel
    interpretationPanel.classList.remove('hidden');
    
    // Smooth scroll down to interpretation
    setTimeout(() => {
      interpretationPanel.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  // Navigation out of simulation workspace
  backToConfigBtn.addEventListener('click', () => {
    spreadConfigPanel.classList.remove('hidden');
    spreadWorkspace.classList.add('hidden');
    document.querySelector('.deck-area').style.opacity = '1';
    deckTrigger.style.pointerEvents = 'auto';
  });

  restartSpreadBtn.addEventListener('click', () => {
    // Re-trigger configuration startup
    startSpreadBtn.click();
    document.querySelector('.deck-area').style.opacity = '1';
    deckTrigger.style.pointerEvents = 'auto';
  });

  saveReadingBtn.addEventListener('click', () => {
    const qText = questionInput.value.trim() || '問卜者對當前生活方向的探索指引';
    saveReadingToHistory(qText, currentSpread, drawnCards);
    alert('占卜報告已成功儲存至首頁的「星寰占卜檔案室」！');
    navigateTo('section-home');
  });


  /* ==========================================================================
     6. Quiz Gameplay Controller
     ========================================================================== */
  const quizStartPanel = document.getElementById('quiz-start-panel');
  const quizGameplayPanel = document.getElementById('quiz-gameplay-panel');
  const quizResultsPanel = document.getElementById('quiz-results-panel');
  
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const retryQuizBtn = document.getElementById('retry-quiz-btn');
  const quizToLibraryBtn = document.getElementById('quiz-to-library-btn');
  
  const quizQuestionText = document.getElementById('quiz-question-text');
  const quizChoicesContainer = document.getElementById('quiz-choices-container');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizQuestionNum = document.getElementById('quiz-question-num');
  const quizCurrentScore = document.getElementById('quiz-current-score');
  
  const quizFeedbackPanel = document.getElementById('quiz-feedback-panel');
  const feedbackStatus = document.getElementById('feedback-status');
  const feedbackStatusText = document.getElementById('feedback-status-text');
  const feedbackExplanation = document.getElementById('feedback-explanation');

  // Generator of Quiz Questions dynamically from card list
  function generateQuizQuestions() {
    const questions = [];
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);

    // We will generate 5 questions
    for (let i = 0; i < 5; i++) {
      const targetCard = shuffledCards[i];
      const qType = Math.floor(Math.random() * 4); // 4 types of questions
      
      let questionText = "";
      let correctAnswer = "";
      let options = [];
      let explanation = "";

      if (qType === 0) {
        // Question: Identify card name from keywords
        const keywordsStr = targetCard.keywords.slice(0, 3).join('、');
        questionText = `以下哪個關鍵字組合最符合【${targetCard.name}】牌的象徵含意？`;
        correctAnswer = keywordsStr;
        
        explanation = `【${targetCard.name}】代表著 ${targetCard.keywords.join('、')}。它的牌面核心象徵是：${targetCard.description}`;
        
        // Find 3 incorrect keywords options
        const incorrects = shuffledCards
          .filter(c => c.id !== targetCard.id)
          .map(c => c.keywords.slice(0, 3).join('、'));
        
        options = [correctAnswer, ...incorrects.slice(0, 3)];
      } 
      else if (qType === 1) {
        // Question: Identify card from description
        questionText = `「${targetCard.description.slice(0, 60)}...」以上描述最符合哪張大阿爾克那塔羅牌的畫面？`;
        correctAnswer = targetCard.name;
        explanation = `這段描述正是【${targetCard.name}】牌卡的畫面特徵。該牌象徵 ${targetCard.keywords.join('、')}。`;
        
        const incorrects = shuffledCards
          .filter(c => c.id !== targetCard.id)
          .map(c => c.name);
        
        options = [correctAnswer, ...incorrects.slice(0, 3)];
      } 
      else if (qType === 2) {
        // Question: Identify card from upright meaning
        questionText = `「${targetCard.upright.meaning.slice(0, 70)}...」以上敘述是哪張牌正位時的引導意涵？`;
        correctAnswer = targetCard.name;
        explanation = `【${targetCard.name}】正位含意：${targetCard.upright.meaning}`;
        
        const incorrects = shuffledCards
          .filter(c => c.id !== targetCard.id)
          .map(c => c.name);
          
        options = [correctAnswer, ...incorrects.slice(0, 3)];
      } 
      else {
        // Question: Identify element of card
        questionText = `塔羅牌【${targetCard.name}】（${targetCard.englishName}）屬於哪一個自然元素？`;
        correctAnswer = `${targetCard.element}元素`;
        explanation = `【${targetCard.name}】屬於 ${targetCard.element}元素。這張牌關鍵字是：${targetCard.keywords.join('、')}。`;
        
        options = ["火元素", "水元素", "風元素", "土元素"];
      }

      // Shuffle options
      options = options.sort(() => Math.random() - 0.5);

      questions.push({
        question: questionText,
        options: options,
        answer: correctAnswer,
        explanation: explanation
      });
    }

    return questions;
  }

  // Start gameplay
  startQuizBtn.addEventListener('click', () => {
    quizQuestions = generateQuizQuestions();
    currentQuizIndex = 0;
    quizScore = 0;
    
    quizStartPanel.classList.add('hidden');
    quizGameplayPanel.classList.remove('hidden');
    quizResultsPanel.classList.add('hidden');

    loadQuestion();
  });

  function loadQuestion() {
    answerSelected = false;
    quizFeedbackPanel.classList.add('hidden');
    
    const currentQ = quizQuestions[currentQuizIndex];
    
    // Set UI header text
    quizQuestionNum.textContent = `問題 ${currentQuizIndex + 1} / 5`;
    quizCurrentScore.textContent = quizScore;
    quizProgressFill.style.width = `${(currentQuizIndex / 5) * 100}%`;

    // Question body
    quizQuestionText.textContent = currentQ.question;
    
    // Render Choices
    quizChoicesContainer.innerHTML = '';
    currentQ.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt;
      
      btn.addEventListener('click', () => {
        if (answerSelected) return;
        checkAnswer(btn, opt, currentQ.answer);
      });

      quizChoicesContainer.appendChild(btn);
    });
  }

  function checkAnswer(selectedBtn, chosenOpt, correctOpt) {
    answerSelected = true;
    
    // Disable all options
    const allButtons = quizChoicesContainer.querySelectorAll('.choice-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (chosenOpt === correctOpt);

    if (isCorrect) {
      selectedBtn.classList.add('correct');
      quizScore += 20;
      quizCurrentScore.textContent = quizScore;
      audio.playChime();

      feedbackStatus.className = 'feedback-status correct-status';
      feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span id="feedback-status-text">回答正確！</span>';
    } else {
      selectedBtn.classList.add('wrong');
      audio.playCardSlide();
      
      // Highlight correct button
      allButtons.forEach(btn => {
        if (btn.textContent === correctOpt) {
          btn.classList.add('correct');
        }
      });

      feedbackStatus.className = 'feedback-status wrong-status';
      feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> <span id="feedback-status-text">回答錯誤...</span>';
    }

    // Load explanation details
    feedbackExplanation.textContent = quizQuestions[currentQuizIndex].explanation;
    quizFeedbackPanel.classList.remove('hidden');
  }

  // Next Question trigger
  nextQuestionBtn.addEventListener('click', () => {
    currentQuizIndex++;
    
    if (currentQuizIndex < 5) {
      loadQuestion();
    } else {
      showQuizResults();
    }
  });

  // Quiz completed results panel
  function showQuizResults() {
    quizProgressFill.style.width = '100%';
    quizGameplayPanel.classList.add('hidden');
    quizResultsPanel.classList.remove('hidden');

    const finalScore = document.getElementById('results-final-score');
    finalScore.textContent = quizScore;

    const resultsTitle = document.getElementById('results-title');
    const resultsFeedback = document.getElementById('results-feedback-text');
    const badge = document.getElementById('results-badge');

    if (quizScore === 100) {
      resultsTitle.textContent = '神聖的大圓滿！';
      resultsFeedback.textContent = '太不可思議了！您答對了所有問題。這證明您對大阿爾克那牌意、象徵與四大元素已有非常深厚的理解。';
      badge.innerHTML = '<i class="fa-solid fa-crown" style="color:var(--gold);"></i>';
    } else if (quizScore >= 80) {
      resultsTitle.textContent = '卓越的解牌師！';
      resultsFeedback.textContent = '非常出色的表現！您對塔羅牌卡展現出極高的悟性與記憶力。持續探索，你將能解讀更深層的心靈報告。';
      badge.innerHTML = '<i class="fa-solid fa-trophy" style="color:var(--gold);"></i>';
    } else if (quizScore >= 60) {
      resultsTitle.textContent = '合格通過！';
      resultsFeedback.textContent = '您已經掌握了塔羅牌的基本概念。建議前往「牌意圖書館」或「基礎教學」進一步熟悉某些特定卡牌的象徵意含。';
      badge.innerHTML = '<i class="fa-solid fa-award" style="color:var(--gold);"></i>';
    } else {
      resultsTitle.textContent = '迷霧中的探索者';
      resultsFeedback.textContent = '有些卡牌的意涵可能讓您感到混淆。別氣餒！塔羅是一門直覺的藝術，建議前往基礎教學多閱讀元素對應，並常在牌庫中尋求啟示。';
      badge.innerHTML = '<i class="fa-solid fa-compass" style="color:var(--text-muted);"></i>';
    }
  }

  // Retry bindings
  retryQuizBtn.addEventListener('click', () => {
    startQuizBtn.click();
  });

  quizToLibraryBtn.addEventListener('click', () => {
    navigateTo('section-library');
  });


  /* ==========================================================================
     7. Custom UX Touches (Guide Article switching & Hero showcase interaction)
     ========================================================================== */
  
  // Sidebar TOC link switching for Guide page
  const tocLinks = document.querySelectorAll('.toc-link');
  const guideArticles = document.querySelectorAll('.guide-article');

  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      tocLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href').substring(1);
      guideArticles.forEach(art => {
        if (art.getAttribute('id') === targetId) {
          art.classList.add('active');
        } else {
          art.classList.remove('active');
        }
      });
    });
  });

  // Render hero card showcase dynamically
  const showcaseCard = document.querySelector('.showcase-card.front');
  if (showcaseCard) {
    const frontDesign = showcaseCard.querySelector('.card-front-design');
    if (frontDesign) {
      frontDesign.classList.add('illustrated-card');
      frontDesign.style.backgroundImage = "url('assets/card_0.png')";
    }
    
    // Add dynamic 3D tilt effect on hero showcase card
    showcaseCard.addEventListener('mousemove', (e) => {
      const rect = showcaseCard.getBoundingClientRect();
      const x = e.clientX - rect.left; //x position within the element.
      const y = e.clientY - rect.top;  //y position within the element.
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / centerY * 15; // Max 15 deg tilt
      const tiltY = (centerX - x) / centerX * 15;
      
      showcaseCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.08) translateZ(10px)`;
    });

    showcaseCard.addEventListener('mouseleave', () => {
      showcaseCard.style.transform = 'rotate(6deg) translateX(30px) scale(1.05)';
    });
    
    // Click hero card to trigger flip
    showcaseCard.addEventListener('click', () => {
      showcaseCard.classList.toggle('flipped');
    });
  }

  /* ==========================================================================
     Audio Engine (Web Audio API Synthesizer)
     ========================================================================== */
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.masterGain = null;
      this.reverbNode = null;
      this.isMuted = true;
      this.isPlayingAmbient = false;
      this.scheduledSources = [];   // track all running sources
      this.melodyTimer = null;
      this.arpTimer = null;
      this.breathTimer = null;
      this.volume = 0.55; // master volume (0–1)

      // ── Pentatonic scale in D minor (Hz) – 3 octaves, mystical feel ──
      // D  F  G  A  C  D  F  G  A  C  D  F
      this.scale = [
        146.83, 174.61, 196.00, 220.00, 261.63,
        293.66, 349.23, 392.00, 440.00, 523.25,
        587.33, 698.46
      ];

      // Drone root notes
      this.droneFreqs = [36.71, 73.42, 110.00, 146.83]; // D1 D2 A2 D3
    }

    /* ─── Init Context ─── */
    init() {
      if (this.ctx) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();

      // Master gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Build reverb (impulse response)
      this._buildReverb();
    }

    resume() {
      this.init();
      if (this.ctx?.state === 'suspended') this.ctx.resume();
    }

    /* ─── Convolution Reverb (long cave hall) ─── */
    _buildReverb() {
      const sampleRate = this.ctx.sampleRate;
      const length = sampleRate * 4; // 4-second reverb tail
      const impulse = this.ctx.createBuffer(2, length, sampleRate);
      for (let c = 0; c < 2; c++) {
        const ch = impulse.getChannelData(c);
        for (let i = 0; i < length; i++) {
          // Exponential decay noise
          ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5);
        }
      }
      this.reverbNode = this.ctx.createConvolver();
      this.reverbNode.buffer = impulse;
      this.reverbNode.connect(this.masterGain);
    }

    /* ─── Helper: create a gain-ramped oscillator ─── */
    _osc(freq, type, startT, endT, peakGain, peakT, opts = {}) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startT);
      if (opts.detune) osc.detune.setValueAtTime(opts.detune, startT);
      g.gain.setValueAtTime(0.0001, startT);
      g.gain.linearRampToValueAtTime(peakGain, peakT);
      g.gain.exponentialRampToValueAtTime(0.0001, endT);
      osc.connect(g);
      const dest = opts.dry ? this.masterGain : this.reverbNode;
      g.connect(dest);
      osc.start(startT);
      osc.stop(endT + 0.05);
      this.scheduledSources.push(osc);
      return osc;
    }

    /* ─── Helper: noise burst (wind / shimmer) ─── */
    _noise(startT, duration, freq, gain, q = 8) {
      const bufSize = this.ctx.sampleRate * duration;
      const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      const filt = this.ctx.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.value = freq;
      filt.Q.value = q;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0, startT);
      g.gain.linearRampToValueAtTime(gain, startT + duration * 0.1);
      g.gain.exponentialRampToValueAtTime(0.0001, startT + duration);
      src.connect(filt); filt.connect(g); g.connect(this.reverbNode);
      src.start(startT); src.stop(startT + duration);
      this.scheduledSources.push(src);
    }

    /* ─── Plucked String (Karplus-Strong style) ─── */
    _pluck(freq, startT, gainVal = 0.25) {
      const sr = this.ctx.sampleRate;
      const period = Math.floor(sr / freq);
      const buf = this.ctx.createBuffer(1, period, sr);
      const d = buf.getChannelData(0);
      for (let i = 0; i < period; i++) d[i] = Math.random() * 2 - 1;

      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;

      // Low-pass feedback emulates string decay
      const filt = this.ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.value = freq * 3.5;

      const g = this.ctx.createGain();
      const decay = 0.5 + (220 / freq) * 1.8; // higher notes decay faster
      g.gain.setValueAtTime(gainVal, startT);
      g.gain.exponentialRampToValueAtTime(0.0001, startT + decay);

      src.connect(filt); filt.connect(g);
      g.connect(this.reverbNode);
      g.connect(this.masterGain); // some dry signal

      src.start(startT); src.stop(startT + decay + 0.1);
      this.scheduledSources.push(src);
    }

    /* ─── Deep Drone Layer (sustained pad) ─── */
    _startDrone() {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      this.droneFreqs.forEach((freq, i) => {
        const types = ['sawtooth', 'triangle', 'sine', 'sine'];
        const gains = [0.018, 0.025, 0.02, 0.015];
        const detunes = [0, -3, 7, 12]; // slight chorus
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();

        osc.type = types[i];
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(detunes[i], now);

        // Slow vibrato on drone
        const lfo = this.ctx.createOscillator();
        const lfoG = this.ctx.createGain();
        lfo.frequency.value = 0.15 + i * 0.07;
        lfoG.gain.value = 1.5;
        lfo.connect(lfoG);
        lfoG.connect(osc.frequency);
        lfo.start(now);

        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(gains[i] * this.volume, now + 5 + i * 2);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 300 + freq * 2;

        osc.connect(filter); filter.connect(g); g.connect(this.masterGain);
        osc.start(now);

        this._droneOscs = this._droneOscs || [];
        this._droneOscs.push({ osc, lfo, g });
      });
    }

    _stopDrone() {
      if (!this._droneOscs) return;
      const now = this.ctx?.currentTime || 0;
      this._droneOscs.forEach(({ osc, lfo, g }) => {
        try {
          g.gain.setValueAtTime(g.gain.value, now);
          g.gain.linearRampToValueAtTime(0.0001, now + 2);
          setTimeout(() => { try { osc.stop(); lfo.stop(); } catch(e){} }, 2200);
        } catch(e) {}
      });
      this._droneOscs = [];
    }

    /* ─── Bell / Singing Bowl tones ─── */
    _bell(freq, startT, vol = 0.18) {
      // Fundamental
      this._osc(freq,       'sine',    startT, startT + 6, vol * 0.6, startT + 0.01);
      // Partials (slightly inharmonic, like a bowl)
      this._osc(freq * 2.76, 'sine',   startT, startT + 3, vol * 0.3, startT + 0.01);
      this._osc(freq * 5.40, 'sine',   startT, startT + 2, vol * 0.15, startT + 0.01);
      // Attack click
      this._noise(startT, 0.05, freq * 2, vol * 0.08, 20);
    }

    /* ─── Melody Sequencer ─── */
    _scheduleMelody() {
      if (this.isMuted || !this.ctx) return;

      const now = this.ctx.currentTime;
      // Pick 4–6 random notes from scale
      const len = 4 + Math.floor(Math.random() * 3);
      const pattern = [];
      for (let i = 0; i < len; i++) {
        pattern.push(this.scale[Math.floor(Math.random() * this.scale.length)]);
      }

      const noteLen = 0.8 + Math.random() * 0.6;
      const gap = 0.05;
      let t = now;

      pattern.forEach((freq, i) => {
        // Randomize articulation: pluck or bell
        if (Math.random() < 0.6) {
          this._pluck(freq, t, 0.15 * this.volume);
        } else {
          this._bell(freq, t, 0.12 * this.volume);
        }
        t += noteLen + gap;
      });

      // Schedule next phrase: 8–20 seconds of silence between phrases
      const nextIn = (8 + Math.random() * 12) * 1000;
      this.melodyTimer = setTimeout(() => this._scheduleMelody(), nextIn);
    }

    /* ─── Arpeggio (shimmer layer) ─── */
    _scheduleArp() {
      if (this.isMuted || !this.ctx) return;

      const now = this.ctx.currentTime;
      // Ascending arpeggio from a random root
      const rootIdx = Math.floor(Math.random() * 6);
      const arpNotes = [0, 2, 4, 7].map(offset => {
        const idx = (rootIdx + offset) % this.scale.length;
        return this.scale[idx] * 2; // one octave up
      });

      let t = now;
      arpNotes.forEach(freq => {
        this._osc(freq, 'sine', t, t + 2.0, 0.04 * this.volume, t + 0.01, { detune: Math.random() * 4 - 2 });
        t += 0.22;
      });

      const nextIn = (18 + Math.random() * 15) * 1000;
      this.arpTimer = setTimeout(() => this._scheduleArp(), nextIn);
    }

    /* ─── Wind shimmer ─── */
    _scheduleBreath() {
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      this._noise(now, 3 + Math.random() * 2, 400 + Math.random() * 200, 0.02 * this.volume, 3);
      const nextIn = (20 + Math.random() * 25) * 1000;
      this.breathTimer = setTimeout(() => this._scheduleBreath(), nextIn);
    }

    /* ─── Full Ambient Music Start ─── */
    playAmbient() {
      if (this.isPlayingAmbient || this.isMuted) return;
      this.resume();
      if (!this.ctx) return;

      this.isPlayingAmbient = true;

      // Fade master in
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(0.0001, now);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 4);

      // Layer 1: Deep drone pad
      this._startDrone();

      // Layer 2: Opening bell
      setTimeout(() => { if (!this.isMuted) this._bell(this.scale[0], this.ctx.currentTime, 0.2); }, 1500);

      // Layer 3: Melody phrases (start after 4 seconds)
      this.melodyTimer = setTimeout(() => this._scheduleMelody(), 4000);

      // Layer 4: Arpeggio shimmer (start after 12 seconds)
      this.arpTimer = setTimeout(() => this._scheduleArp(), 12000);

      // Layer 5: Wind breath (start after 8 seconds)
      this.breathTimer = setTimeout(() => this._scheduleBreath(), 8000);
    }

    stopAmbient() {
      if (!this.isPlayingAmbient) return;
      this.isPlayingAmbient = false;

      clearTimeout(this.melodyTimer);
      clearTimeout(this.arpTimer);
      clearTimeout(this.breathTimer);

      // Fade master out
      if (this.masterGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 2.5);
      }

      // Stop drone
      setTimeout(() => this._stopDrone(), 2600);

      // Stop all scheduled sources
      setTimeout(() => {
        this.scheduledSources.forEach(src => { try { src.stop(); } catch(e){} });
        this.scheduledSources = [];
      }, 2700);
    }

    /* ─── UI Toggle ─── */
    toggleMute() {
      this.resume();
      this.isMuted = !this.isMuted;
      const navBtn = document.getElementById('nav-sound-toggle');
      const mobileBtn = document.getElementById('mobile-sound-toggle');

      if (this.isMuted) {
        this.stopAmbient();
        [navBtn, mobileBtn].forEach(btn => {
          if (!btn) return;
          btn.classList.remove('active');
          btn.innerHTML = '<i class="fa-solid fa-music"></i> 音樂 Off';
        });
      } else {
        this.playAmbient();
        [navBtn, mobileBtn].forEach(btn => {
          if (!btn) return;
          btn.classList.add('active');
          btn.innerHTML = '<i class="fa-solid fa-music"></i> 音樂 On';
        });
        setTimeout(() => this.playChime(), 100);
      }
    }

    /* ─── SFX: Chime (card reveal) ─── */
    playChime() {
      if (this.isMuted || !this.ctx) return;
      this.resume();
      const now = this.ctx.currentTime;
      // Ascending pentatonic chord
      [880, 1108, 1320, 1760].forEach((freq, i) => {
        const t = now + i * 0.09;
        this._osc(freq, 'sine', t, t + 2.0, 0.10, t + 0.01, { dry: false });
      });
    }

    /* ─── SFX: Card Slide (draw) ─── */
    playCardSlide() {
      if (this.isMuted || !this.ctx) return;
      this.resume();
      const now = this.ctx.currentTime;
      const dur = 0.28;
      const bufSize = this.ctx.sampleRate * dur;
      const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      const filt = this.ctx.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.setValueAtTime(300, now);
      filt.frequency.linearRampToValueAtTime(900, now + dur * 0.4);
      filt.Q.value = 0.8;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.06, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      src.connect(filt); filt.connect(g); g.connect(this.masterGain);
      src.start(now); src.stop(now + dur + 0.05);
    }

    /* ─── SFX: Shuffle (multiple slides + chime) ─── */
    playShuffle() {
      if (this.isMuted || !this.ctx) return;
      this.resume();
      for (let i = 0; i < 7; i++) {
        setTimeout(() => this.playCardSlide(), i * 110);
      }
      setTimeout(() => this.playChime(), 900);
    }

    /* ─── Volume Control ─── */
    setVolume(v) {
      this.volume = Math.max(0, Math.min(1, v));
      if (this.masterGain && this.ctx && !this.isMuted) {
        this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.3);
      }
    }
  }

  const audio = new AudioEngine();

  window.addEventListener('click', () => {
    audio.resume();
  }, { once: true });

  const soundToggle = document.getElementById('nav-sound-toggle');
  const mobileSoundToggle = document.getElementById('mobile-sound-toggle');

  if (soundToggle) {
    soundToggle.addEventListener('click', (e) => {
      e.preventDefault();
      audio.toggleMute();
    });
  }
  if (mobileSoundToggle) {
    mobileSoundToggle.addEventListener('click', (e) => {
      e.preventDefault();
      audio.toggleMute();
    });
  }

  /* ==========================================================================
     Daily Tarot Logic (今日一牌)
     ========================================================================== */
  const dailyCardSlot = document.getElementById('daily-card-slot');
  const dailyResultPanel = document.getElementById('daily-tarot-result');
  const dailyResultTitle = document.getElementById('daily-result-title');
  const dailyResultKeywords = document.getElementById('daily-result-keywords');
  const dailyResultAdvice = document.getElementById('daily-result-advice');

  function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function initDailyTarot() {
    const todayStr = getTodayString();
    const dailyState = localStorage.getItem('daily_tarot_state');
    
    if (dailyState) {
      const stateObj = JSON.parse(dailyState);
      if (stateObj.date === todayStr) {
        renderDailyResult(stateObj.card, stateObj.isReversed, true);
        return;
      }
    }
    
    dailyCardSlot.className = 'daily-card-slot';
    dailyCardSlot.innerHTML = `
      <div class="deck-card-back clickable" id="daily-draw-btn">
        <div class="card-back-pattern">
          <div class="astrological-circle"></div>
          <div class="center-star">✦</div>
        </div>
      </div>
    `;
    dailyResultPanel.classList.add('hidden');
    
    const drawBtn = document.getElementById('daily-draw-btn');
    if (drawBtn) {
      drawBtn.addEventListener('click', drawDailyCard);
    }
  }

  function drawDailyCard() {
    audio.playChime();
    audio.playCardSlide();

    // Draw daily card from all 78 Tarot cards for a richer selection of advice
    const randId = Math.floor(Math.random() * allTarotCards.length);
    const randomCard = allTarotCards[randId];
    const isReversed = Math.random() < 0.3;

    const todayStr = getTodayString();
    const stateObj = {
      date: todayStr,
      card: randomCard,
      isReversed: isReversed
    };
    localStorage.setItem('daily_tarot_state', JSON.stringify(stateObj));

    renderDailyResult(randomCard, isReversed, false);
  }

  function renderDailyResult(card, isReversed, isInstant) {
    dailyCardSlot.innerHTML = '';
    dailyCardSlot.className = 'daily-card-slot occupied';

    const suitClass = card.suit ? `card-suit-${card.suit}` : '';
    const cardEl = document.createElement('div');
    cardEl.className = `playable-card ${isInstant ? '' : 'flipped'}`;
    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-front-design ${isReversed ? 'card-reversed-view' : ''} ${suitClass}">
          <div class="card-header">
            <span class="card-num">${card.number}</span>
            <span class="card-el">${card.element}</span>
          </div>
          <div class="card-artwork">
            ${card.icon}
          </div>
          <div class="card-footer-info">
            <span class="card-cn-name">${card.name}</span>
            <span class="card-en-name">${card.englishName}</span>
          </div>
        </div>
        <div class="card-back-design">
          <div class="card-back-pattern">
            <div class="astrological-circle"></div>
            <div class="center-star">✦</div>
          </div>
        </div>
      </div>
    `;

    const cardFront = cardEl.querySelector('.card-front-design');
    checkAndApplyImage(cardFront, card.id);

    dailyCardSlot.appendChild(cardEl);

    const details = isReversed ? card.reversed : card.upright;
    dailyResultTitle.textContent = `${card.name} (${isReversed ? '逆位' : '正位'})`;
    
    dailyResultKeywords.innerHTML = '';
    card.keywords.forEach(kw => {
      const tag = document.createElement('span');
      tag.className = 'keyword-tag';
      tag.textContent = `# ${kw}`;
      dailyResultKeywords.appendChild(tag);
    });

    dailyResultAdvice.innerHTML = `<strong>✦ 今日心靈提點：</strong> ${details.advice}`;

    if (isInstant) {
      setTimeout(() => {
        cardEl.classList.remove('flipped');
        audio.playCardSlide();
      }, 300);
      dailyResultPanel.classList.remove('hidden');
    } else {
      setTimeout(() => {
        cardEl.classList.remove('flipped');
        dailyResultPanel.classList.remove('hidden');
        audio.playChime();
      }, 500);
    }
  }

  /* ==========================================================================
     LocalStorage Tarot History Archive
     ========================================================================== */
  const archiveListContainer = document.getElementById('archive-list-container');
  const clearAllHistoryBtn = document.getElementById('clear-all-history-btn');
  const historyModal = document.getElementById('history-modal');
  const historyModalCloseBtn = document.getElementById('history-modal-close-btn');

  function saveReadingToHistory(question, spreadType, cardsData) {
    const historyState = localStorage.getItem('tarot_history_records') || '[]';
    const records = JSON.parse(historyState);

    const timestamp = new Date();
    const formattedDate = `${timestamp.getFullYear()}-${String(timestamp.getMonth()+1).padStart(2,'0')}-${String(timestamp.getDate()).padStart(2,'0')} ${String(timestamp.getHours()).padStart(2,'0')}:${String(timestamp.getMinutes()).padStart(2,'0')}`;

    const newRecord = {
      id: Date.now(),
      dateString: formattedDate,
      question: question || '無提問（自發抽牌）',
      spreadType: spreadType === 'three' ? '三牌牌陣' : '單牌占卜',
      cards: cardsData.map(d => ({
        id: d.card.id,
        name: d.card.name,
        englishName: d.card.englishName,
        number: d.card.number,
        element: d.card.element,
        suit: d.card.suit || '',
        icon: d.card.icon,
        isReversed: d.isReversed,
        advice: d.isReversed ? d.card.reversed.advice : d.card.upright.advice,
        meaning: d.isReversed ? d.card.reversed.meaning : d.card.upright.meaning
      }))
    };

    records.unshift(newRecord);
    localStorage.setItem('tarot_history_records', JSON.stringify(records));
    audio.playChime();
    loadHistoryList();
  }

  function loadHistoryList() {
    const archiveList = document.getElementById('archive-list-container');
    if (!archiveList) return;
    
    const historyState = localStorage.getItem('tarot_history_records') || '[]';
    const records = JSON.parse(historyState);

    if (records.length === 0) {
      archiveList.innerHTML = `
        <div class="archive-empty-state">
          <i class="fa-solid fa-folder-open"></i>
          <p>目前尚無占卜存檔。前往「牌陣占卜」進行您的第一次心靈預言吧！</p>
        </div>
      `;
      if (clearAllHistoryBtn) clearAllHistoryBtn.style.display = 'none';
      return;
    }

    if (clearAllHistoryBtn) clearAllHistoryBtn.style.display = 'block';
    archiveList.innerHTML = '';

    records.forEach((record) => {
      const item = document.createElement('div');
      item.className = 'archive-item';
      const cardsPreviewHtml = record.cards.map(c => `
        <span class="archive-card-badge">${c.name} ${c.isReversed ? '▽' : '△'}</span>
      `).join('');

      item.innerHTML = `
        <div class="archive-item-info">
          <div class="archive-item-meta">
            <span class="archive-date"><i class="fa-regular fa-clock"></i> ${record.dateString}</span>
            <span class="archive-type-badge">${record.spreadType}</span>
          </div>
          <div class="archive-question-text">${record.question}</div>
        </div>
        <div class="archive-item-actions">
          <div class="archive-cards-preview">${cardsPreviewHtml}</div>
          <button class="btn-delete" data-id="${record.id}" title="刪除此紀錄"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      `;

      item.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete')) return;
        openHistoryDetail(record);
      });

      item.querySelector('.btn-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteHistoryItem(record.id);
      });

      archiveList.appendChild(item);
    });
  }

  function deleteHistoryItem(id) {
    const historyState = localStorage.getItem('tarot_history_records') || '[]';
    let records = JSON.parse(historyState);
    records = records.filter(r => r.id !== id);
    localStorage.setItem('tarot_history_records', JSON.stringify(records));
    audio.playCardSlide();
    loadHistoryList();
  }

  if (clearAllHistoryBtn) {
    clearAllHistoryBtn.addEventListener('click', () => {
      if (confirm('確定要清空所有的占卜紀錄嗎？這項動作無法還原。')) {
        localStorage.removeItem('tarot_history_records');
        audio.playCardSlide();
        loadHistoryList();
      }
    });
  }

  function openHistoryDetail(record) {
    document.getElementById('history-detail-date').textContent = record.dateString;
    document.getElementById('history-detail-type').textContent = record.spreadType;
    document.getElementById('history-detail-question').textContent = `問卜問題：${record.question}`;

    const grid = document.getElementById('history-detail-cards-grid');
    grid.innerHTML = '';

    record.cards.forEach((c) => {
      const cardRow = document.createElement('div');
      cardRow.className = 'card-analysis-row';
      const suitClass = c.suit ? `card-suit-${c.suit}` : '';
      
      cardRow.innerHTML = `
        <div class="library-card-wrapper" style="pointer-events:none;">
          <div class="tarot-card">
            <div class="card-inner">
              <div class="card-front-design ${suitClass} ${c.isReversed ? 'card-reversed-view' : ''}">
                <div class="card-header">
                  <span class="card-num">${c.number}</span>
                  <span class="card-el">${c.element}</span>
                </div>
                <div class="card-artwork">
                  ${c.icon}
                </div>
                <div class="card-footer-info">
                  <span class="card-cn-name">${c.name}</span>
                  <span class="card-en-name">${c.englishName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="analysis-text-col">
          <div class="analysis-card-title">
            <h4>${c.name} (${c.englishName})</h4>
            <span class="orientation-tag ${c.isReversed ? 'reversed-tag' : 'upright-tag'}">
               ${c.isReversed ? '逆位 ▽' : '正位 △'}
            </span>
            <span class="analysis-element-badge">
              元素：${c.element}
            </span>
          </div>
          <p class="analysis-meaning-desc">
            <strong>綜合牌意：</strong> ${c.meaning}
          </p>
          <div class="analysis-advice-box">
            <strong>✦ 星星的啟示：</strong> ${c.advice}
          </div>
        </div>
      `;
      const cardFront = cardRow.querySelector('.card-front-design');
      checkAndApplyImage(cardFront, c.id);

      grid.appendChild(cardRow);
    });

    historyModal.classList.add('open');
    audio.playChime();
  }

  if (historyModalCloseBtn) {
    historyModalCloseBtn.addEventListener('click', () => {
      historyModal.classList.remove('open');
    });
  }

  if (historyModal) {
    historyModal.addEventListener('click', (e) => {
      if (e.target === historyModal) {
        historyModal.classList.remove('open');
      }
    });
  }

  // Pre-load default library page content, Daily Tarot, and History
  renderLibraryGrid(allTarotCards);
  initDailyTarot();
  loadHistoryList();

  /* ==========================================================================
     PWA Install Prompt
     ========================================================================== */
  let deferredInstallPrompt = null;
  const installBanner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    // Show banner only if user hasn't dismissed in this session
    if (!sessionStorage.getItem('pwa-dismissed')) {
      setTimeout(() => {
        if (installBanner) {
          installBanner.classList.remove('hidden');
          installBanner.style.display = 'flex';
        }
      }, 8000); // Show after 8 seconds of engagement
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      console.log('[PWA] Install prompt outcome:', outcome);
      deferredInstallPrompt = null;
      if (installBanner) installBanner.classList.add('hidden');
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      if (installBanner) installBanner.classList.add('hidden');
      sessionStorage.setItem('pwa-dismissed', '1');
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App successfully installed!');
    if (installBanner) installBanner.classList.add('hidden');
  });

  /* ==========================================================================
     Accessibility: Add main landmark and ARIA labels
     ========================================================================== */
  // Add id to main content area for skip-to-content
  const firstSection = document.getElementById('section-home');
  if (firstSection && !document.getElementById('main-content')) {
    firstSection.id = 'main-content';
  }
});

