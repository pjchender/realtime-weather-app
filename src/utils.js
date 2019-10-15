export const availableLocations = [
  {
    cityName: '宜蘭縣',
    locationName: '宜蘭',
    sunriseCityName: '宜蘭',
  },
  {
    cityName: '嘉義市',
    locationName: '嘉義',
    sunriseCityName: '嘉義',
  },
  {
    cityName: '屏東縣',
    locationName: '恆春',
    sunriseCityName: '屏東',
  },
  {
    cityName: '雲林縣',
    locationName: '雲林',
    sunriseCityName: '屏東',
  },
  {
    cityName: '臺東縣',
    locationName: '臺東',
    sunriseCityName: '臺東',
  },
  {
    cityName: '臺北市',
    locationName: '臺北',
    sunriseCityName: '臺北',
  },
  {
    cityName: '金門縣',
    locationName: '金門',
    sunriseCityName: '金門',
  },
  {
    cityName: '桃園市',
    locationName: '新屋',
    sunriseCityName: '桃園',
  },
  {
    cityName: '彰化縣',
    locationName: '彰師大',
    sunriseCityName: '彰化',
  },
  // {
  //   cityName: '嘉義縣',
  //   locationName: '阿里山',
  //   sunriseCityName: '嘉義',
  // },
  {
    cityName: '高雄市',
    locationName: '高雄',
    sunriseCityName: '高雄',
  },
  {
    cityName: '基隆市',
    locationName: '基隆',
    sunriseCityName: '基隆',
  },
  {
    cityName: '臺南市',
    locationName: '南區中心',
    sunriseCityName: '臺南',
  },
  {
    cityName: '南投縣',
    locationName: '日月潭',
    sunriseCityName: '南投',
  },
  {
    cityName: '臺中市',
    locationName: '臺中',
    sunriseCityName: '臺中',
  },
  {
    cityName: '新竹縣',
    locationName: '新竹',
    sunriseCityName: '新竹',
  },
  {
    cityName: '花蓮縣',
    locationName: '花蓮',
    sunriseCityName: '花蓮',
  },
  {
    cityName: '連江縣',
    locationName: '馬祖',
    sunriseCityName: '馬祖',
  },
  {
    cityName: '澎湖縣',
    locationName: '澎湖',
    sunriseCityName: '澎湖',
  },
  {
    cityName: '新北市',
    locationName: '板橋',
    sunriseCityName: '新北市',
  },
];

export const findLocation = (cityName) => {
  return availableLocations.find((location) => location.cityName === cityName);
};
