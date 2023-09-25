//Despues de la versión 17 de react no es necesario importarlo
//import React from "react";
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
export const GifExpertApp = () => {
    
    //Esto asegura espacio en memoria para almacenar categorias y modificarlas
    //No poner los hooks en condiciones
    const [categorias, setCategorias] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = (event, valor) =>{
        //Otra forma de hacer lo mismo
        //setCategorias(categorias => [...categorias,valor]);
        //Forma resumimda
        setCategorias([valor,...categorias]);
        console.log(categorias);
    }
    return (
        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>
            {/*Input*/}
            {/*Se pueden mandar parametros a otras componentes, estos pueden ser variables o funciones*/}
            <AddCategory setCategorias = {setCategorias}/>            
            {/*<AddCategory hola="Hola"/>*/}         
          
            {/*Listado de GIF*/}
            <ol>
                {categorias.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
                {/*GIF ITEM*/}
        </>
    );
};