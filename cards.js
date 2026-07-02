/* ==========================================================================
   cards.js — 大阿爾克那 22 張
   ★ 牌義完全依據 A.E. Waite《The Pictorial Key to the Tarot》(1910) 原著
   ★ Part III Section 1: The Greater Arcana and Their Divinatory Meanings
   ★ Part II: The Greater Arcana and their Symbolism
   ★ 原文來源：Wikisource (公有領域)
   ========================================================================== */

const tarotCards = [
  {
    "id": 0,
    "name": "愚者",
    "englishName": "The Fool",
    "number": "0",
    "element": "風・天王星",
    "icon": "🌬️",
    "suit": "major",
    "description": "【偉特原著·圖像】一名年輕人站在懸崖邊，手持白色玫瑰，肩背行囊，仰望天空。他衣著華美繡有花卉圖案，腳邊有一隻小狗跟隨。他渾然不覺腳下即是懸崖，神情輕鬆愉快，充滿對未知旅程的期待。",
    "keywords": [
      "愚拙",
      "狂亂",
      "揮霍",
      "沉醉",
      "錯亂",
      "狂熱",
      "背叛",
      "疏忽",
      "缺席",
      "冷漠",
      "空洞",
      "虛榮"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Folly, mania, extravagance, intoxication, delirium, frenzy, betrayal.'\n直譯：愚拙、狂亂、揮霍、陶醉、錯亂、狂熱、背叛。\n\n【偉特原著·神秘學象徵】\n原文：'The Fool is a seeker of experience, the soul in search of its own pathway. He is the prince of the other world on his travels through this one. The white rose represents the purity of the soul, and his little dog represents the animal nature on the spiritual journey.'\n直譯：愚者是經驗的尋求者，是尋找自身道路的靈魂。他是另一個世界的王子，在此世界中旅行。白玫瑰代表靈魂的純潔，他身邊的小狗代表精神旅程中的動物天性。",
      "love": "【依原著關鍵詞】感情中充滿衝動與不計後果的熱情（extravagance），可能陷入盲目的迷戀（intoxication）或錯亂的判斷（delirium），需防背叛（betrayal）。",
      "career": "【依原著關鍵詞】事業上行事魯莽（folly），缺乏規劃，可能因揮霍（extravagance）而損耗資源；需防狂熱投入卻方向錯誤（frenzy）。",
      "advice": "【偉特原著核心】此牌偉特首列「愚拙」（Folly）——警示魯莽與不計後果的行動，同時含有「背叛」，暗示可能受騙或自我欺騙。謹慎審視自身動機。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Negligence, absence, distribution, carelessness, apathy, nullity, vanity.'\n直譯：疏忽、缺席、散漫、粗心、冷漠、虛無、虛榮。\n\n【偉特原著·神秘學象徵】\n原文：'In the reverse state, the journey is stalled or misdirected. Carelessness and vanity cloud the spiritual potential, and the trust in the divine path degenerates into mere negligence.'\n直譯：在逆位狀態下，旅程停滯不前或迷失方向。粗心與虛榮遮蔽了精神潛能，對神聖道路的信任退化為純粹的疏忽。",
      "love": "【依原著關鍵詞】感情中表現出漠然（apathy）與缺席（absence），對關係疏於經營（negligence），或因虛榮（vanity）而無法真誠投入。",
      "career": "【依原著關鍵詞】工作上散漫（carelessness）、疏忽職守（negligence），缺乏實質成果（nullity），虛有其表（vanity）。",
      "advice": "【偉特原著核心】逆位強調「冷漠」（apathy）與「虛無」（nullity）——提醒勿因漫不經心而錯失時機，空洞的行動毫無意義。"
    }
  },
  {
    "id": 1,
    "name": "魔術師",
    "englishName": "The Magician",
    "number": "I",
    "element": "風・水星",
    "icon": "🪄",
    "suit": "major",
    "description": "【偉特原著·圖像】一名男子站於桌前，桌上陳列聖杯、權杖、寶劍、錢幣四件工具。他一手指天，一手指地，頭頂有無限大符號（∞），腰纏銜尾蛇，身後有玫瑰與百合花圃。",
    "keywords": [
      "技巧",
      "外交",
      "手腕",
      "機敏",
      "自信",
      "意志",
      "疾病",
      "損失",
      "災難"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.'\n直譯：技巧、外交手腕、靈巧、機敏；疾病、痛苦、損失、災難、敵人的陷阱；自信、意志力；若問事者為男性，此牌代表其本人。\n\n【偉特原著·神秘學象徵】\n原文：'The Magician shows the relation of the Divine and the human. 'As above, so below' is his great law. The divine power flows through the channel of his will into the physical plane. The tools on his table show he has mastered the four elements of manifest reality.'\n直譯：魔術師展示了神聖與人類的關係。「如其在上，如其在下」是他的偉大法則。神聖的力量透過他意志的通道流入物質層面。桌上的工具顯示他已掌握顯現現實中的四個元素。",
      "love": "【依原著關鍵詞】感情中展現自信（self-confidence）與吸引力（address），但需防機敏化為算計（subtlety），或對方設置陷阱（snares of enemies）。",
      "career": "【依原著關鍵詞】具備高度技巧（skill）與外交手腕（diplomacy），事業能力強，但偉特同時列出「損失、災難」，需防過度自信導致失誤。",
      "advice": "【偉特原著核心】偉特將「技巧與自信」和「疾病、損失、敵人陷阱」並列——提醒才能是雙刃劍，善用則成，濫用則禍。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Physician, Magus, mental disease, disgrace, disquiet.'\n直譯：醫師、魔法師、精神疾病、恥辱、不安。\n\n【偉特原著·神秘學象徵】\n原文：'The reversed Magician represents the physician or Magus turned towards selfish ends or mental disturbance. The will is disjointed, and the power is blocked or applied in a state of disquiet.'\n直譯：逆位的魔術師代表將能力轉向私利或面臨精神動盪的醫生或魔術師。意志支離破碎，力量受阻或處於不安狀態中。",
      "love": "【依原著關鍵詞】感情中出現不安（disquiet）與恥辱（disgrace），或對方心理狀態不穩定（mental disease），關係陷入混亂。",
      "career": "【依原著關鍵詞】逆位出現「恥辱」（disgrace）與「不安」（disquiet），才能未能正確發揮，可能面臨名譽損失。",
      "advice": "【偉特原著核心】逆位強調「精神疾病」（mental disease）與「恥辱」——警示心智的失序，需正視內在的不安與混亂。"
    }
  },
  {
    "id": 2,
    "name": "女祭司",
    "englishName": "The High Priestess",
    "number": "II",
    "element": "水・月亮",
    "icon": "🌙",
    "suit": "major",
    "description": "【偉特原著·圖像】一名女子端坐於兩根柱子（Boaz與Jachin）之間，手持卷軸（TORA），頭戴三重月冠，胸前有十字架，腳下月牙，身後有石榴紋帳幕。",
    "keywords": [
      "秘密",
      "神秘",
      "未來",
      "沉默",
      "堅韌",
      "隱秘",
      "智慧",
      "科學",
      "熱情",
      "自負"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if the latter be a man; the Querent herself, if the question come from a woman; silence, tenacity; mystery, the occult, the unknown. Also: wisdom, science.'\n直譯：秘密、神秘、尚未揭示的未來；若問事者為男性，代表令其心動的女性；若問事者為女性，代表其本人；沉默、堅韌；神秘、神秘學、未知。亦指：智慧、科學。\n\n【偉特原著·神秘學象徵】\n原文：'She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. The veil behind her represents the mysteries of nature and the subconscious, embroidered with palms and pomegranates.'\n直譯：她被稱為伊斯之聖所門檻上的神秘科學，但她其實是神秘教會，是神與人之家。她身後的面紗刺繡著棕櫚與石榴，代表自然與潛意識的奧秘。",
      "love": "【依原著關鍵詞】感情中充滿神秘（mystery）與未揭示的面紗，可能代表令人心儀的女性（woman who interests the Querent），關係需要沉默等待（silence）與耐心（tenacity）。",
      "career": "【依原著關鍵詞】工作上需依靠智慧（wisdom）與知識（science），事情尚未明朗（future as yet unrevealed），宜保持沉默觀察（silence）。",
      "advice": "【偉特原著核心】偉特強調「秘密與未揭示的未來」——此牌的核心是隱藏與等待，真相尚未到來，需以沉默與堅韌等候顯現。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Passion, moral or physical ardour, conceit, surface knowledge.'\n直譯：熱情、道德或肉體上的熱忱、自負、表面的知識。\n\n【偉特原著·神秘學象徵】\n原文：'When the High Priestess is reversed, the silent wisdom is replaced by surface knowledge and conceit. The ardour and passion of the physical world cloud the quiet waters of spiritual intuition.'\n直譯：當女祭司逆位時，沉靜的智慧被表面的知識與自負所取代。物質世界的熱情與激情遮蔽了精神直覺的平靜之水。",
      "love": "【依原著關鍵詞】感情中熱情（passion）強烈但流於表面，或因自負（conceit）而看不清對方真實面目。",
      "career": "【依原著關鍵詞】工作上僅有表面知識（surface knowledge），自以為是（conceit），缺乏真正的深度與洞察。",
      "advice": "【偉特原著核心】逆位的「表面知識」（surface knowledge）警示：熱忱若無深度支撐，只是自負的展現，無法觸及事物本質。"
    }
  },
  {
    "id": 3,
    "name": "女皇",
    "englishName": "The Empress",
    "number": "III",
    "element": "土・金星",
    "icon": "🌿",
    "suit": "major",
    "description": "【偉特原著·圖像】一名豐腴的女性坐於舒適的寶座，周圍有麥穗與石榴圖案，頭戴十二星冠，手持權杖，腳邊有心形金星符號盾牌，背景為茂密的森林與流水。",
    "keywords": [
      "豐饒",
      "行動",
      "主動",
      "長壽",
      "隱秘",
      "困難",
      "懷疑",
      "無知",
      "光明",
      "真理"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.'\n直譯：豐饒、行動、主動進取、長壽；未知、隱秘；亦指困難、懷疑、無知。\n\n【偉特原著·神秘學象徵】\n原文：'She is the universal Mother, the garden of Venus. She is the daughter of the sky and earth, representing fruitfulness and the gateway of life. Her twelve stars represent the zodiac and the cycle of nature.'\n直譯：她是宇宙之母，金星的花園。她是天空與大地之女，代表著豐饒與生命的門戶。她的十二顆星星代表黃道十二宮與大自然的循環。",
      "love": "【依原著關鍵詞】感情中充滿豐饒（fruitfulness）與滋養，關係積極主動（initiative），但偉特同時指出「隱秘」（clandestine），可能有不公開的面向。",
      "career": "【依原著關鍵詞】事業展現強大的行動力（action）與主動性（initiative），成果豐碩（fruitfulness），但需注意「困難與懷疑」並存。",
      "advice": "【偉特原著核心】偉特將「豐饒與主動」和「隱秘、困難、無知」並列——提醒外表的豐盛下可能隱藏著未知的挑戰，不可輕忽。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Light, truth, the unravelling of involved matters, public rejoicings; according to another account, vacillation.'\n直譯：光明、真理、複雜事務的解開、公開的歡騰；另一說法為：猶豫不決。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the flow of abundance is interrupted or becomes a source of vacillation. The light of truth is needed to unravel the involved matters, but doubt and hesitation may delay progress.'\n直譯：逆位時，豐盛的流動中斷，或成為猶豫不決的源頭。需要真理之光來解開複雜的事務，但懷疑與猶豫可能會延誤進展。",
      "love": "【依原著關鍵詞】感情中隱藏的真相（truth）浮現，複雜的狀況得以釐清（unravelling），但也可能因猶豫不決（vacillation）而延誤。",
      "career": "【依原著關鍵詞】工作上複雜的局勢開始明朗（light），事情真相大白（truth），但需防優柔寡斷（vacillation）。",
      "advice": "【偉特原著核心】逆位的「光明與真理」帶來正面轉機——複雜的事務終將解開，但「猶豫不決」提醒要果斷把握時機。"
    }
  },
  {
    "id": 4,
    "name": "皇帝",
    "englishName": "The Emperor",
    "number": "IV",
    "element": "火・牡羊座",
    "icon": "👑",
    "suit": "major",
    "description": "【偉特原著·圖像】一名威嚴男子端坐於石製寶座，寶座扶手飾有公羊頭（牡羊座象徵），手持十字形權杖與圓球，身穿紅袍，腳穿鎧甲，背景為荒蕪的山岳。",
    "keywords": [
      "穩定",
      "權力",
      "保護",
      "邏輯",
      "實現",
      "權威",
      "意志",
      "仁慈",
      "憐憫",
      "混亂"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Stability, power, protection, logic, realisation; a great person; aid, reason, conviction; also authority and will.'\n直譯：穩定、權力、保護、邏輯、實現；偉大人物；援助、理性、信念；亦指權威與意志力。\n\n【偉特原著·神秘學象徵】\n原文：'He is the executive power of the world, the logic of governance and rule. He represents the active power of the universe stabilizing the material plane, bringing order out of chaos through authority and conviction.'\n直譯：他是世界的執行權力，治理與規則的邏輯。他代表著宇宙穩定物質層面的能動力量，透過權威與信念從混亂中建立秩序。",
      "love": "【依原著關鍵詞】感情中提供穩定（stability）與保護（protection），如父親般的守護；關係建立在理性（logic）與信念（conviction）之上。",
      "career": "【依原著關鍵詞】事業上擁有權威（authority）與實現目標的能力（realisation），得到有力人士的援助（aid），邏輯清晰（logic）。",
      "advice": "【偉特原著核心】偉特強調「穩定與實現」——皇帝代表將意志化為現實的力量，以理性（logic）和信念（conviction）構築穩固基礎。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.'\n直譯：仁慈、憐憫、信用；亦指令敵人混亂、阻礙、不成熟。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the ruler's stability turns into obstruction or immaturity. While benevolence and compassion may manifest, there is confusion to enemies and lack of structured control.'\n直譯：逆位時，統治者的穩定轉為阻礙或不成熟。雖然可能展現出仁慈與同情，但存在敵人的混亂以及缺乏結構性的控制。",
      "love": "【依原著關鍵詞】感情中可能表現出仁慈（benevolence）與憐憫（compassion），但也可能陷入不成熟（immaturity）或造成阻礙（obstruction）。",
      "career": "【依原著關鍵詞】工作上出現阻礙（obstruction）與不成熟的判斷（immaturity），但信用（credit）尚存；對手陷入混亂（confusion to enemies）。",
      "advice": "【偉特原著核心】逆位的「不成熟」（immaturity）警示：仁慈若缺乏成熟的判斷力支撐，可能成為軟弱的表現而非美德。"
    }
  },
  {
    "id": 5,
    "name": "教皇",
    "englishName": "The Hierophant",
    "number": "V",
    "element": "土・金牛座",
    "icon": "⛪",
    "suit": "major",
    "description": "【偉特原著·圖像】一名宗教領袖坐於兩根柱子之間，頭戴三重冠，手持三重十字杖，面前跪有兩名信徒。他以右手作出祝福手勢，腳前有兩把交叉的鑰匙。",
    "keywords": [
      "婚姻",
      "聯盟",
      "囚禁",
      "奴役",
      "慈悲",
      "善良",
      "靈感",
      "社會",
      "和諧",
      "軟弱"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.'\n直譯：婚姻、聯盟、囚禁、奴役；另一說法：慈悲與善良；靈感；問事者所依靠求助的人。\n\n【偉特原著·神秘學象徵】\n原文：'He is the ruling power of external religion, the channel of grace and divine guidance in the outer world. He holds the keys of the mysteries and teaches the alliance of souls under institutional law.'\n直譯：他是外在宗教的統治權力，外在世界恩典與神聖引導的通道。他持有奧秘的鑰匙，並教授制度法之下靈魂的結盟。",
      "love": "【依原著關鍵詞】感情中指向正式的婚姻（marriage）與聯盟（alliance），但偉特同時指出「囚禁與奴役」，暗示關係可能有束縛的一面。",
      "career": "【依原著關鍵詞】工作上代表傳統體制、導師或依靠的對象（man to whom the Querent has recourse），受傳統體制的靈感（inspiration）指引。",
      "advice": "【偉特原著核心】偉特將「婚姻、聯盟」與「囚禁、奴役」並置——提醒體制與傳統既給予依靠，也帶來約束，需清醒看待歸屬的代價。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Society, good understanding, concord, over-kindness, weakness.'\n直譯：社會、良好的理解、和諧、過度的親切、軟弱。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the institutions crumble into weakness. Society and concord remain, but they are weakened by over-kindness and lack of spiritual authority.'\n直譯：逆位時，體制崩解為軟弱。社會與和諧依然存在，但因過度仁慈和缺乏精神權威而被削弱。",
      "love": "【依原著關鍵詞】感情中表面和諧（concord）但可能流於過度遷就（over-kindness），或因軟弱（weakness）而無法維持清晰的界線。",
      "career": "【依原著關鍵詞】工作環境和諧融洽（good understanding），但可能因過度仁慈（over-kindness）而顯得缺乏原則（weakness）。",
      "advice": "【偉特原著核心】逆位的「軟弱」（weakness）警示：過度的親切善良若缺乏原則，可能演變為無力的妥協，失去應有的尊重。"
    }
  },
  {
    "id": 6,
    "name": "戀人",
    "englishName": "The Lovers",
    "number": "VI",
    "element": "風・雙子座",
    "icon": "💕",
    "suit": "major",
    "description": "【偉特原著·圖像】一男一女（亞當與夏娃）裸身站立，男子望向女子，女子仰望天使（拉斐爾）。背景中男子身後有火焰之樹，女子身後有知識之樹（蛇纏繞其上），遠方有山嶽。",
    "keywords": [
      "吸引",
      "愛",
      "美麗",
      "試煉",
      "失敗",
      "愚蠢",
      "挫折"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Attraction, love, beauty, trials overcome.'\n直譯：吸引、愛、美麗、克服考驗。\n\n【偉特原著·神秘學象徵】\n原文：'This is the card of human love, but spiritually it is the union of the soul with the divine. The angel Raphael pours down the light of superconscious realization, indicating the choice between the higher and lower paths.'\n直譯：這是人類之愛的牌，但在精神上，它是靈魂與神聖的結合。天使拉斐爾傾注超意識覺醒的光芒，指示高低道路之間的選擇。",
      "love": "【依原著關鍵詞】感情中充滿真實的吸引（attraction）與愛（love），關係因美麗（beauty）而動人，且能共同克服考驗（trials overcome）。",
      "career": "【依原著關鍵詞】工作上需要做出重要選擇（attraction意味著被吸引的方向），克服障礙（trials overcome）後方能成功。",
      "advice": "【偉特原著核心】偉特的「克服考驗」（trials overcome）是此牌的關鍵——真正的愛與選擇必須經歷試煉方能確立，輕易得到的未必珍貴。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.'\n直譯：失敗、愚蠢的計劃。另一說法：婚姻受阻及各種對立。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the union is fractured, leading to failure and foolish designs. Frustrated marriage projects and contrarieties of all kinds indicate disharmony of values.'\n直譯：逆位時，結合破裂，導致失敗與愚蠢的計劃。婚姻計劃受挫以及各種對立，暗示價值觀的不和諧。",
      "love": "【依原著關鍵詞】感情中遭遇婚姻受阻（marriage frustrated）、各種對立（contrarieties），計劃愚蠢（foolish designs）導致失敗（failure）。",
      "career": "【依原著關鍵詞】工作上計劃不切實際（foolish designs），執行失敗（failure），遇到諸多阻礙（contrarieties）。",
      "advice": "【偉特原著核心】逆位的「愚蠢的計劃」（foolish designs）——提醒在做重大決定前需冷靜評估，衝動的選擇往往導致各種對立與挫敗。"
    }
  },
  {
    "id": 7,
    "name": "戰車",
    "englishName": "The Chariot",
    "number": "VII",
    "element": "水・巨蟹座",
    "icon": "🏆",
    "suit": "major",
    "description": "【偉特原著·圖像】一名身著鎧甲的年輕戰士乘坐戰車，車前有兩隻不同顏色（黑白）的獅身人面獸（sphinx）拉車，他手持星形王杖，頭戴月冠，戰車本身無繩索駕馭。",
    "keywords": [
      "援助",
      "天命",
      "戰爭",
      "勝利",
      "傲慢",
      "復仇",
      "麻煩",
      "暴動",
      "爭吵",
      "失敗"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Succour, providence also war, triumph, presumption, vengeance, trouble.'\n直譯：援助、天意，以及戰爭、勝利、傲慢、復仇、麻煩。\n\n【偉特原著·神秘學象徵】\n原文：'He is the conqueror on the plane of material intellect, who controls the sphinxes of opposing desires by the power of his will. He represents triumph, but warns of presumption and vengeance.'\n直譯：他是物質理智層面上的征服者，以意志的力量控制著對立慾望的獅身人面獸。他代表勝利，但警告傲慢與復仇的危險。",
      "love": "【依原著關鍵詞】感情中充滿征服的熱情（triumph），但傲慢（presumption）與復仇（vengeance）的傾向可能帶來麻煩（trouble）。",
      "career": "【依原著關鍵詞】事業上展現勝利（triumph）與征服的氣魄，但偉特同時列出「傲慢與麻煩」，需防因自大而引發問題。",
      "advice": "【偉特原著核心】偉特將「援助與天意」和「傲慢、復仇」並列——勝利者需謹防驕兵必敗，天命的援助是雙向的，亦含有試煉。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Riot, quarrel, dispute, litigation, defeat.'\n直譯：暴動、爭吵、糾紛、訴訟、失敗。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the control is lost. The chariot is overthrown, leading to riot, quarrel, litigation, and ultimate defeat on the physical plane.'\n直譯：逆位時，控制力喪失。戰車傾覆，導致暴動、爭吵、訴訟以及世俗層面的最終失敗。",
      "love": "【依原著關鍵詞】感情中爆發爭吵（quarrel）與激烈衝突（riot），關係陷入糾紛（dispute），甚至對簿公堂（litigation）。",
      "career": "【依原著關鍵詞】工作上失敗（defeat），糾紛（dispute）與訴訟（litigation）纏身，事業計劃遭到嚴重破壞。",
      "advice": "【偉特原著核心】逆位清晰列出「失敗」（defeat）——強制性的控制若失效，一切便會陷入暴動與紛爭，需以謙遜代替強硬。"
    }
  },
  {
    "id": 8,
    "name": "力量",
    "englishName": "Strength",
    "number": "VIII",
    "element": "火・獅子座",
    "icon": "🦁",
    "suit": "major",
    "description": "【偉特原著·圖像】一名白衣女子輕柔地撫摸並合攏一頭獅子的嘴，她頭戴花冠，腰間有花環，頭頂有無限大符號（∞），背景是遠山與平原。",
    "keywords": [
      "力量",
      "能量",
      "行動",
      "勇氣",
      "寬宏",
      "成功",
      "榮耀",
      "專制",
      "濫權",
      "軟弱",
      "不和"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Power, energy, action, courage, magnanimity; also complete success and honours.'\n直譯：力量、能量、行動、勇氣、寬宏大量；亦指完全的成功與榮耀。\n\n【偉特原著·神秘學象徵】\n原文：'This is the power of love and spiritual courage overcoming the animal nature. She tames the lion not by violence, but by gentleness. She represents complete success and honours through inner magnanimity.'\n直譯：這是愛與精神勇氣克服動物本能的力量。她不是以暴力，而是以溫柔馴服獅子。她代表透過內在的寬宏大量獲得完全的成功與榮譽。",
      "love": "【依原著關鍵詞】感情中以溫柔的力量（power）與寬宏（magnanimity）化解衝突，充滿勇氣（courage）去面對關係中的挑戰，帶來完全的成功（complete success）。",
      "career": "【依原著關鍵詞】事業上充滿能量（energy）與行動力（action），以勇氣（courage）克服障礙，獲得完全的成功與榮耀（honours）。",
      "advice": "【偉特原著核心】偉特的「寬宏大量」（magnanimity）是此牌精髓——真正的力量不在強制，而在以柔克剛，以愛馴服野性。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Despotism, abuse of power, weakness, discord, sometimes even disgrace.'\n直譯：專制、濫用權力、軟弱、不和，有時甚至是恥辱。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the inner balance is disrupted, leading either to weakness and discord, or to despotism and the abuse of power, which results in disgrace.'\n直譯：逆位時，內在平衡被破壞，要麼導致軟弱與不和，要麼導致專制與濫用權力，最終引來恥辱。",
      "love": "【依原著關鍵詞】感情中出現控制欲（despotism）與濫權（abuse of power），或反之極度軟弱（weakness），導致關係不和（discord）。",
      "career": "【依原著關鍵詞】工作上濫用職權（abuse of power）或因軟弱（weakness）而無法推進，引發不和（discord），甚至蒙受恥辱（disgrace）。",
      "advice": "【偉特原著核心】逆位的「專制」（despotism）警示：失控的力量不是力量，只是恐懼的偽裝，終將導致恥辱與瓦解。"
    }
  },
  {
    "id": 9,
    "name": "隱士",
    "englishName": "The Hermit",
    "number": "IX",
    "element": "土・處女座",
    "icon": "🏔️",
    "suit": "major",
    "description": "【偉特原著·圖像】一名老者身披灰袍，獨自站立於雪山頂峰，右手高舉提燈（燈中有六芒星），左手持長杖，神情沉靜，望向遠方黑暗。",
    "keywords": [
      "謹慎",
      "周密",
      "背叛",
      "偽裝",
      "無賴",
      "腐敗",
      "隱藏",
      "偽裝",
      "恐懼"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.'\n直譯：謹慎、深思熟慮；尤其是背叛、偽裝、無賴行徑、腐敗。\n\n【偉特原著·神秘學象徵】\n原文：'He is the beacon of truth, holding the light of the divine science to guide those who seek. The path of self-knowledge and silent contemplation is his domain, though he warns of treason and corruption in the outer world.'\n直譯：他是真理的燈塔，手持神聖科學之光引導尋求者。自我認識與默觀的道路是他的領域，儘管他警告外在世界有背叛與腐敗的危險。",
      "love": "【依原著關鍵詞】感情中需要謹慎（prudence）與深思（circumspection），但偉特特別強調「背叛與偽裝」——關係中可能存在欺騙或不誠實。",
      "career": "【依原著關鍵詞】工作上謹慎行事（prudence），但偉特明確指出「腐敗」（corruption）與「無賴行徑」（roguery）的危險，需警惕職場中的不正之風。",
      "advice": "【偉特原著核心】偉特特別強調「尤其是背叛、偽裝」——隱士的孤獨探索可能揭示黑暗，需以智慧辨別真實與偽裝。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Concealment, disguise, policy, fear, unreasoned caution.'\n直譯：隱藏、偽裝、政策性手段、恐懼、無謂的謹慎。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the search turns inward to fear and unreasoned caution. Concealment and disguise replace truth, indicating a refusal to face the light.'\n直譯：逆位時，探索轉為內在的恐懼與無端的謹慎。隱藏與裝扮取代了真理，暗示拒絕面對光明。",
      "love": "【依原著關鍵詞】感情中刻意隱藏（concealment）真實感受，以偽裝（disguise）面對對方，或因恐懼（fear）而無法坦誠。",
      "career": "【依原著關鍵詞】工作上採取迂迴的政策（policy），過度謹慎（unreasoned caution）反而阻礙進展，藏於幕後。",
      "advice": "【偉特原著核心】逆位的「無謂的謹慎」（unreasoned caution）——恐懼驅使的隱藏不是智慧，是逃避，需勇於面對光明。"
    }
  },
  {
    "id": 10,
    "name": "命運之輪",
    "englishName": "Wheel of Fortune",
    "number": "X",
    "element": "火・木星",
    "icon": "☸️",
    "suit": "major",
    "description": "【偉特原著·圖像】一個巨大的輪子懸浮於雲中，輪上有蛇（下降的Typhon）、阿努比斯（上升）和獅身人面獸（頂部）。四角有四個帶翼生物（天使、鷹、牛、獅），各自讀書，象徵四聖獸。",
    "keywords": [
      "命運",
      "財富",
      "成功",
      "上升",
      "幸運",
      "幸福",
      "增加",
      "豐盛",
      "多餘"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Destiny, fortune, success, elevation, luck, felicity.'\n直譯：命運、財富、成功、上升、幸運、幸福。\n\n【偉特原著·神秘學象徵】\n原文：'It represents the cycle of destiny, the ascent and descent of souls. The sphinx at the top represents the silent equilibrium of the universe amidst the turning of fortune's wheel.'\n直譯：它代表命運的循環，靈魂的上升與下降。頂部的人面獅身獸代表命運之輪旋轉中，宇宙寂靜的平衡狀態。",
      "love": "【依原著關鍵詞】感情中命運（destiny）的轉機到來，幸運（luck）帶來新的機遇，關係迎來上升（elevation）的時期，充滿幸福（felicity）。",
      "career": "【依原著關鍵詞】事業迎來命運的轉機（destiny），成功（success）與上升（elevation）的時機已到，財富（fortune）隨之而來。",
      "advice": "【偉特原著核心】偉特的「命運」（Destiny）居首——命運之輪轉動不由個人意志控制，幸運到來時需把握，下降時需耐心等待。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Increase, abundance, superfluity.'\n直譯：增加、豐盛、過剩。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the wheel brings increase, abundance, and superfluity. It indicates that the material forces are overflowing, but warning of the instability of excess.'\n直譯：逆位時，輪子帶來增加、豐盛與過剩。它指出物質力量正在溢出，但警告過度所帶來的不穩定。",
      "love": "【依原著關鍵詞】感情中物質層面豐盛（abundance），但可能過度（superfluity）而失去平衡，或沉溺於過多的選擇中無法決斷。",
      "career": "【依原著關鍵詞】工作上物質增加（increase）、豐盛（abundance），但過剩（superfluity）暗示可能失控或浪費。",
      "advice": "【偉特原著核心】逆位的「過剩」（superfluity）——豐盛本身不是問題，但超過所需的過度積累可能成為負擔。"
    }
  },
  {
    "id": 11,
    "name": "正義",
    "englishName": "Justice",
    "number": "XI",
    "element": "風・天秤座",
    "icon": "⚖️",
    "suit": "major",
    "description": "【偉特原著·圖像】一名女子端坐於兩根柱子之間的寶座上，右手持雙刃劍（筆直豎立），左手持天平，頭戴金冠，身著紅袍，神情嚴肅公正。",
    "keywords": [
      "公平",
      "正直",
      "廉潔",
      "行政",
      "法律",
      "勝訴",
      "法律複雜",
      "偏見",
      "嚴苛"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Equity, rightness, probity, executive; triumph of the deserving side in law.'\n直譯：公平、正確、廉潔、執行力；法律上應得一方的勝利。\n\n【偉特原著·神秘學象徵】\n原文：'It is the law of karma and equilibrium in the manifest world. She holds the sword of executive justice and the scales of balance, ensuring the triumph of the deserving side.'\n直譯：它是顯現世界中業力與平衡的法則。她手持執行正義之劍與平衡的天平，確保值得勝訴的一方獲得勝利。",
      "love": "【依原著關鍵詞】感情中需要公平（equity）與正直（rightness），關係中應得的一方將獲得公正的結果（triumph of the deserving side）。",
      "career": "【依原著關鍵詞】工作上廉潔正直（probity），執行力強（executive），法律事務上占有優勢（triumph of the deserving side in law）。",
      "advice": "【偉特原著核心】偉特強調「應得一方的勝利」——正義並非總是溫柔的，它精確地給予每人所應得，公正必然伴隨著嚴格的衡量。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Law in all its departments, legal complications, bigotry, bias, excessive severity.'\n直譯：法律的各個層面、法律複雜性、偏執、偏見、過度嚴厲。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it indicates bias, legal complications, and bigotry. The law is applied with excessive severity or is entangled in procedural confusion.'\n直譯：逆位時，它指出偏見、法律糾紛與偏執。法律的執行過度嚴苛，或糾纏於程序混亂中。",
      "love": "【依原著關鍵詞】感情中出現偏見（bias）與過度嚴苛（excessive severity），關係因偏執（bigotry）而陷入不公平的評判。",
      "career": "【依原著關鍵詞】工作上法律糾紛複雜化（legal complications），偏見（bias）影響決策，執行上過於嚴苛（excessive severity）。",
      "advice": "【偉特原著核心】逆位的「偏執」（bigotry）——法律的形式若被偏見扭曲，便失去公正的靈魂，成為壓迫的工具。"
    }
  },
  {
    "id": 12,
    "name": "倒吊人",
    "englishName": "The Hanged Man",
    "number": "XII",
    "element": "水・海王星",
    "icon": "🔄",
    "suit": "major",
    "description": "【偉特原著·圖像】一名男子以右腳倒掛於T形木架上，左腳彎曲形成十字形，雙手置於背後，頭部周圍散發金色光環，神情安詳，毫無痛苦之色。",
    "keywords": [
      "智慧",
      "周密",
      "辨別",
      "試煉",
      "犧牲",
      "直覺",
      "占卜",
      "預言",
      "自私",
      "群眾"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.'\n直譯：智慧、審慎周密、辨別力、試煉、犧牲、直覺、占卜、預言。\n\n【偉特原著·神秘學象徵】\n原文：'It is the card of suspension, sacrifice, and the great reversal of values. His face is serene, representing the soul awaiting illumination through voluntary sacrifice.'\n直譯：它是暫停、犧牲與價值觀大反轉之牌。他的神情安詳，代表靈魂透過自願的犧牲等待啟蒙。",
      "love": "【依原著關鍵詞】感情中需要犧牲（sacrifice）與以不同視角審視（circumspection），通過試煉（trials）的磨礪，直覺（intuition）引導正確方向。",
      "career": "【依原著關鍵詞】工作上需要暫停與反思（circumspection），以智慧（wisdom）與辨別力（discernment）看透事物的本質，接受必要的犧牲。",
      "advice": "【偉特原著核心】偉特列出「直覺、占卜、預言」——倒吊人的暫停是主動的覺知，透過犧牲自我的固有視角，獲得更高的洞見。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Selfishness, the crowd, body politic.'\n直譯：自私、群眾、政治體制。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it indicates a preoccupation with the material crowd and body politic. The sacrifice is resisted, leading to selfishness and stagnation.'\n直譯：逆位時，它指出對物質群眾與世俗政治的執著。拒絕犧牲，導致自私與停滯不前。",
      "love": "【依原著關鍵詞】感情中以自私（selfishness）為優先，無法做出真正的犧牲，陷入世俗群眾（the crowd）的眼光與壓力中。",
      "career": "【依原著關鍵詞】工作上受制於體制（body politic）與群眾期望（the crowd），自私（selfishness）使人無法做出正確的策略性犧牲。",
      "advice": "【偉特原著核心】逆位的「自私」（selfishness）——拒絕犧牲、執著於自我利益，使人困陷於群眾的浪潮中，失去獨特的洞見。"
    }
  },
  {
    "id": 13,
    "name": "死神",
    "englishName": "Death",
    "number": "XIII",
    "element": "水・天蠍座",
    "icon": "💀",
    "suit": "major",
    "description": "【偉特原著·圖像】骷髏騎士身著黑色鎧甲，騎白馬，手持黑色旗幟（白色玫瑰圖案）。腳下有倒下的國王、哀求的主教，一個少女昏倒，一個孩童獻上花朵。遠方太陽在兩塔之間升起或落下。",
    "keywords": [
      "終結",
      "死亡",
      "毀滅",
      "腐敗",
      "損失",
      "失敗",
      "遲滯",
      "嗜睡",
      "麻木"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'End, mortality, destruction, corruption; also, for a man, the loss of a benefactor; for a woman, many contrarieties; for a maid, failure of marriage projects.'\n直譯：終結、死亡（必死性）、毀滅、腐敗；對男性而言，失去贊助者；對女性而言，諸多對立；對未婚女子而言，婚姻計劃失敗。\n\n【偉特原著·神秘學象徵】\n原文：'It is the great transition, the clearing of the old to make way for the new. The sun rising between the towers represents the promise of spiritual resurrection beyond mortality.'\n直譯：它是偉大的過渡，清除舊有以迎接新生。雙塔之間升起的太陽代表死亡之外精神復活的承諾。",
      "love": "【依原著關鍵詞】偉特明確指出：對女性而言是「諸多對立」，對未婚女子是「婚姻計劃失敗」——感情中舊有關係的終結（end），迫使面對根本性的轉變。",
      "career": "【依原著關鍵詞】事業上的終結（end）與毀滅（destruction），對男性而言失去重要贊助者或靠山（loss of a benefactor），事業結構性的腐敗（corruption）。",
      "advice": "【偉特原著核心】偉特以「終結」（End）居首——死神牌代表不可避免的結束，對不同人有具體不同的含義，接受終結是轉化的前提。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.'\n直譯：遲滯、沉睡、無精打采、石化、夢遊；希望被摧毀。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it indicates inertia, sleep, and lethargy. The transition is blocked, leading to petrifaction, somnambulism, and hope destroyed.'\n直譯：逆位時，它指出停滯、沉睡與昏沉。過渡被阻礙，導致石化、夢遊以及希望的毀滅。",
      "love": "【依原著關鍵詞】感情中陷入遲滯（inertia）與麻木（lethargy），如石化（petrifaction）般無法前進，「希望被摧毀」（hope destroyed）是最沉重的逆位警示。",
      "career": "【依原著關鍵詞】工作上停滯不前（inertia），如夢遊（somnambulism）般無意識地重複，希望被摧毀（hope destroyed），缺乏改變的動力。",
      "advice": "【偉特原著核心】逆位最終以「希望被摧毀」收尾——這是偉特最嚴峻的警示之一，石化的狀態比死亡更難處理，因為它拒絕任何轉化。"
    }
  },
  {
    "id": 14,
    "name": "節制",
    "englishName": "Temperance",
    "number": "XIV",
    "element": "火・射手座",
    "icon": "🏺",
    "suit": "major",
    "description": "【偉特原著·圖像】一位有翼天使（一腳在地，一腳在水中），手持兩個聖杯並將液體從一杯倒入另一杯。天使頭上有陽光，胸前有太陽三角符號，遠方有山峰與皇冠（道路通向光明）。",
    "keywords": [
      "節約",
      "節制",
      "儉樸",
      "管理",
      "適應",
      "教會",
      "宗教",
      "教派"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Economy, moderation, frugality, management, accommodation.'\n直譯：節約、節制、儉樸、管理、適應調和。\n\n【偉特原著·神秘學象徵】\n原文：'It represents the blending and tempering of forces, the golden mean. The angel pours the waters of life between the physical and spiritual realms, showing perfect management.'\n直譯：它代表力量 of forces，中庸之道。天使在物質與精神領域之間傾倒生命之水，展現出完美的管理。",
      "love": "【依原著關鍵詞】感情中需要節制（moderation）與適應（accommodation），雙方在溝通與相處上互相調整（management），不過度也不不足。",
      "career": "【依原著關鍵詞】工作上以節約（economy）與管理（management）為原則，儉樸（frugality）地運用資源，靈活適應（accommodation）各種情況。",
      "advice": "【偉特原著核心】偉特的「節約」（Economy）與「適應調和」（accommodation）——節制不是壓抑，而是精確地流動，一切恰到好處。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Things connected with churches, religions, sects, the priesthood, sometimes the reverse of these.'\n直譯：與教會、宗教、教派、神職人員相關的事務，有時是這些事物的反面。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it connects with religious structures and sects. It may show a reversion to outer dogma or the reverse of spiritual balance, leading to conflict.'\n直譯：逆位時，它與宗教機構和派系相關聯。它可能顯示向外在教條的倒退，或精神平衡的反轉，從而導致衝突。",
      "love": "【依原著關鍵詞】感情中受宗教或傳統觀念（religions, sects）影響，可能是宗教婚姻或相關的道德約束，亦或是對這些的背離。",
      "career": "【依原著關鍵詞】工作上與宗教機構、教會（churches）相關的事務，或在某些情況下是這些機構的對立面（the reverse）。",
      "advice": "【偉特原著核心】逆位的「教會與宗教」——偉特的描述相當特殊，指向制度性宗教的影響，需辨別是受益於傳統還是受其束縛。"
    }
  },
  {
    "id": 15,
    "name": "惡魔",
    "englishName": "The Devil",
    "number": "XV",
    "element": "土・摩羯座",
    "icon": "😈",
    "suit": "major",
    "description": "【偉特原著·圖像】半人半獸的惡魔（Baphomet）坐於黑色方形台座，頭生山羊角，蝙蝠翅膀，右手向上（手掌顯示土星符號），左手持火炬朝下。台座前有一男一女（與戀人牌相似但長了角）以鬆散鎖鏈相連。",
    "keywords": [
      "蹂躪",
      "暴力",
      "猛烈",
      "非凡努力",
      "力量",
      "命定",
      "邪惡",
      "軟弱",
      "渺小",
      "盲目"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.'\n直譯：蹂躪、暴力、猛烈、非凡的努力、力量、命定性；命中注定的事物，但這並不因此而邪惡。\n\n【偉特原著·神秘學象徵】\n原文：'It is the illusion of bondage to the material world. The chains are loose, showing that the servitude is voluntary. It represents fatality, but that which is predestined is not necessarily evil.'\n直譯：它是被物質世界束縛的幻覺。鏈條是鬆的，顯示服從是自願的。它代表宿命，但被注定的事並不一定是邪惡的。",
      "love": "【依原著關鍵詞】感情中充滿強烈的激情（vehemence）與束縛，但偉特特別指出「命定但不因此邪惡」——強烈的吸引力可能是命定的，不必全然以負面視之。",
      "career": "【依原著關鍵詞】工作上需要非凡的努力（extraordinary efforts）與強大的力量（force），可能面臨蹂躪（ravage），但命定性（fatality）帶來某種必然的推動力。",
      "advice": "【偉特原著核心】偉特特意說明「命定但不因此邪惡」——惡魔代表強大的必然力量，關鍵在於如何與之共處，而非單純的善惡評判。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Evil fatality, weakness, pettiness, blindness.'\n直譯：邪惡的命運、軟弱、渺小、盲目。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the fatality becomes evil and blinding. It indicates weakness, pettiness, and a lack of spiritual sight, locking the soul in bondage.'\n直譯：逆位時，宿命變為邪惡與盲目。它指出軟弱、卑微以及精神視角的缺失，將靈魂鎖在束縛中。",
      "love": "【依原著關鍵詞】感情中陷入邪惡的命運（evil fatality），軟弱（weakness）而無法掙脫束縛，盲目（blindness）地繼續有害的關係。",
      "career": "【依原著關鍵詞】工作上遭遇邪惡的命定阻礙（evil fatality），行為渺小（pettiness），視野盲目（blindness），軟弱（weakness）而無法突破。",
      "advice": "【偉特原著核心】逆位的「盲目」（blindness）——不再命定，而是自我選擇的盲目，渺小的軟弱使人繼續受困，需鼓起勇氣正視現實。"
    }
  },
  {
    "id": 16,
    "name": "塔",
    "englishName": "The Tower",
    "number": "XVI",
    "element": "火・火星",
    "icon": "⚡",
    "suit": "major",
    "description": "【偉特原著·圖像】一座高塔被閃電擊中，頂部的王冠被炸飛，兩個人物從塔中飛墜而下，周圍有二十二個（或二十二個）火焰降落（象徵希伯來字母）。塔建於岩石之上，海浪洶湧。",
    "keywords": [
      "苦難",
      "困苦",
      "貧困",
      "逆境",
      "災難",
      "恥辱",
      "欺騙",
      "毀滅",
      "壓迫",
      "監禁",
      "暴政"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin.'\n直譯：悲慘、困苦、貧困、逆境、災難、恥辱、欺騙、毀滅。\n\n【偉特原著·神秘學象徵】\n原文：'It is the sudden destruction of the house of falsehood, the shattering of the ego. The lightning is the flash of truth destroying ignorance and pride, bringing adversity but also freedom.'\n直譯：它是虛假之屋的突然毀滅，自我的破碎。閃電是摧毀無知與驕傲的真理之光，帶來逆境但同時也帶來自由。",
      "love": "【依原著關鍵詞】感情中遭受災難性的衝擊（calamity），欺騙（deception）曝光，關係遭受毀滅性打擊（ruin），恥辱（disgrace）相隨。",
      "career": "【依原著關鍵詞】事業上遭受嚴重的逆境（adversity）與毀滅（ruin），可能因欺騙（deception）而陷入災難（calamity），一切既有基礎瓦解。",
      "advice": "【偉特原著核心】偉特以「欺騙」（deception）列入正位——塔牌的衝擊往往揭示之前被隱藏的欺騙，閃電是殘酷的真相，毀滅是更新的代價。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'According to one account, the same in a lesser degree; also oppression, imprisonment, tyranny.'\n直譯：據一說，程度較輕的相同含義；亦指壓迫、監禁、暴政。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the destruction is prolonged or takes the form of tyranny and oppression. The prison of the old consciousness remains as a source of suffering.'\n直譯：逆位時，毀滅過程被延長，或以暴政與壓迫的形式出現。舊意識的監獄依然存在，成為痛苦的源頭。",
      "love": "【依原著關鍵詞】感情中感受到壓迫（oppression）與監禁般的束縛（imprisonment），關係中存在暴政（tyranny）的控制模式，破壞力雖較小但持久。",
      "career": "【依原著關鍵詞】工作上受到壓迫（oppression）與體制暴政（tyranny），困於監禁般的環境（imprisonment），較正位程度輕但持續折磨。",
      "advice": "【偉特原著核心】逆位增加「暴政」（tyranny）——比突發的災難更難忍受的，是長期的壓迫與監禁，這是一種緩慢的毀滅。"
    }
  },
  {
    "id": 17,
    "name": "星星",
    "englishName": "The Star",
    "number": "XVII",
    "element": "風・水瓶座",
    "icon": "⭐",
    "suit": "major",
    "description": "【偉特原著·圖像】一名裸女跪於水邊，左手持一個水罐倒水入池，右手持另一個水罐將水倒在地上。天空中有一顆大八角星，周圍有七顆小八角星。背景有一棵樹，樹上有鷹（或朱鷺）。",
    "keywords": [
      "損失",
      "失竊",
      "剝奪",
      "遺棄",
      "希望",
      "光明前景",
      "傲慢",
      "狂妄",
      "無力"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Loss, theft, privation, abandonment; another reading says—hope and bright prospects.'\n直譯：損失、失竊、剝奪、遺棄；另一說法：希望與光明的前景。\n\n【偉特原著·神秘學象徵】\n原文：'It is the water of life poured out on the earth, the hope of the future. The great star represents the light of divine truth guiding the soul through privation and abandonment.'\n直譯：它是傾倒在大地上的生命之水，未來的希望。大星代表引導靈魂度過匱乏與遺棄的神聖真理之光。",
      "love": "【依原著關鍵詞】感情中的星星牌呈現兩極：偉特首列「損失、遺棄」——被遺棄的傷痛；另一讀法給予「希望與光明前景」，關係中的星光引導。",
      "career": "【依原著關鍵詞】工作上可能遭遇損失（loss）與剝奪（privation），但另一讀法帶來希望（hope）與光明前景（bright prospects），視情境而定。",
      "advice": "【偉特原著核心】偉特同一張牌給出兩個截然相反的解讀——星星既象徵損失後的希望，也可能單純是損失。占卜者需從整體牌陣判斷哪種能量主導。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Arrogance, haughtiness, impotence.'\n直譯：傲慢、狂妄自大、無能（無力）。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, hope is obscured by arrogance and haughtiness. It indicates impotence and a refusal to accept the healing waters of grace.'\n直譯：逆位時，希望被傲慢與高傲所遮蔽。它指出無能為力，以及拒絕接受恩典的治癒之水。",
      "love": "【依原著關鍵詞】感情中因傲慢（arrogance）與狂妄（haughtiness）而破壞關係，或面對感情無力為（impotence），無法付出或改變。",
      "career": "【依原著關鍵詞】工作上傲慢（arrogance）阻礙合作，狂妄自大（haughtiness）帶來反效果，最終展現無力（impotence）。",
      "advice": "【偉特原著核心】逆位的「傲慢」（arrogance）——當星星的光芒被自我膨脹遮蔽，希望變成幻覺，狂妄最終導向無力。"
    }
  },
  {
    "id": 18,
    "name": "月亮",
    "englishName": "The Moon",
    "number": "XVIII",
    "element": "水・雙魚座",
    "icon": "🌕",
    "suit": "major",
    "description": "【偉特原著·圖像】滿月（其中有新月輪廓）在兩塔之間升起，下方有一隻狗和一隻狼（或野狼）對月嘶叫，水中有一隻螃蟹（或甲殼類）從水中爬出。兩塔之間有一條蜿蜒的道路通向遠方。",
    "keywords": [
      "隱藏的敵人",
      "危險",
      "誹謗",
      "黑暗",
      "恐懼",
      "欺騙",
      "神秘力量",
      "錯誤",
      "不穩定",
      "沉默"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.'\n直譯：隱藏的敵人、危險、誹謗、黑暗、恐懼、欺騙、神秘力量、錯誤。\n\n【偉特原著·神秘學象徵】\n原文：'It is the night of the soul, the path of illusion and psychic trial. The creatures howling represent the animal nature reacting to the light, warning of hidden enemies and error.'\n直譯：它是靈魂的黑夜，幻覺與心靈考驗的道路。嗥叫的生物代表對光產生反應的動物本能，警告隱藏的敵人與錯誤。",
      "love": "【依原著關鍵詞】感情中存在隱藏的欺騙（deception）與隱藏的敵人（hidden enemies），誹謗（calumny）可能傷害關係，恐懼（terror）與黑暗籠罩。",
      "career": "【依原著關鍵詞】工作上有隱藏的敵人（hidden enemies）在背後運作，危險（danger）潛伏，神秘力量（occult forces）在幕後影響，判斷容易出錯（error）。",
      "advice": "【偉特原著核心】偉特以「隱藏的敵人」居首——月亮牌的核心警示是：真實與幻覺難以分辨，表面下潛藏著看不見的威脅，不可輕信表象。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Instability, inconstancy, silence, lesser degrees of deception and error.'\n直譯：不穩定、反覆無常、沉默、程度較輕的欺騙與錯誤。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it indicates lesser degrees of deception and error. Silence and instability remain, but the threat is diminished, allowing a slow return of clarity.'\n直譯：逆位時，它指出較輕程度的欺騙與錯誤。沉默與不穩定依然存在，但威脅已減弱，允許清晰度緩慢恢復。",
      "love": "【依原著關鍵詞】感情中不穩定（instability）且反覆無常（inconstancy），以沉默（silence）代替溝通，欺騙（deception）雖程度較輕但依然存在。",
      "career": "【依原著關鍵詞】工作上不穩定（instability），難以保持一致（inconstancy），錯誤（error）減少但仍有欺騙的可能（lesser degrees of deception）。",
      "advice": "【偉特原著核心】逆位的「反覆無常」（inconstancy）——月亮的陰暗面減弱但未消失，不穩定的沉默比明顯的謊言更難處理。"
    }
  },
  {
    "id": 19,
    "name": "太陽",
    "englishName": "The Sun",
    "number": "XIX",
    "element": "火・太陽",
    "icon": "☀️",
    "suit": "major",
    "description": "【偉特原著·圖像】一個裸體的孩童騎著白馬，手持紅色旗幟，背後有向日葵盛開的花牆。巨大的太陽在天空中照耀，面帶微笑（擬人化），散發出直射與波浪形的光芒。",
    "keywords": [
      "物質幸福",
      "幸運婚姻",
      "滿足",
      "成功",
      "快樂"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Material happiness, fortunate marriage, contentment.'\n直譯：物質的幸福、幸運的婚姻、滿足。\n\n【偉特原著·神秘學象徵】\n原文：'It is the great light of manifestation, the restoration of simplicity and joy. The child on the white horse represents the innocence of the spirit enjoying material happiness.'\n直譯：它是顯現的偉大之光，純真與喜悅的復歸。白馬上的孩童代表享受物質幸福的心靈純真。",
      "love": "【依原著關鍵詞】感情中迎來幸運的婚姻（fortunate marriage）與物質上的幸福（material happiness），雙方滿足（contentment）、關係陽光明朗。",
      "career": "【依原著關鍵詞】工作上帶來物質層面的成功與幸福（material happiness），滿足感（contentment）油然而生，是事業上最光明的預兆。",
      "advice": "【偉特原著核心】偉特僅用三個詞描述太陽牌——「物質幸福、幸運婚姻、滿足」——簡潔明確，這是塔羅中最純粹的正面能量，無需過度詮釋。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'The same in a lesser sense.'\n直譯：同正位，但程度較輕。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the light is dimmed but not extinguished. It is the same happiness and fortunate marriage, but experienced in a lesser or more restricted degree.'\n直譯：逆位時，光芒變暗但未熄滅。同樣是幸福與幸運的婚姻，但以較小或較受限的程度被體驗。",
      "love": "【依原著關鍵詞】感情中仍有幸福（happiness）與滿足（contentment），但光芒稍減，婚姻或關係的美好程度不及正位那般圓滿。",
      "career": "【依原著關鍵詞】工作上依然積極正面，物質上的成功（material happiness）依然存在，只是程度較正位輕，未達到最高峰。",
      "advice": "【偉特原著核心】偉特的逆位描述極為簡潔——「同正位，程度較輕」，這表明太陽牌即便逆位依然正面，只是強度稍減，無需過度擔憂。"
    }
  },
  {
    "id": 20,
    "name": "審判",
    "englishName": "Judgement",
    "number": "XX",
    "element": "火・冥王星",
    "icon": "📯",
    "suit": "major",
    "description": "【偉特原著·圖像】天使（大天使加百列）吹響號角，手持有紅十字旗幟的長號。下方海面上有棺材打開，裸體的男女老少從中復活，雙臂伸展仰望天使。背景有冰山與海洋。",
    "keywords": [
      "地位轉變",
      "更新",
      "結果",
      "訴訟損失",
      "軟弱",
      "懦弱",
      "審慎",
      "決定",
      "判決"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Change of position, renewal, outcome. Another account specifies total loss through lawsuit.'\n直譯：地位的轉變、更新、結果。另一說法指明：通過訴訟而完全損失。\n\n【偉特原著·神秘學象徵】\n原文：'It is the awakening of the soul, the resurrection from the tomb of material consciousness. The trump call of the divine voice brings renewal and change of position.'\n直譯：它是靈魂的覺醒，從物質意識之墓中復活。內在神聖之聲的號角呼喚帶來更新與位置的改變。",
      "love": "【依原著關鍵詞】感情中迎來關係地位的轉變（change of position）與更新（renewal），一段關係的最終結果（outcome）已到來，需面對覺醒的呼喚。",
      "career": "【依原著關鍵詞】工作上迎來重大的轉變（change of position）與更新（renewal），但另一說法警示可能因訴訟（lawsuit）而完全損失，需謹慎法律事務。",
      "advice": "【偉特原著核心】偉特在正位同時給出「更新」與「通過訴訟完全損失」——審判牌呼喚清醒的自我評估，結果已到，無論好壞都需坦然接受。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.'\n直譯：軟弱、懦弱、頭腦簡單；亦指審慎思量、決定、判決。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, it indicates weakness, pusillanimity, and simplicity. Deliberation is needed, but the soul hesitates to answer the call of renewal.'\n直譯：逆位時，它指出軟弱、懦弱與單純。需要深思熟慮，但靈魂遲疑於回應更新的呼喚。",
      "love": "【依原著關鍵詞】感情中因軟弱（weakness）與懦弱（pusillanimity）而拖延關鍵決定，或以過於簡單的方式（simplicity）看待複雜的感情問題。",
      "career": "【依原著關鍵詞】工作上需要做出決定（decision）與判決（sentence），但軟弱（weakness）使人拖延，或最終還是必須面對審慎思量（deliberation）後的裁決。",
      "advice": "【偉特原著核心】逆位同時含有「軟弱懦弱」與「決定判決」——審判的延遲終究無法避免，逃避只是推後了必須面對的裁決時刻。"
    }
  },
  {
    "id": 21,
    "name": "世界",
    "englishName": "The World",
    "number": "XXI",
    "element": "土・土星",
    "icon": "🌍",
    "suit": "major",
    "description": "【偉特原著·圖像】一名手持兩根魔杖的裸女（或以輕紗遮體），在月桂花環中跳舞，花環呈橢圓形（曼陀羅）。四角有四個固定的星座生物：獅子、牛、鷹、天使（四聖獸），與命運之輪相同。",
    "keywords": [
      "確定的成功",
      "回報",
      "航行",
      "路線",
      "移民",
      "出走",
      "遷移",
      "惰性",
      "固定",
      "停滯",
      "永久"
    ],
    "upright": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Assured success, recompense, voyage, route, emigration, flight, change of place.'\n直譯：確定的成功、回報、航行、路線、移民、出走、地點的改變。\n\n【偉特原著·神秘學象徵】\n原文：'It is the completion of the great work, the union of the soul with the universe. The dancer represents the ecstasy of the spirit in harmony with all creation, assuring success.'\n直譯：它是偉大工作的完成，靈魂與宇宙的結合。舞者代表心靈與所有創造物和諧共處的狂喜，確保成功。",
      "love": "【依原著關鍵詞】感情中達到確定的成功（assured success）與完整的回報（recompense），關係可能涉及跨地域（emigration, voyage）或生活上的重大改變（change of place）。",
      "career": "【依原著關鍵詞】事業上取得確定的成功（assured success），獲得應有的回報（recompense），可能涉及出行（voyage）或移動（emigration, change of place）。",
      "advice": "【偉特原著核心】偉特以「確定的成功」（Assured success）居首——世界牌是塔羅大阿爾卡納的終點，代表完整的實現與圓滿，此刻是整合一切的時機。"
    },
    "reversed": {
      "meaning": "【偉特原著·占卜關鍵詞】\n原文：'Inertia, fixity, stagnation, permanence.'\n直譯：惰性、固定、停滯、永久性（永恆不變）。\n\n【偉特原著·神秘學象徵】\n原文：'Reversed, the completion is delayed by inertia and fixity. Stagnation replaces movement, but the potential for permanence and stability remains.'\n直譯：逆位時，完成因停滯與固化而延遲。不流動取代了運動，但永久性與穩定的潛能依然存在。",
      "love": "【依原著關鍵詞】感情中陷入停滯（stagnation）與惰性（inertia），關係固化（fixity）而無法成長，以「永久不變」（permanence）作為不願改變的藉口。",
      "career": "【依原著關鍵詞】工作上停滯不前（stagnation），固守現狀（fixity），惰性（inertia）阻礙突破，以永久性（permanence）合理化一成不變。",
      "advice": "【偉特原著核心】逆位的「停滯」（stagnation）——世界的圓滿若固化為永久的靜止，便成為停滯，真正的圓滿應是流動而非永遠凍結。"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tarotCards;
}
