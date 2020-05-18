import React, { Component } from 'react';
import sun from '../../sun.svg';
import {Link} from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends Component {
    //this is for the burger menu part for mobile
    // state = {
    //     isopen: false
    // }

    // handleToggle = () => {
    //     this.setState({isOpen:!this.state.isOpen})
    // }
    render() {
        return (
            <nav className="navbar">
            <Link to="/">
                 <img src={sun} className="sun" alt="sun logo" />
                </Link>
                <ul className="nav-links">
                    {/* / -  homepage with router*/}
                    <li><a href="/" className="nav-link myNav">
                        home
                        </a>
                    </li>
                </ul>
                <ul className="nav-links">
                    {/* / -  homepage with router*/}
                    <li><a href="/" className="nav-link myNav">
                        about
                    </a>
                    </li>
                </ul>
                <ul className="nav-links">
                    {/* / -  homepage with router*/}
                    <li><a href="/" className="nav-link myNav active">
                        contact
                    </a>
                    </li>
                </ul>
            </nav>
        )
    }
        
}
