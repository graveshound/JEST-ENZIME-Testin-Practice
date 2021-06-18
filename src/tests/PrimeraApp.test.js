//import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import React  from 'react';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('Prueba de PrimeraAPP', () => {
    //test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        
        //const saludo="Hola Soy Goku"

        //const { getByText }= render( <PrimeraApp saludo2={saludo} />)

       // expect( getByText(saludo) ).toBeInTheDocument();
   // })

   test('Debe Renderizar correctamente <PrimeraApp></PrimeraApp>', () => {
       
        const saludo="Hola Soy Goku"
        const wrapper=shallow(<PrimeraApp saludo2={ saludo }/>)

        expect(wrapper).toMatchSnapshot();


   })
   
    
})
