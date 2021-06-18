import React  from 'react';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp"


describe('Prueba del CounterApp', () => {
    

    let  wrapper=shallow(<CounterApp/>);// se puede dejar solo let wrapper; pero se pierde el intellisense

    beforeEach(()=>{
        wrapper=shallow(<CounterApp/>);
    })

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

    test('Debe incrementar con el button +1', () => {
        
        

        wrapper.find('button').at(0).simulate('click');

        const valorContador=wrapper.find('h2+h2').text().trim();
        console.log(valorContador)
        expect(valorContador).toBe('11')
    })
    
    test('Debe Disminuir con el button -1', () => {
        
        

        wrapper.find('button').at(2).simulate('click');

        const valorContador=wrapper.find('h2+h2').text().trim();
        console.log(valorContador)
        expect(valorContador).toBe('9')
    })

    test('Debe Resetear el valor con el button Reset', () => {
        
        const wrapper=shallow(<CounterApp value={15}/>)
        

        wrapper.find('button').at(0).simulate('click');
        let valorContador=wrapper.find('h2+h2').text().trim();
        console.log(valorContador)

        wrapper.find('button').at(1).simulate('click');
        valorContador =wrapper.find('h2+h2').text().trim();
        console.log(valorContador)
        expect(valorContador).toBe("15")
    })
    
})
