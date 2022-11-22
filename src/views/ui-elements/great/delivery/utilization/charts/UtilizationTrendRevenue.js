// ** Third Party Components
import { Line } from 'react-chartjs-2'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const UtilizationTrendRevenue = ({ labelColor, gridLineColor, lineChartPrimary, lineChartSecondary }) => {
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
          stepSize: 1000,
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

  // ** Chart Data
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    datasets: [
      {
        data: [27000.00, 32000.00, 45000.00, 52000.00, 22000.00, 36000.00, 53000.00, 56000.00, 45000.00, 45000.00, 28000.00, 45000.00, 47000.00, 52000.00, 54000.00],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: '2022',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary
      },
      {
        data: [6000, 8000, 8000, 9500, 5000, 8800, 7500, 9000, 9500, 7500, 8000, 8000, 9000, 7500, 9500, 8000, 9000, 7500, 9000, 2500, 6800, 9200, 10000, 9000, 9000, 4000, 8000, 8500, 9000, 9500, 8000, 9000, 7500, 9000, 2500, 6800, 9200, 10000, 9000, 9000, 4000, 8000, 8500, 9000, 9500, 8000, 9000, 7500, 9000, 2500, 6800, 9200, 10000, 9000, 9000, 4000],
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
          <CardSubtitle>Trending by Revenue</CardSubtitle>
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

export default UtilizationTrendRevenue
