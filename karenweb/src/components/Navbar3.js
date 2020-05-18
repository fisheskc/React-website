import React, { Component } from 'react';
import sun from '../../sun.svg';
import {Link} from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends Component {
    //this is for the burger menu part for mobile
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    {/* / -  homepage with router*/}
                    
                         <Link to="/">
                             <img src={sun} className="sun" alt="sun logo" />
                            
                          </Link> 
                    
                    {/* / -  homepage with router*/}
            <ul className="nav-links">
                {/* / -  homepage with router*/}
                <li><Link className="nav-link myNav" to="/">
                    Home
                    </Link>
                </li>
            </ul>
            <ul className="nav-links">
                {/* / -  homepage with router*/}
                <li><a href="/" className="nav-link myNav">
                    about
                </a>
                <Link to="/rooms">Rooms</Link>
                </li>
            </ul>
            <ul className="nav-links">
                {/* / -  homepage with router*/}
                <li><a href="/" className="nav-link myNav active">
                    contact
                </a>
                </li>
            </ul>
                    
                </div>
            </nav>
        )
    }
}
