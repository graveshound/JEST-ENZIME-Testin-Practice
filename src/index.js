import React from 'react';
import ReactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

console.log("Hola Mundo");



const divRoot=document.querySelector("#root");

//ReactDom.render(<PrimeraApp />,divRoot);
ReactDom.render(<CounterApp />,divRoot);//