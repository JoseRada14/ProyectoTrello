function crearId(n){
    let ID = "";
    for(let i = 0; i < n; i++) ID += parseInt(Math.random()*36).toString(36) //version resumida de todo lo de abajo

    // let numAleatorio = Math.random();
    // console.log(numAleatorio);

    // let numCifras = numAleatorio *36;
    // console.log(numCifras);

    // let numRedondeado = parseInt(numCifras)
    // console.log(numRedondeado);

    // let numConvertido = numRedondeado.toString(36);
    // console.log(numConvertido);

    // ID + numConvertido;
    // console.log(ID);

    //     ID += i; estuiar extends   
    return ID;
}
let idPrueba = "";
idPrueba = crearId(4);
console.log(idPrueba);









