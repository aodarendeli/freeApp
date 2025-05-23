import expressAsyncHandler from "express-async-handler";

export const getAllResource = expressAsyncHandler(async (req, res) => {
    res.send("Get all resources");
});

const mockData = {
  "value": [
      {
          "value": [
              {
                  "id": 13055,
                  "key": "15000",
                  "value": "Modül Kodu '{0}' olan modül zaten mevcut!",
                  "comment": "15004",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13056,
                  "key": "15000",
                  "value": "The module that's module code '{0}' is already exist!",
                  "comment": "15004",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 2,
                  "cultureName": "İstanbul",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13057,
                  "key": "15001",
                  "value": "Servis Kodu '{0}' olan servis zaten mevcut!",
                  "comment": "15005",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 1,
                  "cultureName": "İstanbul",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13058,
                  "key": "15001",
                  "value": "The service that's service code '{0}' is already exist!",
                  "comment": "15005",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 2,
                  "cultureName": "Ankara",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13061,
                  "key": "15002",
                  "value": "Servis Kodu '{0}' olan servis bulunamadı!",
                  "comment": "15006",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13062,
                  "key": "15002",
                  "value": "The service that's Service Code '{0}' didn't find!",
                  "comment": "15006",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13063,
                  "key": "15003",
                  "value": "Servis Kodu '{0}' olan servis'in modülü bulunamadı!",
                  "comment": "15007",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13064,
                  "key": "15003",
                  "value": "The module of the service that's Service Code '{0}' didn't find!",
                  "comment": "15007",
                  "resourceTypeId": 12,
                  "resourceTypeName": "Modularity",
                  "cultureId": 2,
                  "cultureName": "Adana",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13065,
                  "key": "15004",
                  "value": "Dil kodu '{0}' olan dil zaten mevcut!",
                  "comment": "15008",
                  "resourceTypeId": 26,
                  "resourceTypeName": "Localization",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13066,
                  "key": "15004",
                  "value": "The language that's language code '{0}' is already exist!",
                  "comment": "15008",
                  "resourceTypeId": 26,
                  "resourceTypeName": "Localization",
                  "cultureId": 2,
                  "cultureName": "Bursa",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13067,
                  "key": "15005",
                  "value": "Dil numarası '{0}' olan dil bulunamadı!",
                  "comment": "15009",
                  "resourceTypeId": 26,
                  "resourceTypeName": "Localization",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13068,
                  "key": "15005",
                  "value": "The language that's Language Number '{0}' didn't find!",
                  "comment": "15009",
                  "resourceTypeId": 26,
                  "resourceTypeName": "Localization",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13069,
                  "key": "15006",
                  "value": "{0} Id li Push bilgilendirmesi yapılamadı!",
                  "comment": "15010",
                  "resourceTypeId": 6,
                  "resourceTypeName": "Information",
                  "cultureId": 1,
                  "cultureName": "Ceyhan",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13071,
                  "key": "15006",
                  "value": "The Push Notification {0} did not send!",
                  "comment": "15010",
                  "resourceTypeId": 6,
                  "resourceTypeName": "Information",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Social - IOS"
              },
              {
                  "id": 13074,
                  "key": "15007",
                  "value": "E-posta doğrulamanız tamamlanmıştır. Aktivasyon işlemine VBiz uygulaması üzerinden devam edebilirsiniz. ",
                  "comment": "15008",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Management"
              },
              {
                  "id": 13076,
                  "key": "15007",
                  "value": "E-Mail verification is completed. You can continue activation process on VBIZ application.",
                  "comment": "15008",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Management"
              },
              {
                  "id": 13077,
                  "key": "15008",
                  "value": "{0} doğrulama kodu ile VBİZ aktivasyon işleminize devam edebilirsiniz.",
                  "comment": "15009",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Management"
              },
              {
                  "id": 13078,
                  "key": "15008",
                  "value": "You can continue VBIZ activation process with the verification code {0}.",
                  "comment": "15009",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Management"
              },
              {
                  "id": 13079,
                  "key": "15009",
                  "value": "Paylaşımı kimlerin görebileceği seçilmemiş!",
                  "comment": "15010",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 1,
                  "cultureName": "Türkçe",
                  "applicationName": "VK Management"
              },
              {
                  "id": 13080,
                  "key": "15009",
                  "value": "Who can be seen the post did not select!",
                  "comment": "15010",
                  "resourceTypeId": 37,
                  "resourceTypeName": "Store",
                  "cultureId": 2,
                  "cultureName": "English",
                  "applicationName": "VK Management"
              }
          ]
      }
  ]
};

function filterData(data, filters, searchText) {
  let filteredData = [...data];

  if (searchText) {
      filteredData = filteredData.filter(item =>
          Object.values(item).some(value =>
              value?.toString().toLowerCase().includes(searchText.toLowerCase())
          )
      );
  }

  (filters || []).forEach(filter => {
      const { field, operator, value, values } = filter;  // value veya values olabilir

      filteredData = filteredData.filter(item => {
          const val = item[field]?.toString().toLowerCase();

          switch (operator) {
              case "in":
                  // values array olmalı
                  if (Array.isArray(values)) {
                      return values.map(v => v.toString().toLowerCase()).includes(val);
                  }
                  return true;

              case "=":
                  if (value !== undefined) {
                      return val === value.toString().toLowerCase();
                  }
                  return true;

              case "contains":
                  if (value !== undefined) {
                      return val?.includes(value.toString().toLowerCase());
                  }
                  if (Array.isArray(values)) {
                      return values.some(v => val?.includes(v.toString().toLowerCase()));
                  }
                  return true;

              case ">":
                  if (value !== undefined) {
                      return val > value;
                  }
                  return true;

              case "<":
                  if (value !== undefined) {
                      return val < value;
                  }
                  return true;

              default:
                  return true;
          }
      });
  });

  return filteredData;
}


export const getPostResource = expressAsyncHandler(async (req, res) => {
  let { page = 1, size = 10, searchText = "", filters = [], sort = [] } = req.body;

  page = parseInt(page);
  size = parseInt(size);

  const allData = mockData.value[0].value;

  // Filtreleme
  const filteredData = filterData(allData, filters, searchText);

  // Sıralama (sort)
  if (sort?.length > 0) {
      filteredData.sort((a, b) => {
          for (const s of sort) {
              const { field, order } = s;
              if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
              if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
          }
          return 0;
      });
  }

  const totalCount = filteredData?.length;
  const startIndex = (page - 1) * size;
  const paginatedData = filteredData.slice(startIndex, startIndex + size);

  res.json({
      totalCount,
      page,
      size,
      data: paginatedData
  });
});
