import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './style.css'
import image from './image/zip.png'
import useWebAnimations, { bounce, shakeY, pulse } from "@wellyshen/use-web-animations";

import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const { ref } = useWebAnimations({
        ...shakeY,
        animationOptions: {
            delay: 0, // Start with a 500ms delay
            duration: 10000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    });


    return (
        <div className="header">
            <Grid container maxWidth="lg" spacing={0}>
                <Grid item xs={12} md={6} lg={6}>
                    <div className="left">
                        <div className="content">
                            <h4 className="welcome-content">WELCOME TO MY WORLD</h4>
                            <h1 className="main-content">Hi, I’m Farhan  <motion.span
                                drag={true}
                                dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                                className="hand"
                                animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
                                transition={{ yoyo: Infinity, duration: 1.7 }}
                            >
                                <span role="img" aria-label="Hand waving" id='xc'>
                                    👋
                                </span>
                            </motion.span>{" "}</h1>
                            <h1 className="loc"> from Pakistan <span role="img" aria-label="Pakistan Flag">🇵🇰</span></h1>
                            <div class="button-wrapper">
                                <button class="button contact-btn">Contact Me</button><a href="https://github.com/farhan523" target="_blank" rel="noopener noreferrer"><button class="button">GitHub</button></a></div>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div className="right">
                        <div className="image">
                            <img src={image} ref={ref} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
