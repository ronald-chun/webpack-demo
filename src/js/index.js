window.$ = require('jquery');

import printMe from './print';
import page1 from './page1';
import Json from '../assets/jsons/generated';

printMe();
page1();
console.log(Json);
$('#json').text(JSON.stringify(Json));
