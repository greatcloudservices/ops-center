// ** Third Party Components
import Chart from 'react-apexcharts'
import { useEffect } from 'react'

import { getData } from '../store/projects'
import { useDispatch, useSelector } from 'react-redux'
import { numberWithCommas, asDollar } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexRadiarChart = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.projects)
 
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.length])


  // ** Chart Options
  const amountOptions = {
    legend: {
      show: true,
      position: 'left'
    },
    labels: store.groupedByTaskType.map(a => a.taskType),

    //colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter(val) {
          return `$${numberWithCommas(val)}`
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `$${numberWithCommas(val)}`
              }
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Amount',
              formatter(w) {
                return `${  asDollar(w.globals.seriesTotals.reduce((a, b) => { return a + b }, 0))}`
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  // ** Chart Series
  const amountSeries = store.groupedByTaskType.map(a => a.billableCharge)

  return (
    <Card>
        <CardHeader className='border-bottom text-center'>
          <CardTitle className='text-primary text-center' tag='h4'>Project Type</CardTitle>
        </CardHeader>
      <CardBody>
        <Chart options={amountOptions} series={amountSeries} type='donut' height={180} />
      </CardBody>
    </Card>
  )
}

export default ApexRadiarChart
