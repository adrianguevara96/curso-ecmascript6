//============ PROMISES ============
/*
    Algo que va a pasar, hoy,  manana o nunca
*/

const anotherFunction = () => {
    return new Promise( (resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whooooops!');
        }
    })
}

anotherFunction()
    .then( res => {
        console.log("response: ", res);
    })
    .catch( err => {
        console.log("error: ", err);
    })