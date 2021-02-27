import React from 'react';
import { Link } from "react-router-dom";

import { usePage, usePageUpdate } from "../contexts/PageContext";

const HomeBtn = ({ name, path, icon }) => {

    // Contexts
    const updatePage = usePageUpdate();

    return (
        <Link to={path} onClick={()=>updatePage(name)}>
            <li className="home__content__con__ul__li">
                <i className={`home__content__con__ul__li__i ${ icon }`}></i>
            </li>
            <p className="home__content__con__ul__a__p">{ name }</p>
        </Link>
    )
}

export const Home = () => {

    const { mainConRef } = usePage();

    return (
        <div className="home" ref={mainConRef}>
            <h1 className="home__content__h1">
                FREMONT CHENG
            </h1>
            <h2 className="home__content__h2 pb-20">
                a self-taught developer
            </h2>
            <p className="home__content__p pb-20">
                Welcome!
            </p>
            <div className="home__content__con">
                <ul className="home__content__con__ul">
                    <HomeBtn
                        key="homebtn-home"
                        name="Home"
                        path="/"
                        icon="fas fa-home"
                    />
                    <HomeBtn 
                        key="homebtn-about"
                        name="About"
                        path="/about"
                        icon="fas fa-info"
                    />
                    <HomeBtn 
                        key="homebtn-projects"
                        name="Projects"
                        path="/projects"
                        icon="fas fa-folder"
                    />
                    <HomeBtn
                        key="homebtn-cv"
                        name="CV"
                        path="/cv"
                        icon="fas fa-file-alt"
                    />
                    <HomeBtn 
                        key="homebtn-contact"
                        name="Contact"
                        path="/contact"
                        icon="fas fa-at"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Home;