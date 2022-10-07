// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'salesDash',
    title: 'Sales',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'salesOverview',
        title: 'Sales Overview',
        icon: <Circle size={12} />,
        navLink: '/dashboard/great/sales/overview'
      },
      {
        id: 'salesPipeline',
        title: 'Sales Pipeline',
        icon: <Circle size={12} />,
        navLink: '/dashboard/great/sales/pipeline'
      }
    ]
  }
]
