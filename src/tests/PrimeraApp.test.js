import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import React  from 'react';

describe('Prueba de PrimeraAPP', () => {
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        
        const saludo="Hola Soy Goku"

        const { getByText }= render( <PrimeraApp saludo2={saludo} />)

        expect( getByText(saludo) ).toBeInTheDocument();
    })
    
})
