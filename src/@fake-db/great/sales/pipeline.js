import mock from '../../mock'

// ** Utils
import { paginateArray } from '../../utils'

const data = {
  pipeline: [
    {
      id: 1,
      companyName: 'L.L.Bean',
      dealName: 'L.L.Bean | Bloomreach Engagement',
      dealStage: 'Deal Identified',
      owner: 'David Holt',
      amount: '100001.00',
      lastUpdate: '10-12-2022'
    },
    {
      id: 2,
      companyName: 'ResMed',
      dealName: 'ResMed | AWS Teraform',
      dealStage: 'Deal Identified',
      owner: 'David Holt',
      amount: '100000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 3,
      companyName: 'Arc XP',
      dealName: 'Arc XP | ArcXP.com Phase 2',
      dealStage: 'Initial Meeting',
      owner: 'David Holt',
      amount: '50000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 4,
      companyName: 'Hometown Apparel',
      dealName: 'Hometown Apparel | Bloomreach Engagement',
      dealStage: 'Initial Meeting',
      owner: 'René Ugarte',
      amount: '15000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 5,
      companyName: 'Sur La Table',
      dealName: 'Sur La Table | Bloomreach Engagement',
      dealStage: 'Initial Meeting',
      owner: 'René Ugarte',
      amount: '150000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 6,
      companyName: 'Synchrony Financial',
      dealName: 'Synchrony Financial | Bloomreach Implementation',
      dealStage: 'Initial Meeting',
      owner: 'David Holt',
      amount: '100000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 7,
      companyName: 'Ameriprise Financial',
      dealName: 'Ameriprise Financial | IDP Implementation',
      dealStage: 'Qualifed To Buy',
      owner: 'David Holt',
      amount: '100000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 8,
      companyName: 'Amplience',
      dealName: 'Amplience | Legal Services Client Implementatio',
      dealStage: 'Qualifed To Buy',
      owner: 'David Holt',
      amount: '50000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 9,
      companyName: 'ASICS',
      dealName: 'ASICS | CDP & Content Implementation',
      dealStage: 'Decision Maker Meeting',
      owner: 'René Ugarte',
      amount: '250000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 10,
      companyName: 'Amplience',
      dealName: 'Amplience | Recording Academy (Grammys)',
      dealStage: 'Decision Maker Meeting',
      owner: 'David Holt',
      amount: '50000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 11,
      companyName: 'Pro Energy Services',
      dealName: 'Pro Energy Services | Ecommerce Foundation',
      dealStage: 'Decision Maker Meeting',
      owner: 'René Ugarte',
      amount: '100000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 12,
      companyName: 'Harbor Freight Tools',
      dealName: 'Harbor Freight Tools | AEM Developer Staff Aug',
      dealStage: 'SOW Sent',
      owner: 'David Holt',
      amount: '72000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 13,
      companyName: 'Above Property',
      dealName: 'Above Property | Bart Staff Aug [1 month]',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '24000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 14,
      companyName: 'Above Property',
      dealName: 'Above Property | Java Developer Staff Aug',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '80000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 15,
      companyName: 'Above Property',
      dealName: 'Above Property | Senior Dev Staff Aug Extension',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '24000.00',
      lastUpdate: '01-12-2022'
    },
    {
      id: 16,
      companyName: 'Arc XP',
      dealName: 'Arc XP | Website Refresh',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '176500.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 17,
      companyName: 'Autodesk',
      dealName: 'Autodesk | Brian Renewal Q1 2022 Part 1 SOW 27',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '39910.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 18,
      companyName: 'Autodesk',
      dealName: 'Autodesk | Brian, Prathija, Karun Renewal, 3...',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '414960.00',
      lastUpdate: '10-12-2022'
    },
    {
      id: 180,
      companyName: 'Autodesk',
      dealName: 'Autodesk | Brian, Prathija, Karun Renewal, 3...',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '414960.00',
      lastUpdate: '10-12-2020'
    },
    {
      id: 181,
      companyName: 'Autodesk',
      dealName: 'Autodesk | Brian, Prathija, Karun Renewal, 3...',
      dealStage: 'Closed Won',
      owner: 'David Holt',
      amount: '500.00',
      lastUpdate: '10-12-2021'
    },
    {
      id: 19,
      companyName: 'Company X',
      dealName: 'Some lame deal',
      dealStage: 'Closed Lost',
      owner: 'Jess Moore',
      amount: '1000000.00',
      lastUpdate: '12-12-2022'
    },
    {
      id: 20,
      companyName: 'Company Y',
      dealName: 'Another weak one',
      dealStage: 'Closed Lost',
      owner: 'Jess Moore',
      amount: '400000.00',
      lastUpdate: '12-12-2022'
    }
  ]
}

