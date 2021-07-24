import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import IntroSection from '../IntroSection';

function Home () {
    return (
        <>
            <IntroSection />
            <Cards />
            <Footer />
        </>
    );
}
export default Home;
