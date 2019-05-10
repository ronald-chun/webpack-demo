import printMe from './print';
import Json from '../assets/jsons/generated';

printMe();
console.log("json testing", Json);
$('#json').text(JSON.stringify(Json));

console.log("Polyfill testing", [1, 2, 3].map((n) => n + 1));

