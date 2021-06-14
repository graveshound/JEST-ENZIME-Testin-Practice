import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp=({value})=>{

    //const state=useState('Goku');
    //console.log(state)
    //handleAdd
    const [counter, setCounter]=useState(0);
    const handleAdd=()=>{
        //setCounter(counter+1)
        setCounter((c)=>c+1)
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>

        </>
    )
};

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}
CounterApp.defaultValues={
    value: 69
}

export default CounterApp;