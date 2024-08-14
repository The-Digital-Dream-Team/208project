import React from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'


const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <h1>Dashboard</h1>
          <p>Welcome back, John</p>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="chart">
            <Featured/>
            <Chart/>
          </div>
        </div>
    </div>
  )
}

export default Home