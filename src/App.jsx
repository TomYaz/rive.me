import { useState } from 'react'
import './App.css'

import logo from './assets/images/rive logo 2.png'
import { useNavigate } from 'react-router';


function App() {

  const navigate = useNavigate();

  return (
    <div className='App'>
      <Header />
      <div className='App-first-div'>
        <div className='App-first-div-container'>
          <div className='App-rive-container'>
            <h1 className='App-rive'>rive.</h1>
            <div className='App-rive-underline' />
          </div>
          <h3 className='App-text'>The simple way to do research.</h3>
        </div>
        <p className='App-subtext'>We provide an <span className='App-subtext-highlighted'>AI powered</span> tool to help you find relevant and reliable ressources for any research project.</p>

        <button className='App-signup-button' onClick={() => navigate('/signup')}>Sign up for rive</button>


      </div>
    </div>
  )
}

function Header() {

  const navigate = useNavigate();

  return (
    <div className='Header'>
      <img src={logo} className='Header-logo' onClick={() => navigate('/')} />
      <button className='Header-button' onClick={() => navigate('/console')}>Rive console</button>
    </div>
  )
}

export default App;
