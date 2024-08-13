import React from 'react'
import './Widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widgets = () => {
  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>USERS</span>
        <span className='counter'>1356</span>
        <span className='link'>See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon/>
          20%</div>
      </div>
    </div>
  )
}

export default Widgets