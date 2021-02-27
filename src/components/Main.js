import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { usePage } from "../contexts/PageContext";
import Navbar from "../components/Navbar";
import Projects from './projects/Projects.js';
import Home from "./Home";
import Contact from './contact/Contact';
import CV from "./CV/CV";
import Footer from './Footer';
import NotFound from "./NotFound";
import About from './about/About';

const Main = () => {

    // Contexts
    const { mainConRef, footerRef, mainConHeight, containerHeight, displayMain, openClose, isLarge } = usePage();

    const [mainConSmallWidth, setMainConSmallWidth] = useState(mainConSmallWidthCal(window.innerWidth));

    let main__con__large = {
        height: window.innerHeight + "px",
        width: window.innerWidth + "px",
        transition: '0.5s',
    }

    let main__con__small = {
        height: `${containerHeight}px`,
        maxHeight: (window.innerHeight - 200) + "px",
        width: `${mainConSmallWidth}px`,
        transition: '0.5s',
    }

    let main__content__small = {
        //height: "100%",
        width: `100%`,
        maxHeight: mainConHeight + "px",
        transition: '0.5s',
    }

    let main__content__large = {
        height: "100%",
        width: `100%`,
        transition: '0.5s',
    }

    function mainConSmallWidthCal(width) {
        return width >= 1400 // 1400 --> ...
        ? width * 0.5
        : width >= 1000 && width < 1400 // 1000 --> 1399
            ? width * 0.6
            : width >= 750 && width < 1000 // 750 --> 999
                ? width * 0.8
                : width;
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMainConSmallWidth(mainConSmallWidthCal(window.innerWidth));
        })
    }, [])

    const display = displayMain
        ?   (
            <div className="main__con" style={isLarge ? main__con__large : main__con__small}>
                <Navbar isLarge={isLarge} />
                <div className="main__content" style={isLarge ? main__content__large : main__content__small}>
                    <Switch>
                        <Route path="/" exact>
                            <Home mainConRef={mainConRef} />
                        </Route>
                        <Route path="/about" exact>
                            <About mainConRef={mainConRef} />
                        </Route>
                        <Route path="/projects" exact>
                            <Projects mainConRef={mainConRef} />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact mainConRef={mainConRef} />
                        </Route>
                        <Route path="/cv" exact>
                            <CV mainConRef={mainConRef} />
                        </Route>
                        <Route><NotFound mainConRef={mainConRef} /></Route>
                    </Switch>
                </div>
                <Footer footerRef={footerRef} />
            </div>
        )
        : (
            <div className="main__close">
                <h1 className="main__close__h1">
                    FREMONT's PORTFOLIO
                </h1>
                <div className="main__close__folder" onClick={()=>openClose(true)}>
                    <i className="main__close__i fas fa-folder"></i>
                    <p className="main__close__p">Click to open</p>
                </div>
            </div>
        )

    return (
        <div className="main">
            {display}
        </div>
    )
}

export default Main;