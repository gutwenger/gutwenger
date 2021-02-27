import React from 'react';
import { Link } from "react-router-dom";

import { usePage, usePageUpdate } from "../contexts/PageContext";

const NavbarBtn = ({ name, path, icon }) => {

    // Contexts
    const updatePage = usePageUpdate();

    return (
        <li className="navbar__li">
            <Link id={`navbar-${name.toLowerCase()}`} className="navbar__li__link" to={path} onClick={()=>updatePage(name)} aria-describedby="tooltip">
                <abbr title={name}><i className={icon}></i></abbr>
            </Link>
        </li>
    )
}

const NavbarBtnGrp = () => {    

    return (
        <div className="navbar">
            <ul className="navbar__ul">
                <NavbarBtn
                    key="navbarbtn-home"
                    name="Home"
                    path="/"
                    icon="fas fa-home"
                />
                <NavbarBtn
                    key="navbarbtn-about"
                    name="About"
                    path="/about"
                    icon="fas fa-info"
                />
                <NavbarBtn
                    key="navbarbtn-projects"
                    name="Projects"
                    path="/projects"
                    icon="fas fa-folder"
                />
                <NavbarBtn
                    key="navbarbtn-cv"
                    name="CV"
                    path="/cv"
                    icon="fas fa-file-alt"
                />
                <NavbarBtn
                    key="navbarbtn-contact"
                    name="Contact"
                    path="/contact"
                    icon="fas fa-at"
                />
            </ul>
        </div>
    )
}

const Navbar = () => {

    // Contexts
    const { page, headerRef, openClose, isLarge, setIsLarge } = usePage();

    return (
        <div className="nav__header" ref={headerRef}>
            <div className="nav__header__btns">
                <div className="nav__header__punkt" onClick={()=>openClose()}></div>
                <div className="nav__header__punkt nav__header__punkt__disabled" disabled></div>
                <div className="nav__header__punkt" onClick={()=>setIsLarge(!isLarge)} data-tip="Shrink"></div>
            </div>
            <p className="nav__p">{ page }</p>
            <NavbarBtnGrp />
        </div>
    )
}

export default Navbar;