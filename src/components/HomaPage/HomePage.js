import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const HomePage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


            <button style={{ background: '#4CAF50', border: 'none', padding: '10px', marginBottom: '10px' }}><Link to='/dashboard'>Dashboard</Link></button>

            <button style={{ background: 'red', border: 'none', padding: '10px', marginBottom: '10px' }}><Link to='/charts'>Charts</Link></button>
        </div>
    )
}

export default HomePage