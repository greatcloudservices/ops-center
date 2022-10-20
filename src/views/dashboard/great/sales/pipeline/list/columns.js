// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, numberWithCommas} from '@utils'

// ** Table columns
export const columns = [
  {
    name: 'Company',
    sortable: true,
    minWidth: '150px',
    sortField: 'companyName',
    // selector: row => row.total,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`${row.companyName}`}</Link>
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'Deal Name',
    sortField: 'dealName',
    cell: row => row.dealName
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'Owner',
    sortField: 'owner',
    cell: row => row.owner
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'Stage',
    sortField: 'dealStage',
    cell: row => row.dealStage
  },
  {
    name: 'Amount',
    sortable: false,
    minWidth: '150px',
    sortField: 'amount',
    // selector: row => row.total,
    cell: row => <span>${numberWithCommas(row.amount)}</span>
  },
  {
    name: 'Last Update',
    sortable: false,
    minWidth: '150px',
    sortField: 'lastUpdate',
    // selector: row => row.total,
    cell: row => <span>{formatDate(row.lastUpdate)}</span>
  }
]
