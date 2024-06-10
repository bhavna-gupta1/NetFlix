import React from 'react'
import ReactPlayer from 'react-player'
import'./About.css'
import tv from './tv.png'
import img1 from './img1.jpg'
import Pg3 from '../Page3/Pg3'
// import series2 from './series2jpg'
// import series3 from './series3.jpg'

function About() {
  return (
    <>
    <div className='page2'>
      <div className='left_side'>
      <h1>Enjoy on your TV</h1>
      <h2 >Watch on smart TVs, PlayStation, Xbox, Chromecast,</h2>
      <h2>Apple TV, Blu-ray players and more.</h2>
      </div>
     
      <div className='right_side'>
         
          <img className='img_1' src={img1} alt='img' />
        </div>
        </div>
       
    </>
  )
};

export default About;