//=============== ARROW FUNCTIONS ===============
/*
    Alternativa compacta a una funcion tradicional, 
    pero es limitada y no se puede utilizar en todas las situaciones.
    No se puede utilizar como constructor.
*/

function square(num) {
    return num * num;
}

//Por convencion se usa const para definir una arrow function
const square = (num) => {
    return num * num;
}

const square = num => num * num ;