import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp'
import './index.css';

console.log("Hola Mundo");



const divRoot=document.querySelector("#root");

ReactDom.render(<PrimeraApp/>,divRoot);