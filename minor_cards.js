const minorCards = [
  // ==================== WANDS ====================
  {
    id: 22,
    name: '權杖首牌',
    englishName: 'Ace of Wands',
    number: 'Ace',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一隻從雲中伸出的手握持一根發芽的權杖（木棒），棒上有嫩芽新葉，背景有遠山與城堡，顯示生命力蓬勃的原始能量。',
    keywords: ['創造', '發明', '企業', '開始', '源頭', '誕生', '財富', '墮落', '頹廢', '毀滅'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin; also money, fortune, inheritance.\'\n\n直譯：創造、發明、企業及產生這些的力量；原則、開始、源頭；誕生、家族、起源；亦指金錢、財富、繼承。',
      love: '【依原著關鍵詞】感情中充滿創造力（creation）與新的開始（beginning），新的關係充滿生命力，可能涉及家族（family）或家庭的建立（birth）。',
      career: '【依原著關鍵詞】事業上充滿創造力（creation）與發明精神（invention），是企業（enterprise）新計劃的源頭（source），財富（fortune）與繼承（inheritance）的機遇。',
      advice: '【偉特原著核心】權杖首牌代表純粹的起點能量——創造力（creation）在此最為強大，是行動的火花，把握這股原始的創業力量。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Fall, decadence, ruin, perdition, to perish; also a certain clouded joy.\'\n\n直譯：墮落、頹廢、毀滅、喪亡、滅亡；亦有某種蒙塵的喜悅。',
      love: '【依原著關鍵詞】感情中充滿蒙塵的喜悅（clouded joy），美好開始蒙上陰影，關係面臨頹廢（decadence）與喪失（perdition）的風險。',
      career: '【依原著關鍵詞】事業計劃墮落（fall）與毀滅（ruin），能量喪失，企業面臨沒落（decadence）與滅亡（to perish）的危機。',
      advice: '【偉特原著核心】逆位的「蒙塵的喜悅」（clouded joy）——即使在衰落中仍有一絲喜悅，但需正視墮落的現實，及時挽救創業的火焰。'
    }
  },
  {
    id: 23,
    name: '權杖二',
    englishName: 'Two of Wands',
    number: '2',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名男子站在城堡屋頂的垛口上，右手握持一個小地球，左手握一根權杖，另一根權杖固定在牆上。他俯瞰廣闊的領地，遠方有海洋與山脈。',
    keywords: ['富裕', '財富', '壯麗', '痛苦', '疾病', '悲愁', '憂傷', '驚喜', '奇觀', '迷惑', '困擾', '恐懼'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'On the one hand riches, fortune, magnificence; on the other physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion.\'\n\n直譯：一方面是富裕、財富、壯麗；另一方面是身體的痛苦、疾病、懊惱、悲愁、屈辱。圖像給出一個提示：此為領主俯視其領地。',
      love: '【依原著關鍵詞】感情中同時存在壯麗（magnificence）與痛苦（suffering）——偉特將正反並列，愛情中的輝煌可能伴隨著隱藏的悲愁（sadness）與屈辱（mortification）。',
      career: '【依原著關鍵詞】工作上擁有財富（fortune）與壯麗的成就（magnificence），如領主俯視領地，但同時需防疾病（disease）與痛苦（suffering）侵蝕。',
      advice: '【偉特原著核心】偉特明確將「富裕壯麗」與「痛苦疾病」並置於同一牌——提醒俯視領地的領主，外表的掌控下可能隱藏著真實的苦難。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Surprise, wonder, enchantment, emotion, trouble, fear.\'\n\n直譯：驚喜、奇觀、魔法般的迷惑、情緒激動、困擾、恐懼。',
      love: '【依原著關鍵詞】感情中充滿驚喜（surprise）與魔法般的迷惑（enchantment），情緒激動（emotion），但伴隨困擾（trouble）與潛藏的恐懼（fear）。',
      career: '【依原著關鍵詞】工作上遭遇意料之外的驚喜（surprise）與困擾（trouble），情緒性的反應（emotion）影響判斷，恐懼（fear）干擾決策。',
      advice: '【偉特原著核心】逆位的「魔法般的迷惑」（enchantment）——驚喜與奇觀可能令人失去理智，需在情緒的洶湧中保持清醒。'
    }
  },
  {
    id: 24,
    name: '權杖三',
    englishName: 'Three of Wands',
    number: '3',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名男子背對觀者，站在懸崖邊，俯視海洋中的船隻。他的一手搭在其中一根權杖上，周圍共有三根權杖，神情從容地望向遠方，等待遠航的船回來。',
    keywords: ['穩固的力量', '企業', '努力', '貿易', '商業', '發現', '合作', '結束困境', '停止逆境'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Established strength, enterprise, effort, trade, commerce, discovery; also able co-operation in business.\'\n\n直譯：穩固的力量、企業精神、努力、貿易、商業、發現；亦指商業上的有效合作。',
      love: '【依原著關鍵詞】感情中建立在穩固的力量（established strength）上，雙方的努力（effort）帶來發現（discovery），有效的合作（able co-operation）深化關係。',
      career: '【依原著關鍵詞】工作上穩固的力量（established strength）支撐企業（enterprise）的發展，貿易（trade）與商業（commerce）前景良好，有效合作（able co-operation）是關鍵。',
      advice: '【偉特原著核心】偉特強調「穩固的力量」（established strength）——不是衝動的開始，而是已建立的基礎上持續努力，有效合作是成功的秘訣。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The end of troubles, suspension or cessation of adversity, toil and disappointment.\'\n\n直譯：困難的結束、逆境的暫停或停止、辛勞與失望。',
      love: '【依原著關鍵詞】感情中困難的結束（end of troubles）帶來暫時的喘息，但辛勞（toil）與失望（disappointment）伴隨著逆境的停止（cessation of adversity）。',
      career: '【依原著關鍵詞】工作上逆境暫停（suspension of adversity），但辛勞（toil）與失望（disappointment）留下痕跡，是否真正結束尚待觀察。',
      advice: '【偉特原著核心】逆位的「困難的結束」——這是一個模糊的正面信號，逆境暫停但辛勞依在，需在喘息中為下一階段做好準備。'
    }
  },
  {
    id: 25,
    name: '權杖四',
    englishName: 'Four of Wands',
    number: '4',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】四根插在地上的權杖構成門廊，上面掛滿花環與花朵，遠方有城堡。兩名女子在門廊前歡舞慶祝，手持花束，背景中有更多慶祝的人群。',
    keywords: ['鄉村生活', '避風港', '家庭豐收', '休憩', '和諧', '繁榮', '平和', '增加', '幸福', '美麗'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace.\'\n\n直譯：鄉村生活、避風港、家庭豐收節慶、休憩、和睦、和諧、繁榮、和平。',
      love: '【依原著關鍵詞】感情中充滿和諧（harmony）與和平（peace），如避風港（haven of refuge）般的安穩，是偉特最明確描述家庭幸福的牌之一。',
      career: '【依原著關鍵詞】工作上帶來繁榮（prosperity）與和睦（concord），如豐收節（harvest-home）般的成就感，是努力後的休憩（repose）時刻。',
      advice: '【偉特原著核心】偉特的「避風港」（haven of refuge）——此牌代表真實可觸的安全感與慶祝，是紮實建立的基礎所帶來的喜悅。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.\'\n\n直譯：含義不變；即繁榮、增加、幸福、美麗、修飾美化。',
      love: '【依原著關鍵詞】感情中逆位依然帶來幸福（felicity）與美麗（beauty），繁榮（prosperity）持續，只是以不同的方式呈現或進一步增添（embellishment）。',
      career: '【依原著關鍵詞】工作上繁榮（prosperity）與增長（increase）持續，逆位意義不變，依然是積極正面的結果，只是表現形式可能有所修飾（embellishment）。',
      advice: '【偉特原著核心】偉特明確說明此牌「逆位含義不變」——這是塔羅中少數正逆位均為正面意義的牌，繁榮與幸福在任何方向都成立。'
    }
  },
  {
    id: 26,
    name: '權杖五',
    englishName: 'Five of Wands',
    number: '5',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】五名男子各持一根權杖，看似在進行混亂的打鬥或競技（但無人受傷），動作混亂卻充滿活力，象徵激烈的競爭或辯論。',
    keywords: ['模仿', '爭鬥', '追求財富', '人生戰場', '黃金', '收穫', '富裕', '訴訟', '爭執', '詭計'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Imitation, struggle of the search after riches and fortune, the battle of life; also gold, gain, opulence.\'\n\n直譯：模仿、追求財富的奮鬥、人生的戰鬥；亦指黃金、收穫、富裕。',
      love: '【依原著關鍵詞】感情中充滿競爭（struggle）與模仿（imitation），關係是人生戰場（battle of life）的縮影，但競爭也帶來豐碩的成果（gain, opulence）。',
      career: '【依原著關鍵詞】工作上是激烈的競爭（struggle）與人生戰場（battle of life），追求財富（search after riches）的過程中，黃金（gold）與富裕（opulence）可及。',
      advice: '【偉特原著核心】偉特將「奮鬥」與「黃金富裕」並置——五號牌的戰鬥是獲得財富的必經之路，競爭是人生的基本構成，不必迴避。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Litigation, disputes, trickery, contradiction.\'\n\n直譯：訴訟、糾紛、詭計、矛盾對立。',
      love: '【依原著關鍵詞】感情中陷入糾紛（disputes）與矛盾對立（contradiction），可能有詭計（trickery）在其中，關係充滿不誠實的對抗。',
      career: '【依原著關鍵詞】工作上面臨訴訟（litigation）與糾紛（disputes），詭計（trickery）與矛盾（contradiction）使局勢複雜化。',
      advice: '【偉特原著核心】逆位的「詭計」（trickery）——正位的光明競爭變為暗箭傷人，訴訟與糾紛取代了坦蕩的奮鬥，需謹防不誠實的對手。'
    }
  },
  {
    id: 27,
    name: '權杖六',
    englishName: 'Six of Wands',
    number: '6',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名騎士騎著白馬，頭戴月桂冠，手持裝飾著月桂花環的權杖，身後有步行的從者各持權杖護送。這是凱旋歸來的隊伍，展示勝利者的榮耀。',
    keywords: ['凱旋的消息', '勝利', '月桂冠', '恐懼', '叛徒', '不忠', '延誤'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Triumphal news or a victory; also the crown which is carried on the wand.\'\n\n直譯：凱旋的消息或勝利；亦指被戴在權杖上的冠冕。',
      love: '【依原著關鍵詞】感情中帶來勝利（victory）的消息，關係中的付出獲得榮耀（crown）的回報，愛情的凱旋時刻到來。',
      career: '【依原著關鍵詞】工作上帶來凱旋的消息（triumphal news）與勝利（victory），努力獲得認可，如月桂冠（crown）般的榮耀加身。',
      advice: '【偉特原著核心】偉特直接點出「凱旋的冠冕」（crown carried on the wand）——這是奮鬥後真實的勝利，接受屬於你的榮耀，公開慶祝你的成就。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty; also indefinite delay.\'\n\n直譯：憂慮、恐懼，如同勝利的敵人兵臨城下；背叛、不忠；亦指無限期的延誤。',
      love: '【依原著關鍵詞】感情中充滿憂慮（apprehension）與對背叛（treachery）的恐懼，不忠（disloyalty）的陰影籠罩，關係陷入無限期的延誤（indefinite delay）。',
      career: '【依原著關鍵詞】工作上感受到敵人兵臨城下的恐懼（fear of a victorious enemy），背叛（treachery）與不忠（disloyalty）可能在職場出現，計劃無限期延誤。',
      advice: '【偉特原著核心】逆位的「勝利的敵人兵臨城下」——勝利反轉，需警惕背叛與不忠，延誤在此是被迫的，需積極應對潛在的威脅。'
    }
  },
  {
    id: 28,
    name: '權杖七',
    englishName: 'Seven of Wands',
    number: '7',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名男子站在高地上，用一根權杖防禦從下方舉起的六根權杖。他占據制高點，雖被圍攻但仍勇敢抵抗，表情堅毅。',
    keywords: ['英勇', '討論', '口頭爭論', '談判', '競爭', '成功', '困惑', '困窘', '焦慮', '猶豫不決'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Valour; discussion and wordy strife; in business—negotiations, war of trade, barter, competition; also success, for the combatant is on top.\'\n\n直譯：英勇；討論與言辭上的爭論；在商業上——談判、商業戰爭、以物易物、競爭；亦指成功，因為戰鬥者占據上風。',
      love: '【依原著關鍵詞】感情中需要英勇（valour）捍衛，為愛而戰，在口頭爭論（wordy strife）中堅守立場，因占據制高點而成功（success）。',
      career: '【依原著關鍵詞】工作上充滿商業競爭（competition）與談判（negotiations），英勇（valour）面對商業戰爭（war of trade），因占據優勢而獲得成功（success）。',
      advice: '【偉特原著核心】偉特明確指出「戰鬥者占據上風故而成功」——七號牌的關鍵是保持優勢地位，用英勇面對挑戰，制高點帶來勝利。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Perplexity, embarrassments, anxiety. Also a caution against indecision.\'\n\n直譯：困惑、困窘、焦慮。亦是對猶豫不決的警告。',
      love: '【依原著關鍵詞】感情中陷入困惑（perplexity）與焦慮（anxiety），尷尬的處境（embarrassments）使人不知所措，猶豫不決（indecision）使局勢惡化。',
      career: '【依原著關鍵詞】工作上困惑（perplexity）與困窘（embarrassments）纏身，焦慮（anxiety）影響判斷，偉特特別警告勿猶豫不決（indecision）。',
      advice: '【偉特原著核心】偉特明確「警告猶豫不決」（caution against indecision）——制高點因優柔寡斷而失守，果斷才是化解困惑的唯一出路。'
    }
  },
  {
    id: 29,
    name: '權杖八',
    englishName: 'Eight of Wands',
    number: '8',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】八根權杖平行斜飛穿越天空，無人持握，急速飛向地面。背景是平靜的藍天與遠方的平原河流，象徵快速的行動與傳訊。',
    keywords: ['行動', '迅速', '急速', '希望', '愛的箭矢', '嫉妒', '內部糾紛', '爭吵'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Activity in undertakings, the path of such activity, swiftness; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.\'\n\n直譯：行動中的活力與路徑、迅速；極大的急速、極大的希望、朝向承諾確定幸福的終點急速前進；泛指一切運動中的事物；亦指愛的箭矢。',
      love: '【依原著關鍵詞】偉特明確提及「愛的箭矢」（arrows of love）——感情中快速發展（swiftness），充滿希望（great hope），朝向確定的幸福（assured felicity）疾速前進。',
      career: '【依原著關鍵詞】工作上充滿極大的急速（great haste）與活力，事情快速推進（swiftness），承諾帶來確定的幸福（assured felicity）。',
      advice: '【偉特原著核心】偉特的「朝向確定幸福的終點急速前進」——這是塔羅中最快速的牌，強調動能與希望的結合，一切事物都在加速運動。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Arrows of jealousy, internal dispute, stings of conscience, quarrels.\'\n\n直譯：嫉妒的箭矢、內部糾紛、良心的刺痛、爭吵。',
      love: '【依原著關鍵詞】感情中嫉妒的箭矢（arrows of jealousy）傷害關係，爭吵（quarrels）與良心的刺痛（stings of conscience）使愛情蒙塵。',
      career: '【依原著關鍵詞】工作上出現內部糾紛（internal dispute）與爭吵（quarrels），良心的刺痛（stings of conscience）暗示不道德的競爭手段。',
      advice: '【偉特原著核心】逆位將「愛的箭矢」轉為「嫉妒的箭矢」——同樣的速度與力量，方向反轉後帶來的是傷害與糾紛，需警惕嫉妒驅動的行動。'
    }
  },
  {
    id: 30,
    name: '權杖九',
    englishName: 'Nine of Wands',
    number: '9',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名受傷的男子頭部包紮，手扶一根權杖，背後有八根權杖形成柵欄。他的眼神警惕地四望，雖已疲憊但仍堅守陣地，準備迎接下一波攻擊。',
    keywords: ['抵抗的力量', '勇敢面對', '延誤', '暫停', '阻礙', '逆境', '災難'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Strength in opposition. If attacked, the person will meet an onslaught boldly; also delay, suspension, adjournment.\'\n\n直譯：抵抗中的力量。若遭攻擊，此人將勇敢地迎戰；亦指延誤、暫停、延期。',
      love: '【依原著關鍵詞】感情中展現抵抗中的力量（strength in opposition），若受到攻擊則勇敢迎戰（meet an onslaught boldly），但關係可能經歷延誤（delay）與暫停（suspension）。',
      career: '【依原著關鍵詞】工作上展現在對抗中的力量（strength in opposition），勇於面對挑戰，但需接受延誤（delay）與延期（adjournment）是過程的一部分。',
      advice: '【偉特原著核心】偉特的「勇敢迎戰」（meet an onslaught boldly）——九號牌的戰士已疲憊但未倒下，這種在逆境中持守的力量是最深刻的勇氣。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Obstacles, adversity, calamity.\'\n\n直譯：障礙、逆境、災難。',
      love: '【依原著關鍵詞】感情中遭遇嚴重的障礙（obstacles）與逆境（adversity），災難（calamity）性的衝擊使關係難以為繼。',
      career: '【依原著關鍵詞】工作上障礙（obstacles）、逆境（adversity）與災難（calamity）接踵而至，已疲憊的力量在此遭受最嚴峻的考驗。',
      advice: '【偉特原著核心】逆位的「災難」（calamity）——抵抗力量的崩潰帶來全面的逆境，需評估是否繼續堅守或尋求新的策略。'
    }
  },
  {
    id: 31,
    name: '權杖十',
    englishName: 'Ten of Wands',
    number: '10',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名男子彎腰費力地抱著十根權杖向前走，身體被重負壓彎，遠方有城鎮的輪廓。他看不見前方的路，只能低頭承受重量，象徵過度的負擔。',
    keywords: ['壓迫', '財富', '收穫', '成功', '偽裝', '欺詐', '背信', '困難', '陰謀'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Oppression simply, but also fortune, gain, any kind of success, and then it is the oppression of these things; also a card of false-seeming, disguise, perfidy.\'\n\n直譯：簡單的壓迫，但亦指財富、收穫、任何形式的成功，此時即為這些事物所帶來的壓迫；亦是假象、偽裝、背信棄義之牌。',
      love: '【依原著關鍵詞】感情中的成功（success）帶來壓迫（oppression）的負擔，偽裝（disguise）與背信（perfidy）可能潛藏在表面的成就之下。',
      career: '【依原著關鍵詞】工作上財富（fortune）與成功（gain）帶來沉重的壓迫（oppression），偉特特別指出「假象與背信」——成功的背後可能有不誠實的代價。',
      advice: '【偉特原著核心】偉特獨特地指出「成功的壓迫」與「背信棄義」並存——十號牌提醒：過度的承擔與不誠實手段取得的成功，最終都是無法持久的重負。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Contrarieties, difficulties, intrigues.\'\n\n直譯：對立、困難、陰謀詭計。',
      love: '【依原著關鍵詞】感情中充滿對立（contrarieties）與困難（difficulties），陰謀（intrigues）在關係背後運作，使一切更加複雜。',
      career: '【依原著關鍵詞】工作上對立（contrarieties）與困難（difficulties）阻礙前進，陰謀詭計（intrigues）使工作環境充滿不信任。',
      advice: '【偉特原著核心】逆位的「陰謀」（intrigues）——重負的壓迫轉化為幕後的操縱與陰謀，需謹防職場或關係中的不正當手段。'
    }
  },
  {
    id: 32,
    name: '權杖侍衛',
    englishName: 'Page of Wands',
    number: 'Page',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名年輕人身著花紋上衣，頭戴羽毛帽，雙手握持一根長杖，凝視著其頂端。背景是沙漠與三座金字塔形的山丘，充滿冒險精神。',
    keywords: ['黑髮少年', '忠實', '愛人', '使者', '郵差', '家族消息', '軼事', '公告', '不穩定'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Dark young man, faithful, a lover, an envoy, a postman; beside a man, he will bear favourable testimony; dangerous rival if followed by Page of Cups; may signify family intelligence.\'\n\n直譯：黑髮的年輕男子、忠實、愛人、使者、郵差；在男性旁邊時，將帶來有利的證詞；若跟隨聖杯侍衛則是危險的對手；可能象徵家族消息。',
      love: '【依原著關鍵詞】感情中代表忠實（faithful）的愛人（lover），若跟隨聖杯侍衛則成為危險的對手（dangerous rival），家族消息（family intelligence）可能影響感情。',
      career: '【依原著關鍵詞】工作上作為使者（envoy）帶來消息，忠實地（faithful）執行任務，可能帶來有利的證詞（favourable testimony）。',
      advice: '【偉特原著核心】偉特特別注意「若跟隨聖杯侍衛則是危險對手」——侍衛牌需結合周圍牌來解讀，單純看此牌是忠實的使者與傳訊者。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Anecdotes, announcements, evil news. Also indecision and instability.\'\n\n直譯：軼事、公告、壞消息。亦指猶豫不決與不穩定。',
      love: '【依原著關鍵詞】感情中帶來壞消息（evil news），猶豫不決（indecision）與不穩定（instability）使關係缺乏可靠性。',
      career: '【依原著關鍵詞】工作上的公告（announcements）帶來壞消息（evil news），不穩定（instability）與猶豫不決（indecision）影響工作表現。',
      advice: '【偉特原著核心】逆位的「壞消息與不穩定」——忠實的信使變為不可靠的消息來源，猶豫不決使重要信息無法及時傳達。'
    }
  },
  {
    id: 33,
    name: '權杖騎士',
    englishName: 'Knight of Wands',
    number: 'Knight',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名年輕騎士身著金色盔甲，盔甲裝飾有火蜥蜴圖案，騎馬躍起，揮舞一根權杖。背景是沙漠景觀與三座金字塔形山丘，充滿衝勁與動力。',
    keywords: ['離開', '缺席', '出走', '移民', '友善', '換居所', '決裂', '分裂', '中斷', '不和'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.\'\n\n直譯：離開、缺席、出走、移民。黑髮的年輕男子、友善。居所的改變。',
      love: '【依原著關鍵詞】感情中可能面臨分離（departure, absence）或移居（emigration）帶來的距離，但代表此人是友善（friendly）的黑髮年輕男子。',
      career: '【依原著關鍵詞】工作上有離職（departure）或出走（flight）的可能，居所的改變（change of residence）可能帶來新的工作機遇。',
      advice: '【偉特原著核心】偉特的「出走與移民」——騎士的能量是衝動的行動，此牌預示著一個快速的離開或遷移，變動即將到來。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Rupture, division, interruption, discord.\'\n\n直譯：決裂、分裂、中斷、不和。',
      love: '【依原著關鍵詞】感情中發生決裂（rupture）與分裂（division），關係被中斷（interruption），不和（discord）使雙方越走越遠。',
      career: '【依原著關鍵詞】工作上發生中斷（interruption）與決裂（rupture），合作關係分裂（division），工作環境充滿不和（discord）。',
      advice: '【偉特原著核心】逆位的「決裂」（rupture）——衝動的行動造成不可挽回的斷裂，中斷與不和是倉促行事的後果。'
    }
  },
  {
    id: 34,
    name: '權杖王后',
    englishName: 'Queen of Wands',
    number: 'Queen',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名女王端坐於飾有獅子與向日葵的寶座上，手持權杖與向日葵，腳邊有一隻黑貓。她神情自信而直接，既展現出溫暖又不失權威。',
    keywords: ['黑髮女子', '友善', '貞潔', '愛戀', '榮耀', '節儉', '反對', '嫉妒', '欺騙', '不忠'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'A dark woman, countrywoman, friendly, chaste, loving, honourable; if beside a man, well disposed towards him; love of money, or a certain success in business.\'\n\n直譯：黑髮女子、農村婦女、友善、貞潔、深情、榮耀；若在男性旁邊，對其態度良好；愛財或在商業上有一定成功。',
      love: '【依原著關鍵詞】感情中代表友善（friendly）、貞潔（chaste）且深情（loving）的女性，若在男性旁邊對其態度良好，是真誠且榮耀（honourable）的伴侶。',
      career: '【依原著關鍵詞】工作上展現對金錢的熱愛（love of money）與商業上的成功（success in business），友善且榮耀的態度在職場贏得尊重。',
      advice: '【偉特原著核心】偉特的「農村婦女」象徵踏實的實踐者——她的成功來自真實的勞動與貞潔的品格，而非投機取巧。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Good, economical, obliging, serviceable; also opposition, jealousy, deceit and infidelity.\'\n\n直譯：善良、節儉、樂於助人、實用；亦指反對、嫉妒、欺騙與不忠。',
      love: '【依原著關鍵詞】感情中可能是善良節儉的女性（good, economical），但偉特同時列出「嫉妒、欺騙與不忠」，需辨別哪種能量主導。',
      career: '【依原著關鍵詞】工作上樂於助人（obliging）且實用（serviceable），但反對（opposition）可能來自嫉妒（jealousy）與欺騙（deceit）的同僚。',
      advice: '【偉特原著核心】偉特在逆位同時給出正反雙面——善良與欺騙並存，需結合周圍牌陣判斷哪種特質在當前情境中主導。'
    }
  },
  {
    id: 35,
    name: '權杖國王',
    englishName: 'King of Wands',
    number: 'King',
    suit: 'wands',
    element: '火',
    icon: '🔥',
    description: '【偉特原著·圖像】一名國王端坐於飾有獅子與火蜥蜴的寶座上，手持開花的權杖，身著黃色袍服飾有火蜥蜴圖案。他的神情充滿威權與自信，凝視前方。',
    keywords: ['黑髮男子', '友善', '農村紳士', '已婚', '誠實', '嚴肅', '慈愛', '耐心'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Dark man, friendly, countryman, generally married, honest and conscientious; honesty; may mean news concerning an unexpected heritage.\'\n\n直譯：黑髮男子、友善、鄉紳、通常已婚、誠實且盡責；誠實；可能指關於意外遺產的消息。',
      love: '【依原著關鍵詞】感情中代表誠實（honest）、盡責（conscientious）且通常已婚（generally married）的成熟男性，友善（friendly）且可靠。',
      career: '【依原著關鍵詞】工作上代表誠實（honesty）的商業夥伴或上司，可能帶來意外遺產（unexpected heritage）的消息，是可信賴的人物。',
      advice: '【偉特原著核心】偉特的「誠實且盡責」（honest and conscientious）——國王的力量建立在真實的品格上，不是表演，而是一貫的行為準則。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Good, but severe; austere, yet tolerant.\'\n\n直譯：善良但嚴厲；嚴峻卻包容。',
      love: '【依原著關鍵詞】感情中展現善良（good）但嚴厲（severe）的一面，嚴峻（austere）的要求下卻帶有包容（tolerant），是複雜的情感特質。',
      career: '【依原著關鍵詞】工作上是善良但嚴厲（severe）的領導者，嚴峻（austere）的管理風格卻帶有包容（tolerant）的一面。',
      advice: '【偉特原著核心】逆位的「嚴峻卻包容」——這不是衝突而是並存，嚴格的標準與包容的心態可以同時存在，是成熟領導者的特質。'
    }
  },

  // ==================== CUPS ====================
  {
    id: 36,
    name: '聖杯首牌',
    englishName: 'Ace of Cups',
    number: 'Ace',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一隻從雲中伸出的手捧持一個巨大的聖杯，杯口有鴿子（口銜餅）俯衝而下，杯中溢出五道水流（象徵五官與感知），下方是有百合花的水池。',
    keywords: ['真心之家', '喜悅', '滿足', '居所', '滋養', '豐盛', '聖桌', '幸福', '假心', '不穩定', '革命'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.\'\n\n直譯：真心之家、喜悅、滿足、居所、滋養、豐盛、生育力；聖桌（聖餐），其幸福。',
      love: '【依原著關鍵詞】感情中充滿「真心之家」（house of the true heart）的溫暖，喜悅（joy）、滋養（nourishment）與豐盛（abundance），是聖杯首牌描述純粹之愛的核心。',
      career: '【依原著關鍵詞】工作上帶來豐盛（abundance）與生育力（fertility），居所的建立（abode），滋養性的工作環境充滿喜悅（joy）與滿足（content）。',
      advice: '【偉特原著核心】「真心之家」（house of the true heart）是偉特對聖杯首牌的定義——真實的情感是最深沉的豐盛，聖餐的幸福象徵心靈的滿足。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'House of the false heart, mutation, instability, revolution.\'\n\n直譯：假心之家、變動、不穩定、革命。',
      love: '【依原著關鍵詞】感情中是「假心之家」（house of the false heart），表面的愛掩蓋不穩定（instability）與變動（mutation），關係面臨革命性的翻轉（revolution）。',
      career: '【依原著關鍵詞】工作上不穩定（instability）與變動（mutation）頻繁，局勢面臨革命性的改變（revolution），基礎的假象將被揭露。',
      advice: '【偉特原著核心】逆位的「假心之家」（house of the false heart）——偉特以對比定義逆位，不真實的情感基礎必然帶來動盪與革命性的崩潰。'
    }
  },
  {
    id: 37,
    name: '聖杯二',
    englishName: 'Two of Cups',
    number: '2',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一男一女相對而立，各自手持聖杯，共同舉杯。上方飄有赫密斯雙蛇杖（caduceus），頂部是獅子頭，象徵靈魂的結合與治癒的力量。',
    keywords: ['愛', '激情', '友誼', '親和', '結合', '和諧', '共情'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes.\'\n\n直譯：愛、激情、友誼、親和、結合、和諧、共情、男女關係的相互聯繫。',
      love: '【依原著關鍵詞】感情中充滿愛（love）、激情（passion）與深刻的親和（affinity），是男女之間最完美的相互聯繫（interrelation of the sexes），結合（union）與和諧（concord）。',
      career: '【依原著關鍵詞】工作上建立友誼（friendship）與和諧（concord）的夥伴關係，共情（sympathy）與親和（affinity）帶來良好的合作基礎。',
      advice: '【偉特原著核心】偉特列出「男女關係的相互聯繫」（interrelation of the sexes）——二號牌代表兩種能量的完美對應，這種聯繫本身即是一種神聖的治癒。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Passion.\'\n\n直譯：激情。',
      love: '【依原著關鍵詞】感情中逆位僅剩「激情」（passion）——偉特極簡的逆位暗示，愛的完整性消失，只剩下純粹的肉體激情或單方面的熱情。',
      career: '【依原著關鍵詞】工作上過度的熱情（passion）可能使關係失衡，缺乏理性的配合。',
      advice: '【偉特原著核心】偉特逆位僅給一個詞——「激情」，這是塔羅中最簡潔的逆位說明，暗示正位的多元和諧在逆位中縮減為單一的原始衝動。'
    }
  },
  {
    id: 38,
    name: '聖杯三',
    englishName: 'Three of Cups',
    number: '3',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】三名女子在花果豐盛的地方共同舉杯慶祝，她們圍成圓形、翩翩起舞，各自手持聖杯，面帶喜悅，象徵友誼、節慶與共同的豐收。',
    keywords: ['圓滿', '豐盛', '完美', '快樂', '勝利', '實現', '安慰', '治癒', '過度享樂'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.\'\n\n直譯：事物在豐盛中的圓滿結束、完美與歡愉；快樂的結果、勝利、實現、安慰、治癒。',
      love: '【依原著關鍵詞】感情中事情在豐盛中圓滿結束（conclusion in plenty），帶來勝利（victory）與實現（fulfilment），是快樂的結果（happy issue），帶來治癒（healing）。',
      career: '【依原著關鍵詞】工作上事務圓滿結束（conclusion），在豐盛（plenty）與完美（perfection）中達成目標，獲得勝利（victory）的實現（fulfilment）。',
      advice: '【偉特原著核心】偉特的「治癒」（healing）——三號杯牌不只是慶祝，其深層意涵是完整性的恢復，在共同的喜悅中，傷口得以癒合。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Expedition, dispatch, achievement, end. Excess in physical enjoyment.\'\n\n直譯：迅速、快速完成、成就、終結。過度的肉體享樂。',
      love: '【依原著關鍵詞】感情中迅速（expedition）地進展或結束（end），可能因過度的肉體享樂（excess in physical enjoyment）而失去深度。',
      career: '【依原著關鍵詞】工作上快速完成（dispatch）與成就（achievement），但過度的享樂（excess）暗示慶祝過頭，可能影響後續工作的穩定性。',
      advice: '【偉特原著核心】逆位的「過度肉體享樂」（excess in physical enjoyment）——慶祝本身無可厚非，但過度沉溺會使真實的成就蒙塵。'
    }
  },
  {
    id: 39,
    name: '聖杯四',
    englishName: 'Four of Cups',
    number: '4',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名青年坐在樹下，雙臂交叉，沉思地凝視面前的三個聖杯。一隻神秘的手從雲中伸出，捧著第四個聖杯，但青年渾然不覺，陷入自己的思緒中。',
    keywords: ['厭倦', '厭惡', '嫌惡', '想象中的苦惱', '混合的歡樂', '新奇', '預兆', '新指引', '新關係'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Weariness, disgust, aversion, imaginary vexations; a card of blended pleasure.\'\n\n直譯：厭倦、厭惡、嫌惡、想象中的苦惱；混合的歡樂之牌。',
      love: '【依原著關鍵詞】感情中的厭倦（weariness）與嫌惡（disgust）——對現有關係感到饜足，想象中的苦惱（imaginary vexations）蒙蔽了真實的幸福，是「混合的歡樂」。',
      career: '【依原著關鍵詞】工作上厭倦（weariness）現狀，對工作感到嫌惡（disgust），但苦惱可能是想象（imaginary vexations）而非真實，仍有混合的歡樂（blended pleasure）存在。',
      advice: '【偉特原著核心】偉特的「想象中的苦惱」（imaginary vexations）——四號杯提醒，不滿往往來自內心的投射而非真實的狀況，雲中的第四個聖杯被忽視了。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Novelty, presage, new instruction, new relations.\'\n\n直譯：新奇、預兆、新的指引、新的關係。',
      love: '【依原著關鍵詞】感情中帶來新奇（novelty）的關係（new relations），預兆（presage）指向新的情感方向，厭倦感消散，重新對愛充滿興趣。',
      career: '【依原著關鍵詞】工作上獲得新的指引（new instruction）與新的關係（new relations），新奇（novelty）打破了停滯，帶來預兆（presage）性的轉機。',
      advice: '【偉特原著核心】逆位的「新奇」（novelty）——從厭倦中覺醒，新的指引到來，雲中的聖杯終於被看見並接受。'
    }
  },
  {
    id: 40,
    name: '聖杯五',
    englishName: 'Five of Cups',
    number: '5',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名黑袍男子低頭哀悼，面前有三個倒下的聖杯（液體流出），身後有兩個仍然完好直立的聖杯。遠方有橋梁與城堡。他只看見失去，未見身後尚存的。',
    keywords: ['損失', '剩餘', '遺產', '傳承', '婚姻', '苦澀', '消息', '聯盟', '回歸', '錯誤計劃'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Loss, but something remains over; three have been taken, but two are left; inheritance, patrimony, transmission, but not corresponding to expectations; possibly marriage, but not without bitterness or frustration.\'\n\n直譯：損失，但有所剩餘；三個被取走，但兩個尚留；遺產、祖業、傳承，但不符合期望；可能是婚姻，但不乏苦澀或挫折。',
      love: '【依原著關鍵詞】偉特明確指出「可能是婚姻，但不乏苦澀或挫折」——感情中損失（loss）依然存在，但身後尚有兩個聖杯（something remains），不應只看見失去。',
      career: '【依原著關鍵詞】工作上遺產（inheritance）或傳承（transmission）不如期望（not corresponding to expectations），損失真實存在，但尚有剩餘（something remains over）可把握。',
      advice: '【偉特原著核心】偉特的「三個被取，兩個尚留」——五號杯的核心教導是：悲傷是真實的，但尚存的美好同樣真實，轉身看見剩餘才能前進。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'News, alliances, affinity, affiliation, ancestry, return, false projects.\'\n\n直譯：消息、聯盟、親和、歸屬、祖源、回歸、錯誤的計劃。',
      love: '【依原著關鍵詞】感情中帶來回歸（return）與新的聯盟（alliances），親和（affinity）重建，但需警惕錯誤的計劃（false projects）。',
      career: '【依原著關鍵詞】工作上帶來消息（news）與新的聯盟（alliances），歸屬感（affiliation）重建，但錯誤的計劃（false projects）可能帶來新的損失。',
      advice: '【偉特原著核心】逆位的「錯誤的計劃」（false projects）——從悲傷中回歸是好事，但在重建時需辨別哪些計劃是真實可行的，哪些是逃避的幻覺。'
    }
  },
  {
    id: 41,
    name: '聖杯六',
    englishName: 'Six of Cups',
    number: '6',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名男孩將一個裝滿白花的聖杯遞給一個小女孩，他們在花園中，周圍有五個也裝滿白花的聖杯。背景有老人走遠，象徵過去的美好記憶。',
    keywords: ['過去', '記憶', '童年', '幸福', '享樂', '消逝的事物', '未來', '更新', '即將發生'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'A card of the past and of memories, looking back on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished.\'\n\n直譯：過去與記憶之牌，回望童年；幸福、享樂，但更多來自過去；已消逝之物。',
      love: '【依原著關鍵詞】感情中的幸福（happiness）更多來自過去（the past）的記憶（memories），可能是舊情人的重現，或以童年（childhood）的純真眼光看待愛情。',
      career: '【依原著關鍵詞】工作上的動力來自過去的美好經驗（memories），享樂（enjoyment）的感覺回歸，但需注意不要過度沉溺於已消逝的事物（things that have vanished）。',
      advice: '【偉特原著核心】偉特的「已消逝之物」（things that have vanished）——六號杯是回憶的牌，美好的過去值得珍視，但不應因此無法向前。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The future, renewal, that which will come to pass presently.\'\n\n直譯：未來、更新、即將發生之事。',
      love: '【依原著關鍵詞】感情中轉向未來（the future），更新（renewal）帶來新的可能，即將發生的事（that which will come to pass presently）令人期待。',
      career: '【依原著關鍵詞】工作上目光轉向未來（the future），更新（renewal）的能量到來，即將發生的變化（that which will come to pass presently）帶來新的機遇。',
      advice: '【偉特原著核心】逆位的「未來與更新」——正位回望過去，逆位轉向未來，這是有趣的翻轉，提醒放下記憶，擁抱即將到來的新事物。'
    }
  },
  {
    id: 42,
    name: '聖杯七',
    englishName: 'Seven of Cups',
    number: '7',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一個人的黑色剪影仰望雲中漂浮的七個聖杯，每個杯中盛有不同的幻象：城堡、寶石、月桂花環、女人、蛇、龍、人頭。所有幻象皆不真實，浮現在雲霧之中。',
    keywords: ['仙境的恩賜', '反射的意象', '情感', '想象', '短暫', '不持久', '願望', '意志', '決心', '計劃'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial.\'\n\n直譯：仙境的恩賜、反射的意象、情感、想象、在沉思之鏡中看見的事物；在這些層面有所成就，但無一持久或實質。',
      love: '【依原著關鍵詞】感情中充滿想象（imagination）與情感（sentiment），如「沉思之鏡中的意象」——七個幻象中的愛不真實，有一定的成就（some attainment）但不持久（nothing permanent）。',
      career: '【依原著關鍵詞】工作上充滿幻想（imagination）的計劃，有所成就（some attainment）但缺乏實質（nothing substantial），「仙境的恩賜」難以在現實世界中穩固。',
      advice: '【偉特原著核心】偉特的「無一持久或實質」——七號杯的核心警示是：所有看似迷人的選擇都只是幻象，需分辨哪些是真實可行的，哪些只是情感的投射。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Desire, will, determination, project.\'\n\n直譯：願望、意志、決心、計劃。',
      love: '【依原著關鍵詞】感情中從幻象（七個杯）中清醒，展現清晰的意志（will）與決心（determination），將願望（desire）化為具體的計劃（project）。',
      career: '【依原著關鍵詞】工作上從空洞的幻想中回歸，以意志（will）與決心（determination）推進具體的計劃（project），願望（desire）化為行動。',
      advice: '【偉特原著核心】逆位的「決心」（determination）——從幻象的迷霧中走出，清醒地選擇一個方向並付諸行動，這正是七號杯的超越之道。'
    }
  },
  {
    id: 43,
    name: '聖杯八',
    englishName: 'Eight of Cups',
    number: '8',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名男子在月夜下離去，背對八個整齊排列的聖杯（顯示中間有一個空缺），他轉向左方朝山地走去。月亮表情憂鬱，帶有蝕缺。整個畫面充滿離棄與尋找的氛圍。',
    keywords: ['事情的衰退', '輕描淡寫', '喜悅', '溫和', '膽怯', '榮譽', '謙遜', '偉大的喜悅', '宴饗'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'The decline of a matter, or that a matter which has been thought important is really of slight consequence; also joy, mildness, timidity, honour, modesty.\'\n\n直譯：事情的衰退，或一件被認為重要的事實際上無關緊要；亦指喜悅、溫和、膽怯、榮譽、謙遜。',
      love: '【依原著關鍵詞】感情中的衰退（decline），或原本以為重要的關係實際上無關緊要（slight consequence）；但偉特也列出「喜悅、榮譽、謙遜」——離去可能是平靜而有尊嚴的。',
      career: '【依原著關鍵詞】工作上事情的衰退（decline），看似重要的項目實際輕如鴻毛（slight consequence），以溫和（mildness）與謙遜（modesty）面對轉變。',
      advice: '【偉特原著核心】偉特的矛盾並置——「衰退」與「喜悅、榮譽」同時出現，提醒有些離去是正確的，放下不值得的並非失敗，而是誠實的榮耀。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Great joy, happiness, feasting.\'\n\n直譯：極大的喜悅、幸福、宴饗。',
      love: '【依原著關鍵詞】感情中帶來極大的喜悅（great joy）與幸福（happiness），是慶祝與宴饗（feasting）的時刻，情感的飽足令人歡欣。',
      career: '【依原著關鍵詞】工作上帶來極大的喜悅（great joy）與慶祝（feasting），幸福（happiness）來自工作的成果，是豐盛的時刻。',
      advice: '【偉特原著核心】逆位的「極大的喜悅」（great joy）——正位的衰退與離去，逆位轉化為盛大的歡慶，這種翻轉提醒：有時告別後反而迎來真正的喜悅。'
    }
  },
  {
    id: 44,
    name: '聖杯九',
    englishName: 'Nine of Cups',
    number: '9',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名胖乎乎的男子滿意地坐在中央，身後的半弧形架子上整齊陳列九個聖杯。他雙臂交叉，面帶自得其樂的笑容，象徵物質與感官的完全滿足。',
    keywords: ['和諧', '滿足', '肉體的舒適', '勝利', '成功', '優勢', '滿足感', '真理', '忠誠', '自由'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent.\'\n\n直譯：和諧、滿足、肉體的舒適；亦指勝利、成功、優勢；對問事者的滿足。',
      love: '【依原著關鍵詞】感情中帶來和諧（concord）與滿足（contentment），肉體與情感的舒適（physical bien-être）俱全，是問事者在感情上獲得的滿足（satisfaction for the Querent）。',
      career: '【依原著關鍵詞】工作上勝利（victory）、成功（success）與優勢（advantage）集於一身，問事者獲得應有的滿足（satisfaction），是愿望實現之牌。',
      advice: '【偉特原著核心】「對問事者的滿足」（satisfaction for the Querent）——九號杯被稱為「愿望之牌」，此時的滿足是真實而全面的，珍視並感恩這份圓滿。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections.\'\n\n直譯：真理、忠誠、自由；但解讀有分歧，包括錯誤、不完美。',
      love: '【依原著關鍵詞】感情中真理（truth）與忠誠（loyalty）浮現，但偉特注明「解讀有分歧」——可能是真實的自由（liberty），也可能是錯誤（mistakes）與不完美（imperfections）。',
      career: '【依原著關鍵詞】工作上真理（truth）得到彰顯，但需注意錯誤（mistakes）與不完美（imperfections），解讀視具體情況而定。',
      advice: '【偉特原著核心】偉特罕見地在逆位中給出分歧的解讀——「解讀有分歧」（readings vary）提醒占卜者需結合整體牌陣，不可單獨以逆位定論。'
    }
  },
  {
    id: 45,
    name: '聖杯十',
    englishName: 'Ten of Cups',
    number: '10',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一對夫婦攜手站立，望向遠處彩虹般的十個聖杯弧形（在天空中顯現），兩個孩子在旁歡舞。背景是美麗的鄉間與河流。整個圖像充滿家庭幸福的圓滿。',
    keywords: ['滿足', '整個心靈的平靜', '人類愛與友誼的完美', '城鄉', '暴力', '憤慨', '不誠實'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; also the town, the country, or the province inhabited by the Querent.\'\n\n直譯：滿足、整個心靈的平靜；該狀態的完美；亦指人類愛與友誼的完美；亦指問事者居住的城鎮、鄉村或省份。',
      love: '【依原著關鍵詞】感情中達到人類愛與友誼的完美（perfection of human love and friendship），整個心靈的平靜（repose of the entire heart），是情感圓滿的最高點。',
      career: '【依原著關鍵詞】工作上帶來整體的滿足（contentment）與平靜，問事者在所居之地（town, country, province）建立了圓滿的生活基礎。',
      advice: '【偉特原著核心】「整個心靈的平靜」（repose of the entire heart）——十號杯是聖杯組的終點，代表情感與家庭生活的最高圓滿，珍視這份真實的幸福。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Repose of the false heart, indignation, violence.\'\n\n直譯：假心的平靜、憤慨、暴力。',
      love: '【依原著關鍵詞】感情中是「假心的平靜」（repose of the false heart），表面的和諧掩蓋憤慨（indignation）與暴力（violence），幸福的外表下充滿不誠實。',
      career: '【依原著關鍵詞】工作上表面的滿足是「假心的平靜」，內在的憤慨（indignation）與潛在的暴力（violence）正在積累，需防衝突爆發。',
      advice: '【偉特原著核心】逆位的「假心的平靜」對應正位的「整個心靈的平靜」——相同的字詞加上「假心」，揭示虛假的圓滿終究難以持久。'
    }
  },
  {
    id: 46,
    name: '聖杯侍衛',
    englishName: 'Page of Cups',
    number: 'Page',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名身著花紋上衣的年輕人，手持一個聖杯，杯中伸出一條魚（魚正在看著他，他也看著魚）。他站在海邊，神情專注而略帶驚奇，象徵直覺的信息來自潛意識。',
    keywords: ['膚色白淨', '研習', '消息', '申請', '反思', '冥想', '趣味', '依戀', '誘惑', '欺騙'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Fair, pleasing, somewhat effeminate youth, of studious and intent aspect; news, message; application, reflection, meditation; also directed to business.\'\n\n直譯：白淨、討喜、略帶陰柔的年輕人，神情認真而專注；消息、信息；申請、反思、冥想；亦指導向商業。',
      love: '【依原著關鍵詞】感情中代表白淨討喜（fair, pleasing）且略帶陰柔（effeminate）的年輕人，帶來消息（news）與信息（message），反思（reflection）與冥想（meditation）深化情感。',
      career: '【依原著關鍵詞】工作上帶來消息（news）與申請（application），以反思（reflection）與冥想（meditation）為工作方式，亦涉及商業（business）。',
      advice: '【偉特原著核心】偉特的「認真而專注的神情」（studious and intent aspect）——聖杯侍衛的信息來自直覺的深處，需以冥想與反思接收。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Taste, inclination, attachment, seduction, deception, artifice.\'\n\n直譯：品味、傾向、依戀、誘惑、欺騙、人為手段。',
      love: '【依原著關鍵詞】感情中的依戀（attachment）化為誘惑（seduction）與欺騙（deception），人為手段（artifice）取代了真誠的溝通，需警惕操縱性的魅力。',
      career: '【依原著關鍵詞】工作上的品味（taste）與傾向（inclination）可能淪為欺騙（deception）與人為手段（artifice），需辨別真誠與操縱。',
      advice: '【偉特原著核心】逆位的「欺騙與人為手段」——直覺的信使在逆位中化為誘惑與欺騙，美麗的表面下可能是精心設計的操縱。'
    }
  },
  {
    id: 47,
    name: '聖杯騎士',
    englishName: 'Knight of Cups',
    number: 'Knight',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名騎士騎著白馬緩慢前進，手持一個聖杯，神情溫柔而帶有詩意。他的頭盔與靴子上有翅膀，盔甲上有魚的圖案。白馬步伐優雅，整個畫面充滿浪漫主義的氣息。',
    keywords: ['到來', '接近', '使者', '提案', '態度', '邀請', '詭計', '詐騙', '欺詐', '重複'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Arrival, approach—sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.\'\n\n直譯：到來、接近——有時是使者的到來；進展、提案、態度、邀請、誘發。',
      love: '【依原著關鍵詞】感情中充滿浪漫的到來（arrival）與邀請（invitation），提案（proposition）充滿詩意，態度（demeanour）溫柔，是感情中的美好進展（advances）。',
      career: '【依原著關鍵詞】工作上迎來到來（arrival）與進展（advances），提案（proposition）帶來新機遇，邀請（invitation）打開新的大門。',
      advice: '【偉特原著核心】偉特的「誘發」（incitement）——聖杯騎士不只是浪漫，他的到來會激發行動與情感，需辨別這股誘發力量的真實動機。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Trickery, artifice, subtlety, swindling, duplicity, fraud.\'\n\n直譯：詭計、人為手段、機敏（狡猾）、欺詐、欺騙（兩面性）、詐騙。',
      love: '【依原著關鍵詞】感情中的浪漫接近變為詭計（trickery）與欺騙（duplicity），詐騙（swindling）與詐騙（fraud）的警示——浪漫騎士的逆位是最危險的操縱者。',
      career: '【依原著關鍵詞】工作上出現詭計（trickery）與詐騙（fraud），機敏（subtlety）化為狡猾，欺騙（duplicity）使合作關係破裂。',
      advice: '【偉特原著核心】逆位的「欺騙與詐騙」——浪漫的外表下是最精密的詐騙，聖杯騎士逆位是偉特整副牌中最明確的欺騙警示。'
    }
  },
  {
    id: 48,
    name: '聖杯王后',
    englishName: 'Queen of Cups',
    number: 'Queen',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名白皙美麗的女王坐在海邊寶座上，手捧一個精緻的封閉式聖杯（與其他牌的開放聖杯不同），她凝視著它，神情充滿夢幻的洞察。寶座上有人魚與貝殼裝飾。',
    keywords: ['善良', '白淨', '誠實', '奉獻', '視覺的天賦', '成功', '幸福', '智慧', '美德', '邪惡', '腐敗'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.\'\n\n直譯：善良白淨的女性；誠實、奉獻的女性，將為問事者效勞；充滿愛的智識，因此具有視覺的天賦；成功、幸福、喜悅；亦指智慧、美德；完美的配偶與好母親。',
      love: '【依原著關鍵詞】偉特明確稱其為「完美的配偶與好母親」——感情中代表誠實（honest）、奉獻（devoted）且充滿愛的智慧（loving intelligence）的女性，具有視覺的天賦（gift of vision）。',
      career: '【依原著關鍵詞】工作上善良（good）且誠實（honest），以奉獻（devoted）的精神為問事者服務，充滿愛的智識帶來成功（success）與幸福（happiness）。',
      advice: '【偉特原著核心】「充滿愛的智識，因此具有視覺的天賦」——聖杯王后的洞察力來自她深厚的情感與智慧的結合，是直覺與理智並重的完整女性。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.\'\n\n直譯：善良女性；否則是傑出但不可信任的女性；乖僻的女性；惡習、恥辱、墮落。',
      love: '【依原著關鍵詞】感情中可能是傑出但不可信任（not to be trusted）的女性，乖僻（perverse）的行為帶來恥辱（dishonour）與墮落（depravity）。',
      career: '【依原著關鍵詞】工作上出現傑出但不可信任的合作對象，惡習（vice）與恥辱（dishonour）潛藏在傑出表現的背後。',
      advice: '【偉特原著核心】偉特的「傑出但不可信任」——美麗的外表與真實的品格可能完全相反，視覺的天賦在逆位中可能化為操縱他人的工具。'
    }
  },
  {
    id: 49,
    name: '聖杯國王',
    englishName: 'King of Cups',
    number: 'King',
    suit: 'cups',
    element: '水',
    icon: '💧',
    description: '【偉特原著·圖像】一名國王坐在水中的石制王座上，身著藍袍，右手持聖杯，左手持權杖。海浪在他周圍翻湧，遠方有一艘船，左邊有一條跳躍的魚。他處於情感的波濤中卻穩坐不動。',
    keywords: ['白淨男子', '商業', '法律', '神學', '公平', '藝術', '科學', '不誠實', '詐騙', '不義', '醜聞'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science; creative intelligence.\'\n\n直譯：白淨男子、商人、法律或神學領域的男性；負責任，傾向於幫助問事者；亦指公平、藝術與科學；創造性的智識。',
      love: '【依原著關鍵詞】感情中代表負責任（responsible）且願意幫助（disposed to oblige）問事者的男性，以公平（equity）與創造性智識（creative intelligence）對待感情。',
      career: '【依原著關鍵詞】工作上是商人（man of business）、法律或神學的代表，責任感強（responsible），以藝術（art）、科學（science）與創造性智識（creative intelligence）推動事業。',
      advice: '【偉特原著核心】「創造性的智識」（creative intelligence）——聖杯國王結合了情感的深度與智慧的廣度，他的力量在於以創造力整合感性與理性。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.\'\n\n直譯：不誠實、兩面派的男性；無賴行徑、勒索、不公義、惡習、醜聞、掠奪、重大損失。',
      love: '【依原著關鍵詞】感情中出現不誠實（dishonest）且兩面派（double-dealing）的男性，無賴行徑（roguery）與醜聞（scandal）可能毀滅關係，帶來重大損失（considerable loss）。',
      career: '【依原著關鍵詞】工作上遭遇無賴行徑（roguery）與勒索（exaction），不公義（injustice）與掠奪（pillage）帶來重大損失（considerable loss），惡習（vice）與醜聞（scandal）並發。',
      advice: '【偉特原著核心】逆位的「勒索與掠奪」——創造性的智識在逆位中化為精密的掠奪，「重大損失」（considerable loss）是最終的警示，需提前識別不誠實的跡象。'
    }
  },

  // ==================== SWORDS ====================
  {
    id: 50,
    name: '寶劍首牌',
    englishName: 'Ace of Swords',
    number: 'Ace',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一隻從雲中伸出的手握持一把豎直的寶劍，劍尖附近有王冠，冠上掛有橄欖枝（勝利）與棕櫚枝（殉道），周圍有六個希伯來字母（偉特認為象徵神聖名號）飄散。',
    keywords: ['勝利', '征服', '力量的極致', '強大的力量', '愛與恨', '概念', '分娩', '增加', '繁多'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Triumph, the excessive degree in everything, conquest, triumph of force; a card of great force, in love as well as in hatred.\'\n\n直譯：勝利、一切事物中的極致程度、征服、力量的勝利；一張在愛與恨中都具有強大力量的牌。',
      love: '【依原著關鍵詞】感情中充滿強大的力量（great force），偉特明確指出「在愛與恨中都具有強大力量」——這股力量是雙向的，愛可以極致，恨亦可以極致。',
      career: '【依原著關鍵詞】工作上以極致的力量（excessive degree）征服（conquest），勝利（triumph of force）來自強大的意志力，在一切事物中追求最高度。',
      advice: '【偉特原著核心】「在愛與恨中都具有強大力量」——寶劍首牌的力量是中性的，極致（excessive degree）本身是其特質，方向由持劍者決定。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The same, but the results are disastrous; also conception, childbirth, augmentation, multiplicity.\'\n\n直譯：相同，但結果是災難性的；亦指概念、分娩、增加、繁多。',
      love: '【依原著關鍵詞】感情中同樣強大的力量（the same）帶來災難性的結果（results are disastrous），極致的愛或恨造成無可挽回的破壞。',
      career: '【依原著關鍵詞】工作上相同的征服力量（the same），但結果災難性（disastrous），概念（conception）的誕生（childbirth）帶來增加（augmentation）的複雜性。',
      advice: '【偉特原著核心】逆位的「相同但結果災難」——偉特明確說明力量未變，只是方向與結果出了問題，極致的力量在失控時必然帶來極致的破壞。'
    }
  },
  {
    id: 51,
    name: '寶劍二',
    englishName: 'Two of Swords',
    number: '2',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名被蒙住眼睛的女子端坐，雙臂交叉各持一把寶劍，劍尖朝上。她背對大海，身後有月亮。她的平衡是強制的靜止，拒絕看見的靜默對峙。',
    keywords: ['順從', '均衡', '勇氣', '友誼', '柔情', '親密', '偽裝', '謊言', '不忠'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; also tenderness, affection, intimacy.\'\n\n直譯：順從及其所暗示的均衡、勇氣、友誼、武裝狀態中的和諧；亦指柔情、情誼、親密。',
      love: '【依原著關鍵詞】感情中以強制的均衡（equipoise）維持表面的和諧（concord），偉特也列出柔情（tenderness）與親密（intimacy），暗示這種平衡中有真實的情感連結。',
      career: '【依原著關鍵詞】工作上以順從（conformity）與均衡（equipoise）維持和諧，需要在對立的力量中保持勇氣（courage）與友誼（friendship）。',
      advice: '【偉特原著核心】「武裝狀態中的和諧」（concord in a state of arms）——這種平靜是防禦性的靜止，不是真正的和平，需勇氣才能打破對峙。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Imposture, falsehood, duplicity, disloyalty.\'\n\n直譯：偽裝、謊言、兩面性、不忠。',
      love: '【依原著關鍵詞】感情中的均衡被打破，偽裝（imposture）與謊言（falsehood）浮現，兩面性（duplicity）與不忠（disloyalty）毀壞了原本的「友誼與親密」。',
      career: '【依原著關鍵詞】工作上偽裝（imposture）與兩面性（duplicity）取代了真誠的合作，謊言（falsehood）與不忠（disloyalty）破壞團隊關係。',
      advice: '【偉特原著核心】逆位的「兩面性」（duplicity）——蒙眼的平衡一旦打破，隱藏其後的謊言與不忠便無所遁形。'
    }
  },
  {
    id: 52,
    name: '寶劍三',
    englishName: 'Three of Swords',
    number: '3',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】三把寶劍刺穿一顆心形，背景是烏雲與雨。圖像極為直接，象徵心痛、分離與苦難，是偉特最直觀的圖像之一。',
    keywords: ['移除', '缺席', '延誤', '分裂', '分散', '精神錯亂', '失誤', '損失', '錯亂'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Removal, absence, delay, division, rupture, dispersion.\'\n\n直譯：移除、缺席、延誤、分裂、決裂、分散。',
      love: '【依原著關鍵詞】感情中的分裂（division）與決裂（rupture），缺席（absence）造成心痛，分散（dispersion）使關係無法凝聚，延誤（delay）使痛苦延長。',
      career: '【依原著關鍵詞】工作上的移除（removal）、缺席（absence）與延誤（delay），計劃遭到分裂（division）與分散（dispersion）的打擊。',
      advice: '【偉特原著核心】偉特以「移除」（removal）居首——三號劍的核心是某種東西被強行取走，這種痛苦是真實的，接受它是療癒的第一步。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Mental alienation, error, loss, distraction, disorder, confusion.\'\n\n直譯：精神疏離、錯誤、損失、分心、混亂、困惑。',
      love: '【依原著關鍵詞】感情中精神疏離（mental alienation）使人無法真正連結，混亂（confusion）與困惑（disorder）中發生錯誤（error），帶來損失（loss）。',
      career: '【依原著關鍵詞】工作上精神分心（distraction）與混亂（disorder），錯誤（error）頻發，損失（loss）因困惑（confusion）而加深。',
      advice: '【偉特原著核心】逆位的「精神疏離」（mental alienation）——心靈的痛苦在逆位中轉化為更難處理的精神混亂，需先恢復內在的清明才能面對外在的混亂。'
    }
  },
  {
    id: 53,
    name: '寶劍四',
    englishName: 'Four of Swords',
    number: '4',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名騎士的雕像靜臥在石棺上（手合十如祈禱），棺側刻有浮雕，上方牆上有彩色玻璃窗。三把寶劍懸掛在他身旁，一把在身下。整個畫面充滿安靜退隱的氣氛。',
    keywords: ['警覺', '退隱', '孤獨', '隱士的安息', '流亡', '墓地', '智慧的管理', '節儉', '遺囑'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Vigilance, retreat, solitude, hermit\'s repose, exile, tomb and coffin.\'\n\n直譯：警覺、退隱、孤獨、隱士的安息、流亡、墓地與棺木。',
      love: '【依原著關鍵詞】感情中需要退隱（retreat）與孤獨（solitude），暫時的休息（hermit\'s repose）是必要的，關係可能因流亡（exile）或分離而暫停。',
      career: '【依原著關鍵詞】工作上以退隱（retreat）與警覺（vigilance）面對局勢，暫時的孤獨安息（hermit\'s repose）是蓄積力量的必要手段。',
      advice: '【偉特原著核心】偉特的「墓地與棺木」——四號劍的休息不是死亡，而是如騎士雕像般的靜止積蓄，在孤獨中警覺地等待復甦的時機。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Wise administration, circumspection, economy, avarice, precaution, testament.\'\n\n直譯：智慧的管理、謹慎周密、節儉、吝嗇、謹慎預防、遺囑。',
      love: '【依原著關鍵詞】感情中以智慧管理（wise administration）與謹慎（circumspection）應對，但吝嗇（avarice）可能使感情缺乏溫度，需防過度謹慎（precaution）反成障礙。',
      career: '【依原著關鍵詞】工作上智慧的管理（wise administration）與節儉（economy）帶來效益，謹慎預防（precaution）降低風險，但需警惕淪為吝嗇（avarice）。',
      advice: '【偉特原著核心】逆位的「遺囑」（testament）——退隱後的重新管理，以智慧整頓，但偉特列出「吝嗇」警示：謹慎與吝嗇之間的界線需要智慧辨別。'
    }
  },
  {
    id: 54,
    name: '寶劍五',
    englishName: 'Five of Swords',
    number: '5',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名得意的男子拾起三把寶劍，另有兩把在地上。兩名失敗者在遠方低頭而去，背景烏雲。勝利者的表情有些不懷好意，展示了一場勝之不武的勝利。',
    keywords: ['退化', '毀滅', '撤銷', '恥辱', '不榮耀', '損失', '失敗', '埋葬'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Degradation, destruction, revocation, infamy, dishonour, loss; also defeat.\'\n\n直譯：退化、毀滅、撤銷、惡名、不榮耀、損失；亦指失敗。',
      love: '【依原著關鍵詞】感情中充滿退化（degradation）與恥辱（dishonour），可能是一段帶來惡名（infamy）的關係，或在感情的對抗中遭受失敗（defeat）與損失（loss）。',
      career: '【依原著關鍵詞】工作上面臨毀滅（destruction）、撤銷（revocation）與不榮耀（dishonour），可能是惡名（infamy）纏身的失敗（defeat），帶來嚴重損失（loss）。',
      advice: '【偉特原著核心】偉特以「退化」（degradation）居首——五號劍的勝利是空洞的，或自己在退化中失敗，這種不榮耀的結局需要正視而非掩飾。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The same; burial and obsequies.\'\n\n直譯：相同；埋葬與喪禮。',
      love: '【依原著關鍵詞】感情中逆位含義相同，加上「埋葬與喪禮」——關係的終結已成定局，需以莊重的姿態送別這段關係。',
      career: '【依原著關鍵詞】工作上逆位意義相同，埋葬（burial）代表事業或計劃的徹底終結，喪禮（obsequies）象徵正式的告別儀式。',
      advice: '【偉特原著核心】逆位的「埋葬與喪禮」——偉特明確說明「相同」後加上儀式性的終結，這是承認失敗並正式告別的時刻，哀悼是必要的過程。'
    }
  },
  {
    id: 55,
    name: '寶劍六',
    englishName: 'Six of Swords',
    number: '6',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名船夫划著小船，船上有一個蒙著頭的女子與一名小孩，船頭插著六把寶劍。他們從波濤洶湧的水域駛向平靜的水面，代表從困難到安穩的過渡。',
    keywords: ['水上旅途', '路線', '方式', '使者', '特使', '說明', '告白', '公開', '求愛提案'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Journey by water, route, way, envoy, commissionary, expedient.\'\n\n直譯：水上旅途、路線、方式、使者、特使、權宜之計。',
      love: '【依原著關鍵詞】感情中的水上旅途（journey by water）代表關係的過渡與移動，通過使者（envoy）的溝通找到前進的路線（route），以權宜之計（expedient）化解困局。',
      career: '【依原著關鍵詞】工作上以使者（envoy）或特使（commissionary）的身份執行任務，找到前進的路線（route）與方式（way），水上旅途象徵必要的轉移。',
      advice: '【偉特原著核心】偉特的「權宜之計」（expedient）——六號劍不是完美的解決，而是當下最可行的過渡，從洶湧到平靜的旅程已經開始，方向是正確的。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Declaration, confession, publicity; also a proposal of love.\'\n\n直譯：聲明、告白、公開化；亦指愛的提案。',
      love: '【依原著關鍵詞】感情中逆位帶來告白（confession）與「愛的提案」（proposal of love）——私下的感情公開化（publicity），需要勇氣的聲明（declaration）。',
      career: '【依原著關鍵詞】工作上事情公開化（publicity），聲明（declaration）公諸於世，告白（confession）帶來新的可能或責任。',
      advice: '【偉特原著核心】逆位的「愛的提案」（proposal of love）——水上的旅途在逆位中化為公開的告白，秘密的行進反而帶來坦誠的宣告。'
    }
  },
  {
    id: 56,
    name: '寶劍七',
    englishName: 'Seven of Swords',
    number: '7',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名男子踮腳潛行，懷中抱著五把寶劍，身後的地上留有兩把。他回頭張望軍營，面帶得意的微笑，像是剛完成了一次偷竊或策略性的撤退。',
    keywords: ['設計', '企圖', '願望', '希望', '自信', '爭吵', '失敗的計劃', '好的建議', '謠言'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance.\'\n\n直譯：設計、企圖、願望、希望、自信；亦指爭吵、可能失敗的計劃、惱怒。',
      love: '【依原著關鍵詞】感情中充滿設計（design）與企圖（attempt），帶著希望（hope）與自信（confidence）行動，但偉特同時警示「可能失敗的計劃」（a plan that may fail）。',
      career: '【依原著關鍵詞】工作上有精心的設計（design）與企圖（attempt），充滿希望（hope）與自信（confidence），但計劃有失敗的風險（a plan that may fail），需注意爭吵（quarrelling）。',
      advice: '【偉特原著核心】「可能失敗的計劃」（a plan that may fail）——七號劍的策略性行動背後有自信，但偉特的警示是：過度的自信可能使計劃失敗，需保持審慎。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Good advice, counsel, instruction, slander, babbling.\'\n\n直譯：好的建議、忠告、指導、誹謗、饒舌。',
      love: '【依原著關鍵詞】感情中帶來好的建議（good advice）與忠告（counsel），但誹謗（slander）與饒舌（babbling）可能破壞信任，需辨別真正的忠告與惡意的謠言。',
      career: '【依原著關鍵詞】工作上好的建議（good advice）與指導（instruction）到來，但誹謗（slander）與饒舌（babbling）在職場蔓延，需謹慎辨別。',
      advice: '【偉特原著核心】逆位的「誹謗與饒舌」（slander, babbling）——策略性的秘密行動在逆位中轉為言辭上的傷害，需防止不負責任的言語造成損失。'
    }
  },
  {
    id: 57,
    name: '寶劍八',
    englishName: 'Eight of Swords',
    number: '8',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名被蒙住眼睛、被鬆散綑綁的女子站立，周圍有八把寶劍插在地上圍繞著她。她其實可以逃脫，但因蒙眼而不自知。背景是黑暗與遠方的城堡。',
    keywords: ['壞消息', '激烈的悲憤', '危機', '責難', '衝突', '誣告', '疾病', '不安', '困難', '意外'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.\'\n\n直譯：壞消息、激烈的悲憤、危機、責難、被束縛的力量、衝突、誣告；亦指疾病。',
      love: '【依原著關鍵詞】感情中的壞消息（bad news）帶來激烈的悲憤（violent chagrin），被束縛的力量（power in trammels）使人無法自由，衝突（conflict）與誣告（calumny）傷害關係。',
      career: '【依原著關鍵詞】工作上危機（crisis）、責難（censure）與衝突（conflict）並發，誣告（calumny）可能損害名譽，疾病（sickness）暗示身心壓力。',
      advice: '【偉特原著核心】「被束縛的力量」（power in trammels）——八號劍的困境往往是自己的心智造成的，蒙眼的束縛可以解除，但需先意識到自己其實有能力逃脫。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.\'\n\n直譯：不安、困難、對立、意外、背叛；未預料的事；命定。',
      love: '【依原著關鍵詞】感情中充滿不安（disquiet）與對立（opposition），意外（accident）與背叛（treachery）使關係陷入危機，未預料的事（what is unforeseen）改變一切。',
      career: '【依原著關鍵詞】工作上遭遇意外（accident）、對立（opposition）與背叛（treachery），命定的（fatality）困難帶來不安（disquiet）。',
      advice: '【偉特原著核心】逆位的「命定」（fatality）——困難在逆位中帶有命運的色彩，意外與背叛是偉特最嚴峻的逆位組合之一，需防禦未預料的打擊。'
    }
  },
  {
    id: 58,
    name: '寶劍九',
    englishName: 'Nine of Swords',
    number: '9',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名人物從夢中驚坐而起，雙手掩面，床頭的牆上有九把寶劍整齊排列。床上的被單有玫瑰和占星符號。整個畫面是午夜的恐懼與噩夢的氣氛。',
    keywords: ['死亡', '失敗', '流產', '延誤', '失望', '絕望', '監禁', '懷疑', '羞恥'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Death, failure, miscarriage, delay, deception, disappointment, despair.\'\n\n直譯：死亡、失敗、流產（失敗）、延誤、欺騙、失望、絕望。',
      love: '【依原著關鍵詞】感情中充滿絕望（despair）與失望（disappointment），欺騙（deception）帶來深刻的傷痛，延誤（delay）使痛苦延長，關係如「流產」（miscarriage）般無疾而終。',
      career: '【依原著關鍵詞】工作上失敗（failure）與流產的計劃（miscarriage），延誤（delay）與欺騙（deception）帶來絕望（despair），是偉特最沉重的牌之一。',
      advice: '【偉特原著核心】偉特以「死亡」居首但並非字面意思——九號劍的恐懼與絕望是真實的，但如同夢中的噩夢，天明後往往沒有想象中那麼嚴重。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Imprisonment, suspicion, doubt, reasonable fear, shame.\'\n\n直譯：監禁、懷疑、懷疑（自我懷疑）、合理的恐懼、羞恥。',
      love: '【依原著關鍵詞】感情中感受如監禁（imprisonment）般的困陷，懷疑（suspicion, doubt）破壞信任，羞恥（shame）使人無法坦然，合理的恐懼（reasonable fear）提醒需要謹慎。',
      career: '【依原著關鍵詞】工作上懷疑（suspicion）與自我懷疑（doubt）侵蝕判斷力，羞恥（shame）帶來心理壓力，監禁（imprisonment）感使人無法自由行動。',
      advice: '【偉特原著核心】逆位的「合理的恐懼」（reasonable fear）——與正位的絕望不同，逆位的恐懼是「合理的」，這意味著需要正視現實的危險而非自我麻痺。'
    }
  },
  {
    id: 59,
    name: '寶劍十',
    englishName: 'Ten of Swords',
    number: '10',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一個人物面朝下躺在地上，後背插有十把寶劍。背景是黑色的天空，但地平線出現金黃色的曙光。整個圖像象徵徹底的終結，但曙光暗示黑暗後的黎明。',
    keywords: ['痛苦', '折磨', '眼淚', '悲傷', '荒涼', '利益', '利潤', '成功', '青睞', '力量', '權威'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.\'\n\n直譯：凡圖像所暗示的一切；亦指痛苦、折磨、眼淚、悲傷、荒涼。它並非特別指暴力死亡之牌。',
      love: '【依原著關鍵詞】感情中的痛苦（pain）、折磨（affliction）與眼淚（tears），悲傷（sadness）與荒涼（desolation）帶來徹底的終結感；偉特特別澄清「不是暴力死亡之牌」。',
      career: '【依原著關鍵詞】工作上遭遇痛苦的折磨（affliction）與悲傷（sadness），荒涼（desolation）感如十把劍刺穿，但偉特澄清這不是最極端的結局。',
      advice: '【偉特原著核心】偉特特意澄清「並非暴力死亡之牌」——這是重要的提示，十號劍的徹底感來自精神上的崩潰而非實際的極端，黎明之光在地平線上。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Advantage, profit, success, favour, but none of these are permanent; also power and authority.\'\n\n直譯：利益、利潤、成功、青睞，但這些都不是永久的；亦指力量與權威。',
      love: '【依原著關鍵詞】感情中迎來利益（advantage）與青睞（favour），但偉特明確警示「這些都不是永久的」（none of these are permanent），需把握短暫的好轉時機。',
      career: '【依原著關鍵詞】工作上帶來利潤（profit）、成功（success）與力量（power），但偉特的警示是：這些成果不會持久，需趁此時機鞏固。',
      advice: '【偉特原著核心】「但這些都不是永久的」——逆位的成功是短暫的曙光，如同十號劍圖像中的地平線金光，需要把握但不可依賴。'
    }
  },
  {
    id: 60,
    name: '寶劍侍衛',
    englishName: 'Page of Swords',
    number: 'Page',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名年輕人站在高地上，雙手握持一把寶劍（向上舉起），眼神警惕地向周圍張望。風吹過他的衣袍與頭髮，他的姿態顯示準備應付任何突發狀況的警覺性。',
    keywords: ['權威', '監督', '秘密服務', '警覺', '監視', '審查', '邪惡的一面', '未預見', '疾病'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Authority, overseeing, secret service, vigilance, spying, examination.\'\n\n直譯：權威、監督、秘密服務、警覺、監視、審查。',
      love: '【依原著關鍵詞】感情中充滿警覺（vigilance）與監視（spying），關係中存在秘密服務（secret service）的色彩，審查（examination）是主要的互動方式。',
      career: '【依原著關鍵詞】工作上承擔監督（overseeing）與秘密服務（secret service）的職責，警覺（vigilance）是其核心特質，審查（examination）帶來洞察力。',
      advice: '【偉特原著核心】「秘密服務」（secret service）——寶劍侍衛是偉特明確說明有情報收集功能的牌，其警覺性是一把雙刃劍，既能保護也能侵犯。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'More evil side of these qualities; what is unforeseen, unprepared state; sickness also intimated.\'\n\n直譯：這些特質更邪惡的一面；未預見的事、毫無準備的狀態；亦暗示疾病。',
      love: '【依原著關鍵詞】感情中正位的警覺轉為更邪惡（more evil side）的監視與控制，毫無準備（unprepared state）面對未預見的衝擊（what is unforeseen）。',
      career: '【依原著關鍵詞】工作上陷入毫無準備的狀態（unprepared state），未預見的衝擊（what is unforeseen）帶來危機，疾病（sickness）暗示壓力對健康的影響。',
      advice: '【偉特原著核心】逆位的「更邪惡的一面」（more evil side）——偉特直接指明逆位是正位特質的黑暗面，警覺化為偏執，秘密服務化為惡意的監控。'
    }
  },
  {
    id: 61,
    name: '寶劍騎士',
    englishName: 'Knight of Swords',
    number: 'Knight',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名騎士騎著白馬全速衝鋒，手持寶劍高舉，神情激烈。馬匹騰空飛馳，風中雲飛，充滿衝勁與勇猛。背景是激烈的戰場氛圍，充滿急速與破壞的能量。',
    keywords: ['技巧', '英勇', '能力', '防衛', '仇恨', '憤怒', '戰爭', '毀滅', '反對', '抵抗', '魯莽'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin.\'\n\n直譯：技巧、英勇、能力、防衛、靈巧、仇恨、憤怒、戰爭、毀滅、反對、抵抗、毀滅。',
      love: '【依原著關鍵詞】感情中的激烈衝突——仇恨（enmity）、憤怒（wrath）與戰爭（war）的氛圍，但也有技巧（skill）與英勇（bravery）的面向；此騎士是激烈的存在。',
      career: '【依原著關鍵詞】工作上技巧（skill）與能力（capacity）俱備，但毀滅（destruction）與反對（opposition）並行，仇恨（enmity）與憤怒（wrath）帶來激烈的競爭。',
      advice: '【偉特原著核心】偉特在正位就列出「毀滅、仇恨、憤怒、戰爭」——這表明寶劍騎士的能量本身就帶有強烈的破壞性，技巧與英勇只是其中的一部分。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Imprudence, incapacity, extravagance.\'\n\n直譯：魯莽輕率、無能、揮霍。',
      love: '【依原著關鍵詞】感情中因魯莽（imprudence）與無能（incapacity）而造成傷害，揮霍（extravagance）的方式使關係難以維繫。',
      career: '【依原著關鍵詞】工作上因魯莽（imprudence）與無能（incapacity）而失敗，揮霍（extravagance）使資源耗盡，失去了正位的技巧與能力。',
      advice: '【偉特原著核心】逆位的「魯莽」（imprudence）——高速衝鋒的騎士在逆位中失去了技巧與方向，只剩下衝動與浪費，無謀的勇氣是自毀。'
    }
  },
  {
    id: 62,
    name: '寶劍王后',
    englishName: 'Queen of Swords',
    number: 'Queen',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名女王端坐於高處的寶座，右手持寶劍筆直指天，左手向前伸出（似乎在迎接或指引）。她表情嚴肅甚至略帶悲傷，寶座上有蝴蝶與天使裝飾。背景是烏雲與風。',
    keywords: ['寡婦', '女性的悲傷', '貧困', '缺席', '不育', '剝奪', '哀悼', '惡意', '偏執', '欺騙'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Widowhood, female sadness and embarrassment, poverty, absence, sterility; privation, separation, mourning, loss.\'\n\n直譯：寡婦、女性的悲傷與困窘、貧困、缺席、不育；剝奪、分離、哀悼、損失。',
      love: '【依原著關鍵詞】感情中的寡婦（widowhood）象徵失去，女性的悲傷（female sadness）與困窘（embarrassment），分離（separation）與哀悼（mourning）是核心主題，損失（loss）深刻。',
      career: '【依原著關鍵詞】工作上貧困（poverty）、缺席（absence）與剝奪（privation），不育（sterility）暗示缺乏成果，損失（loss）與哀悼（mourning）的氛圍。',
      advice: '【偉特原著核心】偉特以「寡婦」為核心意象——寶劍王后理解深刻的失去，她的智慧來自痛苦的淬煉，這種悲傷的力量使她獨立而清醒。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Malice, bigotry, artifice, prudery, bale, deceit.\'\n\n直譯：惡意、偏執、人為手段、假正經、傷害、欺騙。',
      love: '【依原著關鍵詞】感情中的惡意（malice）與欺騙（deceit），偏執（bigotry）扭曲判斷，假正經（prudery）掩蓋真實意圖，人為手段（artifice）製造傷害（bale）。',
      career: '【依原著關鍵詞】工作上惡意（malice）與偏執（bigotry）破壞職場，人為手段（artifice）製造傷害（bale），欺騙（deceit）成為主要的互動模式。',
      advice: '【偉特原著核心】逆位的「惡意」（malice）——悲傷的智慧在逆位中化為尖刻的惡意，「假正經」（prudery）最能揭示這種虛偽的面貌。'
    }
  },
  {
    id: 63,
    name: '寶劍國王',
    englishName: 'King of Swords',
    number: 'King',
    suit: 'swords',
    element: '風',
    icon: '⚔️',
    description: '【偉特原著·圖像】一名國王端坐，手持寶劍稍微偏向一側（而非筆直向上），神情嚴肅具有威權。寶座上有蝴蝶（變化）與天使裝飾，背景有樹木在風中搖曳，象徵他在動盪中保持穩定的判斷。',
    keywords: ['判斷', '所有與判斷相關的概念', '力量', '命令', '權威', '軍事智識', '法律', '殘酷', '邪惡意圖'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Whatsoever arises out of the idea of judgment and all its connexions—power, command, authority, militant intelligence, law, offices of the crown.\'\n\n直譯：凡源自判斷理念及其所有關聯的一切——力量、命令、權威、軍事智識、法律、王室職位。',
      love: '【依原著關鍵詞】感情中代表具有判斷力（judgment）與權威（authority）的男性，以法律（law）與命令（command）的方式處理關係，軍事智識（militant intelligence）使其處事果斷。',
      career: '【依原著關鍵詞】工作上代表最高的判斷力（judgment）、命令（command）與法律（law）的權威，軍事智識（militant intelligence）帶來精準的決策，掌管王室職位（offices of the crown）。',
      advice: '【偉特原著核心】「凡源自判斷理念的一切」——寶劍國王的本質就是純粹的判斷力，不帶私情，以法律與命令實現秩序，是最具公正色彩的國王。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Cruelty, perversity, barbarity, perfidy, evil intention.\'\n\n直譯：殘酷、乖戾、野蠻、背信、邪惡的意圖。',
      love: '【依原著關鍵詞】感情中展現殘酷（cruelty）與背信（perfidy），乖戾（perversity）扭曲了原本的判斷力，邪惡的意圖（evil intention）主導行為。',
      career: '【依原著關鍵詞】工作上殘酷（cruelty）與野蠻（barbarity）取代了公正的判斷，背信（perfidy）與邪惡的意圖（evil intention）破壞所有的信任。',
      advice: '【偉特原著核心】逆位的「邪惡的意圖」（evil intention）——判斷力在逆位中服務於惡意，殘酷與野蠻是最高智識被腐化後的結果，是偉特最嚴峻的逆位之一。'
    }
  },

  // ==================== PENTACLES ====================
  {
    id: 64,
    name: '錢幣首牌',
    englishName: 'Ace of Pentacles',
    number: 'Ace',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一隻從雲中伸出的手捧持一枚巨大的金色錢幣（五芒星圖案），下方有一個花園拱門，拱門通向一條遠方有山丘的小路，花園裡有百合花盛開。',
    keywords: ['完美的滿足', '幸福', '狂喜', '迅速的情報', '黃金', '財富', '繁榮', '舒適', '邪惡', '壞消息'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.\'\n\n直譯：完美的滿足、幸福、狂喜；亦指迅速的情報；黃金。',
      love: '【依原著關鍵詞】感情中帶來完美的滿足（perfect contentment）與狂喜（ecstasy），物質的豐盛（gold）為感情提供穩固的基礎，是幸福（felicity）的源泉。',
      career: '【依原著關鍵詞】工作上帶來黃金（gold）與完美的滿足（perfect contentment），迅速的情報（speedy intelligence）加速成功，狂喜（ecstasy）來自物質成就。',
      advice: '【偉特原著核心】「迅速的情報」（speedy intelligence）——錢幣首牌不只是財富，偉特特別列出情報的快速傳遞，提示物質與信息的同步豐盛。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'The evil side of wealth, bad intelligence; also great riches. In any case it shows prosperity, comfortable material conditions.\'\n\n直譯：財富的邪惡面、壞消息；亦指巨大的財富。無論如何，它都顯示繁榮、舒適的物質條件。',
      love: '【依原著關鍵詞】感情中財富的邪惡面（evil side of wealth）顯現，壞消息（bad intelligence）可能到來，但物質上依然繁榮（prosperity）。',
      career: '【依原著關鍵詞】工作上偉特明確指出「無論如何都顯示繁榮與舒適的物質條件」——即使逆位，錢幣首牌在物質層面依然正面，但需注意財富的邪惡面。',
      advice: '【偉特原著核心】偉特罕見地在逆位中直接說明「無論如何都顯示繁榮」——這是整副牌中逆位依然最為正面的牌之一，財富在任何方向都成立。'
    }
  },
  {
    id: 65,
    name: '錢幣二',
    englishName: 'Two of Pentacles',
    number: '2',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名年輕男子在雜耍兩枚錢幣，錢幣被一條無限大符號形狀的綠色綬帶連接（∞）。他跳舞般地保持平衡，背景是洶湧的海浪中有兩艘船。',
    keywords: ['歡樂', '娛樂', '消息', '書面訊息', '障礙', '激動', '麻煩', '糾纏', '被迫的歡樂', '愉快的消息'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Gaiety, recreation; also news and messages in writing, obstacles, agitation, trouble, embroilment.\'\n\n直譯：歡樂、娛樂；亦指書面消息、障礙、激動、麻煩、糾纏。',
      love: '【依原著關鍵詞】感情中充滿歡樂（gaiety）與娛樂（recreation），書面消息（news in writing）傳遞情意，但同時有障礙（obstacles）與激動（agitation）的糾纏（embroilment）。',
      career: '【依原著關鍵詞】工作上在歡樂（gaiety）中面對障礙（obstacles）與麻煩（trouble），消息（news）來來去去，需在激動（agitation）中保持平衡（∞符號）。',
      advice: '【偉特原著核心】無限大符號∞——偉特的圖像設計暗示永恆的平衡之道，在麻煩與歡樂之間保持流動，靈活應對才是此牌的核心智慧。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Enforced gaiety, simulated enjoyment; handwriting, letter; composition; pleasant news.\'\n\n直譯：被迫的歡樂、偽裝的享受；筆跡、書信；作文；愉快的消息。',
      love: '【依原著關鍵詞】感情中的歡樂是「被迫的」（enforced gaiety）與「偽裝的享受」（simulated enjoyment），書信（letter）帶來愉快的消息（pleasant news）。',
      career: '【依原著關鍵詞】工作上以被迫的歡樂（enforced gaiety）面對現實，書信（handwriting, letter）與文件（composition）帶來愉快的消息（pleasant news）。',
      advice: '【偉特原著核心】逆位的「偽裝的享受」（simulated enjoyment）——表面的歡樂可能是強迫自己做出的表演，但書信帶來的愉快消息是真實的好兆頭。'
    }
  },
  {
    id: 66,
    name: '錢幣三',
    englishName: 'Three of Pentacles',
    number: '3',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名工匠（石匠）站在教堂的拱廊中工作，手持工具，對面有兩名人物（一名修士和一名貴族）看著他的作品並持建築圖紙討論。圖像象徵技藝與專業得到認可。',
    keywords: ['職業', '貿易', '熟練勞動', '貴族', '聲望', '榮耀', '平庸', '幼稚', '渺小', '軟弱'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Métier, trade, skilled labour; also nobility, aristocracy, renown, glory.\'\n\n直譯：職業、貿易、熟練的勞動；亦指貴族身份、貴族、聲望、榮耀。',
      love: '【依原著關鍵詞】感情中以技藝（skilled labour）的精神對待關係，熟練與用心帶來聲望（renown），如工匠打造傑作般，愛情也需要專業的技巧。',
      career: '【依原著關鍵詞】工作上展現職業技能（métier）與熟練勞動（skilled labour），獲得貴族的認可（nobility, aristocracy），聲望（renown）與榮耀（glory）隨之而來。',
      advice: '【偉特原著核心】「熟練的勞動」（skilled labour）——三號錢幣代表專業技藝的體現，工匠在教堂中的作品既是謀生之道，也是留存的藝術，技藝即是價值。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Mediocrity, in work and otherwise, puerility, pettiness, weakness.\'\n\n直譯：平庸（在工作和其他方面）、幼稚、渺小、軟弱。',
      love: '【依原著關鍵詞】感情中以平庸（mediocrity）的方式對待，幼稚（puerility）與渺小（pettiness）的行為使關係缺乏深度，軟弱（weakness）無法支撐長久。',
      career: '【依原著關鍵詞】工作上僅達平庸水準（mediocrity），幼稚（puerility）與渺小的思維（pettiness）阻礙成長，軟弱（weakness）使技藝無法提升。',
      advice: '【偉特原著核心】逆位的「平庸」（mediocrity）——技藝精湛的工匠在逆位中變成平庸的勞工，幼稚與渺小是阻礙卓越的最常見陷阱。'
    }
  },
  {
    id: 67,
    name: '錢幣四',
    englishName: 'Four of Pentacles',
    number: '4',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名男子緊緊地抱著一枚錢幣，頭頂放一枚，腳踩兩枚，緊緊地固守著自己的財富。他坐在城市前方，表情緊張執著，象徵對物質的過度執著。',
    keywords: ['財產的保障', '執著', '禮物', '遺産', '繼承', '猶豫', '延誤', '反對'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.\'\n\n直譯：財產的保障、執著於所擁有之物、禮物、遺贈、繼承。',
      love: '【依原著關鍵詞】感情中執著（cleaving）於已擁有的關係，對伴侶的保障（surety）是真實的，但禮物（gift）與遺贈（legacy）暗示關係中的物質考量。',
      career: '【依原著關鍵詞】工作上對財產（possessions）保障（surety）的執著，繼承（inheritance）與遺贈（legacy）帶來物質基礎，禮物（gift）可能來自意外之財。',
      advice: '【偉特原著核心】「執著於所擁有之物」（cleaving to that which one has）——四號錢幣的執著既是保障也是限制，過度的固守可能阻礙新的豐盛進入。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Suspense, delay, opposition.\'\n\n直譯：懸而未決、延誤、反對。',
      love: '【依原著關鍵詞】感情中事情懸而未決（suspense），延誤（delay）使關係停滯，反對（opposition）可能來自家庭或外部的阻力。',
      career: '【依原著關鍵詞】工作上懸而未決（suspense）使局面僵持，延誤（delay）阻礙財務或計劃的推進，反對（opposition）成為主要障礙。',
      advice: '【偉特原著核心】逆位的「懸而未決」（suspense）——執著的態度導致一切停滯，無法做出決定，需鬆開緊握的手，允許事情自然流動。'
    }
  },
  {
    id: 68,
    name: '錢幣五',
    englishName: 'Five of Pentacles',
    number: '5',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】兩名衣衫破舊的人在雪地中艱難前行，一人拄拐，他們經過一個明亮的教堂彩色玻璃窗（五芒星圖案），卻沒有注意到或沒有走進去。象徵在苦難中看不見援助的存在。',
    keywords: ['物質困境', '愛人', '和諧', '親和力', '混亂', '渾沌', '毀滅', '不和', '揮霍無度'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Material trouble above all, whether in the form of destitution or otherwise; for some it is a card of love and lovers; also concordance, affinities.\'\n\n直譯：首要的物質困境，無論是貧困形式或其他；對某些人而言，是愛與戀人之牌；亦指和諧、親和力。',
      love: '【依原著關鍵詞】偉特明確指出「對某些人而言是愛與戀人之牌」——五號錢幣可能代表在物質困境（material trouble）中共患難的愛情，和諧（concordance）在艱苦中存在。',
      career: '【依原著關鍵詞】工作上以物質困境（material trouble）為主要特徵，可能是貧困（destitution）或其他形式的物質匱乏，需尋找新的資源。',
      advice: '【偉特原著核心】偉特的「物質困境首要」——五號錢幣的苦難是有形的，但他同時指出愛與和諧也可能在此存在，困境中仍有溫暖的可能。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Disorder, chaos, ruin, discord, profligacy.\'\n\n直譯：混亂、渾沌、毀滅、不和、揮霍無度。',
      love: '【依原著關鍵詞】感情中陷入混亂（disorder）與不和（discord），揮霍無度（profligacy）使物質基礎瓦解，渾沌（chaos）取代了曾有的和諧。',
      career: '【依原著關鍵詞】工作上遭受毀滅（ruin）、混亂（chaos）與不和（discord），揮霍無度（profligacy）加速物質的崩潰，渾沌（disorder）使局面失控。',
      advice: '【偉特原著核心】逆位的「揮霍無度」（profligacy）——正位的物質困境在逆位中因揮霍而加深，不是外力造成的貧困，而是自我選擇的浪費。'
    }
  },
  {
    id: 69,
    name: '錢幣六',
    englishName: 'Six of Pentacles',
    number: '6',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名富裕的商人手持天平稱量，另一手將錢幣分施給跪在地上的乞丐（兩人跪拜）。他代表施予者，處於能夠衡量並分配財富的位置。',
    keywords: ['禮物', '饋贈', '感謝', '注意', '警覺', '現在的繁榮', '慾望', '貪婪', '嫉妒', '幻覺'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Presents, gifts, gratification; attention, vigilance; now is the accepted time, present prosperity.\'\n\n直譯：禮物、饋贈、感謝；注意、警覺；現在是被接受的時刻、當前的繁榮。',
      love: '【依原著關鍵詞】感情中通過禮物（gifts）與饋贈（presents）表達感謝（gratification），「現在是被接受的時刻」（now is the accepted time）——抓住當前的良機表達心意。',
      career: '【依原著關鍵詞】工作上當前的繁榮（present prosperity）是最好的時機，禮物（gifts）與注意力（attention）帶來成果，警覺（vigilance）確保不錯失良機。',
      advice: '【偉特原著核心】「現在是被接受的時刻」（now is the accepted time）——六號錢幣的關鍵是「現在」，在繁榮的當下施予與接受，不要推遲。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Desire, cupidity, envy, jealousy, illusion.\'\n\n直譯：慾望、貪婪、嫉妒、妒忌、幻覺。',
      love: '【依原著關鍵詞】感情中慾望（desire）與嫉妒（jealousy）破壞了給予與接受的平衡，貪婪（cupidity）使關係出現失衡，幻覺（illusion）蒙蔽真實的感情。',
      career: '【依原著關鍵詞】工作上貪婪（cupidity）與嫉妒（envy, jealousy）取代了公平的分配，幻覺（illusion）使人無法看清財富的真實狀況。',
      advice: '【偉特原著核心】逆位的「幻覺」（illusion）——施予的天平在逆位中被貪婪與嫉妒扭曲，對財富的幻覺使人追求本不存在的東西。'
    }
  },
  {
    id: 70,
    name: '錢幣七',
    englishName: 'Seven of Pentacles',
    number: '7',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名農夫倚靠著鋤頭休息，望著他所種植的灌木上結著的七個錢幣（五芒星）。他神情沉思，正在評估勞動的成果，思考是否應繼續或改變方向。',
    keywords: ['金錢', '商業', '易貨', '爭吵', '天真', '純粹', '清除', '貸款的焦慮'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Money, business, and barter; also altercation, quarrels; and innocence, ingenuousness, purgation.\'\n\n直譯：金錢、商業、易貨交換；亦指爭吵、口角；以及天真、坦率、清洗。',
      love: '【依原著關鍵詞】感情中金錢（money）與商業（business）的考量影響關係，可能有爭吵（altercation）但也有天真（innocence）與坦率（ingenuousness）的一面。',
      career: '【依原著關鍵詞】工作上金錢（money）、商業（business）與易貨（barter）是核心，爭吵（quarrels）可能影響商業關係，天真（innocence）的清洗（purgation）帶來新的開始。',
      advice: '【偉特原著核心】「清洗」（purgation）——七號錢幣不只是評估成果，偉特指出一種淨化的過程，在商業的現實中保持天真的坦率，是重要的品格。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Cause for anxiety regarding money which it may be proposed to lend.\'\n\n直譯：關於可能建議出借的金錢所引起的焦慮。',
      love: '【依原著關鍵詞】感情中因金錢借貸（lend）或財務問題產生焦慮（anxiety），物質的憂慮影響情感的品質。',
      career: '【依原著關鍵詞】工作上關於出借金錢（lend）的建議引起焦慮（anxiety），財務決策需要謹慎，不確定性帶來不安。',
      advice: '【偉特原著核心】偉特給出非常具體的逆位描述——關於「出借金錢」（lend）的焦慮，提醒在財務建議上需格外謹慎，不可輕率地借貸。'
    }
  },
  {
    id: 71,
    name: '錢幣八',
    englishName: 'Eight of Pentacles',
    number: '8',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名工匠坐在工作台前，正在雕刻錢幣（五芒星），已完成的錢幣整齊地排列在他身邊。他全神貫注於工作，背景有城市的輪廓，代表技藝的學習與精進。',
    keywords: ['工作', '就業', '委任', '工藝', '準備階段', '野心的喪失', '虛榮', '貪婪', '詭詐'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.\'\n\n直譯：工作、就業、委任、工藝精神、工藝與商業上的技巧，或許是在準備階段。',
      love: '【依原著關鍵詞】感情中以工藝（craftsmanship）的精神對待，用功（work）地學習與精進，或許處於感情關係的準備階段（preparatory stage）。',
      career: '【依原著關鍵詞】工作上專注於技藝（craftsmanship）與技巧（skill），就業（employment）穩定，委任（commission）帶來新的工作，或許仍在準備（preparatory stage）中。',
      advice: '【偉特原著核心】「或許是在準備階段」（preparatory stage）——八號錢幣是學徒的牌，強調勤勉的練習過程，精通技藝需要時間與專注，過程本身即有價值。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Voided ambition, vanity, conceit, exaction, usury; also the possession of skill turned to cunning and intrigue.\'\n\n直譯：落空的野心、虛榮、自負、勒索、高利貸；亦指技巧的擁有轉化為詭詐與陰謀。',
      love: '【依原著關鍵詞】感情中技巧（skill）被扭曲為詭詐（cunning）與陰謀（intrigue），野心（ambition）落空，虛榮（vanity）與自負（conceit）主導行為。',
      career: '【依原著關鍵詞】工作上野心落空（voided ambition），技巧轉為詭詐（cunning）與陰謀（intrigue），勒索（exaction）與高利貸（usury）暗示不道德的商業行為。',
      advice: '【偉特原著核心】「技巧轉化為詭詐與陰謀」（skill turned to cunning and intrigue）——同樣的技能，目的與方向決定了是藝術還是操縱，需警惕才能的腐化。'
    }
  },
  {
    id: 72,
    name: '錢幣九',
    englishName: 'Nine of Pentacles',
    number: '9',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名優雅的女子站在葡萄園中，手臂上停著一隻訓練好的獵鷹，周圍有豐盛的葡萄與九枚錢幣。背景有城堡的輪廓，整個畫面充滿獨立自主的優雅豐盛。',
    keywords: ['謹慎', '安全', '成功', '成就', '確定', '辨別力', '無賴行徑', '欺騙', '無效的計劃', '壞信仰'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Prudence, safety, success, accomplishment, certitude, discernment.\'\n\n直譯：謹慎、安全、成功、成就、確定、辨別力。',
      love: '【依原著關鍵詞】感情中帶來安全感（safety）與確定（certitude），以謹慎（prudence）與辨別力（discernment）評估關係，成就（accomplishment）帶來自信的從容。',
      career: '【依原著關鍵詞】工作上成功（success）與成就（accomplishment）帶來安全感（safety），謹慎（prudence）與辨別力（discernment）是決策的基礎，確定性（certitude）增強自信。',
      advice: '【偉特原著核心】「辨別力」（discernment）——九號錢幣的女士不只是富裕，她的成功來自精準的辨別力，謹慎的判斷是真正財富的守護者。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Roguery, deception, voided project, bad faith.\'\n\n直譯：無賴行徑、欺騙、無效的計劃、惡意（壞的信義）。',
      love: '【依原著關鍵詞】感情中出現無賴行徑（roguery）與欺騙（deception），計劃無效（voided project），惡意（bad faith）使信任瓦解。',
      career: '【依原著關鍵詞】工作上無賴行徑（roguery）與欺騙（deception）破壞商業關係，無效的計劃（voided project）浪費資源，惡意（bad faith）使合作無法繼續。',
      advice: '【偉特原著核心】逆位的「惡意」（bad faith）——優雅的成功在逆位中被無賴行徑侵蝕，欺騙取代了謹慎，計劃的無效是惡意的必然結果。'
    }
  },
  {
    id: 73,
    name: '錢幣十',
    englishName: 'Ten of Pentacles',
    number: '10',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名老人坐在豪宅入口，兩隻狗在旁，遠處有年輕夫婦與孩童。牆上的紋章、十枚錢幣以希伯來式的生命之樹排列。整個畫面是家族財富傳承的縮影。',
    keywords: ['收穫', '財富', '家族', '家族傳承', '記錄', '家族世系', '機遇', '命運', '損失', '搶劫'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Gain, riches; family matters, archives, extraction, the abode of a family.\'\n\n直譯：收穫、財富；家族事務、家族記錄、世系淵源、家族的居所。',
      love: '【依原著關鍵詞】感情中涉及家族（family matters）的認可與傳承，家族的居所（abode of a family）成為感情的背景，世系（extraction）與家族記錄（archives）影響關係。',
      career: '【依原著關鍵詞】工作上收穫（gain）與財富（riches）到來，家族事務（family matters）與世系（extraction）帶來資源，家族記錄（archives）是重要的資產。',
      advice: '【偉特原著核心】「家族的居所」（abode of a family）——十號錢幣代表世代積累的財富與傳承，不只是個人的成功，而是家族共同構建的豐盛。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.\'\n\n直譯：機遇、命運、損失、搶劫、賭博；有時指禮物、嫁妝、養老金。',
      love: '【依原著關鍵詞】感情中家族財富因機遇（chance）與命運（fatality）發生變化，可能涉及嫁妝（dowry）或損失（loss），賭博（games of hazard）式的冒險影響穩定。',
      career: '【依原著關鍵詞】工作上命運（fatality）帶來損失（loss）或搶劫（robbery），賭博（games of hazard）的冒險方式危及財富，但也可能獲得禮物（gift）或養老金（pension）。',
      advice: '【偉特原著核心】逆位的「命運」（fatality）——家族財富的穩固在逆位中遭遇命運的衝擊，偉特同時列出「有時是禮物」，暗示這種不穩定中仍有意外之喜。'
    }
  },
  {
    id: 74,
    name: '錢幣侍衛',
    englishName: 'Page of Pentacles',
    number: 'Page',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名年輕男子站在花卉盛開的平原上，雙手捧持一枚發光的錢幣，凝神專注地仰望它。背景有山丘、花園與遠方的樹叢。他的神情充滿求知慾與專注力。',
    keywords: ['申請', '學習', '獎學金', '反思', '管理', '規則', '消息', '揮霍', '放蕩', '奢侈', '不利消息'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Application, study, scholarship, reflection; also news, messages and the bringer thereof; also rule, management.\'\n\n直譯：申請、學習、獎學金、反思；亦指消息、訊息及其傳遞者；亦指規則、管理。',
      love: '【依原著關鍵詞】感情中以學習（study）與反思（reflection）的態度對待，帶來消息（news）與訊息（messages），以規則（rule）與管理（management）的方式構建穩定的關係。',
      career: '【依原著關鍵詞】工作上展現申請（application）的精神、學習（study）的熱情與獎學金（scholarship）般的專注，消息（news）的傳遞與管理（management）是其職責。',
      advice: '【偉特原著核心】「獎學金與反思」（scholarship, reflection）——錢幣侍衛是最具求知精神的侍衛牌，他的成長來自對知識與物質世界的謹慎探索。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Prodigality, dissipation, liberality, luxury; unfavourable news.\'\n\n直譯：揮霍、放蕩、揮霍（過度的慷慨）、奢侈；不利的消息。',
      love: '【依原著關鍵詞】感情中揮霍（prodigality）與奢侈（luxury）使關係缺乏穩定的物質基礎，不利的消息（unfavourable news）打擊信心，放蕩（dissipation）使人分心。',
      career: '【依原著關鍵詞】工作上揮霍（prodigality）與放蕩（dissipation）破壞了學習的積累，奢侈（luxury）消耗資源，不利的消息（unfavourable news）帶來挑戰。',
      advice: '【偉特原著核心】逆位的「揮霍」（prodigality）——謹慎的學習者在逆位中淪為揮霍者，過度的慷慨（liberality）與奢侈是求知精神的反面。'
    }
  },
  {
    id: 75,
    name: '錢幣騎士',
    englishName: 'Knight of Pentacles',
    number: 'Knight',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名騎士靜靜地坐在黑色重馬上（馬幾乎靜止不動），手持一枚錢幣仔細端詳。背景是農田的平原，他的姿態穩重而沉靜，與其他衝鋒陷陣的騎士截然不同。',
    keywords: ['實用', '服務', '利益', '責任', '正直', '怠惰', '閒散', '停滯', '平靜', '氣餒', '粗心'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Utility, serviceableness, interest, responsibility, rectitude—all on the normal and external plane.\'\n\n直譯：實用、服務性、利益、責任感、正直——皆在正常且外部的層面上。',
      love: '【依原著關鍵詞】感情中展現實用（utility）與責任感（responsibility），以服務（serviceableness）的心態對待伴侶，正直（rectitude）是最重要的特質，一切都在正常的日常層面（normal plane）上。',
      career: '【依原著關鍵詞】工作上以實用（utility）、服務（serviceableness）與責任（responsibility）為核心，正直（rectitude）帶來穩定的進展，在正常的外部層面（external plane）上扎實推進。',
      advice: '【偉特原著核心】「皆在正常且外部的層面上」——錢幣騎士不追求神秘或卓越，而是以穩定的實用主義完成每日的工作，踏實才是真正的力量。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.\'\n\n直譯：惰性、懶惰、那種（消極的）休息、停滯；亦指平靜（無動力的）、氣餒、粗心大意。',
      love: '【依原著關鍵詞】感情中惰性（inertia）與停滯（stagnation）使關係缺乏進展，氣餒（discouragement）蒙上愛情，懶惰（idleness）的粗心大意（carelessness）傷害伴侶。',
      career: '【依原著關鍵詞】工作上惰性（inertia）、懶惰（idleness）與停滯（stagnation）阻礙發展，氣餒（discouragement）使人失去動力，粗心大意（carelessness）帶來損失。',
      advice: '【偉特原著核心】逆位的「惰性」（inertia）——責任感的喪失帶來消極的靜止，這與正位中積極的穩重截然不同，停滯是自我放棄的結果。'
    }
  },
  {
    id: 76,
    name: '錢幣王后',
    englishName: 'Queen of Pentacles',
    number: 'Queen',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名王后坐在一個花草盛開的寶座上，雙手捧持一枚錢幣，低頭凝視著它，神情溫柔而沉思。寶座飾有山羊頭（摩羯座）、天使與果實，背景有花園與兔子（生育力）。',
    keywords: ['富足', '慷慨', '壯麗', '安全', '自由', '邪惡', '懷疑', '猶豫', '恐懼', '不信任'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Opulence, generosity, magnificence, security, liberty.\'\n\n直譯：富足、慷慨、壯麗、安全、自由。',
      love: '【依原著關鍵詞】感情中帶來富足（opulence）與慷慨（generosity）的滋養，壯麗（magnificence）的付出使關係充滿安全感（security）與自由（liberty）。',
      career: '【依原著關鍵詞】工作上帶來富足（opulence）、慷慨（generosity）的待遇，壯麗（magnificence）的成就帶來安全感（security）與自由（liberty）。',
      advice: '【偉特原著核心】偉特的「自由」（liberty）——錢幣王后的富足不是囤積，而是能夠自由（liberty）地慷慨付出，財富帶來的是選擇的自由。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Evil, suspicion, suspense, fear, mistrust.\'\n\n直譯：邪惡、懷疑、懸而未決、恐懼、不信任。',
      love: '【依原著關鍵詞】感情中充滿懷疑（suspicion）與恐懼（fear），不信任（mistrust）破壞關係，懸而未決（suspense）的狀態帶來不安，邪惡（evil）暗示惡意的存在。',
      career: '【依原著關鍵詞】工作上充滿懷疑（suspicion）、恐懼（fear）與不信任（mistrust），邪惡（evil）可能潛伏在商業關係中，懸而未決（suspense）阻礙決策。',
      advice: '【偉特原著核心】逆位的「不信任」（mistrust）——慷慨的王后在逆位中化為疑神疑鬼的恐懼者，富足的安全感消失，取而代之的是對一切的懷疑。'
    }
  },
  {
    id: 77,
    name: '錢幣國王',
    englishName: 'King of Pentacles',
    number: 'King',
    suit: 'pentacles',
    element: '土',
    icon: '💰',
    description: '【偉特原著·圖像】一名國王坐在以牛頭（金牛座）裝飾的寶座上，手持一枚錢幣與一根權杖，穿著繪有葡萄藤圖案的袍服。腳邊有盔甲的靴子，背景是花園與城堡，展示物質繁榮的高峰。',
    keywords: ['英勇', '智識', '商業能力', '成功', '數學天賦', '惡行', '軟弱', '醜陋', '乖戾', '腐敗', '危險'],
    upright: {
      meaning: '【偉特原著·正位】\n原文：\'Valour, realising intelligence, business and normal intellectual aptitude, sometimes mathematical gifts; success in these paths.\'\n\n直譯：英勇、實現性的智識、商業與正常的智識能力，有時是數學天賦；在這些道路上的成功。',
      love: '【依原著關鍵詞】感情中代表英勇（valour）且具有實現能力（realising intelligence）的成熟男性，在物質層面（business aptitude）為感情提供強大的支撐。',
      career: '【依原著關鍵詞】工作上以英勇（valour）與實現性的智識（realising intelligence）推動商業（business）成功，數學天賦（mathematical gifts）可能是其特長，在這些領域成就非凡。',
      advice: '【偉特原著核心】「實現性的智識」（realising intelligence）——錢幣國王的智識不是抽象的，而是能夠實際變現的能力，他將思想轉化為真實的財富。'
    },
    reversed: {
      meaning: '【偉特原著·逆位】\n原文：\'Vice, weakness, ugliness, perversity, corruption, peril.\'\n\n直譯：惡行、軟弱、醜陋、乖戾、腐敗、危險。',
      love: '【依原著關鍵詞】感情中惡行（vice）與腐敗（corruption）侵蝕關係，乖戾（perversity）與醜陋（ugliness）的行為帶來危險（peril），軟弱（weakness）使人無法承擔責任。',
      career: '【依原著關鍵詞】工作上惡行（vice）與腐敗（corruption）破壞商業誠信，危險（peril）潛伏，乖戾（perversity）與醜陋（ugliness）使合作無法繼續，軟弱（weakness）帶來失敗。',
      advice: '【偉特原著核心】逆位的「腐敗」（corruption）——物質能力的國王在逆位中以「腐敗」告終，偉特的「危險」（peril）是最後的警示，財富若建立在惡行之上終將帶來危險。'
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = minorCards;
}
