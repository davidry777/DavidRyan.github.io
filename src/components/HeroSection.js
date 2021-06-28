import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src= "/src/videos/video-2.mp4" autoPlay loop muted />
            <h1>David Ryan</h1>
            <p>Data Science Sophomore @ UCR. Personal Portfolio</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    View Resume
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
