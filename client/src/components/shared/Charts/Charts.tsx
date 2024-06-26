import ReactApexCharts from 'react-apexcharts'
import { StyledCharts } from './Charts.styles'
import { ICharts } from './Charts.interfaces'
import { COLORS } from '../../../constants/enum'

const ApexChart = (chartsProps: ICharts) => {
  const options = {
    colors: [COLORS.LIGHT_BLUE], 
    xaxis: {
      categories: chartsProps.categories,
      overwriteCategories: chartsProps.overwriteCategories ? chartsProps.overwriteCategories : chartsProps.categories,
      tickPlacement: 'off',
      tickAmount: 15
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          width: 1000,
          events: {
            animationEnd: undefined,
            beforeMount: undefined,
            mounted: undefined,
            updated: undefined,
            mouseMove: undefined,
            mouseLeave: undefined,
            click: undefined,
            legendClick: undefined,
            markerClick: undefined,
            xAxisLabelClick: undefined,
            selection: undefined,
            dataPointSelection: undefined,
            dataPointMouseEnter: undefined,
            dataPointMouseLeave: undefined,
            beforeZoom: undefined,
            beforeResetZoom: undefined,
            zoomed: undefined,
            scrolled: undefined,
          }
        },
        legend: {
          show: false
        }
      }
    }],
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        customIcons: []
      }
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: false,
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        show: false,
      },
      z: {
        title: 'Size:',
      },
      marker: {
        show: true,
      }
    }
  }

  return (
    <StyledCharts>
      <ReactApexCharts options={options} series={Array.isArray(chartsProps?.plotData) ? chartsProps?.plotData.map(item => {
        return {
          name: item?.step,
          data: item?.data.map(item => { return parseFloat(item?.production) })
        }
      }) : [
        {
          name: chartsProps?.plotData?.step,
          data: chartsProps?.plotData?.data.map(item => { return parseFloat(item?.production) })
        }
      ]}
      type={chartsProps.type} max-width='100%' height='500' />
    </StyledCharts>
  )
}

export default ApexChart