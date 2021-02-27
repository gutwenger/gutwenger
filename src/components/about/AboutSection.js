import React from 'react';

const AboutSection = ({ title, contents }) => {

    let displayContents = contents && contents.map((item, i) => (
        <p key={`aboutsection-content-${i}`} className="aboutSection__content">
            { item }
        </p>
    ))

    return (
        <div className="aboutSection">
            <h2 className="aboutSection__title">
                { title }
            </h2>
            <div className="aboutSection__con">
                { displayContents }
            </div>
        </div>
    )
}

export default AboutSection;