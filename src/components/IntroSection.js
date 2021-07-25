import React from 'react'
import '../App.css';
import { Button } from './Button'
import './IntroSection.css';

function IntroSection() {
    return (
      <div className='intro-container'>
        <h1>Hi, I'm David Ryan</h1>
        <p>Data Science Freshman @ UCR. Personal Portfolio</p>
        <div className='intro-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            View Resume
          </Button>
        </div>
        <h2 className='display-3 font-weight-bolder'> ____________________________________________________________________________</h2>
      </div>
    );
  }
  
  export default IntroSection;
