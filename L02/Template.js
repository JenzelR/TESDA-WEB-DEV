const firstName = 'Jenzel  ';
const age = '21';
const job = 'Student';
const city = 'Pasig';
let html;
//Without Template Strings 
html = '<ul><li>Name: ' + 
        firstName + 
        '</li><li>Age ' + 
        age +
        '</li><li>job ' + 
        job +
        '</li><li>city ' + 
        city +
        '</li></ul>'
//With Template Strings (
//Declaration
function hey() {
    return 'Good morning'
}

//Ternary Operator
html= `
        <ul> 
        <li>Name: ${firstName } </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>${ 4 + 3 } </li>
        <li>${hey()} </li>
        <li> ${age > 100 ? 'Over 100' : "Under 100"} </li>
        </ul>
    `;

    document.body.innerHTML = html;

console.log(val);