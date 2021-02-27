import React from 'react';

import { CVContent } from "../../data/CVContent";
import CVCard from "./CVCard";

const CVHeader = ({ name, contacts }) => {
    return (
        <div className="cv__header">
            <h1 className="cv__header__h1">
                { name }
            </h1>
        </div>
    )
}

const CV = ({ mainConRef }) => {
    return (
        <div className="cv" ref={mainConRef}>
            <CVHeader 
                key="cvheader"
                name={CVContent.basic.name}
                contacts={CVContent.basic.contacts}
            />
            <CVCard
                key="cvwork"
                type="Work"
                icon="fas fa-briefcase"
                items={CVContent.experiences}
            />
            <CVCard
                key="cvedu"
                type="Education"
                icon="fas fa-graduation-cap"
                items={CVContent.education}
            />
            <CVCard
                key="cvcert"
                type="Certificates"
                icon="fas fa-scroll"
                items={CVContent.certificates}
            />
            <CVCard
                key="cvstacks"
                type="Stacks"
                icon="fas fa-laptop-code"
                items={CVContent.stacks}
            />
            <CVCard
                key="cvlang"
                type="Languages"
                icon="fas fa-language"
                items={CVContent.languages}
            />
            <CVCard
                key="cvavail"
                type="Availability"
                icon="fas fa-calendar-check"
                items={CVContent.availability}
            />
            <div className="cv__download">
                <button className="cv__download__btn">
                    <i className="cv__download__btn__i fas fa-file-pdf"></i>
                    <p className="cv__download__btn__p">Download</p>
                </button>
            </div>
        </div>
    )
}

export default CV;