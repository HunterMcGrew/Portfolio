import React from "react";
import "./aboutme.css";


function AboutMe(props) {

    return(

        <section className="row g-0" id="about" data-theme={props.theme}>

        <div className="col-12" data-theme={props.theme}>
            <p className="aboutTxt" data-theme={props.theme}>
                Hello, <br/> 
                I'm <span className="myName">Hunter McGrew</span> <br/>
                A curious full stack developer. <br/>
                I like building things. 
            </p>
        </div>         

    </section>

    )
}

export default AboutMe;