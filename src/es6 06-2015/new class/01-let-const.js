//=============== VAR, LET Y CONST ===============

//Declarar y Asignar VAR
var lastName = 'Adrian';

//Reasignar
lastName = 'Jesus';
console.log(lastName);

//Declarar y Asignar LET
let fruit = 'Apple';

//Reasignar
fruit = 'Kiwi';
console.log(fruit);

//Declarar y Asignar CONST
const animal = 'Dog';

//Reasignar - (No se puede reasignar)
animal = 'Cat';
console.log(animal);

//=============== ARROW FUNCTIONS ===============

const fruits = () => {
    if(true) {
        //bloque: Todo lo que esta dentro de las handlebars
        var fruit1 = 'Apple';       //function scope - global
        let fruit2 = 'Kiwi';        //block scope
        const fruit3 = 'Banana';    //block scope
    }

    console.log(fruit1, fruit2, fruit3);
}

fruits();