// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import { HelpCircle } from 'react-feather'
// ** Utils
import { asKDollar, asMDollar } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const BookingsGoalOverview = props => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/sales/bookings/goal').then(res => setData(res.data))
    return () => setData(null)
  }, [])

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
            size: '77%'
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
              fontSize: '2.86rem',
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
          bottom: 30
        }
      }
  }
  
  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>{props.cardTitle ? props.cardTitle : 'Goal Overview'}</CardTitle>
        <HelpCircle size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody className='p-0'>
        <Chart options={options} series={[parseInt(data.booked / data.goal * 100)]} type='radialBar' height={200} />
      </CardBody>
      <Row className='border-top text-center mx-0'>
        <Col xs='6' className='border-end py-1'>
          <CardText className='text-muted mb-0'>Current</CardText>
          <h3 className='fw-bolder mb-0'>{Number(data.booked) < 1000000 ? asKDollar(data.booked) : asMDollar(data.booked)}</h3>
        </Col>
        <Col xs='6' className='py-1'>
          <CardText className='text-muted mb-0'>Goal</CardText>
          <h3 className='fw-bolder mb-0'>{Number(data.goal) < 1000000 ? asKDollar(data.goal) : asMDollar(data.goal)}</h3>
        </Col>
      </Row>
    </Card>
  ) : null
}
export default BookingsGoalOverview
