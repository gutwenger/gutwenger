import React from 'react';
import gif from "../../img/gut2commerce.gif";
import ProjectCard from './ProjectCard';

import { projectData } from "../../data/projectData";

const Projects = ({ mainConRef }) => {

    let moreToCome = (
        <div className="projectMore">
            <i className="projectMore__i fas fa-thumbs-up"></i>
            <h2 className="projectMore__h2">
                STAY
            </h2>
            <h2 className="projectMore__h2">
                TUNED
            </h2>
            <p className="projectMore__p">
                AND
            </p>
            <h2 className="projectMore__h2">
                MORE
            </h2>
            <h2 className="projectMore__h2">
                TO
            </h2>
            <h2 className="projectMore__h2">
                COME
            </h2>
        </div>
    )

    let display = (
        <div className="projectCardsCon">
            { projectData.map((data, i) => (
                <ProjectCard
                    key={`projectcard-${i}`}
                    data={data}
                    img={gif}
                />
            ))}
            { (projectData.length % 2) !== 0 && moreToCome}
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