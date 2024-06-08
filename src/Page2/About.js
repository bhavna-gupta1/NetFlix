import React from 'react'
import ReactPlayer from 'react-player'
import'./About.css'

function About() {
  return (
    <>
    <div className='page2'>
      <div className='left_side'>
      <h1>Enjoy on your TV</h1>
      <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast,</h4>
      <h4>Apple TV, Blu-ray players and more.</h4>
      </div>
     
      <div className='video-wrapper'>
        <ReactPlayer className='video-player' url="https://youtu.be/-mJFZp84TIY?si=5n9qnhH5Y4HZgdHm" />
      </div>
        

    </div>
    </>
  )
};

export default About;