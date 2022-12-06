// ** Third Party Components
import { Aperture, Layers, AlertTriangle, Compass } from 'react-feather'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { asDollar } from '@utils'

// ** Custom Components
import Avatar from '@components/avatar'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

const ProjectsStatCards = () => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/sales/bookings/stats').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
    <Col lg='12' sm='12'>
      <Row className='match-height'>
          <Col lg='6' sm='6'>
            <StatsHorizontal icon={<Aperture size={21} />} color='primary' stats={data.teamCount} statTitle='Team Count' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Compass size={21} />} color='success' stats={data.ytdCustomers} statTitle='Customers (YTD)' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Layers size={21} />} color='danger' stats={data.sowSent} statTitle='SOWs Sent (Current)' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<AlertTriangle size={21} />} color='warning' stats={asDollar(data.lifetimeBookings)} statTitle='Bookings (Lifetime)' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Layers size={21} />} color='danger' stats={asDollar(data.closedThisWeek)} statTitle='Closed This Week' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Layers size={21} />} color='danger' stats={asDollar(data.closedLastWeek)} statTitle='Closed Last Week' />
        </Col>
      </Row>
      <Row className='match-height'>
      </Row>
    </Col>
  ) : null
}
export default ProjectsStatCards
