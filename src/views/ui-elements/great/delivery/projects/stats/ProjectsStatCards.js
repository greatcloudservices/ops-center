// ** Third Party Components
import { Aperture, Layers, AlertTriangle, Compass } from 'react-feather'
import { useEffect, useState } from 'react'
import axios from 'axios'

// ** Custom Components
import Avatar from '@components/avatar'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

const ProjectsStatCards = () => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/delivery/projects/stats').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
    <Col lg='12' sm='6'>
      <Row className='match-height'>
          <Col lg='6' sm='6'>
            <StatsHorizontal icon={<Aperture size={21} />} color='primary' stats={data.stats.activeProjectsCount} statTitle='Active Projects' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Compass size={21} />} color='success' stats={data.stats.ytdProjectsCount} statTitle='YTD Projects' />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<Layers size={21} />} color='danger' stats={data.stats.lifetimeProjectsCount} statTitle='Lifetime Projects' />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal icon={<AlertTriangle size={21} />} color='warning' stats={data.stats.projectsOverCount} statTitle='Above 75% Complete' />
        </Col>
      </Row>
    </Col>
  ) : null
}
export default ProjectsStatCards
