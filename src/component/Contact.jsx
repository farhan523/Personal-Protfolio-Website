import React from 'react'
import Grid from '@material-ui/core/Grid';
import ContactCard from './ContactCard'

function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <Grid container fluid maxWidth="lg" spacing={0} justifyContent="space-around">
                <Grid item xs={10} sm={4} md={3} >
                    <ContactCard logo={<i class="fas fa-envelope"></i>} type={'Email'} ans={'Farhanbajwa46@gmail.com'} />
                </Grid>
                <Grid item xs={10} sm={4} md={3} >
                    <ContactCard logo={<i class="fas fa-phone-alt"></i>} type={'Phone'} ans={'(+92) 304 5520172'} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
