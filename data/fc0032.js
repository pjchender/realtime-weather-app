const fs = require('fs');
const path = require('path');

const data = {
  success: 'true',
  result: {
    resource_id: 'F-C0032-001',
    fields: [
      {
        id: 'datasetDescription',
        type: 'String',
      },
      {
        id: 'locationName',
        type: 'String',
      },
      {
        id: 'parameterName',
        type: 'String',
      },
      {
        id: 'parameterValue',
        type: 'String',
      },
      {
        id: 'parameterUnit',
        type: 'String',
      },
      {
        id: 'startTime',
        type: 'Timestamp',
      },
      {
        id: 'endTime',
        type: 'Timestamp',
      },
    ],
  },
  records: {
    datasetDescription: '三十六小時天氣預報',
    location: [
      {
        locationName: '嘉義縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '新北市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '嘉義市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '新竹縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '新竹市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '臺北市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '臺南市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '宜蘭縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '苗栗縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '雲林縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '花蓮縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '臺中市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '臺東縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '20',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '桃園市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '南投縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '高雄市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '20',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '20',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '金門縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '屏東縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '30',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '20',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '基隆市',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '澎湖縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '彰化縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '10',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
      {
        locationName: '連江縣',
        weatherElement: [
          {
            elementName: 'PoP',
            time: [
              {
                startTime: '2019-10-11 18:00:00',
                endTime: '2019-10-12 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 06:00:00',
                endTime: '2019-10-12 18:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
              {
                startTime: '2019-10-12 18:00:00',
                endTime: '2019-10-13 06:00:00',
                parameter: {
                  parameterName: '0',
                  parameterUnit: '百分比',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

const locationNames = data.records.location.map((l) => l.locationName);

fs.promises.writeFile(
  path.resolve(__dirname, 'fc0032.json'),
  JSON.stringify(locationNames, null, 2)
);
