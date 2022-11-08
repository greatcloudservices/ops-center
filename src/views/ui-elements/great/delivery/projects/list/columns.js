// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { numberWithCommas} from '@utils'

// ** Table columns
export const columns = [
  {
    name: 'Company',
    sortable: true,
    minWidth: '150px',
    sortField: 'company',
    // selector: row => row.total,
    cell: row => <Link to={`/apps/company/preview/${row.companyId}`}>{`${row.company}`}</Link>
  },
  {
    sortable: true,
    minWidth: '150px',
    name: 'Project',
    sortField: 'project',
    cell: row => row.project,
    // selector: row => row.dueDate
    cell: row => <Link to={`/apps/project/preview/${row.projectId}`}>{`${row.project}`}</Link>
  },
  {
    sortable: true,
    minWidth: '150px',
    name: 'Task',
    sortField: 'task',
    cell: row => row.task,
    // selector: row => row.dueDate
    cell: row => <Link to={`/apps/task/preview/${row.taskId}`}>{`${row.task}`}</Link>
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'Fees',
    cell: row => <span>${numberWithCommas(row.billableCharge)} of ${numberWithCommas(row.contractBudget)}</span>
    // selector: row => row.dueDate
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'Hours',
    cell: row => <span>{row.billableHours} of {row.contractHours} ({numberWithCommas(row.percentComplete)}%) </span>
    // selector: row => row.dueDate
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'Remaining',
    cell: row => <span>{row.remainingHours} Hours</span>
    // selector: row => row.dueDate
  },
  {
    name: 'Gross',
    sortable: false,
    minWidth: '75px',
    sortField: 'grossProfit',
    // selector: row => row.total,
    cell: row => <span>{numberWithCommas(row.grossProfit)}%</span>
  }
]