// ------------------------------------------------
// GET: Return pipeline
// ------------------------------------------------
mock.onGet('/great/sales/pipeline').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, stage = null, range = null, sort, sortColumn } = config
  /* eslint-enable */
  const dataAsc = data.pipeline.sort((a, b) => {
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

  let filteredData = dataToFilter.filter(pipeline => {   
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (pipeline.companyName.toLowerCase().includes(queryLowered) || pipeline.dealName.toLowerCase().includes(queryLowered) || String(pipeline.owner).toLowerCase().includes(queryLowered)) &&
        (pipeline.dealStage.toLowerCase() === (stage.toLowerCase() || pipeline.dealStage.toLowerCase()))
      )
    }
  )
  // Filter for dates
  if (range.length === 2) {
    filteredData = filteredData.filter(pipeline => {
      //const lastUpdate = new Date(pipeline.lastUpdate)
      const startDate = new Date(range[0])
      const endDate = new Date(range[1])
      pipeline.lastUpdate = new Date(pipeline.lastUpdate)
      //console.log(`compare : ${  (pipeline.lastUpdate.getTime() >= startDate.getTime() && pipeline.lastUpdate.getTime() <= endDate.getTime())}`)

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (pipeline.lastUpdate.getTime() >= startDate.getTime() && pipeline.lastUpdate.getTime() <= endDate.getTime())
      )
    })
  }

  /* eslint-enable  */

  return [
    200,
    {
      allData: data.pipeline,
      total: filteredData.length,
      deals: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }
  ]
})

mock.onGet('/great/sales/pipeline/stages').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, sort, sortColumn } = config
  const stages = []

  for (let i = 0; i < data.pipeline.length; i++) {
    const deal = data.pipeline[i]
    const index = stages.findIndex(element => {
      if (element.dealStage === deal.dealStage) {
         return true
      }
      return false
    })
    if (index >= 0) {
      stages[index].count = stages[index].count + 1
      stages[index].amount = stages[index].amount + Number(deal.amount)
      stages[index].dealStage = deal.dealStage
    } else {
      const stage = new Object()
      stage.dealStage = deal.dealStage
      stage.count = 1
      stage.amount = Number(deal.amount)
      stages.push(stage)
    }
  }
 
  /* eslint-enable */
  const dataAsc = stages.sort((a, b) => {
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
  const filteredData = dataToFilter.filter(pipeline => {

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (pipeline.dealStage.toLowerCase().includes(queryLowered))
      )
    }
  )
  /* eslint-enable  */
  return [
    200,
    {
      allData: stages,
      total: filteredData.length,
      stages: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }   
  ]
})

mock.onGet('/great/sales/pipeline/stages').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, sort, sortColumn } = config
  const stages = []

  for (let i = 0; i < data.pipeline.length; i++) {
    const deal = data.pipeline[i]
    const index = stages.findIndex(element => {
      if (element.dealStage === deal.dealStage) {
         return true
      }
      return false
    })
    if (index >= 0) {
      stages[index].count = stages[index].count + 1
      stages[index].amount = stages[index].amount + Number(deal.amount)
      stages[index].dealStage = deal.dealStage
    } else {
      const stage = new Object()
      stage.dealStage = deal.dealStage
      stage.count = 1
      stage.amount = Number(deal.amount)
      stages.push(stage)
    }
  }
 
  /* eslint-enable */
  const dataAsc = stages.sort((a, b) => {
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
  const filteredData = dataToFilter.filter(pipeline => {

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (pipeline.dealStage.toLowerCase().includes(queryLowered))
      )
    }
  )
  /* eslint-enable  */
  return [
    200,
    {
      allData: stages,
      total: filteredData.length,
      stages: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }   
  ]
})

mock.onGet('/great/sales/pipeline/customers').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, year = null, sort, sortColumn } = config
  const customers = []
  let searchYear = new Date().getFullYear()
  //---------------------------------------------------
  // Set all the Years array.  If the exact year is
  // passed in (i.e. 2022) then use it.  If "All" is
  // passed in, then get all years data.
  //---------------------------------------------------
  if (year !== null) {
    searchYear = year
  }
  for (let i = 0; i < data.pipeline.length; i++) {

    const deal = data.pipeline[i]
    
    //console.log(year === new Date(deal.lastUpdate).getFullYear())
    //---------------------------------------------------
    // When pulling from the sales pipeline for customers,
    // we only care about deals that have been won.
    //---------------------------------------------------
    if (deal.dealStage === 'Closed Won' && (searchYear === "All" ? true : parseInt(searchYear) === new Date(deal.lastUpdate).getFullYear())) {
      
      //---------------------------------------------------
      // Check our new Array to see if the customer
      // is in it yet.
      //---------------------------------------------------
      const index = customers.findIndex(element => {
        if (element.name === deal.companyName) {
          return true
        }
        return false
      })
      //---------------------------------------------------
      // If the customer is in the array, add to it.
      // If not, put the new values in.
      //---------------------------------------------------
      if (index >= 0) {
        customers[index].count = customers[index].count + 1
        customers[index].amount = customers[index].amount + Number(deal.amount)
      } else {
        const customer = new Object()
        customer.name = deal.companyName
        customer.count = 1
        customer.amount = Number(deal.amount)
        customers.push(customer)
      }
    }
  }
  /* eslint-enable */
  const dataAsc = customers.sort((a, b) => {
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
  const filteredData = dataToFilter.filter(pipeline => {

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (pipeline.name.toLowerCase().includes(queryLowered))
      )
    }
  )
  /* eslint-enable  */
  return [
    200,
    {
      allData: customers,
      total: filteredData.length,
      stages: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }   
  ]
})
