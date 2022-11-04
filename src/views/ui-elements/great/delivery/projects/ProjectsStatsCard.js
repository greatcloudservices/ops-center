// ** Third Party Components
import { AlertTriangle, Aperture, Compass, Layers } from 'react-feather'
import { useEffect, useState } from 'react'
import axios from 'axios'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const StatsCard = ({  }) => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/delivery/projects/stats').then(res => setData(res.data))
    return () => setData(null)
  }, [])


  return data !== null ? (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>
          <Col key='0' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<Aperture size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.stats.activeProjectsCount}</h4>
                <CardText className='font-small-3 mb-0'>Active Projects</CardText>
            </div>
          </div>
          </Col>
          <Col key='1' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<Compass size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.stats.ytdProjectsCount}</h4>
                <CardText className='font-small-3 mb-0'>YTD Projects</CardText>
            </div>
          </div>
          </Col>
          <Col key='2' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<Layers size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.stats.lifetimeProjectsCount}</h4>
                <CardText className='font-small-3 mb-0'>Lifetime Projects</CardText>
            </div>
          </div>
          </Col>
          <Col key='3' className='mb-2 mb-xl-2 col-sm-6 col-xl-3'>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' icon=<AlertTriangle size={24} /> className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{data.stats.projectsOverCount}</h4>
                <CardText className='font-small-3 mb-0'>Above 75% Complete</CardText>
            </div>
          </div>
          </Col> 
        </Row>
      </CardBody>
    </Card>
  ) : null
}
export default StatsCard
