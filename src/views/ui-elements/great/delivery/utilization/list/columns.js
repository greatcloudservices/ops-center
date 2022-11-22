// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Table columns
export const columns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '150px',
    sortField: 'name',
    // selector: row => row.total,
    cell: row => <Link to={`/apps/user/preview/${row.id}`}>{`${row.name}`}</Link>
  },
  {
    sortable: true,
    minWidth: '150px',
    name: 'Title',
    sortField: 'title',
    cell: row => row.title
  },
  {
    sortable: false,
    minWidth: '150px',
    name: 'Hours',
    cell: row => row.utilization.totalHours
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'Billable Hours',
    cell: row => row.utilization.billableHours
    // selector: row => row.dueDate
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'NB Hours',
    cell: row => row.utilization.totalHours - row.utilization.billableHours 
    // selector: row => row.dueDate
  },
  {
    sortable: false,
    minWidth: '200px',
    name: 'Utilization',
    cell: row => <span>{ row.utilization.percentage } %</span>
    // selector: row => row.dueDate
  }
]
