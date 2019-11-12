const sunriseSunsetData = require('./sunrise-sunset.json');

const fc0032 = [
  '嘉義縣',
  '新北市',
  '嘉義市',
  '新竹縣',
  // "新竹市",
  '臺北市',
  '臺南市',
  '宜蘭縣',
  // "苗栗縣",
  '雲林縣',
  '花蓮縣',
  '臺中市',
  '臺東縣',
  '桃園市',
  '南投縣',
  '高雄市',
  '金門縣',
  '屏東縣',
  '基隆市',
  '澎湖縣',
  '彰化縣',
  '連江縣',
];

const a0003 = [
  '高雄市',
  '臺北市',
  '新北市',
  '宜蘭縣',
  '臺東縣',
  '嘉義市',
  '宜蘭縣',
  '臺中市',
  '臺北市',
  '屏東縣',
  '臺北市',
  '南投縣',
  '雲林縣',
  '臺東縣',
  '臺北市',
  '澎湖縣',
  '金門縣',
  '金門縣',
  '桃園市',
  '彰化縣',
  '嘉義縣',
  '臺中市',
  '花蓮縣',
  '高雄市',
  '高雄市',
  '桃園市',
  '澎湖縣',
  '臺東縣',
  '雲林縣',
  '基隆市',
  '臺南市',
  '南投縣',
  '臺東縣',
  '臺中市',
  '新竹縣',
  '花蓮縣',
  '新北市',
  '花蓮縣',
  '連江縣',
  '金門縣',
  '澎湖縣',
  '新北市',
  '基隆市',
  '臺南市',
];

const availableLocations = [
  {
    cityName: '宜蘭縣',
    locationName: '宜蘭',
    sunriseName: '宜蘭',
  },
  {
    cityName: '嘉義市',
    locationName: '嘉義',
    sunriseName: '嘉義',
  },
  {
    cityName: '屏東縣',
    locationName: '恆春',
    sunriseName: '屏東',
  },
  {
    cityName: '雲林縣',
    locationName: '雲林',
    sunriseName: '屏東',
  },
  {
    cityName: '臺東縣',
    locationName: '臺東',
    sunriseName: '臺東',
  },
  {
    cityName: '臺北市',
    locationName: '臺北',
    sunriseName: '臺北',
  },
  {
    cityName: '金門縣',
    locationName: '金門',
    sunriseName: '金門',
  },
  {
    cityName: '桃園市',
    locationName: '新屋',
    sunriseName: '桃園',
  },
  {
    cityName: '彰化縣',
    locationName: '彰師大',
    sunriseName: '彰化',
  },
  {
    cityName: '嘉義縣',
    locationName: '阿里山',
    sunriseName: '嘉義',
  },
  {
    cityName: '高雄市',
    locationName: '高雄',
    sunriseName: '高雄',
  },
  {
    cityName: '基隆市',
    locationName: '基隆',
    sunriseName: '基隆',
  },
  {
    cityName: '臺南市',
    locationName: '南區中心',
    sunriseName: '臺南',
  },
  {
    cityName: '南投縣',
    locationName: '日月潭',
    sunriseName: '南投',
  },
  {
    cityName: '臺中市',
    locationName: '臺中',
    sunriseName: '臺中',
  },
  {
    cityName: '新竹縣',
    locationName: '新竹',
    sunriseName: '新竹',
  },
  {
    cityName: '花蓮縣',
    locationName: '花蓮',
    sunriseName: '花蓮',
  },
  {
    cityName: '連江縣',
    locationName: '馬祖',
    sunriseName: '馬祖',
  },
  {
    cityName: '澎湖縣',
    locationName: '澎湖',
    sunriseName: '澎湖',
  },
  {
    cityName: '新北市',
    locationName: '板橋',
    sunriseName: '新北市',
  },
];

const fc0032Unique = [...new Set(fc0032)];
const a0003Unique = [...new Set(a0003)];
const availableCities = availableLocations.map((a) => a.parameterValue);

fc0032Unique.forEach((f) => {
  if (!availableCities.includes(f)) {
    console.log(f);
  }
});

const sunriseSunsetLocations = sunriseSunsetData.map((s) => s.locationName);

console.log(sunriseSunsetLocations);
// console.log(a0003Unique.length);
// console.log(fc0032Unique.length);
// console.log(availableLocations.length)

// console.log(availableLocations.map(a => a.parameterValue))
