import React, {useEffect, useState} from "react";
import {projectsData, projectsNav} from "./Data";
import {WorkItems} from "./WorkItems";


export const Works = () =>{

    const [item, setItem] = useState({name:"all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    // funcion que se ejecuta despues de a ver cargddo nuestro componente
    useEffect(()=>{
        if(item.name === "all"){
            setProjects(projectsData); // mostrar basicamente todos los proyectos
        }
        else{
            const newProjects = projectsData.filter((projects) => {
                console.log(projects.category, " and ", item.name)
                return projects.category.toLowerCase() === item.name;
            });
            setProjects(newProjects); //defenir el arreglo pero con lo que se halla elejido
        }
    }, [item]); // alert

    const handleClick = (e, index) => {

        setItem({name: e.target.textContent.toLowerCase().trim()})
        setActive(index);
    }
    {/*     good :D*/}
    return(
       <div>
           <div className="work__filters">
               {projectsNav.map((item, index) => {
                   console.log(index)
                   return <span onClick={
                       (e) => {
                           handleClick(e, index);
                       }
                   }

                       className={`${active === index ? "active-work": ""} work__item`} key={index}>{item.name}</span>
               })}
           </div>


           <div className="work__container container grid">
               {projects.map((item)=>{
                   return <WorkItems item={item} key={item.id}/>
               })}
           </div>
       </div>
    )
}