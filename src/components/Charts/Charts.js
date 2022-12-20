import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import AreaChart from './AreaChart'
import AreaChild from './AreaChart'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import DoughnutChart from './DoughnutChart'


import LineChart from './LineChart'
import PieChart from './PieChart'
import PlotterChart from './PlotterChart'
import SpiderChart from './SpiderChart'

const Charts = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <PlotterChart />
            <BarChart />
            <PieChart />
            <LineChart />
            <ColumnChart />
            <DoughnutChart />
            <AreaChart />
            <SpiderChart />
        </div>
    )
}

export default Charts