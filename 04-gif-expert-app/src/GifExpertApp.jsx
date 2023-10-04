//Despues de la versión 17 de react no es necesario importarlo
//import React from "react";
import { useState } from "react";
import { AddCategory,GifGrid  } from "./Components";


export const GifExpertApp = () => {
    
    //Esto asegura espacio en memoria para almacenar categorias y modificarlas
    //No poner los hooks en condiciones
    const [categorias, setCategorias] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) =>{
        //Se valida que no se agrega una category existente
        if(categorias.includes(newCategory)) return;
        //Otra forma de hacer lo mismo
        //setCategorias(categorias => [...categorias,valor]);
        //Forma resumimda
        setCategorias([newCategory,...categorias]);
    }
    return (
        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>
            {/*Input*/}
            {/*Se pueden mandar parametros a otras componentes, estos pueden ser variables o funciones*/}
            <AddCategory 
            //setCategorias = {setCategorias}
            onNewCategory={event=>onAddCategory(event)}
            />            
            {/*<AddCategory hola="Hola"/>*/}         
          
            {/*Listado de GIF*/}
       
                {categorias.map((category) => (
                        <GifGrid 
                        key={category}
                        category= {category}
                        />
                ))}
            
                {/*GIF ITEM*/}
        </>
    );
};