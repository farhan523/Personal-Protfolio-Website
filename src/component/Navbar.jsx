import React from 'react'
import './style.css'
import Services from './Services'
import Header from './Header'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';



function Navbar() {
    let style = { backgroundColor: 'black' };


    return (
        <Router>
            <div className="navbar">
                <h2>&#60; Dev-Farhan &#47;  &#62;  </h2>
                <ul>
                    <li>Services</li>
                    <li>Protfolio</li>
                    <li>Contact</li>
                </ul>

            </div>

        </Router>
    )
}

export default Navbar
