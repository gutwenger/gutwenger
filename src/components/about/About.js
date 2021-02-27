import React from 'react';
import { ABOUT_CONTENT } from "../../data/aboutContent";
import AboutSection from './AboutSection';

const About = ({ mainConRef }) => {

    let aboutContent = ABOUT_CONTENT.map((item, i) => (
        <AboutSection
            key={`aboutsection-${i}`}
            title={item.title}
            contents={item.contents}
        />
    ))

    return (
        <div id="about" className="about" ref={mainConRef}>
            <div className="about__header">
                <h2 className="about__header__h2">
                    ABOUT
                </h2>
            </div>
            <div className="about__con">
                { aboutContent }
            </div>
        </div>
    )
}

export default About;