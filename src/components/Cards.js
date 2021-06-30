import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img from '../images/img-9.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
