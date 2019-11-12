const fs = require('fs');
const path = require('path');

const data = {
  success: 'true',
  result: {
    resource_id: 'O-A0003-001',
    fields: [
      {
        id: 'lat',
        type: 'Double',
      },
      {
        id: 'lon',
        type: 'Double',
      },
      {
        id: 'locationName',
        type: 'String',
      },
      {
        id: 'stationId',
        type: 'String',
      },
      {
        id: 'description',
        type: 'String',
      },
      {
        id: 'elementName',
        type: 'String',
      },
      {
        id: 'elementValue',
        type: 'Double',
      },
      {
        id: 'parameterName',
        type: 'String',
      },
      {
        id: 'parameterValue',
        type: 'String',
      },
    ],
  },
  records: {
    location: [
      {
        lat: '10.371770',
        lon: '114.356682',
        locationName: '南沙島',
        stationId: '469020',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '-99',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '高雄市',
          },
        ],
      },
      {
        lat: '25.184391',
        lon: '121.521515',
        locationName: '鞍部',
        stationId: '466910',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '18.90',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺北市',
          },
        ],
      },
      {
        lat: '24.960840',
        lon: '121.516499',
        locationName: '新店',
        stationId: 'A0A9M0',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '25.50',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '新北市',
          },
        ],
      },
      {
        lat: '24.765792',
        lon: '121.748343',
        locationName: '宜蘭',
        stationId: '467080',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '宜蘭縣',
          },
        ],
      },
      {
        lat: '22.357445',
        lon: '120.895740',
        locationName: '大武',
        stationId: '467540',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.30',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺東縣',
          },
        ],
      },
      {
        lat: '23.497671',
        lon: '120.424783',
        locationName: '嘉義',
        stationId: '467480',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '29.70',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '嘉義市',
          },
        ],
      },
      {
        lat: '24.598558',
        lon: '121.849199',
        locationName: '蘇澳',
        stationId: '467060',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '25.40',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '宜蘭縣',
          },
        ],
      },
      {
        lat: '24.381794',
        lon: '121.351835',
        locationName: '武陵',
        stationId: 'D2F230',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '17.30',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺中市',
          },
        ],
      },
      {
        lat: '25.163883',
        lon: '121.536332',
        locationName: '竹子湖',
        stationId: '466930',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '19.90',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺北市',
          },
        ],
      },
      {
        lat: '22.005659',
        lon: '120.738307',
        locationName: '恆春',
        stationId: '467590',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.80',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '屏東縣',
          },
        ],
      },
      {
        lat: '25.031331',
        lon: '121.528056',
        locationName: '大安森林',
        stationId: 'CAAH60',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '-99',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺北市',
          },
        ],
      },
      {
        lat: '23.489387',
        lon: '120.951406',
        locationName: '玉山',
        stationId: '467550',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '7.70',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '南投縣',
          },
        ],
      },
      {
        lat: '23.800517',
        lon: '120.209572',
        locationName: '麥寮',
        stationId: 'A0K420',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.20',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '雲林縣',
          },
        ],
      },
      {
        lat: '22.753994',
        lon: '121.146517',
        locationName: '臺東',
        stationId: '467660',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺東縣',
          },
        ],
      },
      {
        lat: '25.039410',
        lon: '121.506676',
        locationName: '臺北',
        stationId: '466920',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.60',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺北市',
          },
        ],
      },
      {
        lat: '23.741712',
        lon: '119.596041',
        locationName: '吉貝',
        stationId: 'A0W080',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.30',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '澎湖縣',
          },
        ],
      },
      {
        lat: '24.408935',
        lon: '118.281080',
        locationName: '金門',
        stationId: '467110',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '29',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '金門縣',
          },
        ],
      },
      {
        lat: '24.418303',
        lon: '118.425131',
        locationName: '金門(東)',
        stationId: 'A0W030',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.70',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '金門縣',
          },
        ],
      },
      {
        lat: '25.008503',
        lon: '121.039267',
        locationName: '新屋',
        stationId: '467050',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.20',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '桃園市',
          },
        ],
      },
      {
        lat: '24.083140',
        lon: '120.548508',
        locationName: '彰師大',
        stationId: 'A0G720',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '29.80',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '彰化縣',
          },
        ],
      },
      {
        lat: '23.509974',
        lon: '120.805123',
        locationName: '阿里山',
        stationId: '467530',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '16.30',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '嘉義縣',
          },
        ],
      },
      {
        lat: '24.257753',
        lon: '120.515211',
        locationName: '梧棲',
        stationId: '467770',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.90',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺中市',
          },
        ],
      },
      {
        lat: '24.161808',
        lon: '121.606851',
        locationName: '太魯閣',
        stationId: 'A0T780',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '-99',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '花蓮縣',
          },
        ],
      },
      {
        lat: '22.567733',
        lon: '120.307664',
        locationName: '高雄',
        stationId: '467440',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '28.60',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '高雄市',
          },
        ],
      },
      {
        lat: '20.702420',
        lon: '116.722007',
        locationName: '東沙島',
        stationId: '468100',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '28.20',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '高雄市',
          },
        ],
      },
      {
        lat: '24.692083',
        lon: '121.395730',
        locationName: '拉拉山',
        stationId: 'A0C540',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '15.60',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '桃園市',
          },
        ],
      },
      {
        lat: '23.258657',
        lon: '119.659350',
        locationName: '東吉島',
        stationId: '467300',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.10',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '澎湖縣',
          },
        ],
      },
      {
        lat: '23.099281',
        lon: '121.365342',
        locationName: '成功',
        stationId: '467610',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.20',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺東縣',
          },
        ],
      },
      {
        lat: '23.6353',
        lon: '120.544280',
        locationName: '古坑',
        stationId: 'A2K570',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '28.70',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '雲林縣',
          },
        ],
      },
      {
        lat: '25.135130',
        lon: '121.732265',
        locationName: '基隆',
        stationId: '466940',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.10',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '基隆市',
          },
        ],
      },
      {
        lat: '22.994974',
        lon: '120.196676',
        locationName: '南區中心',
        stationId: '467410',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '31.10',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺南市',
          },
        ],
      },
      {
        lat: '23.883096',
        lon: '120.899909',
        locationName: '日月潭',
        stationId: '467650',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '22.30',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '南投縣',
          },
        ],
      },
      {
        lat: '22.038771',
        lon: '121.550317',
        locationName: '蘭嶼',
        stationId: '467620',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '24.60',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺東縣',
          },
        ],
      },
      {
        lat: '24.147495',
        lon: '120.675914',
        locationName: '臺中',
        stationId: '467490',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '29.50',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺中市',
          },
        ],
      },
      {
        lat: '24.829629',
        lon: '121.006019',
        locationName: '新竹',
        stationId: '467571',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.80',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '新竹縣',
          },
        ],
      },
      {
        lat: '23.976936',
        lon: '121.605138',
        locationName: '花蓮',
        stationId: '466990',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.80',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '花蓮縣',
          },
        ],
      },
      {
        lat: '25.166689',
        lon: '121.440690',
        locationName: '淡水',
        stationId: '466900',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '-99',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '新北市',
          },
        ],
      },
      {
        lat: '24.146253',
        lon: '121.268245',
        locationName: '合歡山',
        stationId: 'A0Z080',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '-99',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '花蓮縣',
          },
        ],
      },
      {
        lat: '26.170981',
        lon: '119.915113',
        locationName: '馬祖',
        stationId: '467990',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '24.40',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '連江縣',
          },
        ],
      },
      {
        lat: '24.427350',
        lon: '118.255590',
        locationName: '九宮碼頭',
        stationId: 'A0W100',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.10',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '金門縣',
          },
        ],
      },
      {
        lat: '23.567203',
        lon: '119.554957',
        locationName: '澎湖',
        stationId: '467350',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '27.40',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '澎湖縣',
          },
        ],
      },
      {
        lat: '24.999447',
        lon: '121.433812',
        locationName: '板橋',
        stationId: '466880',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '26.70',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '新北市',
          },
        ],
      },
      {
        lat: '25.629811',
        lon: '122.071506',
        locationName: '彭佳嶼',
        stationId: '466950',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '25.20',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '基隆市',
          },
        ],
      },
      {
        lat: '23.040122',
        lon: '120.228602',
        locationName: '永康',
        stationId: '467420',
        time: {
          obsTime: '2019-10-14 15:20:00',
        },
        weatherElement: [
          {
            elementName: 'TEMP',
            elementValue: '30.60',
          },
        ],
        parameter: [
          {
            parameterName: 'CITY',
            parameterValue: '臺南市',
          },
        ],
      },
    ],
  },
};

const locationNames = data.records.location.map((l) => ({
  locationName: l.locationName,
  parameterValue: l.parameter[0] && l.parameter[0].parameterValue
}));

// const locationNames = data.records.location.map(
//   (l) => l.parameter[0] && l.parameter[0].parameterValue
// );

fs.promises.writeFile(
  path.resolve(__dirname, 'a0003.json'),
  JSON.stringify(locationNames, null, 2)
);
