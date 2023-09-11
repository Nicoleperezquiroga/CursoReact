//Punto de entrada de la app
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'
//Renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         {/* <FirstApp title='Hola Soy Goku' subtitle={123}/>*/}
       <CounterApp value={1}/> 
    </React.StrictMode>
)