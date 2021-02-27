import React from 'react'

const Footer = ({ footerRef }) => {
    return (
        <div className="footer" ref={footerRef}>
            <div className="footer__con">
                <ul className="footer__ul">
                    <li className="footer__li">
                        <a className="footer__li__a" href="https://www.linkedin.com/in/fremontcheng/">
                            <i className="footer__li__a__i fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="footer__li">
                        <a className="footer__li__a" href="https://github.com/gutwenger/">
                            <i className="footer__li__a__i fab fa-github"></i>
                        </a>
                    </li>
                </ul>
                <a className="footer__a" href="mailto:fremontchengwork@gmail.com">fremontchengwork@gmail.com</a>
                <p className="footer__copyright">© 2021 Fremont Cheng</p>
            </div>
        </div>
    )
}

export default Footer;