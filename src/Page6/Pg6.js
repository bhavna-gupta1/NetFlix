import React, { useState } from 'react';
import './Pg6.css';
import { FaPlus } from 'react-icons/fa';

function Pg6() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? -1 : index);
  };

  const questions = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
    },

    {
        question: "Where Can I Watch?",
        answer:
          "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      },
      {
        question: "How do I cancel?",
        answer:
          "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime..",
      },
      {
        question: "What can i watch on Netflix?",
        answer:
          "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      },
      {
        question: "Is Netflix good for kids",
        answer:
          "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      },

  ];

  return (
    <>
      <div className='hrs'></div>
      <div className='page6'>
        <h1 className='pg6_h1'>Frequently Asked Questions</h1>
        <div className='pg6_content'>
          {questions.map((item, index) => (
            <div key={index}>
              <div className='bg' onClick={() => toggleVisibility(index)}>
                <h6>{item.question}</h6>
                <button className="icon-button">
                  <FaPlus />
                </button>
              </div>
              {visibleIndex === index && (
                <div className='para'>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='bg_content6'>
                
               
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
               <div className='email6'>
               <input  type='email' placeholder='Email address'/>
               <button >Get Started</button>
               </div>
            </div>
      </div>
    </>
  );
}

export default Pg6;
