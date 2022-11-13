import React from "react";
import "./projects.css";
import projectData from "./data";


function Projects(props) {

    return(

        <section
            className="row g-0 projectsContainer justify-content-between"
            id="projectSection"
            data-theme={props.theme}
        >

            <h2 className="proj-title" data-theme={props.theme}>&lt; Projects /&gt;</h2>

            {/* mapping over projectData and filling in below html */}
            {projectData.map((item, i) => {

                return(

                <div className="col-12 col-lg-6 col-xl-4 projects shadows " key={i} data-theme={props.theme}>
                    <div className="innerProject1 innerProject">
                        <p className="innerProjectLinks shadows shadows"><a href={projectData[i].github} target="_blank">GitHub</a></p>
                        <br/>
                        <p className="innerProjectLinks shadows shadows"><a href={projectData[i].live} target="_blank">Live</a></p>
                    </div>
                    <img className="projectImages" id={`project${i}`} src={projectData[i].image} alt={projectData[i].alt}/>
                </div>
                

            )})}
            

        </section>

    )

}

export default Projects;