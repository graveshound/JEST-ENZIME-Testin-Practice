//import React, { Fragment } from 'react';
//Funcional Components
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo2})=>{

    const objeto={
        nombre: "Pedro Arce",
        edad: 28
    };
    console.log(saludo2)
    const saludo="Hola Mundo"

    /*if (!saludo){
        throw new Error("El Salud es Necesario")
    }*/

    return  (
   /* <Fragment>
        <h1>Hola Mundo</h1>
        <p>Primer Parrafo</p>
    </Fragment>
   */
    <>
        <h1>{saludo}</h1>
        <h1>{saludo2}</h1>
        <pre>{JSON.stringify(objeto,null,3)}</pre>
        <p>Primer Parrafo</p>
    </>
    );
}
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired

}
export default PrimeraApp;