import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    
    const onInputChange = ({target}) => {
        //setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //Evita comportamiento basico de un form que es recargar al presionar enter
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
       // setCategorias(categorias => [inputValue, ...categorias]);
       onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange} />
        </form>
    )
}