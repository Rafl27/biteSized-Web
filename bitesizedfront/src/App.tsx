import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home/Home'
import { AddNewArt } from './pages/AddNewArt/AddNewArt';

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newart" element={<AddNewArt />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
