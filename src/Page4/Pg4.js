import React from 'react'
import './Pg4.css'
// import img2 from './../Page2/img1.jpg'
import img5 from './img5.jpg'
// import tv2 from './tv2.png'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
function Pg4() {
  return (
    <>
    <div className='page4'>
      <div className='left_side'>
      <h1>Watch everywhere</h1>
      <h2 >Stream unlimited movies and TV shows on your phone,tablet, laptop, and TV.</h2>
      {/* <h2>tablet, laptop, and TV.</h2> */}
      </div>
     
      <div className='right_side'>
         
          <img className='img' src={img5} alt='img' />
          <img className='rajma' src={pic1} alt='img'/>
          <img className='man' src={pic2}></img>
        </div>
        </div>
       
    </>
  )
}

export default Pg4