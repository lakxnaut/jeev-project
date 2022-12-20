import React from 'react';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
);




export default function DoughnutChart() {
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
    return <Doughnut options={options} data={data} />;
}
