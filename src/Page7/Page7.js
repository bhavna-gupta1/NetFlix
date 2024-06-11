// src/Page7.js

import React, { useState } from 'react';
import './Page7.css';

function Page7() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const placeholder = "English"; // Define the placeholder

  const options = [
    { value: 'english', label: 'English' },
    { value: 'Hindi', label: 'हिंदी' },
    
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className='hr'> </div>
      <div className='footer'>
        <div className='para_head'>
          <h3>Questions? Call 000-800-919-1694</h3>
        </div>
        <div className='footer_content'>
          <div className='firsts'>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption ? selectedOption.label : placeholder}
                <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
              </div>
              {isOpen && (
                <ul className="dropdown-list">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className="dropdown-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p>Netflix India</p>
          </div>
          <div className='first'>
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className='first'>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div className='first'>
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page7;
