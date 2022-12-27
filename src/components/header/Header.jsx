import React, {useState} from 'react'

//par emplear las hojas de estilo basta con importarlo 

import "./header.css";

export const Header = () => {
    // para esconder
    window.addEventListener(("scroll"), function (){
        const header = this.document.querySelector(".header");
        if(this.scrollY >=200){
            header.classList.add("scroll-header");
        }else{
            header.classList.remove("scroll-header");
        }
    })



    //*============= Toggle Menu================*/

    //  usando states ;D -< cambiar el estado de un compoennte
    const [Toggle, showMenu] = useState(false); //valor. metodo a disparar para modificar la contante, valor inicial, no usar incrementos y derivados


    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">

                <a href={"#"} className="nav__logo">Codigo Total</a>

                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href={"#home"} onClick={()=> setActiveNav(('#home'))} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href={"#about"} onClick={()=> setActiveNav(('#about'))} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href={"#skills"} onClick={()=> setActiveNav(('#skills'))} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file nav__icon"></i>
                                Skills
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href={"#services"} onClick={()=> setActiveNav(('#services'))} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon">
                                </i>
                                Service
                            </a>
                        </li>


                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href={"#portfolio"} onClick={()=> setActiveNav(('#portfolio'))} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href={"#contact"} onClick={()=> setActiveNav(('#contact'))} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>

                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}
