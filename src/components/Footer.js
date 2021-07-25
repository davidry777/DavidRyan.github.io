import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                        David Ryan
                        </Link>
                        </div>
                        <small class='website-rights'>David Ryan © 2021</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i class='fab fa-github' />
                            </Link>
                            <Link
                                class='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Footer