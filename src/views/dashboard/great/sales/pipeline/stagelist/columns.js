import { numberWithCommas } from '@utils'

// ** Table columns
export const columns = [
  {
    sortable: true,
    minWidth: '150px',
    name: 'Stage',
    sortField: 'dealStage',
    cell: row => row.dealStage
  },
  {
    name: 'Count',
    sortable: true,
    minWidth: '50px',
    sortField: 'count',
    cell: row => row.count
  },
  {
    name: 'Amount',
    sortable: false,
    minWidth: '150px',
    sortField: 'amount',
    selector: row => row.total,
    cell: row => <span>${numberWithCommas(row.amount)}</span>
  }
]
