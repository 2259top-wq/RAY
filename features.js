/* ==========================================================================
   AETHERIA 星寰塔羅學院 - Feature Extensions v2.0
   All 7 new features: Theme, Compare, Share, Gesture, Leaderboard, Meditation, Weekly/Monthly
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ─── Wait for main app to initialize ───
  // These features hook into allTarotCards which is defined in the main DOMContentLoaded
  // We use a small timeout to ensure main app runs first
  setTimeout(initAllFeatures, 100);
});

function initAllFeatures() {
  const allCards = (typeof tarotCards !== 'undefined' && typeof minorCards !== 'undefined')
    ? [...tarotCards, ...minorCards]
    : [];

  initThemeSwitcher();
  initCardCompare(allCards);
  initShareReading();
  initGestureControls();
  initQuizLeaderboard();
  initMeditationMode(allCards);
  initWeeklyMonthlySpread(allCards);
  initPrintReading();
}

/* ==========================================================================
   1. 主題切換 Theme Switcher
   ========================================================================== */
function initThemeSwitcher() {
  const THEME_KEY = 'aetheria-theme';
  const savedTheme = localStorage.getItem(THEME_KEY) || 'default';
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      localStorage.setItem(THEME_KEY, theme);
      // Sound feedback
      if (typeof playUIClick === 'function') playUIClick();
    });
  });

  function applyTheme(theme) {
    const html = document.documentElement;
    html.removeAttribute('data-theme');
    if (theme !== 'default') html.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }
}

/* ==========================================================================
   2. 牌卡對比 Card Compare
   ========================================================================== */
