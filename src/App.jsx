import { useEffect } from 'react'
import './App.css'

import logo from './assets/images/rive logo 1.png'
import fp1 from './assets/images/frontpage1.png'
import underline from './assets/images/underline.png'

import { useNavigate } from 'react-router'
import { FaSearch, FaChevronDown } from "react-icons/fa"

function App() {

  const navigate = useNavigate();


  return (
    <div className='App'>
      <Header />

      {/* First div */}
      <div className='App-first-div'>
        <div className='App-first-div-container'>
          <div className='App-rive-container'>
            <h1 className='App-rive'>rive.</h1>
            <div className='App-rive-underline' />
          </div>
          <img src={underline} className='App-text-underline-image' />
          <h3 className='App-text'>The simple way to do research.</h3>
        </div>
        <img src={fp1} className='App-first-div-image' />
        <p className='App-subtext'>We provide an <span className='App-subtext-highlighted'>AI powered</span> tool to help you find relevant and reliable ressources for any research project.</p>
        <FaChevronDown className='App-scroll-icon' />
      </div>

      {/* Second div */}
      <div className='App-first-div'>

      </div>
    </div>
  )
}

function Header() {

  const navigate = useNavigate();

  return (
    <div className='Header'>
      <img src={logo} className='Header-logo' onClick={() => navigate('/')} />
      <ul className='Header-options-container'>
        <li className='Header-option'>Product</li>
        <li className='Header-option'>How it works</li>
        <li className='Header-option'>Contact</li>
      </ul>

      <div className='Header-buttons-container'>
        <button className='Header-button-login' onClick={() => navigate('/login')}>Log in</button>
        <button className='Header-button-signup' onClick={() => navigate('/signup')}>Signup for rive</button>
      </div>

    </div>
  )
}

export default App;
