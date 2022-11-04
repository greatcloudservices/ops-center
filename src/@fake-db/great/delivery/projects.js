import mock from '../../mock'

// ** Utils
import { paginateArray } from '../../utils'
import { cloneDeep } from "lodash"

const data = {
  clients: [
    {
      id: '000046',
      companyName: 'Above Property',
      status: 'active',
      type: 'Staff Aug',
      projects: [
        {
          name: 'Connectors',
          tasks: [
            {
              name: 'SOW1',
              status: 'inactive',
              startDate: '08-29-2022',
              endDate: '',
              hoursBudget: 500,
              feeBudget: 22000.00,
              salesLead: 'Dave Holt',
              salesEngineer: '',
              partnership: 'AWS',
              timeEntries: [
                {
                  name: 'Bart Spedden',
                  date: '8-29-2022',
                  hours: 2,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'OWASP Training'
                },
                {
                  name: 'Bart Spedden',
                  date: '8-30-2022',
                  hours: 2,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'OWASP Training'
                },
                {
                  name: 'Bart Spedden',
                  date: '8-31-2022',
                  hours: 2,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'OWASP Training'
                },
                {
                  name: 'Bart Spedden',
                  date: '09-01-2022',
                  hours: 4,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'OWASP Training'
                },
                {
                  name: 'Bart Spedden',
                  date: '09-13-2022',
                  hours: 3,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'Project ramp up - pulling down git repos and getting local env set up - reviewing documents'
                },
                {
                  name: 'Bart Spedden',
                  date: '09-14-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'TA30591 - read hoteltrader specs'
                },
                {
                  name: 'Bart Spedden',
                  date: '09-15-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'TA30600 - create HotelTrader transformer and processor skeletons'
                },
                {
                  name: 'Bart Spedden',
                  date: '09-16-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'TA30600 - create HotelTrader transformer and processor skeletons'
                }
              ]
            },
            {
              name: 'SOW2',
              status: 'active',
              startDate: '09-19-2022',
              endDate: '',
              hoursBudget: 100,
              feeBudget: 22000.00,
              salesLead: 'Dave Holt',
              salesEngineer: '',
              partnership: 'AWS',
              timeEntries: [
                {
                  name: 'Esteban Orue',
                  date: '09-19-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-20-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-21-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-22-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-23-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-26-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-27-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-28-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-29-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                },
                {
                  name: 'Esteban Orue',
                  date: '09-30-2022',
                  hours: 8,
                  rate: 125.00,
                  cost: 20.00,
                  billable: true,
                  notes: 'APS Onboarding and Start integration with travel port'
                }
              ]
            },
            {
              name: 'SOW3',
              status: 'active',
              startDate: '10-09-2022',
              endDate: '',
              hoursBudget: 500,
              feeBudget: 22000.00,
              salesLead: 'Dave Holt',
              salesEngineer: '',
              partnership: 'AWS',
              timeEntries: [
                {
                  name: 'Bart Spedden',
                  date: '10-11-2022',
                  hours: 5,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-12-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-13-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-14-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-17-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-18-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-19-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                },
                {
                  name: 'Bart Spedden',
                  date: '10-20-2022',
                  hours: 8,
                  rate: 150.00,
                  cost: 75.00,
                  billable: true,
                  notes: 'US12735: TravelPort Connector'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '000036',
      companyName: 'Publicis Sapient',
      status: 'active',
      type: 'Staff Aug',
      projects: [
        {
          name: 'Bridgestone',
          tasks: [
            {
              name: 'AEM Architect',
              status: 'active',
              startDate: '11-29-2021',
              endDate: '12-05-2022',
              hoursBudget: 1820,
              feeBudget: 236600.00,
              salesLead: 'Dave Holt',
              salesEngineer: '',
              partnership: 'Adobe',
              timeEntries: [
                {
                  name: 'Sebastian Villamarin',
                  date: '11-29-2021',
                  hours: 4,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'Onboarding'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '11-30-2021',
                  hours: 4,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'Onboarding'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-01-2021',
                  hours: 4,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'Onboarding'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-02-2021',
                  hours: 4,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'Onboarding'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-03-2021',
                  hours: 4,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'Onboarding'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-06-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'TA Work'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-07-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'TA Work'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-08-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'TA Work'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-06-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: 'TA Work'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-13-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: '- QA Coordination and Code Management - AEM North Star Governance'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-14-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: '- QA Coordination and Code Management - AEM North Star Governance'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-15-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: '- QA Coordination and Code Management - AEM North Star Governance'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-16-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: '- QA Coordination and Code Management - AEM North Star Governance'
                },
                {
                  name: 'Sebastian Villamarin',
                  date: '12-17-2021',
                  hours: 8,
                  rate: 130.00,
                  cost: 70.00,
                  billable: true,
                  notes: '- QA Coordination and Code Management - AEM North Star Governance'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function getProjectsByStatus(clients, status) {
  const clientsWithActiveTasks = cloneDeep(clients)
  for (let i = 0; i < clients.length; i++) {
    const projects = clients[i].projects
    for (let j = 0; j < projects.length; j++) {
      const activeTasks = projects[j].tasks.filter(task => task.status === status)
      clientsWithActiveTasks[i].projects[j].tasks = activeTasks
    }
  }
  return clientsWithActiveTasks
}

function getProjectsByYear(clients, year) {
  const clientsWithActiveTasks = cloneDeep(clients)
  for (let i = 0; i < clients.length; i++) {
    const projects = clients[i].projects
    for (let j = 0; j < projects.length; j++) {
      const tasks = projects[j].tasks
      const ytdTasks = []
      for (let k = 0; k < tasks.length; k++) {
        if (tasks[k].timeEntries.filter(time => new Date(time.date).getFullYear() === year).length > 0) {
          ytdTasks.push(tasks[k])
        }
      }
      clientsWithActiveTasks[i].projects[j].tasks = ytdTasks
    }
  }
  return clientsWithActiveTasks
}

function calculateHoursPercentComplete(task) {
  const totalHours = task.timeEntries.map(item => item.hours).reduce((prev, curr) => prev + curr, 0)
  console.log(`totalHours: ${  totalHours  }; percent: ${  Math.ceil((totalHours / task.hoursBudget) * 100)}`)
  return Math.ceil((totalHours / task.hoursBudget) * 100)
}

function getProjectsAbovePercentComplete(clients, percentComplete) {
  const clientsAbovePercent = cloneDeep(clients)
  for (let i = 0; i < clients.length; i++) {
    const projects = clients[i].projects
    for (let j = 0; j < projects.length; j++) {
      const activeTasks = projects[j].tasks.filter(task => task.status === "active" && calculateHoursPercentComplete(task) >= percentComplete)
      console.log(activeTasks)
      clientsAbovePercent[i].projects[j].tasks = activeTasks
    }
  }
  return clientsAbovePercent
}

mock.onGet('/great/delivery/projects/stats').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const {} = config
  
  const stats = {activeProjectsCount: 0, ytdProjectsCount: 0, lifetimeProjectsCount: 0, projectsOverCount: 0}

  // ---------------------------- Active Projects --------------------------------
  // Loop through the clients/projects/tasks and pull out the list that has
  // tasks that are active.
  // -----------------------------------------------------------------------------
 
  const activeClients = getProjectsByStatus(data.clients, "active")
  let count = 0
  activeClients.forEach(client => {
    const projects = client.projects
    projects.forEach(project => {
      count = count + project.tasks.length
    })
  })
  stats.activeProjectsCount = count

  // --------------------------- YTD Projects ------------------------------------
  // Loop through the clients/projects/tasks/hours and pull out the list that has
  // tasks that have hours billed to them in the current year.
  // -----------------------------------------------------------------------------
  const ytdClients = getProjectsByYear(data.clients, 2022)
  count = 0
  ytdClients.forEach(client => {
    const projects = client.projects
    projects.forEach(project => {
      count = count + project.tasks.length
    })
  })
  stats.ytdProjectsCount = count

  // --------------------------- Lifetime Projects ------------------------------- 
  // Get a count of all tasks that have ever had hours billed 
  // to them.
  // -----------------------------------------------------------------------------
  count = 0
  data.clients.forEach(client => {
    const projects = client.projects
    projects.forEach(project => {
      count = count + project.tasks.length
    })
  })
  stats.lifetimeProjectsCount = count

  // ---------------------------- Above 75% --------------------------------------
  // Loop through the list of active projects and count the ones that are greater
  // than 75% complete.
  // -----------------------------------------------------------------------------
  const aboveClients = getProjectsAbovePercentComplete(data.clients, 75)
  count = 0
  aboveClients.forEach(client => {
    const projects = client.projects
    projects.forEach(project => {
      count = count + project.tasks.length
    })
  })
  stats.projectsOverCount = count
  
  /* eslint-enable  */
  return [
    200,
    {
      stats
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
    console.log(`Name: ${  deal.companyName}`, `Stage: ${  deal.dealStage}`, `Date: ${  deal.lastUpdate}`)
    console.log(`Comparing to searchYear: ${searchYear}`)
    console.log(`Same year? ${  searchYear === "All" ? true : parseInt(searchYear) === new Date(deal.lastUpdate).getFullYear()}`)
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
 console.log(customers)
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
  console.log("here2")
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