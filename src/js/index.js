import printMe from './print';
import Json from '../assets/jsons/generated';

printMe();
console.log("json testing", Json);
$('#jsonFile').text(JSON.stringify(Json));

console.log("Polyfill testing", [1, 2, 3].map((n) => n + 1));

$.ajax({
    url: `${apiBaseUrl}/users`,
    type: 'GET',
    success: (res) => {
        console.log(res);
        $('#jsonApi').text(JSON.stringify(res));
    },
    error: (e) => {
        console.log(e.status, e.statusText);
        $('#jsonApi').text(JSON.stringify(e.statusText));
    }
});
