import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './Pages/Landingpage'
import { Loginpage } from './Pages/Loginpage' 
import { Profilepage } from './Pages/Profilepage'
import { Signup } from './Pages/Signup'
import { Tuner } from './Pages/Tuner'
import { LearnGuitar } from './Pages/LearnGuitar'
import { Mixer } from './Pages/Mixer'
import { Home } from './Pages/Home'


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/profilepage" element={<Profilepage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/tuner" element={<Tuner/>}/>
          <Route path="/learnguitar" element={<LearnGuitar/>}/>
          <Route path="/mixer" element={<Mixer/>}/>
        </Routes>
      </Router>
     
      
    </>
      )
}

export default App