function initCardCompare(allCards) {
  const compareBtn = document.getElementById('compare-cards-btn');
  const compareModal = document.getElementById('compare-modal');
  const closeBtn = document.getElementById('compare-modal-close');
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  const doCompareBtn = document.getElementById('do-compare-btn');
  const compareResult = document.getElementById('compare-result');
  const panelA = document.getElementById('compare-panel-a');
  const panelB = document.getElementById('compare-panel-b');
  const synthDiv = document.getElementById('compare-synthesis');
  const synthText = document.getElementById('compare-synthesis-text');

  if (!compareBtn || !compareModal) return;

  // Populate selects
  const placeholder = '<option value="">— 請選擇 —</option>';
  const options = allCards.map(c =>
    `<option value="${c.id}">${c.name} (${c.englishName || ''})</option>`
  ).join('');
  [selectA, selectB].forEach(sel => {
    if (sel) sel.innerHTML = placeholder + options;
  });

  compareBtn.addEventListener('click', () => {
    compareModal.classList.add('open');
    compareResult.style.display = 'none';
    synthDiv.style.display = 'none';
  });

  closeBtn?.addEventListener('click', () => compareModal.classList.remove('open'));
  compareModal?.addEventListener('click', e => {
    if (e.target === compareModal) compareModal.classList.remove('open');
  });

  doCompareBtn?.addEventListener('click', () => {
    const idA = parseInt(selectA.value);
    const idB = parseInt(selectB.value);
    if (isNaN(idA) || isNaN(idB)) {
      alert('請選擇兩張不同的牌！');
      return;
    }
    if (idA === idB) {
      alert('請選擇不同的兩張牌進行比較！');
      return;
    }

    const cardA = allCards.find(c => c.id === idA);
    const cardB = allCards.find(c => c.id === idB);
    if (!cardA || !cardB) return;

    renderComparePanel(panelA, cardA);
    renderComparePanel(panelB, cardB);
    compareResult.style.display = 'grid';

    // Generate synthesis
    const synthesis = generateSynthesis(cardA, cardB);
    synthText.textContent = synthesis;
    synthDiv.style.display = 'block';
    synthDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  function renderComparePanel(panel, card) {
    const imgPath = `assets/card_${card.id}.png`;
    panel.innerHTML = `
      <div class="compare-card-art" id="cca-${card.id}"
           style="background: linear-gradient(135deg, #1a0f3c, #0d0a1a);">
      </div>
      <h3>${card.name}<br><small style="font-size:0.75rem;opacity:0.6">${card.englishName || ''}</small></h3>
      <div class="compare-keywords">
        ${(card.keywords || []).map(k => `<span>${k}</span>`).join('')}
      </div>
      <div class="compare-meaning">
        <strong style="color:var(--gold);display:block;margin-bottom:6px">✦ 正位</strong>
        ${card.upright?.meaning || card.upright?.title || ''}
      </div>
    `;
    // Async image load
    const artEl = document.getElementById(`cca-${card.id}`);
    if (artEl) {
      const img = new Image();
      img.src = imgPath;
      img.onload = () => {
        artEl.style.backgroundImage = `url('${imgPath}')`;
        artEl.style.backgroundSize = 'cover';
        artEl.style.backgroundPosition = 'center';
      };
    }
  }

  function generateSynthesis(cardA, cardB) {
    const elemA = cardA.element || cardA.suit || '未知';
    const elemB = cardB.element || cardB.suit || '未知';
    const kwA = (cardA.keywords || []).slice(0, 2).join('、');
    const kwB = (cardB.keywords || []).slice(0, 2).join('、');

    if (elemA === elemB) {
      return `${cardA.name}（${kwA}）與${cardB.name}（${kwB}）同屬${elemA}系能量，兩者相互強化，顯示出此領域的能量高度集中。當這兩張牌同時出現時，代表所詢問事項的核心能量極為純粹且強烈，需特別重視${kwA}的課題。`;
    }
    return `${cardA.name}代表「${kwA}」的能量，與${cardB.name}「${kwB}」的特質形成對話。這種組合揭示了一個複雜的動態：你可能同時面對兩種看似對立卻互補的力量。建議在做決策時，尋找兩者之間的平衡點，讓不同的能量相互滋養而非衝突。`;
  }
}

/* ==========================================================================
   3. 分享占卜結果 Share Reading
   ========================================================================== */
function initShareReading() {
  const shareBtn = document.getElementById('share-reading-btn');
  const shareModal = document.getElementById('share-modal');
  const closeBtn = document.getElementById('share-modal-close');
  const downloadBtn = document.getElementById('share-download-btn');
  const copyBtn = document.getElementById('share-copy-btn');
  const nativeBtn = document.getElementById('share-native-btn');
  const preview = document.getElementById('share-preview');
  const canvas = document.getElementById('share-canvas');

  if (!shareBtn) return;

  // Show native share button if supported
  if (navigator.share && nativeBtn) nativeBtn.style.display = '';

  shareBtn.addEventListener('click', () => {
    shareModal.classList.add('open');
    generateShareImage(canvas, preview);
  });

  closeBtn?.addEventListener('click', () => shareModal.classList.remove('open'));
  shareModal?.addEventListener('click', e => {
    if (e.target === shareModal) shareModal.classList.remove('open');
  });

  downloadBtn?.addEventListener('click', () => {
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `aetheria-tarot-reading-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  copyBtn?.addEventListener('click', async () => {
    try {
      const text = buildShareText();
      await navigator.clipboard.writeText(text);
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> 已複製！';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> 複製連結';
      }, 2000);
    } catch {
      alert('複製失敗，請手動複製網址。');
    }
  });

  nativeBtn?.addEventListener('click', async () => {
    try {
      if (canvas) {
        canvas.toBlob(async (blob) => {
          const file = new File([blob], 'tarot-reading.png', { type: 'image/png' });
          await navigator.share({
            title: 'AETHERIA 星寰塔羅 占卜結果',
            text: buildShareText(),
            files: [file]
          });
        });
      }
    } catch (e) {
      console.log('Share cancelled');
    }
  });

  function buildShareText() {
    const question = document.getElementById('display-question')?.textContent || '塔羅占卜';
    const cards = document.querySelectorAll('#drawn-cards-analysis .interpretation-card');
    let text = `🔮 AETHERIA 星寰塔羅 占卜報告\n\n❓ 問題：${question}\n\n`;
    cards.forEach((card, i) => {
      const name = card.querySelector('h4')?.textContent || '';
      text += `✦ 第${i + 1}張：${name}\n`;
    });
    text += '\n📿 探索更多塔羅智慧：https://aetheria-tarot.app/';
    return text;
  }

  function generateShareImage(canvas, preview) {
    if (!canvas) return;
    preview.innerHTML = '<p style="color:var(--text-muted);text-align:center"><i class="fa-solid fa-spinner fa-spin"></i> 生成分享圖片中...</p>';

    const W = 800, H = 480;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // Background
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#1a0f3c');
    bg.addColorStop(0.5, '#0d0a1a');
    bg.addColorStop(1, '#0a0518');
    ctx.fillStyle = bg;
    ctx.roundRect(0, 0, W, H, 20);
    ctx.fill();

    // Gold border
    ctx.strokeStyle = '#dfb86c';
    ctx.lineWidth = 2;
    ctx.roundRect(10, 10, W - 20, H - 20, 16);
    ctx.stroke();

    // Stars
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5 + 0.1})`;
      ctx.beginPath();
      ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Header
    ctx.fillStyle = '#dfb86c';
    ctx.font = 'bold 14px serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦  AETHERIA 星寰塔羅學院  ✦', W / 2, 48);

    ctx.fillStyle = '#f0f2f5';
    ctx.font = 'bold 22px serif';
    ctx.fillText('占 卜 解 讀 報 告', W / 2, 80);

    // Question
    const question = document.getElementById('display-question')?.textContent || '塔羅占卜';
    ctx.fillStyle = '#a0aec0';
    ctx.font = '13px sans-serif';
    ctx.fillText(`❓ ${question.slice(0, 50)}${question.length > 50 ? '...' : ''}`, W / 2, 110);

    // Divider
    ctx.strokeStyle = 'rgba(223,184,108,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, 125);
    ctx.lineTo(W - 60, 125);
    ctx.stroke();

    // Draw card names from interpretation panel
    const cards = document.querySelectorAll('#drawn-cards-analysis .interpretation-card');
    const cardCount = Math.min(cards.length, 4);
    const cardW = 140, cardH = 200;
    const startX = (W - (cardCount * (cardW + 16) - 16)) / 2;

    const drawCardSlot = (x, label, cardName, cardId) => {
      // Card background
      const cg = ctx.createLinearGradient(x, 140, x + cardW, 140 + cardH);
      cg.addColorStop(0, '#1a1040');
      cg.addColorStop(1, '#0d0825');
      ctx.fillStyle = cg;
      ctx.roundRect(x, 140, cardW, cardH, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(223,184,108,0.5)';
      ctx.lineWidth = 1;
      ctx.roundRect(x, 140, cardW, cardH, 10);
      ctx.stroke();

      // Try to draw card image
      // (Images may not load in time - just show the name)
      ctx.fillStyle = '#dfb86c';
      ctx.font = `bold 11px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(cardName?.slice(0, 10) || '', x + cardW / 2, 245);

      // Label
      ctx.fillStyle = '#a0aec0';
      ctx.font = '10px sans-serif';
      ctx.fillText(label, x + cardW / 2, 352);
    };

    cards.forEach((card, i) => {
      if (i >= 4) return;
      const name = card.querySelector('h4')?.textContent?.replace(/正位|逆位/, '').trim() || '';
      const posLabel = ['位置 1', '位置 2', '位置 3', '位置 4'][i];
      drawCardSlot(startX + i * (cardW + 16), posLabel, name, i);
    });

    if (cardCount === 0) {
      ctx.fillStyle = '#a0aec0';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('完成占卜後即可分享', W / 2, 240);
    }

    // Footer
    ctx.fillStyle = 'rgba(160,174,192,0.6)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('aetheria-tarot.app  ·  探索你的命運', W / 2, H - 20);

    // Show preview
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    img.style.width = '100%';
    img.style.borderRadius = '8px';
    preview.innerHTML = '';
    preview.appendChild(img);
  }
}

/* ==========================================================================
   4. 手勢操作 Gesture Controls (Swipe + Long Press)
   ========================================================================== */
function initGestureControls() {
  let touchStartX = 0, touchStartY = 0, touchStartTime = 0;
  let longPressTimer = null;
  const LONG_PRESS_MS = 600;
  const SWIPE_THRESHOLD = 50;

  // Apply to library grid
  const libraryGrid = document.getElementById('library-card-grid');
  if (!libraryGrid) return;

  // Swipe hint
  const swipeHint = document.createElement('div');
  swipeHint.className = 'swipe-hint';
  swipeHint.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> 長按卡牌進入冥想・左右滑動可瀏覽';
  libraryGrid.parentNode?.insertBefore(swipeHint, libraryGrid);
  setTimeout(() => swipeHint.style.opacity = '0', 5000);

  // Delegate touch events to library grid
  libraryGrid.addEventListener('touchstart', onTouchStart, { passive: true });
  libraryGrid.addEventListener('touchend', onTouchEnd, { passive: true });
  libraryGrid.addEventListener('touchmove', onTouchMove, { passive: true });

  // Desktop: right-click → long press simulation
  libraryGrid.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const card = e.target.closest('.library-card');
    if (card) triggerMeditationFromCard(card);
  });

  function onTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchStartTime = Date.now();

    const card = e.target.closest('.library-card');
    if (card) {
      longPressTimer = setTimeout(() => {
        triggerMeditationFromCard(card);
      }, LONG_PRESS_MS);
    }
  }

  function onTouchMove(e) {
    clearTimeout(longPressTimer);
  }

  function onTouchEnd(e) {
    clearTimeout(longPressTimer);
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = Math.abs(touch.clientY - touchStartY);
    const dt = Date.now() - touchStartTime;

    // Swipe detection (horizontal, fast, not a scroll)
    if (Math.abs(dx) > SWIPE_THRESHOLD && dy < 60 && dt < 500) {
      handleSwipe(dx > 0 ? 'right' : 'left');
    }
  }

  function handleSwipe(direction) {
    // Scroll library grid horizontally or trigger nav
    const allSections = ['section-home', 'section-guide', 'section-library', 'section-spreads', 'section-quiz'];
    const activeSection = document.querySelector('.page-section.active');
    if (!activeSection) return;

    const currentIdx = allSections.indexOf(activeSection.id);
    let targetIdx = direction === 'right' ? currentIdx - 1 : currentIdx + 1;
    targetIdx = Math.max(0, Math.min(allSections.length - 1, targetIdx));

    if (targetIdx !== currentIdx) {
      const targetLink = document.querySelector(`[data-target="${allSections[targetIdx]}"]`);
      targetLink?.click();
    }
  }

  function triggerMeditationFromCard(cardEl) {
    const cardId = parseInt(cardEl.dataset.cardId);
    const allCards = typeof tarotCards !== 'undefined' ? [...tarotCards, ...(typeof minorCards !== 'undefined' ? minorCards : [])] : [];
    const card = allCards.find(c => c.id === cardId);
    if (card && typeof openMeditationMode === 'function') {
      openMeditationMode(card);
    }
  }
}

/* ==========================================================================
   5. 測驗排行榜 Quiz Leaderboard
   ========================================================================== */
function initQuizLeaderboard() {
  const LB_KEY = 'aetheria-quiz-leaderboard';
  const MAX_ENTRIES = 5;

  // Hook into quiz result display
  const retryBtn = document.getElementById('retry-quiz-btn');
  const resultsPanel = document.getElementById('quiz-results-panel');

  // Observe results panel becoming visible
  const observer = new MutationObserver(() => {
    if (!resultsPanel.classList.contains('hidden')) {
      const scoreEl = document.getElementById('results-final-score');
      const score = parseInt(scoreEl?.textContent) || 0;
      saveScore(score);
      renderLeaderboard(score);
    }
  });

  if (resultsPanel) {
    observer.observe(resultsPanel, { attributes: true, attributeFilter: ['class'] });
  }

  window.saveQuizScore = saveScore;
  window.renderQuizLeaderboard = renderLeaderboard;

  function saveScore(score) {
    const lb = JSON.parse(localStorage.getItem(LB_KEY) || '[]');
    lb.push({
      score,
      date: new Date().toLocaleDateString('zh-TW'),
      time: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })
    });
    lb.sort((a, b) => b.score - a.score);
    lb.splice(MAX_ENTRIES);
    localStorage.setItem(LB_KEY, JSON.stringify(lb));
  }

  function renderLeaderboard(currentScore) {
    const lbList = document.getElementById('leaderboard-list');
    if (!lbList) return;

    const lb = JSON.parse(localStorage.getItem(LB_KEY) || '[]');
    if (lb.length === 0) {
      lbList.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:8px">尚無記錄，完成第一場測驗！</p>';
      return;
    }

    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
    const levelEmoji = s => s >= 100 ? '✨' : s >= 80 ? '⭐' : s >= 60 ? '👍' : '💪';

    lbList.innerHTML = lb.map((entry, i) => {
      const isNew = entry.score === currentScore && i === lb.findIndex(e => e.score === currentScore);
      return `
        <div class="leaderboard-entry${isNew ? ' lb-new' : ''}">
          <span class="lb-rank">${medals[i] || (i + 1)}</span>
          <span>${levelEmoji(entry.score)} ${entry.score >= 80 ? '高手' : entry.score >= 60 ? '學習中' : '繼續努力'}</span>
          <span class="lb-date">${entry.date}</span>
          <span class="lb-score">${entry.score}<small style="font-size:0.65rem;opacity:0.7">分</small></span>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   6. 冥想模式 Meditation Mode
   ========================================================================== */
let openMeditationMode;

function initMeditationMode(allCards) {
  const overlay = document.getElementById('meditation-overlay');
  const closeBtn = document.getElementById('meditation-close');
  const cardDisplay = document.getElementById('meditation-card-display');
  const cardName = document.getElementById('meditation-card-name');
  const cardDesc = document.getElementById('meditation-card-desc');
  const breathingText = document.getElementById('breathing-text');

  if (!overlay) return;

  const breathingPhrases = [
    '深呼吸，感受能量流動...',
    '吸氣，讓光明進入...',
    '吐氣，釋放所有雜念...',
    '靜下心來，傾聽內心...',
    '你與宇宙同頻共振...',
    '一切答案都在你心中...'
  ];
  let phraseIdx = 0;
  let breathingInterval = null;

  openMeditationMode = function(card) {
    if (!card || !overlay) return;

    // Set card display
    cardName.textContent = `${card.name}  ${card.englishName || ''}`;
    cardDesc.textContent = card.description || card.upright?.meaning || '';

    // Card image
    const imgUrl = `assets/card_${card.id}.png`;
    const img = new Image();
    img.onload = () => {
      cardDisplay.style.backgroundImage = `url('${imgUrl}')`;
      cardDisplay.style.backgroundSize = 'cover';
      cardDisplay.style.backgroundPosition = 'center';
    };
    img.onerror = () => {
      cardDisplay.style.backgroundImage = '';
      cardDisplay.innerHTML = card.icon || `<div style="color:var(--gold);font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%">✦</div>`;
    };
    img.src = imgUrl;

    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Try fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    // Breathing animation text
    phraseIdx = 0;
    breathingText.textContent = breathingPhrases[0];
    clearInterval(breathingInterval);
    breathingInterval = setInterval(() => {
      phraseIdx = (phraseIdx + 1) % breathingPhrases.length;
      breathingText.style.opacity = '0';
      setTimeout(() => {
        breathingText.textContent = breathingPhrases[phraseIdx];
        breathingText.style.opacity = '1';
      }, 500);
    }, 8000);
  };

  function closeMeditation() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    clearInterval(breathingInterval);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }

  closeBtn?.addEventListener('click', closeMeditation);
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeMeditation();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeMeditation();
  });

  // Add meditation trigger button to each library card (after library renders)
  const addMeditationButtons = () => {
    document.querySelectorAll('.library-card:not([data-meditation-added])').forEach(cardEl => {
      const cardId = parseInt(cardEl.dataset.cardId);
      const card = allCards.find(c => c.id === cardId);
      if (!card) return;

      const btn = document.createElement('button');
      btn.className = 'meditation-trigger-btn';
      btn.title = '冥想模式';
      btn.innerHTML = '<i class="fa-solid fa-spa"></i>';
      btn.setAttribute('aria-label', `進入${card.name}冥想模式`);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openMeditationMode(card);
      });
      cardEl.style.position = 'relative';
      cardEl.appendChild(btn);
      cardEl.setAttribute('data-meditation-added', '1');
    });
  };

  // Run after library renders
  setTimeout(addMeditationButtons, 500);
  // Also run when library updates
  const libraryGrid = document.getElementById('library-card-grid');
  if (libraryGrid) {
    new MutationObserver(addMeditationButtons).observe(libraryGrid, { childList: true });
  }
}

/* ==========================================================================
   7. 週運 / 月運牌陣 Weekly & Monthly Spreads
   ========================================================================== */
function initWeeklyMonthlySpread(allCards) {
  // Hook into the spread selection system
  const spreadCards = document.querySelectorAll('.spread-card');
  const startBtn = document.getElementById('start-spread-btn');
  const slotsContainer = document.getElementById('slots-container');
  const deckMode = () => {
    const active = document.querySelector('.deck-mode-option.active');
    return active?.dataset.deckMode || 'major';
  };

  // Listen for weekly/monthly spread selection
  spreadCards.forEach(card => {
    const spreadType = card.dataset.spread;
    if (spreadType === 'weekly' || spreadType === 'monthly') {
      card.addEventListener('click', () => {
        spreadCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        window._currentCustomSpread = spreadType;
      });
    }
  });

  // Override start button for weekly/monthly
  startBtn?.addEventListener('click', () => {
    const spread = window._currentCustomSpread;
    if (spread !== 'weekly' && spread !== 'monthly') {
      window._currentCustomSpread = null;
      return; // Let normal handler take over
    }

    const configPanel = document.getElementById('spread-config-panel');
    const workspace = document.getElementById('spread-workspace');
    const questionDisplay = document.getElementById('display-question');
    const questionInput = document.getElementById('spread-question-input');

    if (!workspace || !slotsContainer) return;

    configPanel?.classList.add('hidden');
    workspace?.classList.remove('hidden');

    const question = questionInput?.value || (spread === 'weekly' ? '本週七日能量指引' : '本年度月份能量指引');
    if (questionDisplay) questionDisplay.textContent = question;

    renderCustomSpreadSlots(spread, allCards, slotsContainer, deckMode());
    window._currentCustomSpread = null;
  }, true); // Use capture to run before existing listener

  function renderCustomSpreadSlots(spreadType, allCards, container, mode) {
    const pool = mode === 'full' ? allCards : allCards.filter(c => c.id <= 21);
    const days = ['一', '二', '三', '四', '五', '六', '日'];
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月', '年度總結'];

    const labels = spreadType === 'weekly' ? days.map(d => `週${d}`) : months;
    const count = labels.length;

    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const drawn = [];
    for (let i = 0; i < count; i++) {
      const card = shuffled[i % shuffled.length];
      const isReversed = Math.random() < 0.3;
      drawn.push({ card, isReversed });
    }

    // Set layout class
    container.className = `slots-container ${spreadType === 'weekly' ? 'weekly-layout' : 'monthly-layout'}`;

    // Render slots
    container.innerHTML = labels.map((label, i) => {
      const { card, isReversed } = drawn[i];
      const imgUrl = `assets/card_${card.id}.png`;
      const revClass = isReversed ? 'reversed' : '';
      return `
        <div class="slot ${revClass}" data-slot-index="${i}" data-card-id="${card.id}" style="cursor:pointer">
          <div class="slot-label" style="font-size:0.7rem;color:var(--gold);text-align:center;margin-bottom:4px;font-weight:600">${label}</div>
          <div class="card-slot" id="cslot-${i}" style="position:relative">
            <div class="card-face illustrated-card" style="transform:${isReversed ? 'rotate(180deg)' : 'none'}">
              <div class="card-face-content">
                <div class="card-face-icon" id="csi-${i}">${card.icon || '<span style=\"color:var(--gold);font-size:2rem\">✦</span>'}</div>
                <div class="card-face-name">${card.name}</div>
                <div class="card-face-sub">${isReversed ? '逆位' : '正位'}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Load images
    drawn.forEach(({ card }, i) => {
      const iconEl = document.getElementById(`csi-${i}`);
      if (!iconEl) return;
      const img = new Image();
      img.src = `assets/card_${card.id}.png`;
      img.onload = () => {
        const face = iconEl.closest('.card-face');
        if (face) {
          face.style.backgroundImage = `url('assets/card_${card.id}.png')`;
          face.classList.add('illustrated-card');
          iconEl.style.display = 'none';
        }
      };
    });

    // Click slots to show detail
    container.addEventListener('click', (e) => {
      const slot = e.target.closest('.slot');
      if (!slot) return;
      const cardId = parseInt(slot.dataset.cardId);
      const card = allCards.find(c => c.id === cardId);
      const isReversed = slot.classList.contains('reversed');
      if (card && typeof window.openCardModal === 'function') {
        window.openCardModal(card, isReversed);
      }
    });

    // Show interpretation panel immediately for weekly/monthly
    const interpretPanel = document.getElementById('interpretation-panel');
    const analysisDiv = document.getElementById('drawn-cards-analysis');
    if (!interpretPanel || !analysisDiv) return;

    const title = interpretPanel.querySelector('.interpretation-title');
    if (title) title.textContent = spreadType === 'weekly' ? '✦ 週運能量指引 ✦' : '✦ 年度月運解析 ✦';

    analysisDiv.innerHTML = drawn.map(({ card, isReversed }, i) => {
      const meaning = isReversed ? card.reversed : card.upright;
      return `
        <div class="interpretation-card">
          <div class="interp-card-header">
            <div class="interp-card-face" id="icf-${i}">
              ${card.icon || '<span style="color:var(--gold);font-size:2rem">✦</span>'}
            </div>
            <div class="interp-card-meta">
              <h4>${labels[i]}：${card.name} ${isReversed ? '<span style="color:#ff7878;font-size:0.75rem">逆位</span>' : '<span style="color:#7affa8;font-size:0.75rem">正位</span>'}</h4>
              <p class="interp-card-keywords">${(card.keywords || []).join(' · ')}</p>
            </div>
          </div>
          <p class="interp-meaning">${meaning?.meaning || meaning?.title || ''}</p>
        </div>
      `;
    }).join('');

    // Load card images in interpretation
    drawn.forEach(({ card }, i) => {
      const el = document.getElementById(`icf-${i}`);
      if (!el) return;
      const img = new Image();
      img.src = `assets/card_${card.id}.png`;
      img.onload = () => {
        el.style.backgroundImage = `url('assets/card_${card.id}.png')`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.borderRadius = '8px';
        el.innerHTML = '';
      };
    });

    setTimeout(() => interpretPanel.classList.remove('hidden'), 300);
  }
}

/* ==========================================================================
   8. 列印占卜報告 Print Reading
   ========================================================================== */
function initPrintReading() {
  const printBtn = document.getElementById('print-reading-btn');
  printBtn?.addEventListener('click', () => {
    window.print();
  });
}
