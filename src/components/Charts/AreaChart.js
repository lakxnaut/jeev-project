import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);







export default function App() {
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
    return <Line options={options} data={data} />;
}
