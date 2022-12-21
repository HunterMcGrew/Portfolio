import React from "react";
import "./aboutme.css";


function AboutMe(props) {

    return(

        <section className="row g-0" id="about" data-theme={props.theme}>

        <div className="col-12" data-theme={props.theme}>
            {/* <p className="aboutTxt" data-theme={props.theme}>
                Hello, <br/> 
                I'm <span className="myName">Hunter McGrew</span> <br/>
                A curious full stack developer. <br/>
                I like building things. 
            </p> */}

            <p className="aboutTxt" data-theme={props.theme}>
            <span className="myName">Full-Stack Web Developer</span><br/>
            I’m able to think both analytically and creatively, able to notice patterns, and my puzzle solving skills are nothing to scoff at. I am known for being a team player and that loves collaboration. Whether it be in the form of Frontend, Backend, or Full Stack development, I want to continue to grow my skills and abilities. I have recognized my passion and hope to use it to make a difference, no matter how small. 
            </p>

        </div>         

    </section>

    )
}

export default AboutMe;