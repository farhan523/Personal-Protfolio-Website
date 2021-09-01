import React, { useEffect } from 'react'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import js from './image/js.png'
import html from './image/html.png'
import css from './image/css.png'
import bs from './image/bs.png'
import re from './image/re.png'
import red from './image/red.png'
import git from './image/git.png'
import mat from './image/mat.png'
import nod from './image/nod.png'

function Services() {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])


    return (
        <div className="services" data-aos="zoom-in" >
            <h1 style={{ marginBottom: 140 }}>Services I Provide</h1>
            <Grid container fluid maxWidth="lg" spacing={0} justifyContent="space-around">
                <Grid item xs={10} md={5} lg={4}>
                    <Card p1={js} p2={html} p3={css} p4={bs} />
                </Grid>
                <Grid item xs={10} md={5} lg={4}>
                    <Card p1={re} p2={red} p3={mat} p4={nod} />
                </Grid>
            </Grid >
        </div >
    )
}

export default Services
