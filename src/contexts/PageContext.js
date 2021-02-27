import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const PageContext = React.createContext();
const PageUpdateContext = React.createContext();

export function usePage() {
    return useContext(PageContext);
}

export function usePageUpdate() {
    return useContext(PageUpdateContext);
}

export function PageProvider({ children }) {

    const [page, setPage] = useState("Home");
    const mainConRef = useRef(null);
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const [displayMain, setDisplayMain] = useState(true);
    const [containerHeight, setContainerHeight] = useState(0);
    const [mainConHeight, setMainConHeight] = useState(0);
    const [mainConWidth, setMainConWidth] = useState(0);
    const [isLarge, setIsLarge] = useState(false);
    let history = useHistory();

    async function updatePageAsync(p) {
        setPage(p);
        return true;
    }

    function updatePage(p) {
        updatePageAsync(p)
        //.then(result => changeDimensions());
    }

    function openClose() {
        setDisplayMain(!displayMain);
        setPage("Home");
        setIsLarge(false);
        history.push("/");
    }

    const changeDimensions = useCallback(
        () => {
            if (displayMain) {
                setContainerHeight(mainConRef.current.scrollHeight + headerRef.current.scrollHeight + footerRef.current.scrollHeight + 50);
                setMainConHeight(window.innerHeight - (headerRef.current.scrollHeight + footerRef.current.scrollHeight + 50));
                setMainConWidth(mainConRef.current.scrollWidth);
            }
        },
        [displayMain],
    );

    function changeBackground() {
        //let background = document.querySelector(".App");
        //background.style.backgroundImage = `url(${process.env.PUBLIC_URL}/asset/img/IMG_6704.jpg)`;
    }

    useEffect(() => {
        if (history.location.pathname.slice(1) !== "") {
            let currentPage = history.location.pathname.slice(1).charAt(0).toUpperCase() + history.location.pathname.slice(2);
            currentPage = currentPage === "Cv" ? "CV" : currentPage;
            setPage(currentPage);
        };
        setTimeout(function(){changeDimensions();}, 30);
        changeBackground();
    }, [page, history.location.pathname, changeDimensions])

    return (
        <PageContext.Provider value={{ 
                page, 
                containerHeight, 
                changeDimensions,
                mainConRef, headerRef, footerRef, 
                mainConHeight, mainConWidth, displayMain, 
                openClose, 
                isLarge, setIsLarge, 
            }}>
            <PageUpdateContext.Provider value={ updatePage }>
                {children}
            </PageUpdateContext.Provider>
        </PageContext.Provider>
    )

}