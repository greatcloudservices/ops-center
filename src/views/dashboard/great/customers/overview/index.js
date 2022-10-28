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
import CustomerList from '@src/views/ui-elements/great/customers/list'
import CustomerAmountDonutChart from '@src/views/ui-elements/great/customers/charts/CustomerAmountDonutChart'
import CustomerCountDonutChart from '@src/views/ui-elements/great/customers/charts/CustomerCountDonutChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const PipelineOverview = () => {
  // ** Context
  return (
    <div id='dashboard-analytics'>
     <Row className='match-height'>
        <Col lg='6' xs='12'>
         <CustomerAmountDonutChart /> 
        </Col>
        <Col lg='6' xs='12'>
          <CustomerCountDonutChart />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <CustomerList  />
        </Col>
      </Row>
    </div>
  )
}

export default PipelineOverview
