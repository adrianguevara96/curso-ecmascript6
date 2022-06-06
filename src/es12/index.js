//ES12 - Lanzada en junio del 2021
//========== Clase 11 - ES12 ==========

//Replace All
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replaceString = string.replace('JavaScript', 'Python');
const replaceAllString = string.replaceAll('JavaScript', 'Python');
console.log({replaceString, replaceAllString});

//Metodos privados
class Message {
    #show(val){
        console.log(val);
    }

    get #add(){
        //
    }
}

const message = new Message();
message.show('Hola!');

//Promise.any (Array de promesas, capturando la primera respuesta satisfactoria)

const promise1 = new Promise( (resolve, reject) => {
    reject("1");
});

const promise2 = new Promise( (resolve, reject) => {
    resolve("2");
});

const promise3 = new Promise( (resolve, reject) => {
    resolve("3");
})

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//WeakRef - Referencia debil para este recursos

class anyClass {
    constructor(element){
        this.ref = new WeakRef;
        //ara que no lo tome el garbage collector
    }
}

//Operadores Logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);


//TC39 - Encarga de recibir propuestas y evaluarlas para llevarlas a la sig version
//Stage 0 Idea - Idea
//Stage 1 Proposal - Propuesta
//Stage 2 Draft - Borrador
//Stage 3 Candidate - Candidato a ser a#adido
//Stage 4 Ready - Listo para agregar



let b = 'a';
b = 'b';