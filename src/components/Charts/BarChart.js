import React from 'react'
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJs.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const BarChart = () => {

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
    const options = {}

    return (
        <div>
            <Bar style={{ padding: '10px', height: '98vh', width: '98vw' }} data={data} options={options}>

            </Bar>
        </div>
    )
}

export default BarChart