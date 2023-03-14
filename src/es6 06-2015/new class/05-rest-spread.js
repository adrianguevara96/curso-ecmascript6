//============ ARRAY DESTRUCTURING ============
/*
    Se asignan los valores y utilizaron y sin ningun inconveniente mostrarlos
    sin necesidad de usar la posicion del arreglo
*/
let fruits = ['Apple', 'Banana', 'Kiwi'];
let [a,b] = fruits;
console.log(a,b);

//Extra
let [,,c] = fruits;
console.log(c);

//============ OBJECT DESTRUCTURING ============
let user = {username: 'Yuumi', age: 4};
let { username, age } = user;
console.log(username, age);

//============ SPREAD OPERATOR ============
let person = { name: 'Adrian', age: 27};
let country = 'ES';

let data = { id: 1, ...person, country };
console.log(data);

//============ REST ============
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
