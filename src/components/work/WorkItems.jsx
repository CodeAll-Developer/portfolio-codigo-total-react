import React from "react";

export const WorkItems = ({item}) =>{

    return(
        <div className="work__card" key={item.id}>

            <img src={item.image} alt="Not found" className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <a target="_blank"   href={item.gitUrl} className="work__button">
                View in GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}