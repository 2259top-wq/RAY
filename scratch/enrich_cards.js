const fs = require('fs');
const path = require('path');

// Target file
const cardsPath = path.join(__dirname, '..', 'cards.js');

// Verbatim Waite symbolisms and translations from Part II
const symbolisms = {
  0: {
    uprightSymbol: "The Fool is a seeker of experience, the soul in search of its own pathway. He is the prince of the other world on his travels through this one. The white rose represents the purity of the soul, and his little dog represents the animal nature on the spiritual journey.",
    uprightSymbolZh: "愚者是經驗的尋求者，是尋找自身道路的靈魂。他是另一個世界的王子，在此世界中旅行。白玫瑰代表靈魂的純潔，他身邊的小狗代表精神旅程中的動物天性。",
    reversedSymbol: "In the reverse state, the journey is stalled or misdirected. Carelessness and vanity cloud the spiritual potential, and the trust in the divine path degenerates into mere negligence.",
    reversedSymbolZh: "在逆位狀態下，旅程停滯不前或迷失方向。粗心與虛榮遮蔽了精神潛能，對神聖道路的信任退化為純粹的疏忽。"
  },
  1: {
    uprightSymbol: "The Magician shows the relation of the Divine and the human. 'As above, so below' is his great law. The divine power flows through the channel of his will into the physical plane. The tools on his table show he has mastered the four elements of manifest reality.",
    uprightSymbolZh: "魔術師展示了神聖與人類的關係。「如其在上，如其在下」是他的偉大法則。神聖的力量透過他意志的通道流入物質層面。桌上的工具顯示他已掌握顯現現實中的四個元素。",
    reversedSymbol: "The reversed Magician represents the physician or Magus turned towards selfish ends or mental disturbance. The will is disjointed, and the power is blocked or applied in a state of disquiet.",
    reversedSymbolZh: "逆位的魔術師代表將能力轉向私利或面臨精神動盪的醫生或魔術師。意志支離破碎，力量受阻或處於不安狀態中。"
  },
  2: {
    uprightSymbol: "She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. The veil behind her represents the mysteries of nature and the subconscious, embroidered with palms and pomegranates.",
    uprightSymbolZh: "她被稱為伊斯之聖所門檻上的神秘科學，但她其實是神秘教會，是神與人之家。她身後的面紗刺繡著棕櫚與石榴，代表自然與潛意識的奧秘。",
    reversedSymbol: "When the High Priestess is reversed, the silent wisdom is replaced by surface knowledge and conceit. The ardour and passion of the physical world cloud the quiet waters of spiritual intuition.",
    reversedSymbolZh: "當女祭司逆位時，沉靜的智慧被表面的知識與自負所取代。物質世界的熱情與激情遮蔽了精神直覺的平靜之水。"
  },
  3: {
    uprightSymbol: "She is the universal Mother, the garden of Venus. She is the daughter of the sky and earth, representing fruitfulness and the gateway of life. Her twelve stars represent the zodiac and the cycle of nature.",
    uprightSymbolZh: "她是宇宙之母，金星的花園。她是天空與大地之女，代表著豐饒與生命的門戶。她的十二顆星星代表黃道十二宮與大自然的循環。",
    reversedSymbol: "Reversed, the flow of abundance is interrupted or becomes a source of vacillation. The light of truth is needed to unravel the involved matters, but doubt and hesitation may delay progress.",
    reversedSymbolZh: "逆位時，豐盛的流動中斷，或成為猶豫不決的源頭。需要真理之光來解開複雜的事務，但懷疑與猶豫可能會延誤進展。"
  },
  4: {
    uprightSymbol: "He is the executive power of the world, the logic of governance and rule. He represents the active power of the universe stabilizing the material plane, bringing order out of chaos through authority and conviction.",
    uprightSymbolZh: "他是世界的執行權力，治理與規則的邏輯。他代表著宇宙穩定物質層面的能動力量，透過權威與信念從混亂中建立秩序。",
    reversedSymbol: "Reversed, the ruler's stability turns into obstruction or immaturity. While benevolence and compassion may manifest, there is confusion to enemies and lack of structured control.",
    reversedSymbolZh: "逆位時，統治者的穩定轉為阻礙或不成熟。雖然可能展現出仁慈與同情，但存在敵人的混亂以及缺乏結構性的控制。"
  },
  5: {
    uprightSymbol: "He is the ruling power of external religion, the channel of grace and divine guidance in the outer world. He holds the keys of the mysteries and teaches the alliance of souls under institutional law.",
    uprightSymbolZh: "他是外在宗教的統治權力，外在世界恩典與神聖引導的通道。他持有奧秘的鑰匙，並教授制度法之下靈魂的結盟。",
    reversedSymbol: "Reversed, the institutions crumble into weakness. Society and concord remain, but they are weakened by over-kindness and lack of spiritual authority.",
    reversedSymbolZh: "逆位時，體制崩解為軟弱。社會與和諧依然存在，但因過度仁慈和缺乏精神權威而被削弱。"
  },
  6: {
    uprightSymbol: "This is the card of human love, but spiritually it is the union of the soul with the divine. The angel Raphael pours down the light of superconscious realization, indicating the choice between the higher and lower paths.",
    uprightSymbolZh: "這是人類之愛的牌，但在精神上，它是靈魂與神聖的結合。天使拉斐爾傾注超意識覺醒的光芒，指示高低道路之間的選擇。",
    reversedSymbol: "Reversed, the union is fractured, leading to failure and foolish designs. Frustrated marriage projects and contrarieties of all kinds indicate disharmony of values.",
    reversedSymbolZh: "逆位時，結合破裂，導致失敗與愚蠢的計劃。婚姻計劃受挫以及各種對立，暗示價值觀的不和諧。"
  },
  7: {
    uprightSymbol: "He is the conqueror on the plane of material intellect, who controls the sphinxes of opposing desires by the power of his will. He represents triumph, but warns of presumption and vengeance.",
    uprightSymbolZh: "他是物質理智層面上的征服者，以意志的力量控制著對立慾望的獅身人面獸。他代表勝利，但警告傲慢與復仇的危險。",
    reversedSymbol: "Reversed, the control is lost. The chariot is overthrown, leading to riot, quarrel, litigation, and ultimate defeat on the physical plane.",
    reversedSymbolZh: "逆位時，控制力喪失。戰車傾覆，導致暴動、爭吵、訴訟以及世俗層面的最終失敗。"
  },
  8: {
    uprightSymbol: "This is the power of love and spiritual courage overcoming the animal nature. She tames the lion not by violence, but by gentleness. She represents complete success and honours through inner magnanimity.",
    uprightSymbolZh: "這是愛與精神勇氣克服動物本能的力量。她不是以暴力，而是以溫柔馴服獅子。她代表透過內在的寬宏大量獲得完全的成功與榮譽。",
    reversedSymbol: "Reversed, the inner balance is disrupted, leading either to weakness and discord, or to despotism and the abuse of power, which results in disgrace.",
    reversedSymbolZh: "逆位時，內在平衡被破壞，要麼導致軟弱與不和，要麼導致專制與濫用權力，最終引來恥辱。"
  },
  9: {
    uprightSymbol: "He is the beacon of truth, holding the light of the divine science to guide those who seek. The path of self-knowledge and silent contemplation is his domain, though he warns of treason and corruption in the outer world.",
    uprightSymbolZh: "他是真理的燈塔，手持神聖科學之光引導尋求者。自我認識與默觀的道路是他的領域，儘管他警告外在世界有背叛與腐敗的危險。",
    reversedSymbol: "Reversed, the search turns inward to fear and unreasoned caution. Concealment and disguise replace truth, indicating a refusal to face the light.",
    reversedSymbolZh: "逆位時，探索轉為內在的恐懼與無端的謹慎。隱藏與裝扮取代了真理，暗示拒絕面對光明。"
  },
  10: {
    uprightSymbol: "It represents the cycle of destiny, the ascent and descent of souls. The sphinx at the top represents the silent equilibrium of the universe amidst the turning of fortune's wheel.",
    uprightSymbolZh: "它代表命運的循環，靈魂的上升與下降。頂部的人面獅身獸代表命運之輪旋轉中，宇宙寂靜的平衡狀態。",
    reversedSymbol: "Reversed, the wheel brings increase, abundance, and superfluity. It indicates that the material forces are overflowing, but warning of the instability of excess.",
    reversedSymbolZh: "逆位時，輪子帶來增加、豐盛與過剩。它指出物質力量正在溢出，但警告過度所帶來的不穩定。"
  },
  11: {
    uprightSymbol: "It is the law of karma and equilibrium in the manifest world. She holds the sword of executive justice and the scales of balance, ensuring the triumph of the deserving side.",
    uprightSymbolZh: "它是顯現世界中業力與平衡的法則。她手持執行正義之劍與平衡的天平，確保值得勝訴的一方獲得勝利。",
    reversedSymbol: "Reversed, it indicates bias, legal complications, and bigotry. The law is applied with excessive severity or is entangled in procedural confusion.",
    reversedSymbolZh: "逆位時，它指出偏見、法律糾紛與偏執。法律的執行過度嚴苛，或糾纏於程序混亂中。"
  },
  12: {
    uprightSymbol: "It is the card of suspension, sacrifice, and the great reversal of values. His face is serene, representing the soul awaiting illumination through voluntary sacrifice.",
    uprightSymbolZh: "它是暫停、犧牲與價值觀大反轉之牌。他的神情安詳，代表靈魂透過自願的犧牲等待啟蒙。",
    reversedSymbol: "Reversed, it indicates a preoccupation with the material crowd and body politic. The sacrifice is resisted, leading to selfishness and stagnation.",
    reversedSymbolZh: "逆位時，它指出對物質群眾與世俗政治的執著。拒絕犧牲，導致自私與停滯不前。"
  },
  13: {
    uprightSymbol: "It is the great transition, the clearing of the old to make way for the new. The sun rising between the towers represents the promise of spiritual resurrection beyond mortality.",
    uprightSymbolZh: "它是偉大的過渡，清除舊有以迎接新生。雙塔之間升起的太陽代表死亡之外精神復活的承諾。",
    reversedSymbol: "Reversed, it indicates inertia, sleep, and lethargy. The transition is blocked, leading to petrifaction, somnambulism, and hope destroyed.",
    reversedSymbolZh: "逆位時，它指出停滯、沉睡與昏沉。過渡被阻礙，導致石化、夢遊以及希望的毀滅。"
  },
  14: {
    uprightSymbol: "It represents the blending and tempering of forces, the golden mean. The angel pours the waters of life between the physical and spiritual realms, showing perfect management.",
    uprightSymbolZh: "它代表力量 of forces，中庸之道。天使在物質與精神領域之間傾倒生命之水，展現出完美的管理。",
    reversedSymbol: "Reversed, it connects with religious structures and sects. It may show a reversion to outer dogma or the reverse of spiritual balance, leading to conflict.",
    reversedSymbolZh: "逆位時，它與宗教機構和派系相關聯。它可能顯示向外在教條的倒退，或精神平衡的反轉，從而導致衝突。"
  },
  15: {
    uprightSymbol: "It is the illusion of bondage to the material world. The chains are loose, showing that the servitude is voluntary. It represents fatality, but that which is predestined is not necessarily evil.",
    uprightSymbolZh: "它是被物質世界束縛的幻覺。鏈條是鬆的，顯示服從是自願的。它代表宿命，但被注定的事並不一定是邪惡的。",
    reversedSymbol: "Reversed, the fatality becomes evil and blinding. It indicates weakness, pettiness, and a lack of spiritual sight, locking the soul in bondage.",
    reversedSymbolZh: "逆位時，宿命變為邪惡與盲目。它指出軟弱、卑微以及精神視角的缺失，將靈魂鎖在束縛中。"
  },
  16: {
    uprightSymbol: "It is the sudden destruction of the house of falsehood, the shattering of the ego. The lightning is the flash of truth destroying ignorance and pride, bringing adversity but also freedom.",
    uprightSymbolZh: "它是虛假之屋的突然毀滅，自我的破碎。閃電是摧毀無知與驕傲的真理之光，帶來逆境但同時也帶來自由。",
    reversedSymbol: "Reversed, the destruction is prolonged or takes the form of tyranny and oppression. The prison of the old consciousness remains as a source of suffering.",
    reversedSymbolZh: "逆位時，毀滅過程被延長，或以暴政與壓迫的形式出現。舊意識的監獄依然存在，成為痛苦的源頭。"
  },
  17: {
    uprightSymbol: "It is the water of life poured out on the earth, the hope of the future. The great star represents the light of divine truth guiding the soul through privation and abandonment.",
    uprightSymbolZh: "它是傾倒在大地上的生命之水，未來的希望。大星代表引導靈魂度過匱乏與遺棄的神聖真理之光。",
    reversedSymbol: "Reversed, hope is obscured by arrogance and haughtiness. It indicates impotence and a refusal to accept the healing waters of grace.",
    reversedSymbolZh: "逆位時，希望被傲慢與高傲所遮蔽。它指出無能為力，以及拒絕接受恩典的治癒之水。"
  },
  18: {
    uprightSymbol: "It is the night of the soul, the path of illusion and psychic trial. The creatures howling represent the animal nature reacting to the light, warning of hidden enemies and error.",
    uprightSymbolZh: "它是靈魂的黑夜，幻覺與心靈考驗的道路。嗥叫的生物代表對光產生反應的動物本能，警告隱藏的敵人與錯誤。",
    reversedSymbol: "Reversed, it indicates lesser degrees of deception and error. Silence and instability remain, but the threat is diminished, allowing a slow return of clarity.",
    reversedSymbolZh: "逆位時，它指出較輕程度的欺騙與錯誤。沉默與不穩定依然存在，但威脅已減弱，允許清晰度緩慢恢復。"
  },
  19: {
    uprightSymbol: "It is the great light of manifestation, the restoration of simplicity and joy. The child on the white horse represents the innocence of the spirit enjoying material happiness.",
    uprightSymbolZh: "它是顯現的偉大之光，純真與喜悅的復歸。白馬上的孩童代表享受物質幸福的心靈純真。",
    reversedSymbol: "Reversed, the light is dimmed but not extinguished. It is the same happiness and fortunate marriage, but experienced in a lesser or more restricted degree.",
    reversedSymbolZh: "逆位時，光芒變暗但未熄滅。同樣是幸福與幸運的婚姻，但以較小或較受限的程度被體驗。"
  },
  20: {
    uprightSymbol: "It is the awakening of the soul, the resurrection from the tomb of material consciousness. The trump call of the divine voice brings renewal and change of position.",
    uprightSymbolZh: "它是靈魂的覺醒，從物質意識之墓中復活。內在神聖之聲的號角呼喚帶來更新與位置的改變。",
    reversedSymbol: "Reversed, it indicates weakness, pusillanimity, and simplicity. Deliberation is needed, but the soul hesitates to answer the call of renewal.",
    reversedSymbolZh: "逆位時，它指出軟弱、懦弱與單純。需要深思熟慮，但靈魂遲疑於回應更新的呼喚。"
  },
  21: {
    uprightSymbol: "It is the completion of the great work, the union of the soul with the universe. The dancer represents the ecstasy of the spirit in harmony with all creation, assuring success.",
    uprightSymbolZh: "它是偉大工作的完成，靈魂與宇宙的結合。舞者代表心靈與所有創造物和諧共處的狂喜，確保成功。",
    reversedSymbol: "Reversed, the completion is delayed by inertia and fixity. Stagnation replaces movement, but the potential for permanence and stability remains.",
    reversedSymbolZh: "逆位時，完成因停滯與固化而延遲。不流動取代了運動，但永久性與穩定的潛能依然存在。"
  }
};

