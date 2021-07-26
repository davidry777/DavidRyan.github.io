import React from 'react'
import '../../App.css';
import IntroSection from '../IntroSection';
import Profile_Pic from '../../images/my-icon.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap';

function Home () {
    return (
        <>
            <IntroSection />
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={Profile_Pic} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;
