import { lazy } from 'react'

const SalesOverview = lazy(() => import('../../views/dashboard/great/sales/overview'))
const DashboardEcommerce = lazy(() => import('../../views/dashboard/great/sales/pipeline'))

const GreatDashboardRoutes = [
  {
    path: '/dashboard/great/sales/overview',
    element: <SalesOverview />
  },
  {
    path: '/dashboard/great/sales/pipeline',
    element: <DashboardEcommerce />
  }
]

export default GreatDashboardRoutes
