import React, {useState} from "react";
import './qualification.css'

export const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div onClick={()=> toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div onClick={()=> toggleTab(2)}  className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>


                </div>
                {/*Education*/}
                <div className="qualification__sections">
                    <div   className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>
                        {/*Element left - university*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Engineer of systems</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Java*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}

                            <div>
                                <h3 className="qualification__tittle">Java Programming</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2022
                                </div>
                            </div>


                        </div>
                        {/*Element left - SQL*/}
                        <div className="qualification__data">
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Database Design and Programming with SQL</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - PHP*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">PHP Programming</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>

                        </div>
                        {/*Element left - node*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Node Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Angular*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Angular Developer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>

                        {/*Element left - React*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">React Developer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Web Designer*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Web Designer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>
                        {/*Element left - Web Developer*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Web Developer</h3>
                                <span className="qualification__subtitle">Udemy - EDteam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*Element right - Photoshop*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Photoshop</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>



                        </div>

                        {/*Element left - Java Advanced - Spring*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Spring Boot Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Phyton - flask*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Python Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>



                        </div>
                        {/*Element left - c++*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">C++ Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - ui/ux */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">UI / UX Design</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>

                        {/*Element left - c++*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Figma</h3>
                                <span className="qualification__subtitle">EDteam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>


                </div>
                {/*Experience*/}
                <div className="qualification__sections">
                    <div   className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                        {/*Element left - university*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Experience</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Java*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}

                            <div>
                                <h3 className="qualification__tittle">Java Programming</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2022
                                </div>
                            </div>


                        </div>
                        {/*Element left - SQL*/}
                        <div className="qualification__data">
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Database Design and Programming with SQL</h3>
                                <span className="qualification__subtitle">Universidad Autónoma del Perú</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - PHP*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">PHP Programming</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>

                        </div>
                        {/*Element left - node*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Node Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Angular*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Angular Developer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>

                        {/*Element left - React*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">React Developer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Web Designer*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Web Designer</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>
                        {/*Element left - Web Developer*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Web Developer</h3>
                                <span className="qualification__subtitle">Udemy - EDteam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*Element right - Photoshop*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Photoshop</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>



                        </div>

                        {/*Element left - Java Advanced - Spring*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Spring Boot Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - Phyton - flask*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">Python Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>



                        </div>
                        {/*Element left - c++*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">C++ Programing</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*Element right - ui/ux */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            {/*element*/}
                            {/*text*/}
                            <div>
                                <h3 className="qualification__tittle">UI / UX Design</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - present
                                </div>
                            </div>



                        </div>

                        {/*Element left - c++*/}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__tittle">Figma</h3>
                                <span className="qualification__subtitle">EDteam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}