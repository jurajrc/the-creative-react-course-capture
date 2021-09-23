import React from 'react';

// imoport Components
import AboutSection from '../conponents/AboutSection';
import ServicesSection from '../conponents/ServicesSection';
import FaqSection from '../conponents/FaqSection';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs
