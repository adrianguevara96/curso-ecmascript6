//ES11 - Lanzada en junio del 2020
//========== Clase 10 - ES11 ==========

//Dinamic import
const button = document.getElementById('btn');
button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});

//BigInt
const aBigNumber = 9007199254740991n
const another = BigInt(9007199254740991);

console.log({aBigNumber, another});

//Promise of 
const promise1 = new Promise( (resolve, reject)=> {
    reject("reject");
});
const promise2 = new Promise( (resolve, reject)=> {
    resolve("resolve");
});
const promise3 = new Promise( (resolve, reject)=> {
    resolve("resolve 2");
});

//Espera a que todas las promesas estan resueltas a diferencia de promise.all
//que al rechazarse una promesa se rechaza el metodo
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//Global THIS
console.log(window);
console.log(globalThis);

//Operador nulo
const fooo = null ?? 'default string';
const foo2 = 'asd' ?? null;
console.log(fooo, foo2);

//optional chain
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("fail");
}