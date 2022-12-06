import mock from '../../mock'
// ** Utils
import { paginateArray } from '../../utils'

const data = {
  utilization: {
    statistics: {
      percentage: 89,
      revenue: 47035.00,
      totalHours: 440,
      billableHours: 392,
      grossCost: 27000.00,
      ptoCost: 2000.00,
      benchCost: 6000.00,
      grossMargins: 32,
      primaryYear: {
        year: 2022,
        weeks: [
          {
            week: 1,
            percentage: 90,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 2,
            percentage: 93,
            revenue: 3300.00,
            totalHours: 445,
            billableHours: 402
          },
          {
            week: 3,
            percentage: 85,
            revenue: 2750.00,
            totalHours: 445,
            billableHours: 380
          },
          {
            week: 4,
            percentage: 50,
            revenue: 1500.00,
            totalHours: 445,
            billableHours: 200
          },
          {
            week: 5,
            percentage: 75,
            revenue: 1900.00,
            totalHours: 445,
            billableHours: 275
          }
        ]
      },
      secondaryYear: {
        year: 2021,
        weeks: [
          {
            week: 1,
            percentage: 80,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 2,
            percentage: 75,
            revenue: 2500.00,
            totalHours: 445,
            billableHours: 402
          },
          {
            week: 3,
            percentage: 70,
            revenue: 2000.00,
            totalHours: 445,
            billableHours: 350
          },
          {
            week: 4,
            percentage: 60,
            revenue: 1000.00,
            totalHours: 445,
            billableHours: 330
          },
          {
            week: 5,
            percentage: 80,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 6,
            percentage: 85,
            revenue: 3500.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 7,
            percentage: 90,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 8,
            percentage: 93,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 9,
            percentage: 98,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          },
          {
            week: 10,
            percentage: 80,
            revenue: 3000.00,
            totalHours: 445,
            billableHours: 395
          }
        ]
      }   
    },
    resources: [
      {
        id: '000001',
        name: 'Alejo Scornaienqui',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Argentina',
        title: 'Sr Engineer',
        utilization: 
          {
            percentage: 75,
            totalHours: 40,
            billableHours: 30,
            revenue: 2400.00
          }
        
      },
      {
        id: '000002',
        name: 'Bart Spedden',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'US',
        title: 'Managing Partner',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
      },
      {
        id: '000003',
        name: 'Brian Johnson',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'US',
        title: 'Managing Partner',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000004',
        name: 'Esteban Orue',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Argentina',
        title: 'Developer',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000005',
        name: 'Igor Pestana',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Brazil',
        title: 'Go Developer',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000006',
        name: 'Karunakar Veluru',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'US',
        title: 'Architect',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000007',
        name: 'Nicolas Vazquez',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Uruguay',
        title: 'Developer',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000008',
        name: 'Prathija Thiruppathy',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'US',
        title: 'Developer',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000009',
        name: 'Raphael Miranda',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Brazil',
        title: 'Developer',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      },
      {
        id: '000010',
        name: 'Savan Rupani',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'US',
        title: 'Sr Developer',
        utilization:
        {
          percentage: 100,
          totalHours: 40,
          billableHours: 40,
          revenue: 2400.00
        }
      },
      {
        id: '000011',
        name: 'Sebastian Villamarin',
        status: 'active',
        payType: 'salary',
        capacity: '40',
        location: 'Argentina',
        title: 'AEM Architect',
        utilization: 
          {
            percentage: 100,
            totalHours: 40,
            billableHours: 40,
            revenue: 2400.00
          }
        
      }
    ]
  }
}

mock.onGet('/great/delivery/utilization').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, status = null, sort, sortColumn } = config

  console.log(q, perPage, page, status, sort, sortColumn)

  /* eslint-enable */
  const dataAsc = data.utilization.resources.sort((a, b) => {
  if (a[sortColumn]) {
      return a[sortColumn] < b[sortColumn] ? -1 : 1
    } else {
      const splitColumn = sortColumn.split('.')
      const columnA = a[splitColumn[0]][splitColumn[1]]
      const columnB = b[splitColumn[0]][splitColumn[1]]
      return columnA < columnB ? -1 : 1
    }
  })
  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()
 
  const queryLowered = q.toLowerCase()
  const filteredData = dataToFilter.filter(resources => {

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (resources.name.toLowerCase().includes(queryLowered))
      )
    }
  )

  /* eslint-enable  */
  return [
    200,    
    {
      allData: data,
      total: filteredData.length,
      resources: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page),
      statistics: data.utilization.statistics
    }   
  ]
})
