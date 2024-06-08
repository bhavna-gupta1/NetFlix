import React from 'react'
import logo from "./logo.png";
import './Home.css';
import bg2 from './bg_img2.jpg';
import About from '../Page2/About';

function Home() {
  return (
  <>
    <div className='Main_div'>
        <div className='header'>
            <img src={logo} alt='img'/>
            <button>SignUp</button>
            
        </div>
        <div className='bg_img'>
            <img src={bg2}/>
            <div className='bg_content'>
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
               <div className='email'>
               <input  type='email' placeholder='Email address'/>
               <button>Get Started</button>
               </div>
            </div>
            
        </div>
    </div>
    <About/>
    
  </>
  )
}

export default Home;