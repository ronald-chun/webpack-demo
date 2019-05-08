window.$ = require('jquery');

import _ from 'lodash';

import '../scss/style.scss';
import printMe from './print';
import page1 from './page1';
import Json from '../assets/jsons/generated';

// function component() {
//     const element = document.createElement('div');
//     return element;
// }
// document.body.appendChild(component());

printMe();
page1();
console.log(Json);
$('#json').text(JSON.stringify(Json));

console.log(__("Hello World"));
console.log(__("Missing Text"));