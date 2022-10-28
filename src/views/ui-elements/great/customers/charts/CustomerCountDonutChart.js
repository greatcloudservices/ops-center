// ** Third Party Components
import Chart from 'react-apexcharts'
import { useEffect } from 'react'

import { getData } from '../store/pipeline-customers'
import { useDispatch, useSelector } from 'react-redux'
import { numberWithCommas } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexRadiarChart = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.pipelineCustomers)

  // ** States
  //const [labels, setLabels] = useState('')
 
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.data.length])

    // ** Chart Options
  const countOptions = {
    legend: {
      show: true,
      position: 'left'
    },
    labels: store.data.map(a => a.name),

    //colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`
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
                return `${numberWithCommas(val)}`
              }
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Count',
              formatter(w) {
                return `${  w.globals.seriesTotals.reduce((a, b) => { return a + b }, 0).toLocaleString()}`
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
  const countSeries = store.data.map(a => a.count)

  return (
    <Card>
        <CardHeader className='border-bottom text-center'>
          <CardTitle className='text-primary text-center' tag='h4'>Customer Chart - Deal Count</CardTitle>
        </CardHeader>
      <CardBody>
        <Chart options={countOptions} series={countSeries} type='donut' height={250} />
      </CardBody>
    </Card>
  )
}

export default ApexRadiarChart
