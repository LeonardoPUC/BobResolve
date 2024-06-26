import ReactApexCharts from 'react-apexcharts'
/* eslint-disable */
import { StyledCharts } from './AreaChart.style'
import { COLORS } from '../../../../constants/enum'
import { ICharts } from './AreaChart.interfaces'
import { useEffect, useState } from 'react'
import { Area } from '@ant-design/plots';

const AntAreaChart = (chartsProps: ICharts) => {
    const [data, setData] = useState(chartsProps.plotData[0].data);

    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    // const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //             console.log('fetch data failed', error);
    //         });
    // };

    const config = {
        data,
        angleField: 'production',
        xField: 'category',
        yField: 'production',
        xAxis: {
            range: [0, 1],
        },
        point: {
            size: 5,
            shape: 'diamond',
        },
        label: {
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}',
        },
    };

    return (
        <StyledCharts>
            <Area {...config} />
        </StyledCharts>
    )
}

export default AntAreaChart
