import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './component/Home'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App