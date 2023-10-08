import PropTypes, { func } from 'prop-types';
import {useState} from 'react'
export const CounterApp = ({value}) =>{
    const [counter, setCounter] = useState(value);
    function handleAdd(event){
        console.log(event);
        //console.log(newValue);
        setCounter(counter + 1);

    }
    function handleSubstract(){
        setCounter(counter - 1);
    }

    function handleReset(){
        setCounter(0);
    }
    return(<>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    {/*<button onClick={handleAdd}>+1</button> */}
    <button onClick={(event) => handleAdd(event, 'Hola')}>+1</button>
    <button onClick={handleSubstract}>-1</button>
    <button onClick={handleReset}>Reset</button>

    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number
}