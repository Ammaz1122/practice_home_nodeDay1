import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './authentication/Register'
import Login from './authentication/Login'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='register' element={<Register/>} />

        
      </Routes>
    </Router>
    
    </>
  )
}

export default App