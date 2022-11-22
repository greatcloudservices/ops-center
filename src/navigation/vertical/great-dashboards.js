// ** Icons Import
import { Home, PhoneCall, DollarSign, PieChart, Activity, Eye, GitMerge, Percent, BarChart, FastForward, Users } from 'react-feather'

export default [
  {
    header: 'Dashboards'
  },
  {
    id: 'salesDash',
    title: 'Sales',
    icon: <PhoneCall size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'salesOverview',
        title: 'Sales Overview',
        icon: <PieChart size={12} />,
        navLink: '/dashboard/great/sales/overview'
      },
      {
        id: 'salesPipeline',
        title: 'Sales Pipeline',
        icon: <Activity size={12} />,
        navLink: '/dashboard/great/sales/pipeline'
      }
    ]
  },
  {
    id: 'customerDash',
    title: 'Customers',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '1',
    children: [
      {
        id: 'customersOverview',
        title: 'Customers Overview',
        icon: <Activity size={12} />,
        navLink: '/dashboard/great/customer/overview'
      }
    ]
  },
  {
    id: 'operationsDash',
    title: 'Delivery',
    icon: <Eye size={20} />,
    badge: 'light-warning',
    badgeText: '3',
    children: [
      {
        id: 'projectsOverview',
        title: 'Projects',
        icon: <GitMerge size={12} />,
        navLink: '/dashboard/great/delivery/projects'
      },
      {
        id: 'utilization',
        title: 'Utilization',
        icon: <Percent size={12} />,
        navLink: '/dashboard/great/delivery/utilization'
      },
      {
        id: 'forecast',
        title: 'Forecast',
        icon: <FastForward size={12} />,
        navLink: '/dashboard/great/delivery/forecast'
      }/*,
      {
        id: 'team',
        title: 'Team',
        icon: <Users size={12} />,
        navLink: '/dashboard/great/delivery/team'
      }*/
    ]
  }/*,
  {
    id: 'financeDash',
    title: 'Finance',
    icon: <DollarSign size={20} />,
    badge: 'light-warning',
    badgeText: '1',
    children: [
      {
        id: 'financeOverview',
        title: 'Finance Overview',
        icon: <BarChart size={12} />,
        navLink: '/dashboard/great/finance/overview'
      }
    ]
  }*/

]
