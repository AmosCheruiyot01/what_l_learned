import React, { createContext, useState } from 'react'
import './dashboard.css'
import Header from '../pages/header'
import Body from '../pages/body'
import Footer from '../pages/footer'
import UpdateForm from './updateForm'

export const dashContext = createContext();

function Dashboard() {

  const [allPosts, setAllPosts] = useState([]);
  const[inputUpdates, setInputUpdates] = useState({});//{tittle: '', learned: '', category: '', date: ''}
  return (
    <div className='dashboard'>

      {/* <UpdateForm/> */}

      <dashContext.Provider value={{allPosts, setAllPosts, inputUpdates, setInputUpdates}}>

        <div className="header">
          <Header />
        </div>

        <div className="body">
          <Body />
        </div>


        <div className="footer">
          <Footer />
        </div>
      </dashContext.Provider>

    </div>
  )
}

export default Dashboard