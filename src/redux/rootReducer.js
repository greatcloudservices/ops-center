// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import kanban from '@src/views/apps/kanban/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'

import pipeline from '@src/views/ui-elements/great/sales/pipeline/store'
import pipelineStages from '@src/views/ui-elements/great/sales/pipeline/store/pipeline-stages'
import pipelineClosed from '@src/views/ui-elements/great/sales/pipeline/store/closed-list'
import pipelineCustomers from '@src/views/ui-elements/great/customers/store/pipeline-customers'
import projectStats from '@src/views/ui-elements/great/delivery/projects/store/project-stats'

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  pipeline,
  pipelineStages,
  pipelineClosed,
  pipelineCustomers,
  projectStats
}

export default rootReducer
