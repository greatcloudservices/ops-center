// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'


// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, CardHeader, CardTitle } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store/utilization'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handleYearValue, yearValue, handlePerPage, rowsPerPage }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='2' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page'>Show</label>
            <Input
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              className='form-control ms-50 pe-3'
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
          </div>
        </Col>
        <Col lg='3' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page'>Status</label>
            <Input
              type='select'
              id='rows-per-page'
              value={statusValue}
              onChange={handleStatusValue}
              className='form-control ms-50 pe-3'
            >
              <option value=''>Select Status</option>
              <option value='All'>All</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </Input>
          </div>
        </Col>
        <Col lg='2' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page'>Year</label>
            <Input
              type='select'
              id='rows-per-page'
              value={yearValue}
              onChange={handleYearValue}
              className='form-control ms-50 pe-3'
            >
             <option value=''>Select Year</option>
             <option value='All'>All</option>
             <option value='2022'>2022</option>
             <option value='2021'>2021</option>
             <option value='2020'>2020</option>
            </Input>
          </div>
        </Col>
        <Col
          lg='4'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'
        >
          <div className='d-flex align-items-center'>
            <label htmlFor='search-invoice'>Search</label>
            <Input
              id='search-invoice'
              className='ms-50 me-2 w-100'
              type='text'
              value={value}
              onChange={e => handleFilter(e.target.value)}
              placeholder='Search Resource'
            />
          </div>
          
        </Col>
      </Row>
    </div>
  )
}

const UtilizationList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.utilization)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const [yearValue, setYearValue] = useState('')
  const [statusValue, setStatusValue] = useState('active')
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue
      })
    )
  }, [dispatch, store.data.length])

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue
      })
    )
  }

  const handlePerPage = e => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        status: statusValue,
        perPage: parseInt(e.target.value)
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleYearValue = e => {
    setYearValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue
      })
    )
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        perPage: rowsPerPage,
        status: statusValue,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Math.ceil(Number((store.total / rowsPerPage)))
    
    return (
      <ReactPaginate
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        pageCount={count || 1}
        activeClassName='active'
        breakClassName='page-item'
        pageClassName={'page-item'}
        breakLinkClassName='page-link'
        nextLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousLinkClassName={'page-link'}
        previousClassName={'page-item prev'}
        onPageChange={page => handlePagination(page)}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }

  const dataToRender = () => {
    const filters = {
      q: value,
      status: statusValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })
    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        q: value,
        page: currentPage,
        sort: sortDirection,
        year: yearValue,
        status: statusValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }

  const conditionalRowStyles = [
  {
    when: row => row.utilization.percentage <= 80,
    style: {   
      color: 'blue',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  {
    when: row => row.utilization.totalHours < 40,
    style: {   
      color: 'red',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
    
  ]
  
  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <CardHeader className='border-bottom text-center'>
          <CardTitle className='text-primary text-center' tag='h4'>Team Utilization</CardTitle>
        </CardHeader>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            onSort={handleSort}
            data={dataToRender()}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='name'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            conditionalRowStyles={conditionalRowStyles}
            subHeaderComponent={
              <CustomHeader
                value={value}
                yearValue={yearValue}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleYearValue={handleYearValue}
                handleStatusValue={handleStatusValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default UtilizationList
