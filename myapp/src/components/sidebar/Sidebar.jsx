import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>TechGigs</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <li>
                <PeopleOutlineIcon className='icon'/>
                    <span>Customers</span>
                </li>
                <li>
                    <LocalActivityOutlinedIcon className='icon'/>
                    <span>Activities</span>
                </li>
                <li>
                    <SummarizeOutlinedIcon className='icon'/>
                    <span>Reports</span>
                </li>
                <li>
                    <InfoOutlinedIcon className='icon'/>
                    <span>About</span>
                </li>
                <p className='title'>USER</p>
                <li>
                <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Log out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar