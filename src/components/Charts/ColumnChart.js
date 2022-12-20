import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export default function ColumnChart() {
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
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };
    return <Bar options={options} data={data} />;
}
