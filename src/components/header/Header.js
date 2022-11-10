import React from "react";


function Header(props) {

    return(

        <header class="row justify-content-between align-items-center g-0 dark" id="home" data-theme={props.theme}>

        <h2 class="logo col-6 p-0 m-0" data-theme={props.theme}>Hunter McGrew</h2>
        <div class="col-6 p-0 m-0 d-flex justify-content-end align-items-center" id="mobileOnly" data-theme={props.theme}>
            <p class="switcher material-symbols-outlined p-0 m-0 switched" id="switch" data-theme={props.theme} onClick={props.switchTheme}>nightlight</p>
            <p class="toggle p-0 m-0 material-symbols-outlined" id="menu" data-theme={props.theme}>menu</p>
        </div>
        
        
        {/* Desktop NavMenu */}
        <div class="col-6 col-lg-6 d-flex justify-content-end desktopNav" data-theme={props.theme}>
            <ul class="navList m-0 d-flex">
                <li class="navLinksDark">
                    <span class="switcher material-symbols-outlined p-0 m-0 switched" id="switch2" data-theme={props.theme} onClick={props.switchTheme}>nightlight</span>
                </li>
                <li class="navLinksDark" data-theme={props.theme}>
                    <a href="#">Back to Top</a>
                </li>
                <li class="navLinksDark">
                    <a href="#projectSection" data-theme={props.theme}>Projects</a>
                </li>
                <li class="navLinksDark">
                    <a class="resumeNavLink" href="#resume" data-theme={props.theme}>Resume</a>
                </li>
            </ul>
        </div>
        {/* End Desktop NavMenu */}

        {/* Mobile NavMenu */}
        <div class="mobileNav justify-content-center align-items-center" id="mobileMenu">
            <ul class="navList">
                <li class="mobileLinks">
                    <a class="closeOnClick" href="#">Back to Top</a>
                </li>
                <li class="mobileLinks">
                    <a class="closeOnClick" href="#projectSection">Projects</a>
                </li>
                <li class="mobileLinks">
                    <a class="closeOnClick resumeNavLink" href="#resume">Resume</a>
                </li>
                <li class="mobileLinks">
                    <a class="closeOnClick" href="https://github.com/HunterMcGrew">GitHub</a>
                </li>
                <li class="mobileLinks">
                    <a class="closeOnClick resumeNavLink" href="https://www.linkedin.com/in/huntermcgrew/">LinkedIn</a>
                </li>
            </ul>
            <span class="close" id="closeToggle">&times;</span>
        </div>
        
        {/* End Mobile NavMenu */}

    </header>

    )

}

export default Header;