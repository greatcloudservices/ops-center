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
import { getData } from '../store'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const CustomHeader = ({ handleFilter, value, handleDateValue, dateValue, handleStageValue, stageValue, handlePerPage, rowsPerPage }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
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
        <Col
          lg='6'
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
              placeholder='Search Deals'
            />
          </div>
          <div className='d-flex align-items-center'>
            <label htmlFor='search-invoice'>Date</label>
            <Flatpickr
                className='form-control'
                id='date'
                value={dateValue}
                options={{ mode: 'range', dateFormat: 'm/d/Y' }}
                onChange={date => handleDateValue(date)}
            />
          </div>
          <Input className='w-auto ' type='select' value={stageValue} onChange={handleStageValue}>
            <option value=''>Select Stage</option>
            <option value='Deal Identified'>Deal Identifed</option>
            <option value='Initial Meeting'>Initial Meeting</option>
            <option value='Qualifed To Buy'>Qualifed To Buy</option>
            <option value='Decision Maker Meeting'>Decision Maker Meeting</option>
            <option value='SOW Sent'>SOW Sent</option>
            <option value='Closed Won'>Closed Won</option>
            <option value='Closed Lost'>Closed Lost</option>
          </Input>
        </Col>
      </Row>
    </div>
  )
}

const PipelineList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.pipeline)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('lastUpdate')
  const [currentPage, setCurrentPage] = useState(1)
  const [stageValue, setStageValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [dateValue, setDateValue] = useState('')

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        stage: stageValue,
        range: dateValue
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
        stage: stageValue,
        range: dateValue
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
        stage: stageValue,
        range: dateValue,
        perPage: parseInt(e.target.value)
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStageValue = e => {
    setStageValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        stage: e.target.value,
        range: dateValue
      })
    )
  }

  const handleDateValue = e => {
    setDateValue(e)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        stage: stageValue,
        range: e
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        stage: stageValue,
        range: dateValue,
        perPage: rowsPerPage,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

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
      stage: stageValue,
      range: dateValue
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
        stage: stageValue,
        range: dateValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }

  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <CardHeader className='border-bottom text-center'>
          <CardTitle className='text-primary text-center' tag='h4'>Pipeline</CardTitle>
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
            defaultSortField='companyName'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                value={value}
                stageValue={stageValue}
                dateValue={dateValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStageValue={handleStageValue}
                handleDateValue={handleDateValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default PipelineList
