// ** Third Party Components
//import classnames from 'classnames'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import axios from 'axios'
import { asKDollar, asMDollar, formatDate } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

// eslint-disable-next-line no-unused-vars
const StatsCard = props => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/sales/bookings/stats').then(res => setData(res.data))
    return () => setData(null)
  }, [])


 /* const renderData = (start, end) => {
    return data.slice(start, end).map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-4`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }*/

  return data !== null ? (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'>Updated : {formatDate(data.lastUpdated)}</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>
          <Col key='0' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<User size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.teamCount}</h4>
                <CardText className='font-small-3 mb-0'>Team Member</CardText>
            </div>
          </div>
          </Col>
          <Col key='1' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.ytdCustomers}</h4>
                <CardText className='font-small-3 mb-0'>YTD Customers</CardText>
            </div>
          </div>
          </Col>
          <Col key='2' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{Number(data.closedThisWeek) < 1000000 ? asKDollar(data.closedThisWeek) : asMDollar(data.closedThisWeek)}</h4>
                <CardText className='font-small-3 mb-0'>This Week</CardText>
            </div>
          </div>
          </Col>
          <Col key='3' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{Number(data.ytdBookings) < 1000000 ? asKDollar(data.ytdBookings) : asMDollar(data.ytdBookings)}</h4>
                <CardText className='font-small-3 mb-0'>YTD Bookings</CardText>
            </div>
          </div>
          </Col>
  
        </Row>
        <Row>
          <Col key='4' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<User size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.teamCount}</h4>
                <CardText className='font-small-3 mb-0'>SOW Sent</CardText>
            </div>
          </div>
          </Col>
          <Col key='5' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.lifetimeCustomers}</h4>
                <CardText className='font-small-3 mb-0'>Lifetime Customers</CardText>
            </div>
          </div>
          </Col>
          <Col key='6' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{Number(data.closedLastWeek) < 1000000 ? asKDollar(data.closedLastWeek) : asMDollar(data.closedLastWeek)}</h4>
                <CardText className='font-small-3 mb-0'>Last Week</CardText>
            </div>
          </div>
          </Col>
          <Col key='7' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<TrendingUp size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{Number(data.lifetimeBookings) < 1000000 ? asKDollar(data.lifetimeBookings) : asMDollar(data.lifetimeBookings)}</h4>
                <CardText className='font-small-3 mb-0'>Lifetime Bookings</CardText>
            </div>
          </div>
          </Col>
  
        </Row>
      </CardBody>
    </Card>
  ) : null
}

export default StatsCard
