/* PhotoService */

export interface Illustration {
  itemImageSrc: string
  thumbnailImageSrc: string
  alt: string
  title: string
  journey: string
}

export async function getImages() {
  return [
    {
      itemImageSrc: '/images/major/rws_tarot_00_fool.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_00_fool.jpg',
      alt: '「愚者」穿著色彩斑斕的服裝，頭上戴著象徵成功的桂冠，昂首闊步向前行。他左手拿著白玫瑰，右手則輕輕握著一根杖。',
      title: 'The Fool',
      journey: 'The Fool',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_01_magician.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_01_magician.jpg',
      alt: '「魔術師」站在中央，一手高舉魔杖指向天空，另一手指向地面。他頭戴白色頭巾，上有無限符號，身穿白色長袍與紅色披風。男子面前是一張桌子，桌上依序擺放著寶劍、權杖、聖杯與錢幣。背景中，前方地面長滿白色百合，象徵純潔；後方則有紅色玫瑰盛開。整幅畫面色彩鮮明，人物姿勢穩定，強調其居中主導的位置與四周有序的構圖。',
      title: 'The Magician',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_02_high_priestess.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_02_high_priestess.jpg',
      alt: '「女祭司」端坐在中央石椅上，雙手扶膝，右手持一本部分被披風遮住的書卷，上面寫著「TORA」。她身穿藍白相間的長袍，頭戴三層月相冠飾。身後是一塊繡有石榴與棕櫚圖案的藍色帷幕，兩側豎立著一黑一白的柱子，分別刻有「B」與「J」字母。她腳下露出一彎新月，整體畫面寧靜、對稱，色調以藍與白為主。',
      title: 'The High Priestess',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_03_empress.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_03_empress.jpg',
      alt: '「皇后」坐在畫面中央的華麗寶座上，座椅上有紅色絲墊與心形圖案，心中繡有金色的金星符號。她頭戴由十二顆星星組成的王冠，身穿印有石榴圖樣的寬鬆長袍，象徵豐盈。背景是一片金黃色的麥田，遠處有森林與河流流經，環境綠意盎然，象徵自然與豐收。她手持權杖輕觸地面，四周滿布柔和的自然光與植被，畫面溫暖、安定而富含生命力。',
      title: 'The Empress',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_04_emperor.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_04_emperor.jpg',
      alt: '「皇帝」端坐在一張灰色石製寶座上，姿態莊嚴挺直。寶座的四角雕刻著白羊頭像。皇帝留著濃密白鬍，頭戴金色王冠，身穿紅色長袍，內襯白衣，象徵威嚴與秩序。他的右手持權杖（安卡十字頂端），左手握著金色寶球。背景是一片高聳的山脈，無樹無水，象徵堅定與穩固。整體構圖方正嚴整，色調以紅、金與石灰色為主，畫面帶有強烈的權力與控制氛圍。',
      title: 'The Emperor',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_05_hierophant.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_05_hierophant.jpg',
      alt: '「教皇」坐在石製寶座上，頭戴三重教皇冠，手持金色三層權杖。他面向前方，雙腳穿著紅鞋，一腳放在裝飾有十字圖樣的階梯上。教皇兩側各站著一位修士，身穿簡樸長袍，頭低微俯，似在聆聽。教皇右手舉起作祝福手勢（兩指直立、兩指彎曲），象徵授權與引導。在他與修士之間的地板上，有兩把交叉的金鑰匙，一把銀色、一把金色。整張牌的畫面對稱穩重，背景為石牆與柱廊，色調以紅、白、金為主，氣氛莊嚴而神聖。',
      title: 'The Hierophant',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_06_lovers.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_06_lovers.jpg',
      alt: '畫面中央是一對赤裸的男女站立於自然景色中，男子在右，女子在左。女子背後是一棵果樹，枝葉間盤繞著一條蛇；男子身後則是一棵火焰樹。遠方是一座高聳的山丘。畫面上方，一位天使展翼懸浮於雲間，頭戴光環，雙手展開，面容慈祥，從天而降的光芒照亮整個場景。整體構圖明亮寬廣，人物自然舒展，色調溫暖，以藍天、綠地與柔和的紅黃為主，畫面給人一種和諧與寧靜的感覺。',
      title: 'The Lovers',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_07_chariot.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_07_chariot.jpg',
      alt: '一位身穿鎧甲的青年站立在華麗戰車上，雙肩飾有星星徽章，頭戴桂冠與星形頭飾。他手握權杖，雙手自然下垂，並未握緊韁繩。戰車由一黑一白兩頭人面獅身獸（斯芬克斯）拉動，牠們靜靜地坐著，面朝前方。戰車後方是城牆，遠方可見藍天與金黃色的原野。車頂為藍色布篷，上繪滿白色星星，象徵天空與精神。整體畫面對稱穩重，色調以藍、金、黑白為主，強調穩定與前行的氛圍。',
      title: 'The Chariot',
      journey: 'Departure',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_08_strength.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_08_strength.jpg',
      alt: '畫面中央是一位年輕女子，穿著白色長袍，頭戴帶有花冠的紅色花環。她面帶溫柔微笑，雙手輕柔地撫摸一頭張嘴的獅子，並未使用武力。女子與獅子間展現出和諧與信任的關係。背景是一片綠色草地，遠方有高山和藍天，整體色調柔和明亮。畫面傳達出內在力量與溫柔的結合，構圖簡潔而平衡。',
      title: 'The Strength',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_09_hermit.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_09_hermit.jpg',
      alt: '一位白鬍長者身穿灰色長袍，頭戴尖帽，獨自站立於高山頂端。他左手持一根長杖，右手舉起一盞點亮的燈籠，燈籠中發出溫暖光芒，照亮前方。背景為冷冽的山脈與灰藍色天空，整體色調冷靜、深沉。畫面氛圍孤獨且靜謐，強調探索與內省的主題。',
      title: 'The Hermit',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_10_wheel_of_fortune.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_10_wheel_of_fortune.jpg',
      alt: '畫面中央是一個巨大的金色輪盤，輪盤上有四個翅膀展開的生物，分別是獅子、牛、鷹和人臉天使，象徵四大福音使者。輪盤上刻有希伯來字母和字母TARO。輪盤兩側有一條蛇盤繞，一隻狗或狼站在輪盤旁邊。背景為藍天與雲朵，整體色彩明亮，構圖中心突出，傳達變化與循環的意象。',
      title: 'The Wheel of Fortune',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_11_justice.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_11_justice.jpg',
      alt: '畫面中央是一位身穿紅袍、坐在石椅上的女性，她頭戴金色皇冠，神情莊重。右手高舉一把雙刃劍，劍尖直指天空；左手持著一把金色天秤，象徵公平與衡量。她身後是灰色柱子與紅色帷幕，背景簡潔。整體色調以紅、灰與金色為主，畫面構圖對稱穩重，傳達秩序與公正的氛圍。',
      title: 'The Justice',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_12_hanged_man.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_12_hanged_man.jpg',
      alt: '畫面中央是一位男子倒吊著，雙腳被一隻繩子綁住，繩子從一棵樹的枝幹上垂下。男子身穿紅色長褲和藍色上衣，雙手背後交叉，表情平靜安詳。頭部朝下，頭髮自然垂落。背景為淡黃色，樹幹筆直，整體畫面簡潔，色彩鮮明，強調人物倒吊的靜止狀態與沉思氛圍。',
      title: 'The Hanged Man',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_13_death.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_13_death.jpg',
      alt: '畫面中央是一位穿著黑色盔甲、騎著白色骷髏馬的騎士，手持黑色旗幟，旗幟中央繪有白色五角星。騎士身後有落日西沉的紅色天空。地面上散落著破碎的王冠和盔甲。前方有三位人物：一位教皇跪地，兩位平民站立，面對騎士，表情肅穆。整幅畫面色調暗沉，紅黑對比強烈，氣氛肅殺且充滿轉變的意味。',
      title: 'The Death',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_14_temperance.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_14_temperance.jpg',
      alt: '畫面中央是一位天使，身穿白色長袍，雙翼展開，頭戴金色光環。她站立在水邊，一腳踏在陸地上，另一腳輕放在淺水中。天使雙手各持一個金杯，正在將水從一杯倒入另一杯，象徵平衡與調和。背景有一條彎曲的小路延伸至遠方的山脈和太陽，畫面色調柔和，以藍、白、金為主，氛圍安詳寧靜。',
      title: 'The Temperance',
      journey: 'Enlightenment',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_15_devil.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_15_devil.jpg',
      alt: '畫面中央是一個帶有羊角與人臉的魔鬼雕像，身軀強壯且黑色，雙翼張開，坐在黑色的石座上。魔鬼的雙手各持火炬，雙腳踩在祭壇上。畫面前方有一對赤裸男女，脖子被鏈條鎖住，鏈條連接到魔鬼腳下。男女表情迷茫且無助，背景是暗紅色火焰與陰影，整體色調昏暗，氛圍壓抑且充滿誘惑與束縛的象徵。',
      title: 'The Devil',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_16_tower.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_16_tower.jpg',
      alt: '畫面中央是一座高聳的石塔，正遭雷電擊中，頂端火光熊熊燃燒。塔身裂開，碎石四散飛落。兩個人從塔頂跌落，姿態各異，表情驚恐。背景為深藍夜空，閃爍著閃電，整體色調暗沉、動感強烈，象徵突如其來的劇變與毀滅。',
      title: 'The Tower',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_17_star.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_17_star.jpg',
      alt: '畫面中央是一位裸體女子，膝蓋微彎，單膝跪在水邊。她左手持一壺水倒入河流，右手持另一壺水向陸地傾倒。女子頭上方有八顆明亮的星星，中央最大。背景是夜空與遠方的山脈，河流清澈，草地綠意盎然。整體色調以藍色與淡綠為主，畫面明亮且寧靜，象徵希望與純淨。',
      title: 'The Star',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_18_moon.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_18_moon.jpg',
      alt: '畫面中央是兩座高聳的灰色塔樓，位於遠方。前景有一條蜿蜒的小路延伸向遠方，兩側各有一隻狼和一隻狗，仰望天空中的巨月。月亮臉上帶著神秘表情，周圍環繞著水波紋。水邊有一只龍蝦從水中爬出。整體色調以藍灰色為主，營造出夢幻、朦朧且帶有不確定性的氛圍。',
      title: 'The Moon',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_19_sun.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_19_sun.jpg',
      alt: '畫面中央是一位赤裸的孩童，騎在一匹白色馬背上，雙臂張開，面帶燦爛笑容。馬匹昂首前行，周圍環繞著一圈金色的陽光光環。背景是一片金黃色的田野與紅色的花朵，天空明亮蔚藍，有一輪大太陽高掛。整體色調明亮溫暖，畫面充滿歡樂與活力。',
      title: 'The Sun',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_20_judgement.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_20_judgement.jpg',
      alt: '畫面中央是一位天使，身穿白袍，展開大翅膀，手持金色號角，吹響號角。下方有一群裸露的人們從墳墓中甦醒，雙手向上伸展，仰望天使。背景是曙光初現的天空，充滿光明與希望。整體色調以金黃和淺藍為主，畫面構圖充滿動態與重生的氛圍。',
      title: 'The Judgement',
      journey: 'Return',
    },
    {
      itemImageSrc: '/images/major/rws_tarot_21_world.jpg',
      thumbnailImageSrc: '/images/major/rws_tarot_21_world.jpg',
      alt: '畫面中央是一位裸體女子，頭戴花環，身披藍色披風，手持兩根魔杖，身體呈舞蹈姿勢，環繞在一個橢圓形的花環中。四角分別有四個象徵四福音使者的生物：天使、人臉、獅子和牛。背景色彩豐富，融合天空與大地，整體畫面和諧且圓滿，象徵完成與整合。',
      title: 'The World',
      journey: 'Return',
    },
  ]
}

export async function randomGetImages() {
  const images = await getImages()
  const randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}

export const PhotoService = { getImages, randomGetImages }
