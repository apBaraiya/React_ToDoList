import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import './portfolio.scss';
import GoToTop from './GoToTop';

const PortfolioApp = () => {
    return (
        <>
            <Header />
            <Home/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <GoToTop/>
        </>
    )
}

export default PortfolioApp