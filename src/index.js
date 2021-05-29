import React from 'react';
import ReactDom from 'react-dom';

console.log("Hola Mundo");

const hello=<h1>Hola Mundo</h1>
console.log(hello)

const divRoot=document.querySelector("#root");

ReactDom.render(hello,divRoot);