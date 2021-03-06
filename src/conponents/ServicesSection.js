import React from 'react';

// import image
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

// style
import styled from 'styled-components';
import { About, Description, Image } from '../styles'

// Sroll Animation
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const ServicesSection = () => {

    const [element, controls] = useScroll()

    return (
        <Services 
            variants={scrollReveal} 
            animate={controls} 
            initial='hidden' 
            ref={element}
        >
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media (max-width: 1300px) {
            display: block;
        }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    p {
        padding-left: 2rem;
    }
    @media (max-width: 1300px) {
        justify-content: center;   
    }
`
const Card = styled.div`
    flex-basis: 20rem;
    padding-left: 3rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
    @media (max-width: 450px) {
       padding: 0;
       .icon {
           flex-wrap: wrap;
           padding-left: 2rem;
           h3 {
               margin-left: 4rem;
           }

       }
    }
`

export default ServicesSection
