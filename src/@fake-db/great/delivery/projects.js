import mock from '../../mock'

// ** Utils
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
          id: 'P000046',
          name: 'Connectors',
          tasks: [
            {
              id: 'T000046',
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
              id: 'T000047',
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
              id: 'T000048',
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
          id: 'P000049',
          name: 'Bridgestone',
          tasks: [
            {
              id: 'T000049',
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
  if (status) {
    for (let i = 0; i < clients.length; i++) {
      const projects = clients[i].projects
      for (let j = 0; j < projects.length; j++) {
        const activeTasks = projects[j].tasks.filter(task => task.status === status)
        clientsWithActiveTasks[i].projects[j].tasks = activeTasks
      }
    }
  }
  return clientsWithActiveTasks
}

function getProjectsByYear(clients, year) {
  const clientsWithActiveTasks = cloneDeep(clients)
  if (year) {
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
  }
  return clientsWithActiveTasks
}

function calculateHoursPercentComplete(task) {
  const totalHours = task.timeEntries.map(item => item.hours).reduce((prev, curr) => prev + curr, 0)
  console.log(`totalHours: ${  totalHours  }; percent: ${  Math.ceil((totalHours / task.hoursBudget) * 100)}`)
  return Math.ceil((totalHours / task.hoursBudget) * 100)
}

function calculateTaskStats(task) {
  const stats = {totalBillableHours: 0, totalNBHours: 0, totalBillableCost: 0, totalBillings: 0, totalNBCost: 0, totalCost: 0, totalHours: 0, grossProfit: 0, remainingHours: 0}
  task.timeEntries.forEach(entry => {
    if (entry.billable) {
      stats.totalBillableHours = stats.totalBillableHours + entry.hours
      stats.totalBillableCost = stats.totalBillableCost + (entry.hours * entry.cost)
      stats.totalBillings = stats.totalBillings + (entry.hours * entry.rate)
    } else {
      stats.totalNBHours = stats.totalNBHours + entry.hours
      stats.totalNBCost = stats.totalNBCost + (entry.hours * entry.cost)
    }
  })
  stats.totalCost = stats.totalBillableCost + stats.totalNBCost
  stats.totalHours = stats.totalBillableHours + stats.totalNBHours
  stats.grossProfit = Math.ceil((stats.totalCost / stats.totalBillings) * 100)
  stats.remainingHours = task.hoursBudget - stats.totalBillableHours
  return stats
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
  const ytdClients = getProjectsByYear(data.clients, new Date().getFullYear())
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

function ProjectRecord(companyId, companyName, projectId, projectName, taskId, taskName, contractHours, contractBudget, billableHours, remainingHours, billableCharge, grossProfit) {
  this.companyId = companyId
  this.company = companyName
  this.projectId = projectId
  this.project = projectName
  this.taskId = taskId
  this.task = taskName
  this.contractHours = contractHours
  this.contractBudget = contractBudget
  this.billableHours = billableHours
  this.remainingHours = remainingHours
  this.billableCharge = billableCharge
  this.grossProfit = grossProfit
  this.percentComplete = Math.ceil((this.billableHours / this.contractHours) * 100)
}

mock.onGet('/great/delivery/projects').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, status = null, year = null, sort, sortColumn } = config

  console.log(q, perPage, page, status, year, sort, sortColumn)

  //const stats = { activeProjectsCount: 0, ytdProjectsCount: 0, lifetimeProjectsCount: 0, projectsOverCount: 0 }

  // ---------------------------- Active Projects --------------------------------
  // Filter results by status
  // -----------------------------------------------------------------------------
  const activeClients = getProjectsByStatus(data.clients, (status === "All") ? "" :  status)
  
  // --------------------------- YTD Projects ------------------------------------
  // Filter results by year
  // -----------------------------------------------------------------------------
  const clients = getProjectsByYear(activeClients, (year === "All") ? "" :  parseInt(year))
   
  const projectRecords = []
  clients.forEach(client => {
    client.projects.forEach(project => {
      project.tasks.forEach(task => {
        const taskStats = calculateTaskStats(task)
        const projectRecord = new ProjectRecord(client.id, client.companyName, project.id, project.name, task.id, task.name, task.hoursBudget, task.feeBudget, taskStats.totalBillableHours, taskStats.remainingHours, taskStats.totalBillings, taskStats.grossProfit)
        projectRecords.push(projectRecord)
      })
    })
  })

  /* eslint-enable */
  const dataAsc = projectRecords.sort((a, b) => {
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
  const filteredData = dataToFilter.filter(projects => {

      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (projects.company.toLowerCase().includes(queryLowered))
      )
    }
  )
  
   /* eslint-enable  */
  return [
    200,    
    {
      allData: clients,
      total: filteredData.length,
      projects: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }   
  ]
})
