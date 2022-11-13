import React from "react";
import "./resume.css";
import resume from "../../assets/Hunter_McGrew_Resume.pdf";

function Resume(props) {

    return(

    <div className="row g-0">
        <section className="col-12 col-lg-12 d-flex justify-content-center" id="resume">
            <p className="socialLinks resume-link" id="resBtn" data-theme={props.theme}><a data-theme={props.theme} href={resume} target="_blank">My Resume</a></p>
        </section>
    </div>

    )

}

export default Resume;