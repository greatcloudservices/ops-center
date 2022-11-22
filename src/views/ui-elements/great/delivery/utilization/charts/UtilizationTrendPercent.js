// ** Third Party Components
//import { isPropsEqual } from '@fullcalendar/core'
import { Line } from 'react-chartjs-2'
import { useEffect } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { getData } from '../store/utilization'
import { useDispatch, useSelector } from 'react-redux'

const UtilizationTrend = ({ labelColor, gridLineColor, lineChartPrimary, lineChartSecondary }) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.utilization)
 
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.length])

  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      },
      y: {
        min: 0,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 10,
          color: labelColor
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      }
    },
    plugins: {
      legend: {
        align: 'middle',
        position: 'top',
        labels: {
          boxWidth: 10,
          marginBottom: 25,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  function getPercentages(year) {
    const percentages = year ? year.weeks.map(({ percentage }) => percentage) : [0]
    return percentages
  }

  function getLabel(year) {
    const result = year ? year.year : ""
    return result
  }

  // ** Chart Data
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    datasets: [
      {
        data: getPercentages(store.statistics.primaryYear),
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: getLabel(store.statistics.primaryYear),
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary
      },
      {
        data: getPercentages(store.statistics.secondaryYear),
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: '2021',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartSecondary,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartSecondary,
        pointHoverBackgroundColor: lineChartSecondary
      }
    ]
  }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]
  
  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Utilization
          </CardTitle>
          <CardSubtitle>Trending by Percentage</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '350px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default UtilizationTrend
