//ES8 - Lanzada en junio del 2017
//========== Clase 6 - ES8 ==========

//Object entries - transformar objeto a una matriz (array)
const data = {
    frontend: 'Anyami',
    backend: 'Adrian',
    desing: 'Yuumi'
}

const entries = Object.entries(data);
console.log("entries: ", entries, entries.length);

//Object values - devuelve los valores de un objeto a una arreglo (array)
//Se ignora la asignacion
const data2 = {
    frontend: 'Anyami',
    backend: 'Adrian',
    desing: 'Yuumi'
}

const values = Object.values(data2);
console.log(values, values.length);

//Padding - agegar cadena vacia o un espacio vacio a un string
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' Adrian'));
console.log('food'.padEnd(12, '  -----'))

//Trailing commas
const obj = {
    name: 'oscar',
}

//Async & await
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'));
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
