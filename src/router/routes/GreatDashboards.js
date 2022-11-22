import { lazy } from 'react'

const SalesOverview = lazy(() => import('../../views/dashboard/great/sales/overview'))
const PipelineOverview = lazy(() => import('../../views/dashboard/great/sales/pipeline'))
const CustomersOverview = lazy(() => import('../../views/dashboard/great/customers/overview'))
const ProjectsOverview = lazy(() => import('../../views/dashboard/great/delivery/projects'))
const UtilizationOverview = lazy(() => import('../../views/dashboard/great/delivery/utilization'))

const GreatDashboardRoutes = [
  {
    path: '/dashboard/great/sales/overview',
    element: <SalesOverview />
  },
  {
    path: '/dashboard/great/sales/pipeline',
    element: <PipelineOverview />
  },
  {
    path: '/dashboard/great/customer/overview',
    element: <CustomersOverview />
  },
  {
    path: '/dashboard/great/delivery/projects',
    element: <ProjectsOverview />
  },
  {
    path: '/dashboard/great/delivery/utilization',
    element: <UtilizationOverview />
  }
]

export default GreatDashboardRoutes
