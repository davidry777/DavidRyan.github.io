import React from 'react'
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Check out my page daily for any updates.
                </p>
                <p className='footer-subscription-text'>
                    For contact, go to my contact page.
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholders="Your Email" 
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Footer