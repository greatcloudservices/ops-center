// ** React Imports

// ** Icons Imports
import { List } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Demo Components
import ProjectList from '@src/views/ui-elements/great/delivery/projects/list'
import StatsCard from '@src/views/ui-elements/great/delivery/projects/ProjectsStatsCard'
import ProjectsStatCards from '@src/views/ui-elements/great/delivery/projects/stats/ProjectsStatCards'
import ProjectTypeAmountDonutChart from '@src/views/ui-elements/great/delivery/projects/projectchart/ProjectTypeAmountDonutChart'
import PartnershipAmountDonutChart from '@src/views/ui-elements/great/delivery/projects/projectchart/PartnershipAmountDonutChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const ProjectsOverview = () => {
  // ** Context
  return (
    <div id='dashboard-analytics'>
          <Row className='match-height'>
              <Col xl='4' md='12' xs='12'>
                <ProjectsStatCards />
              </Col>
              <Col lg='4' xs='12'>
                <ProjectTypeAmountDonutChart />
              </Col>
              <Col lg='4' xs='12'>
                <PartnershipAmountDonutChart />
              </Col>
          </Row>
          <Row className='match-height'>
              <Col xs='12'>
                <ProjectList  />
              </Col>
          </Row>
    </div>
  )
}

export default ProjectsOverview
