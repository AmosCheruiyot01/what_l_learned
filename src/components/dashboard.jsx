import React from 'react'
import './dashboard.css'
import Header from '../pages/header'
import Body from '../pages/body'
import Footer from '../pages/footer'

function Dashboard() {
  return (
    <div className='dashboard'>

      <div className="header">
        <Header />
      </div>

      <div className="body">
        <Body />
      </div>


      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default Dashboard