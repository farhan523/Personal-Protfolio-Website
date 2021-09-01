import React from 'react'

function ContactCard(props) {
    return (
        <div className="contact-card">
            {props.logo}
            {props.type}
            <p>{props.ans}</p>
        </div>
    )
}

export default ContactCard
