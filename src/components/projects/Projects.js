import React from "react";
import "./projects.css";
import projectData from "./data";


function Projects(props) {

    console.log("projectData", projectData);

    return(

        <section
            className="row g-0 projectsContainer justify-content-between"
            id="projectSection"
            data-theme={props.theme}
        >

            <h2 className="proj-title">&lt; Projects /&gt;</h2>

            {/* map over the object */}
            {projectData.map((item, i) => {
                console.log("item", item, "i", i);

                return(

                <div className="col-12 col-lg-6 col-xl-4 projects shadows " id={`project${i}`} key={i}>
                    <div className="innerProject1 innerProject">
                        <p className="innerProjectLinks shadows shadows"><a href={projectData[i].github} target="_blank">GitHub</a></p>
                        <br/>
                        <p className="innerProjectLinks shadows shadows"><a href={projectData[i].live} target="_blank">Live</a></p>
                    </div>
                    <img className="projectImages" src={projectData[i].image} alt={projectData[i].alt}/>
                </div>
                

            )})}
            

        </section>

    )

}

export default Projects;