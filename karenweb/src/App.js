import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/HomePage';
import Projects from './pages/ProjectPage';
import Contact from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Footer from "./pages/Footer";

import './App.css';
import {Route, Switch} from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            // acts as parent container
            <>
                <div className="container">
                    <Sidebar />
                    <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/projects/" component={Projects} />  
                            <Route exact path="/contact/" component={Contact} /> 
                            <Route component={ErrorPage} /> 
                        </Switch>
                        {/* Footer is defined on all pages from here */}
                    <Footer />
                </div> 
            </>
        )
    }
}

