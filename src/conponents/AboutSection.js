import React from 'react'

// import Image
import home1 from '../img/home1.png'

// Styled
import { About, Description, Image, Hide } from '../styles'

// Animation 
import { motion } from 'framer-motion'
import { titleAnim, fade, zoomImg } from '../animation'



const AboutSection = () => {
    return (
        <About>
            <Description>
                <div  className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                                We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                                your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                                true.
                        </motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>
                    Contact us fot any photography or videography ideas you have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade} >Contact Us</motion.button>
            </Description>
                <Image>
                    <motion.img variants={zoomImg} src={home1} alt="guy with a camera" />
                </Image>
        </About>
    )
}



export default AboutSection