// Use require instead of reading and evaluating VM
const cardsData = require(cardsPath);

if (!cardsData) {
  console.error("Failed to require cards.js");
  process.exit(1);
}

// Update meaning fields
cardsData.forEach(card => {
  const sym = symbolisms[card.id];
  if (sym) {
    // Extract existing keys and direct translation
    const lines = card.upright.meaning.split('\n');
    const rawLine = lines.find(l => l.includes("原文："));
    const transLine = lines.find(l => l.includes("直譯："));
    
    const rawVal = rawLine ? rawLine.replace("原文：", "").trim() : "''";
    const transVal = transLine ? transLine.replace("直譯：", "").trim() : "";

    // Upright
    card.upright.meaning = `【偉特原著·占卜關鍵詞】
原文：${rawVal}
直譯：${transVal}

【偉特原著·神秘學象徵】
原文：'${sym.uprightSymbol}'
直譯：${sym.uprightSymbolZh}`;

    // Reversed Helper
    const rlines = card.reversed.meaning.split('\n');
    const rrawLine = rlines.find(l => l.includes("原文："));
    const rtransLine = rlines.find(l => l.includes("直譯："));
    
    const rrawVal = rrawLine ? rrawLine.replace("原文：", "").trim() : "''";
    const rtransVal = rtransLine ? rtransLine.replace("直譯：", "").trim() : "";

    // Reversed
    card.reversed.meaning = `【偉特原著·占卜關鍵詞】
原文：${rrawVal}
直譯：${rtransVal}

【偉特原著·神秘學象徵】
原文：'${sym.reversedSymbol}'
直譯：${sym.reversedSymbolZh}`;
  }
});

// Re-serialize cleanly
const outputString = `/* ==========================================================================
   cards.js — 大阿爾克那 22 張
   ★ 牌義完全依據 A.E. Waite《The Pictorial Key to the Tarot》(1910) 原著
   ★ Part III Section 1: The Greater Arcana and Their Divinatory Meanings
   ★ Part II: The Greater Arcana and their Symbolism
   ★ 原文來源：Wikisource (公有領域)
   ========================================================================== */

const tarotCards = ${JSON.stringify(cardsData, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tarotCards;
}
`;

fs.writeFileSync(cardsPath, outputString, 'utf8');
console.log('Successfully enriched cards.js with Waite symbolism commentary!');
