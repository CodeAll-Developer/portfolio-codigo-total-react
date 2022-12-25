import React from "react";

import './footer.css'

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Codigo Total</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a  href="#testimonials" className="footer__link">Testimonials</a>
                    </li>


                </ul>

                 <div className="footer__social">
                     <a  rel="noopener" href="https://github.com/PalaciosTarrilloChristian" className="footer__social-link" >
                         <i className="uil uil-github"></i>
                     </a>
                     <a  rel="noopener" href="https://www.linkedin.com/in/christian-eduardo-palacios-tarrillo-605a78217/" className="footer__social-link" >
                         <i className="uil uil-linkedin"></i>
                     </a>
                     <a  rel="noopener" href="https://www.youtube.com/channel/UC2qgmDJD1MacV0LELNCvdCw" className="footer__social-link" >
                         <i className="uil uil-youtube"></i>
                     </a>
                 </div>

                <span className="footer__copy">&#169; Codigo Total. All rigths reserved</span>

            </div>
        </footer>
    )
}