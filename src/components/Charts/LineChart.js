import React from 'react'
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJs.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

const LineChart = () => {

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
        <div style={{ padding: '10px', height: '98vh', width: '98vw' }} ><Line data={data} options={options}></Line></div>
    )
}

export default LineChart