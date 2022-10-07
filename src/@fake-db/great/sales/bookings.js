import mock from '../../mock'

const data = {
  support_tracker: {
    title: 'Support Tracker',
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1
  },
  avg_sessions: {
    sessions: 2700,
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1
  },
  revenue_report: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800'
  },
  goal_overview: {
    booked: '1700000.00',
    goal: '3100000.00'
  },
  revenue: {
    thisMonth: '86,589',
    lastMonth: '73,683'
  },
  product_orders: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    chart_info: { finished: 23043, pending: 14658, rejected: 4758 }
  },
  sessions_device: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    chart_info: [
      {
        icon: 'Monitor',
        name: 'Desktop',
        iconColor: 'text-primary',
        usage: 58.6,
        upDown: 2
      },
      {
        icon: 'Tablet',
        name: 'Mobile',
        iconColor: 'text-warning',
        usage: 34.9,
        upDown: 8
      },
      {
        icon: 'Tablet',
        name: 'Tablet',
        iconColor: 'text-danger',
        usage: 6.5,
        upDown: -5
      }
    ]
  },
  customers: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    listData: [
      {
        icon: 'Circle',
        iconColor: 'text-primary',
        text: 'New',
        result: 690
      },
      {
        icon: 'Circle',
        iconColor: 'text-warning',
        text: 'Returning',
        result: 258
      },
      {
        icon: 'Circle',
        iconColor: 'text-danger',
        text: 'Referrals',
        result: 149
      }
    ]
  },
  bookings: {
    monthly: [
      {       
        year: '2022',
        total: [750, 900, 400, 1200, 500, 888, 999, 777, 900]
      },
      {     
        year: '2021',
        total: [690, 800, 700, 894, 940, 690, 800, 700, 894, 940, 1000, 400]
      },
      {    
        year: '2020',
        total: [690, 800, 700, 894, 940, 690, 800, 700, 894, 940, 1000, 400]
      }
    ],
    quarterly: [
      {       
        year: '2022',
        total: [25000.00, 305000.00, 738000.00, 400000.00]
      },
      {     
        year: '2021',
        total: [20000.00, 205000.00, 608000.00, 200000.00]
      },
      {    
        year: '2020',
        total: [5000.00, 105000.00, 508000.00, 100000.00]
      }
    ],
    yearly: [
      {    
        year: '2020',
        total: [1200000.00]
      },
      {     
        year: '2021',
        total: [1500000.00]
      },
      {       
        year: '2022',
        total: [1700000.00]
      }
    ],
    stats: {
      teamCount: '3',
      ytdCustomers: '11',
      lifetimeCustomers: '22',
      closedThisWeek: '0',
      closedLastWeek: '33000.00',
      ytdBookings: '1700000.00',
      lifetimeBookings: '5200000.00',
      sowSent: '6',
      lastUpdated: new Date()
    }
  }
}

mock.onGet('/great/sales/bookings/goal').reply(() => [200, data.goal_overview])
mock.onGet('/great/sales/bookings/monthly').reply(() => [200, data.bookings.monthly])
mock.onGet('/great/sales/bookings/quarterly').reply(() => [200, data.bookings.quarterly])
mock.onGet('/great/sales/bookings/yearly').reply(() => [200, data.bookings.yearly])
mock.onGet('/great/sales/bookings/stats').reply(() => [200, data.bookings.stats])
