import React, { useState } from 'react';
import { usePage } from "../../contexts/PageContext";

const ProjectCard = ({ data: { name, stacks, descriptions, image, github, link } }) => {
    
    const [display, setDisplay] = useState(true);
    const { changeDimensions } = usePage();

    const STACK_CLASS_STANDARD = "projectCard__stack__p";
    const STACK_WEB = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--web`;
    const STACK_SASS = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--sass`;
    const STACK_FRONT = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--front`;
    const STACK_BACK = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--back`;
    const STACK_MOBILE = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--mobile`;
    const STACK_CLASS = {
        "HTML": STACK_WEB,
        "CSS": STACK_WEB,
        "Sass": STACK_SASS,
        "JavaScript": STACK_FRONT,
        "React": STACK_FRONT,
        "Python": STACK_BACK,
        "Django": STACK_BACK,
        "Node": STACK_BACK,
        "Express": STACK_BACK,
        "MongoDB": STACK_BACK,
        "Socket.io": STACK_BACK,
        "Mobile Responsive": STACK_MOBILE,
    }

    async function setDisplayAsync() {
        setDisplay(!display);
        return true;
    }

    function handleClick() {
        setDisplayAsync().then(result => changeDimensions());
    }

    function handleLink(link) {
        window.open(link);
    }

    let content = (
        <>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}  className="projectCard__img" alt={name} />
            <div className="projectCard__descriptions">
                {descriptions.map((description, i) => (
                    <p key={`projectcard-${name.toLowerCase()}-description-${i}`} className="projectCard__descriptions__p">{description.content}</p>
                ))}
            </div>
            <div className="projectCard__stacks">
                {stacks.map((stack, i) => (
                    <p key={`projectcard-${name.toLowerCase()}-stack-${i}`} className={STACK_CLASS[stack]}>{stack}</p>
                ))}
            </div>
            <div className="projectCard__btngrp">
                <button className="projectCard__btn" onClick={()=>handleLink(github)}>
                    <i className="projectCard__btn__icon fas fa-code"></i>
                    <p className="projectCard__btn__p">
                        View source code
                    </p>
                </button>
                <button className="projectCard__btn" onClick={()=>handleLink(link)}>
                    <i className="projectCard__btn__icon fas fa-external-link-alt"></i>
                    <p className="projectCard__btn__p">
                        Visit site
                    </p>
                </button>
            </div>
        </>
    )

    let header = (
        <h2 className="projectCard__h2">
            <div className="projectCard__h2__btngrp">
                <button className="projectCard__h2__btn" disabled></button>
                <button className="projectCard__h2__btn projectCard__h2__btn__shrink" onClick={()=>handleClick()}><i className="projectCard__h2__btn__icon fas fa-minus"></i></button>
                <button className="projectCard__h2__btn" disabled></button>
            </div>
            <i className="projectCard__h2__icon fas fa-folder"></i>
            {name}
        </h2>
    )

    let showHeader = false;

    return (
        <div className="projectCard">
            { showHeader && header }
            {display && content}
        </div>
    )
}

export default ProjectCard;