//============ GENERATOR ============

/*
    Generadores
        Son un tipo especial de funcion que nos va a retornar una serie de valores
        dependiendo del algoritmo definido.
        Ex: Lo distingues por el * en la palabra reservada function.
    
    Yield: palabra reservada que retorna cada uno de los valores de un array en
    un ciclo for.


*/

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
};
const array = ['Yuumi', 'Anyami', 'Adrian', 'Jose', 'Maria'];
const it = iterate(array);
console.log(it.next().value);
