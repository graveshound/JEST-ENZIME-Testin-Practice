//import React, { Fragment } from 'react';
//Funcional Components
import React from 'react';

const PrimeraApp = ()=>{

    const objeto={
        nombre: "Pedro Arce",
        edad: 28
    };

    const saludo="Hola Mundo"

    return  (
   /* <Fragment>
        <h1>Hola Mundo</h1>
        <p>Primer Parrafo</p>
    </Fragment>
   */
    <>
        <h1>{saludo}</h1>
        <pre>{JSON.stringify(objeto,null,3)}</pre>
        <p>Primer Parrafo</p>
    </>
    );
}

export default PrimeraApp;