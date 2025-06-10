import React from 'react'
import Header from '../components/Header'
import { Button } from 'react-bootstrap'
import Profile from '../components/Profile'
import View from '../components/View'
import Add from '../components/Add'

const Dashboard = () => {
  return (
    <>
    <Header insideDashboard={true}/>
    <div className="row container-fluid">
      <div className="col-lg-8">
        <h1 className='fw-bold'>Welcome <span className='text-warning'>123</span> ,</h1>
        <div className='d-flex justify-content-between'>
          <h2 className='text-warning fw-bold'>All Projects</h2>
          <Add/>
        </div>
        <View/>
      </div>
      <div className="col-lg-4"><Profile/></div>
    </div>
    </>
  )
}

export default Dashboard