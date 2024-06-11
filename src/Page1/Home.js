import React, { useState } from 'react';
import logo from './logo.png';
import './Home.css';
import bg2 from './bg_img2.jpg';
import About from '../Page2/About';
import Pg3 from '../Page3/Pg3';
import Pg4 from '../Page4/Pg4';
import Pg5 from '../Page5/Pg5';
import Pg6 from '../Page6/Pg6';
import Page7 from '../Page7/Page7';

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholder = 'Select a color';

  const options = [
    { value: 'english', label: 'English' },
    { value: 'Hindi', label: 'हिंदी' },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='Main_div'>
        <div className='header'>
          <img src={logo} alt='img' />
          <button onClick={handleSignUpClick}>SignUp</button>
        </div>
        <div className='bg_img'>
          <img src={bg2} alt="background" />
          <div className='bg_content'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='email'>
              <input type='email' placeholder='Email address' />
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className='hr'> </div>
      <About />
      <div className='hr'> </div>
      <Pg3 />
      <div className='hr'> </div>
      <Pg4 />
      <div className='hr'> </div>
      <Pg5 />
      <div className='hr'> </div>
      <Pg6 />
      <Page7 />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <div className="modal-content">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
