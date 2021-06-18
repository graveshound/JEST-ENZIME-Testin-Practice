import React  from 'react';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp"


describe('Prueba del CounterApp', () => {
    
    test('Debe mostrar CounterApp correctamente', () => {
        
        const valor=10;
        const wrapper=shallow(<CounterApp value={ valor }/>)

        expect(wrapper).toMatchSnapshot();


    })
    

    test('Debe de mostrar el valor por defecto de 100', () => {
        const valor=100
        
    
        const wrapper=shallow(<CounterApp value={ valor}/>)
    
        const valorContador=parseInt(wrapper.find('h1+h2').text());
        console.log(valorContador)
    
        expect(valorContador).toBe(valor);

        
    })
    
})
