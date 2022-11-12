import React from "react";
import "./header.css";


function Header(props) {

    return(

        <header className="row justify-content-between align-items-center g-0 dark page-header" id="home" data-theme={props.theme}>

        <h2 className="logo col-6 p-0 m-0" data-theme={props.theme}>Hunter McGrew</h2>
        <div className="col-6 p-0 m-0 d-flex justify-content-end align-items-center" id="mobileOnly" data-theme={props.theme}>
            <p className="switcher material-symbols-outlined p-0 m-0 switched" id="switch" data-theme={props.theme} onClick={props.switchTheme}>nightlight</p>
            <p className="toggle p-0 m-0 material-symbols-outlined" id="menu" data-theme={props.theme}>menu</p>
        </div>
        
        
        {/* Desktop NavMenu */}
        <div className="col-6 col-lg-6 d-flex justify-content-end desktopNav" data-theme={props.theme}>
            <ul className="navList m-0 d-flex">
                <li className="navLinks">
                    <span className="switcher material-symbols-outlined p-0 m-0 switched" id="switch2" data-theme={props.theme} onClick={props.switchTheme}>nightlight</span>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a href="#" data-theme={props.theme}>Back to Top</a>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a href="#projectSection" data-theme={props.theme}>Projects</a>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a className="resumeNavLink" href="#resume" data-theme={props.theme}>Resume</a>
                </li>
            </ul>
        </div>
        {/* End Desktop NavMenu */}

        {/* Mobile NavMenu */}
        <div className="mobileNav justify-content-center align-items-center" id="mobileMenu">
            <ul className="navList">
                <li className="mobileLinks">
                    <a className="closeOnClick" href="#">Back to Top</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick" href="#projectSection">Projects</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick resumeNavLink" href="#resume">Resume</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick" href="https://github.com/HunterMcGrew">GitHub</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick resumeNavLink" href="https://www.linkedin.com/in/huntermcgrew/">LinkedIn</a>
                </li>
            </ul>
            <span className="close" id="closeToggle">&times;</span>
        </div>
        
        {/* End Mobile NavMenu */}

    </header>

    )

}

export default Header;