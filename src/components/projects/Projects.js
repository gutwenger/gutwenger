import React from 'react';
import gif from "../../img/gut2commerce.gif";
import ProjectCard from './ProjectCard';

import { projectData } from "../../data/projectData";

const Projects = ({ mainConRef }) => {

    let display = (
        <div className="projectCardsCon">
            { projectData.map((data, i) => (
                <ProjectCard
                    key={`projectcard-${i}`}
                    data={data}
                    img={gif}
                />
            ))}
        </div>
    )

    return (
        <div id="projects" className="projects" ref={mainConRef}>
            <h1 className="projects__h1">PROJECTS</h1>
            {display}
        </div>
    )
}

export default Projects;