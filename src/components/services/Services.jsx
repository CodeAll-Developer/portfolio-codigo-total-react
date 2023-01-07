import React, {useState} from "react";

import './services.css'

//funcional component
export const Services = () =>{
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offert</span>
            <div className="services__container container grid">
                {/*Contenido*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Aplicaciones Web <br /> MEAN and MERN</h3>
                    </div>
                    <span className="services__button" onClick={()=>{
                        toggleTab(1)
                    }}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>{
                                toggleTab(0)
                            }}>
                            </i>

                            <h3 className="services__modal-title">Frontend</h3>
                            <p className="services__modal-description">
                                Service with more than 2 years of experience. Providing quality work to my projects
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I make from 0 the designs of the web pages.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I create Progressive Web Apps (PWA).
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I successfully use a third party template
                                    </p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Consumption of API’s efficiently.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Generate the components, modules, routing, security on the views and everything necessary that a project requires.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I manage code management with Git.

                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/*Contenido*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Aplicaciones Web <br /> Creation API's</h3>
                    </div>
                    <span className="services__button" onClick={()=>{
                        toggleTab(2)
                    }}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>{
                                toggleTab(0)
                            }}>
                            </i>

                            <h3 className="services__modal-title">Backend</h3>
                            <p className="services__modal-description">
                            Service with more than 2 years of experience. Providing quality work to my projects
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Idevelop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/*Contenido*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">UI/UX Web<br/> Designer</h3>
                    </div>
                    <span className="services__button" onClick={()=>{
                        toggleTab(3)
                    }}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>{
                                toggleTab(0)
                            }}>
                            </i>

                            <h3 className="services__modal-title">UI/UX Web Designer</h3>
                            <p className="services__modal-description">
                                Service with more than 1 year of experience providing a good design inside of  my projects
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I design the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Web page design complete.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Design and mockups of products
                                    </p>
                                </li>

                            

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}