import React from 'react'

import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJs.register(
    ArcElement, Tooltip, Legend
)

const PieChart = () => {
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

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px', height: '95vh', width: '98vw' }}  >
            <Pie
                data={data} options={options}
            ></Pie>
        </div>
    )
}

export default PieChart