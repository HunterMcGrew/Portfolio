import React from "react";
import "./social.css";

function Social(props) {

    return(

        <section className="row g-0" id="social">

        <div className="col-12">
            <ul className="socials list-inline">
                <li className="socialLinks list-inline-item" data-theme={props.theme}>
                    <a href="https://github.com/HunterMcGrew" target="_blank" data-theme={props.theme}>
                        GitHub
                    </a>
                </li>
                <li className="socialLinks list-inline-item" data-theme={props.theme}>
                    <a href="https://www.linkedin.com/in/huntermcgrew/" target="_blank" data-theme={props.theme}>
                        LinkedIn
                    </a>
                </li>
                <li className="socialLinks list-inline-item" data-theme={props.theme}>
                    <a href="mailto:hunter109@gmail.com" target="_blank" data-theme={props.theme}>
                        Email
                    </a>
                </li>
            </ul>
        </div>

    </section>

    )

}

export default Social;