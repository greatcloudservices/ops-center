// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import UtilizationList from '@src/views/ui-elements/great/delivery/utilization/list'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import UtilizationStatCards from '../../../../ui-elements/great/delivery/utilization/stats/UtilizationStatCards'

// ** Third Party Components
import 'chart.js/auto'
import UtilizationTrends from '../../../../ui-elements/great/delivery/utilization/charts/UtilizationTrends'

const UtilizationOverview = () => {
   // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors)
  
 // ** Context
  return (
    <div id='dashboard-analytics'>
      <UtilizationStatCards success={colors.info.light} cardTitle='Utilization' />
      <UtilizationTrends />
    </div>
  )
}

export default UtilizationOverview
