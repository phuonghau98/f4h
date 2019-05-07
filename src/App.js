import React from 'react'
import './App.css'
import LandingPage from './pages/Landing'
import LoginPage from './pages/Login'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/' component={LandingPage} />
      <Route path='/login' component={LoginPage} />
    </div>
  )
}

export default App