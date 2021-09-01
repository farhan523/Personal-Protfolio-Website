import React from 'react'
import './style.css'
import Services from './Services'
import Header from './Header'
import { HashLink as Link } from 'react-router-hash-link';
import { Router } from 'react-router-dom'



function Navbar() {
    let style = { backgroundColor: 'black' };


    return (

        <div className="navbar">
            <h2>&#60; Dev-Farhan &#47;  &#62;  </h2>
            <ul>
                <li><a href='#services'>Services</a>

                </li>
                <li><a href='#protfolio'>Protfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

        </div>

    )
}

export default Navbar
