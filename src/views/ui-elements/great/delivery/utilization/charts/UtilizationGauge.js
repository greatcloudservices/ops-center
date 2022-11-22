// ** React Imports
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Chart from 'react-apexcharts'
import { HelpCircle } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { getData } from '../store/utilization'

const UtilizationGauge = props => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.utilization)
  
  useEffect(() => {
    dispatch(
      getData({
      })
    )
  }, [dispatch, store.length])

  const options = {
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: [props.success],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '67%'
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#5e5873',
              fontFamily: 'Montserrat',
              fontSize: '2.36rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 50
        }
      }
  }
  
  return store.allData.utilization !== null ? (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Utilization</CardTitle>
        <HelpCircle size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody className='p-0'>
        <Chart options={options} series={[store.allData.utilization ? store.allData.utilization.percentage : 0]} type='radialBar' height={200} />
      </CardBody>
    </Card>
  ) : null
}
export default UtilizationGauge
