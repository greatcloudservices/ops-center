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
    sortField: 'name',
    // selector: row => row.total,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`${row.name}`}</Link>
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'Deal Count',
    sortField: 'dealName',
    cell: row => row.count
    // selector: row => row.dueDate
  },
  {
    name: 'Amount',
    sortable: false,
    minWidth: '150px',
    sortField: 'amount',
    // selector: row => row.total,
    cell: row => <span>${numberWithCommas(row.amount)}</span>
  }
]
