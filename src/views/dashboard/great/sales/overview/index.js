// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

import StatsCard from '@src/views/ui-elements/great/sales/booking/BookingStatsCard'
import BookingGoalOverview from '@src/views/ui-elements/great/sales/booking/BookingGoalOverview'
import BookingMonthlyChart from '@src/views/ui-elements/great/sales/booking/BookingMonthlyChart'
import BookingQuarterlyChart from '@src/views/ui-elements/great/sales/booking/BookingQuarterlyChart'
import BookingYearlyChart from '@src/views/ui-elements/great/sales/booking/BookingYearlyChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const SalesOverview = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)


  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col lg='4' md='6' xs='12'>
          <BookingGoalOverview success={colors.info.main} cardTitle='Bookings Goal' />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
     <Row className='match-height'>
        <Col lg='12' md='12'>
          <BookingMonthlyChart currentYear={colors.primary.main} previousYear={colors.info.main} thirdYear={colors.secondary.main}/>
        </Col>
      </Row>
     <Row className='match-height'>
        <Col lg='8' md='12'>
          <BookingQuarterlyChart currentYear={colors.primary.main} previousYear={colors.info.main} thirdYear={colors.secondary.main}/>
        </Col>
        <Col lg='4' md='12'>
          <BookingYearlyChart currentYear={colors.primary.main} previousYear={colors.info.main} thirdYear={colors.secondary.main}/>
        </Col>
      </Row>
    </div>
  )
}

export default SalesOverview
