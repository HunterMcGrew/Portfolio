import React, { useRef } from "react";
import "../../index.css";
import "./header.css";
import resume from "../../assets/Hunter_McGrew_Resume.pdf";


function Header(props) {

    const mobileMenu = useRef();
    const menuIcon = useRef();
    let isOpen = false;

    // need a function to check whether or not pancake menu is open to close on scroll
    const isMenu = () => {
        isOpen ? mobileClose() : mobileOpen();
    }

    // scroll to top of page
    const scrollToTop = () =>{
        window.scrollTo(0, 0);
        isMenu();
    }

    // mobile menu slide in/slide out
    const mobileOpen = () => {
        mobileMenu.current.classList.remove("slideOut");
        mobileMenu.current.classList.add("slideIn");
        menuIcon.current.style.visibility = "hidden";
        isOpen = true;
    }

    const mobileClose = () => {
        mobileMenu.current.classList.remove("slideIn");
        mobileMenu.current.classList.add("slideOut");
        menuIcon.current.style.visibility = "visible";
        isOpen = false;
    }

    function resumeDelay() {
        isMenu();
        setTimeout(() => {
            window.open(resume);
    }, 800)
    }

    return(

        <header className="row justify-content-between align-items-center g-0 dark page-header" id="home" data-theme={props.theme}>

        <div className="logo-container col-6 p-0 m-0">    
            <h2 
                className="logo p-0 m-0" 
                data-theme={props.theme} 
                onClick={scrollToTop}>
                    Hunter McGrew
            </h2>
        </div>
        <div className="col-6 p-0 m-0 d-flex justify-content-end align-items-center" id="mobileOnly" data-theme={props.theme}>
            <p className="switcher material-symbols-outlined p-0" id="switch" data-theme={props.theme} onClick={props.switchTheme}>nightlight</p>
            <p className="toggle p-0 m-0 material-symbols-outlined" 
                id="menu" 
                data-theme={props.theme}
                ref={menuIcon}
                onClick={mobileOpen}
                >menu</p>
        </div>
        
        
        {/* Desktop NavMenu */}
        <div className="col-6 col-lg-6 justify-content-end desktopNav" data-theme={props.theme}>
            <ul className="navList m-0 d-flex">
                <li className="navLinks">
                    <span className="switcher material-symbols-outlined p-0 m-0" id="switch2" data-theme={props.theme} onClick={props.switchTheme}>nightlight</span>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a href="#" data-theme={props.theme}>Back to Top</a>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a href="#projectSection" data-theme={props.theme}>Projects</a>
                </li>
                <li className="navLinks" data-theme={props.theme}>
                    <a className="resumeNavLink" href="#resume" data-theme={props.theme} onClick={resumeDelay}>Resume</a>
                </li>
            </ul>
        </div>
        {/* End Desktop NavMenu */}

        {/* Mobile NavMenu */}
        <div className="mobileNav justify-content-center align-items-center" 
            id="mobileMenu" 
            ref={mobileMenu}>
            <ul className="navList">
                <li className="mobileLinks">
                    <a className="closeOnClick" 
                        href="#" 
                        onClick={scrollToTop}
                        >Back to Top</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick" 
                        href="#projectSection" 
                        onClick={isMenu}
                        >Projects</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick resumeNavLink" 
                        href="#resume" 
                        onClick={resumeDelay}
                        >Resume</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick" 
                        href="https://github.com/HunterMcGrew" 
                        onClick={isMenu}
                        target="_blank"
                        >GitHub</a>
                </li>
                <li className="mobileLinks">
                    <a className="closeOnClick resumeNavLink" 
                        href="https://www.linkedin.com/in/huntermcgrew/" 
                        onClick={isMenu}
                        target="_blank"
                        >LinkedIn</a>
                </li>
            </ul>
            <span className="close" 
                id="closeToggle" 
                onClick={mobileClose}
                >&times;</span>
        </div>
        
        {/* End Mobile NavMenu */}

    </header>

    )

}

export default Header;