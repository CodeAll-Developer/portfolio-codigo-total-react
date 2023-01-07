import { useState } from "react";
//hook personalizado, encarga de tomar una falidacion
export const useForm = (initialForm, validateForm) =>{
    const [formulario, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

//crea una copia del elemento del formulario
    const handleChange = (e) => {
        const {name, value}  = e.target;
        //toma lo escrito
        setForm({
            ...formulario,
            [name]:value
        })
    };
    //Elementos del formulario se pierde el foco del texto
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(formulario));
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(formulario));
        if(Object.keys(errors).length === 0 ){
            return true;
        }
        return false;
    };


    

    return{
        formulario,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    }
}