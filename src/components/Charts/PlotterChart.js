import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);



export default function PlotterChart() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
        datasets: [
            {
                label: 'Days',
                data: [
                    { x: 3, y: 3 },
                    { x: 2, y: 3 },
                    { x: 4, y: 2 },
                    { x: 6, y: 2 },
                    { x: 1, y: 1 },],
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
                text: 'Chart.js Plotter Chart',
            },
        },
    };
    return <Scatter options={options} data={data} />;
}
