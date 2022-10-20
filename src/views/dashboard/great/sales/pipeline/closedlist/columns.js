// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { numberWithCommas} from '@utils'

// ** Table columns
export const columns = [
  {
    sortable: true,
    minWidth: '250px',
    name: 'Deal Name',
    sortField: 'dealName',
    cell: row => row.dealName
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    minWidth: '100px',
    name: 'Owner',
    sortField: 'owner',
    cell: row => row.owner
    // selector: row => row.dueDate
  },

  {
    name: 'Amount',
    sortable: false,
    minWidth: '100px',
    sortField: 'amount',
    // selector: row => row.total,
    cell: row => <span>${numberWithCommas(row.amount)}</span>
  }
]
