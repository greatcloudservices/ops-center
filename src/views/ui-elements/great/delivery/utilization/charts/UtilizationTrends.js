// ** React Imports
import { useContext, useEffect } from 'react'
import { getData } from '../store/utilization'
import { useDispatch, useSelector } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import UtilizationList from '@src/views/ui-elements/great/delivery/utilization/list'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import UtilizationTrend from './UtilizationTrend'
import UtilizationTrendRevenue from './UtilizationTrendRevenue'

// ** Third Party Components
import 'chart.js/auto'

const UtilizationTrends = () => {
   // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    gridLineColor = 'rgba(200, 200, 200, 0.2)'

  const dispatch = useDispatch()
  const store = useSelector(state => state.utilization)
 
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.length])

  function getPercentages(year) {
    const percentages = year ? year.weeks.map(({ percentage }) => percentage) : [0]
    return percentages
  }

  function getBillableHours(year) {
    const hours = year ? year.weeks.map(({ billableHours }) => billableHours) : [0]
    return hours
  }

  function getRevenue(year) {
    const revenue = year ? year.weeks.map(({ revenue }) => revenue) : [0]
    return revenue
  }

  function getLabel(year) {
    const result = year ? year.year : ""
    return result
  }
  
 // ** Context
  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col xs='12'>
          <UtilizationList  />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col sm='12'>
          <UtilizationTrend
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartPrimary={colors.primary.main}
            lineChartSecondary={colors.info.main}
            title='Utilization'
            subtitle='Trending by Percentage'
            primaryData={getPercentages(store.statistics.primaryYear)}
            primaryLabel={getLabel(store.statistics.primaryYear)}
            secondaryData={getPercentages(store.statistics.secondaryYear)}
            secondaryLabel={getLabel(store.statistics.secondaryYear)}
          />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col sm='12'>
          <UtilizationTrend
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartPrimary={colors.primary.main}
            lineChartSecondary={colors.info.main}
            title='Utilization'
            subtitle='Trending by Billable Hours'
            primaryData={getBillableHours(store.statistics.primaryYear)}
            primaryLabel={getLabel(store.statistics.primaryYear)}
            secondaryData={getBillableHours(store.statistics.secondaryYear)}
            secondaryLabel={getLabel(store.statistics.secondaryYear)}
          />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col sm='12'>
          <UtilizationTrend
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartPrimary={colors.primary.main}
            lineChartSecondary={colors.info.main}
            title='Utilization'
            subtitle='Trending by Revenue'
            primaryData={getRevenue(store.statistics.primaryYear)}
            primaryLabel={getLabel(store.statistics.primaryYear)}
            secondaryData={getRevenue(store.statistics.secondaryYear)}
            secondaryLabel={getLabel(store.statistics.secondaryYear)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default UtilizationTrends
