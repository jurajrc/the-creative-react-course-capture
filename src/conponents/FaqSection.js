import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'

// Sroll Animated
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'

const FaqSection = () => {

    const [element, controls] = useScroll()

    return (
        <Faq 
            variants={scrollReveal} 
            animate={controls} 
            initial='hidden' 
            ref={element} 
        >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How to I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, dolorem.</p>
                    </div>
            </Toggle>

            <Toggle title="Dealy Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, dolorem.</p>
                    </div>
            </Toggle>

            <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, dolorem.</p>
                    </div>
            </Toggle>

            <Toggle title="What Products do you offer.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, dolorem.</p>
                    </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

// styled
const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem;
        cursor: pointer;
        @media (max-width: 450px) {
            padding: 1rem;
        }
    }
    .answer {
        padding: 1rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }

`

export default FaqSection
