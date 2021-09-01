import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Card2 from './Card2'
import Aos from 'aos'
import "aos/dist/aos.css"
import track from './image/track.png'
import covid from './image/covid.png'
import api from './image/api.png'
import route from './image/route.png'
import protfolio from './image/protfolio.png'

function Protfolio() {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div className="protfolio" data-aos="zoom-in-up" id="protfolio">
            <h1 style={{ marginBottom: 120 }}>Projects I Have Built</h1>
            <Grid container fluid maxWidth="lg" spacing={0} justifyContent="space-around">
                <Grid item xs={10} sm={3} md={3} >
                    <Card2 img={track} title={'Expense Tracker'} url={'https://keepexpenses.surge.sh/'} git={'https://github.com/farhan523/tracker-2021'} />
                </Grid>
                <Grid item xs={10} sm={5} md={3} >
                    <Card2 img={covid} title={'Covid-19 Tracker'} url={'https://tracker-corona_virus.surge.sh/'} git={' https://github.com/farhan523/Covid-19-tracker'} />
                </Grid>
                <Grid item xs={10} sm={5} md={3} >
                    <Card2 img={api} title={'Web Animation Api In React'} url={'https://web-animation_api_inreact.surge.sh/'} git={'https://github.com/farhan523/React-Web-Animation-Api'} />
                </Grid>

            </Grid >

            <Grid container fluid maxWidth="lg" spacing={0} justifyContent="space-around">
                <Grid item xs={10} sm={3} md={3} >
                    <Card2 img={route} title={'React Router Shoes Store'} url={'https://react-routes_shoes_store.surge.sh/'} git={'https://github.com/farhan523/React-Shoes-Store'} />
                </Grid>
                <Grid item xs={10} sm={3} md={3} >
                    <Card2 img={protfolio} title={'Developer Protfolio (DevFolio)'} url={'#'} git={'#'} />
                </Grid>


            </Grid >
        </div>
    )
}

export default Protfolio
