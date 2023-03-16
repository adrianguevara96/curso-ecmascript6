//============ CLASS ============
/*
    Clase: Una plantilla para crear objetos con sus mismos atributos
    y metodos.

    Instancia de una clase: Es un objeto creado a partir de una clase.

    constructor: Lo primeor que se ejecuta cuando se crea una instancia de una clase.
    Y se encarga de inicializar los valores al crear una instancia de una clase.

    this: Hace referencia al elemento padre que lo contiene.

    //Encapsulamiento
        Limitar el acceso a las clases para tener mayor control sobre ellas
        
    seters: Para asignar un valor a un atributo de una clase

    getters:Para obtener un valor a un atributo de una clase
*/

//Clase
class User {
    //constructor
    constructor(name, age){
        //atributos
        this.name = name;
        this.age = age;
        // console.log(`Nuevo Usuario ${name}!!`);
    }

    //metodos
    speak() {
        return `Hello`;
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    //getters
    get uAge() {
        return this.age;
    }

    //setters
    set uAge(age) {
        this.age = age;
    }
};

//Instancia de un objeto de la clase User
const newUser = new User('Adrian', 27);
console.log(newUser.greeting());
console.log(newUser.uAge);
console.log(newUser.uAge = 20);