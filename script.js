const locations = [
  // 北海道・東北
  { name: "ニセコ", cityId: "014030", region: "北海道・東北" }, // 小樽（ニセコ近郊）
  { name: "富良野", cityId: "012010", region: "北海道・東北" }, // 旭川
  { name: "美瑛", cityId: "012010", region: "北海道・東北" }, // 旭川
  { name: "釧路", cityId: "016040", region: "北海道・東北" },
  { name: "登別", cityId: "015010", region: "北海道・東北" }, // 室蘭
  { name: "十和田湖", cityId: "020010", region: "北海道・東北" }, // 青森
  { name: "八幡平", cityId: "030010", region: "北海道・東北" }, // 盛岡
  { name: "鳥海山", cityId: "050010", region: "北海道・東北" }, // 秋田
  { name: "蔵王", cityId: "060010", region: "北海道・東北" }, // 山形
  { name: "裏磐梯", cityId: "070010", region: "北海道・東北" }, // 福島
  
  // 関東
  { name: "那須高原", cityId: "090010", region: "関東" }, // 宇都宮
  { name: "日光", cityId: "090010", region: "関東" }, // 宇都宮
  { name: "奥日光", cityId: "090010", region: "関東" }, // 宇都宮
  { name: "草津", cityId: "100010", region: "関東" }, // 前橋
  { name: "万座温泉", cityId: "100010", region: "関東" }, // 前橋
  { name: "水上温泉", cityId: "100010", region: "関東" }, // 前橋
  { name: "軽井沢", cityId: "200010", region: "関東" }, // 長野
  { name: "奥多摩", cityId: "130010", region: "関東" }, // 東京
  { name: "秩父", cityId: "110010", region: "関東" }, // さいたま
  
  // 中部
  { name: "清里", cityId: "190010", region: "中部" }, // 甲府
  { name: "八ヶ岳", cityId: "190010", region: "中部" }, // 甲府
  { name: "蓼科", cityId: "200010", region: "中部" }, // 長野
  { name: "白馬", cityId: "200010", region: "中部" }, // 長野
  { name: "美ヶ原", cityId: "200010", region: "中部" }, // 長野
  { name: "上高地", cityId: "200010", region: "中部" }, // 長野
  { name: "乗鞍高原", cityId: "210010", region: "中部" }, // 岐阜
  { name: "奥飛騨温泉郷", cityId: "210010", region: "中部" }, // 岐阜
  { name: "高山", cityId: "210010", region: "中部" }, // 岐阜
  { name: "白川郷", cityId: "210010", region: "中部" }, // 岐阜
  
  // 近畿
  { name: "比叡山", cityId: "250010", region: "近畿" }, // 滋賀
  { name: "比良山系", cityId: "250010", region: "近畿" }, // 滋賀
  { name: "美山", cityId: "260010", region: "近畿" }, // 京都
  { name: "天川村", cityId: "290010", region: "近畿" }, // 奈良
  { name: "高野山", cityId: "300010", region: "近畿" }, // 和歌山
  
  // 中国・四国
  { name: "蒜山高原", cityId: "330010", region: "中国・四国" }, // 岡山
  { name: "大山", cityId: "310010", region: "中国・四国" }, // 鳥取
  { name: "津和野", cityId: "320010", region: "中国・四国" }, // 島根
  { name: "祖谷渓", cityId: "360010", region: "中国・四国" }, // 徳島
  { name: "石鎚山", cityId: "380010", region: "中国・四国" }, // 愛媛
  { name: "四万十川上流", cityId: "390010", region: "中国・四国" }, // 高知
  
  // 九州・沖縄
  { name: "阿蘇", cityId: "430010", region: "九州・沖縄" }, // 熊本
  { name: "黒川温泉", cityId: "430010", region: "九州・沖縄" }, // 熊本
  { name: "高千穂", cityId: "450010", region: "九州・沖縄" }, // 宮崎
  { name: "霧島", cityId: "460010", region: "九州・沖縄" }, // 鹿児島
  { name: "由布院", cityId: "440010", region: "九州・沖縄" }, // 大分
  { name: "九重高原", cityId: "440010", region: "九州・沖縄" }, // 大分
  { name: "名護", cityId: "471010", region: "九州・沖縄" } // 沖縄
];

// ナビゲーションバーを削除し、地域ごとの展開・折りたたみ機能を無効化
const container = document.getElementById("regions-container");

// 地域別にグループ化
const regions = {};
locations.forEach(loc => {
  if (!regions[loc.region]) {
    regions[loc.region] = [];
  }
  regions[loc.region].push(loc);
});

// 地域別に表示
Object.keys(regions).forEach(regionName => {
  const regionDiv = document.createElement("div");
  regionDiv.className = "region";

  const regionTitle = document.createElement("h2");
  regionTitle.className = "region-title";
  regionTitle.textContent = regionName;
  regionDiv.appendChild(regionTitle);

  const locationsDiv = document.createElement("div");
  locationsDiv.className = "locations-grid";

  regions[regionName].forEach(loc => {
    const div = document.createElement("div");
    div.className = "location";
    div.innerHTML = `<h3>${loc.name}</h3>`;
    locationsDiv.appendChild(div);
  });

  regionDiv.appendChild(locationsDiv);
  container.appendChild(regionDiv);
});
