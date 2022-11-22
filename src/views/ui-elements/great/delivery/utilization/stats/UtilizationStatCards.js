// ** Third Party Components
import { Clock, Percent, DollarSign, ThumbsUp } from 'react-feather'
import { useEffect } from 'react'
import { asDollar} from '@utils'

// ** Custom Components
import Avatar from '@components/avatar'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import { getData } from '../store/utilization'
import { useDispatch, useSelector } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

const UtilizationStatCards = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.utilization)
 
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.length])

  return store.statistics !== null ? (
    <Row>
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Clock size={21} />} color='primary' stats={store.statistics.totalHours ? store.statistics.totalHours.toString() : "0"} statTitle='Total Hours' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<ThumbsUp size={21} />} color='success' stats={store.statistics.billableHours ? store.statistics.billableHours.toString() : "0"} statTitle='Billable Hours' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Percent size={21} />} color='danger' stats={store.statistics.percentage ? `${store.statistics.percentage  }%` : "0"} statTitle='Utilization' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<DollarSign size={21} />} color='warning' stats={asDollar(store.statistics.revenue ? store.statistics.revenue.toString() : "0")} statTitle='Revenue' />
        </Col>
        {/* Stats With Icons Horizontal */}
      </Row>
  ) : null
}
export default UtilizationStatCards
