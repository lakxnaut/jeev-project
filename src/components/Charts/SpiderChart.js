import React from 'react'
import {
    Chart as ChartJS,


    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    RadialLinearScale
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const SpiderChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
        datasets: [
            {
                label: 'Days',
                data: [3, 2, 4, 6, 1],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }
    const options = {
        indexAxis: 'y',

        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {

            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
            },
        },
    };
    return (
        <Radar options={options} data={data} />
    )
}

export default SpiderChart