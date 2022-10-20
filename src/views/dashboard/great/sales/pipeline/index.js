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
import StageList from '@src/views/dashboard/great/sales/pipeline/stagelist'
import PipelineList from '@src/views/dashboard/great/sales/pipeline/list'
import PipelineClosedList from '@src/views/dashboard/great/sales/pipeline/closedlist'
import StageAmountDonutChart from '@src/views/dashboard/great/sales/pipeline/stagechart/StageAmountDonutChart'
import StageCountDonutChart from '@src/views/dashboard/great/sales/pipeline/stagechart/StageCountDonutChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const PipelineOverview = () => {
  // ** Context
  return (
    <div id='dashboard-analytics'>
     <Row className='match-height'>
        <Col lg='6' xs='12'>
          <StageAmountDonutChart />
        </Col>
        <Col lg='6' xs='12'>
          <StageCountDonutChart />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='5' xs='12'>
          <StageList />
        </Col>
        <Col lg='7' xs='12'>
          <PipelineClosedList  />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <PipelineList  />
        </Col>
      </Row>
    </div>
  )
}

export default PipelineOverview
