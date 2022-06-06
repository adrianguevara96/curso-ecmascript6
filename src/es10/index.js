//ES10 - Lanzada en junio del 2019
//========== Clase 9 - ES10 ==========

let array = [1,2,3, [1,2,3, [1,2,3]]];

//La profundidad de un array - primer nivel
console.log(array.flat());
//La profundidad de un array - segundo nivel
console.log(array.flat(2));

//La profundidad de un array
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value*2]));

//trim - Eliminar espacios en blanco de un string
let hello = '               hello world';
let hello2 = 'hello world               ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello2.trimEnd())

//try & catch
try {
    
}catch {
    error
}

//array to object
let entries = [["name","oscar"],["age", 32]];
console.log(Object.fromEntries(entries));

//objeto de tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);