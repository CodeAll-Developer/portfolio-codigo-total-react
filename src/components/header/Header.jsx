import React, {useState} from 'react'

//par emplear las hojas de estilo basta con importarlo 

import "./header.css";

export const Header = () => {
    // para que no hjalla pedos con la ventana



    //*============= Toggle Menu================*/

    //  usando states ;D -< cambiar el estado de un compoennte
    const [Toggle, showMenu] = useState(false); //valor. metodo a disparar para modificar la contante, valor inicial, no usar incrementos y derivados


    return (
        <header className="header">
            <nav className="nav container">

                <a href="#" className="nav__logo">Codigo Total</a>
                {/* el otro lado  nav__menu */}
                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file nav__icon"></i>
                                Skills
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon">
                                </i>
                                Service
                            </a>
                        </li>


                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                Portfolio
                            </a>
                        </li>

                        {/* elementos de la lista  */}
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>

                </div>
                {/* boton para ocultar y mostrar en mobiles  */}
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uitl uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}
