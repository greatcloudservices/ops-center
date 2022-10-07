// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import { buildMonthlySeries } from './booking-util'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardTitle
} from 'reactstrap'

const RevenueReport = props => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/great/sales/bookings/monthly').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  const revenueOptions = {
      chart: {
        stacked: false,
        type: 'bar',
        toolbar: { show: true, offsetY: -65 }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: true }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetX: -15,
        fontSize: '0.86rem',
        fontWeight: 'semi bold',
        fontFamily: 'feather'
      },
      tooltip: {
        enabled: true,
        shared: true,
        intersect: false,
          
          x: {
              show: true
              
          },
          y: {
                show: true
          }
      },     
      dataLabels: {
        enabled: false
      },
      colors: [props.currentYear, props.previousYear, props.thirdYear],
      plotOptions: {
        bar: {
          //columnWidth: '17%',
          borderRadius: [5]
        },
        distributed: false
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        }
      }
    }

  return data !== null ? (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='812' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>Monthly Bookings</CardTitle>
          </div>
          <Chart type='bar' height='230' options={revenueOptions} series={buildMonthlySeries(data)} />
        </Col>
      </Row>
    </Card>
  ) : null
}

export default RevenueReport
