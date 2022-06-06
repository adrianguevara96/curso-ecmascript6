//ES9 - Lanzada en junio del 2018
//========== Clase 8 - ES9 ==========

//Operador de reposo, Operador Spread
const obj = {
    name: 'Adrian',
    age: 26,
    country: 'VNZLA'
};

//encapsular los demas datos en otro objeto
let { name, ...all} = obj;
console.log(name, all);

//Propiedades de propagacion, unir uno o mas objetos
const obj1 = {
    name: 'Adrian',
    age: 26
};

const obj2 = {
    ...obj1,
    country: 'VNZLA'
};

console.log(obj1, obj2);

//Se usa para saber cuando ha terminado el llamado
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally( () => console.log('Finalizo'))

//como agrupar grupos de regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-05-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);