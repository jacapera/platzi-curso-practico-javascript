function calcularModa(lista){
    const listaCount = {};
    lista.map(//el metodo map() crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
        function (elemento) {
            if (listaCount[elemento]){
                listaCount[elemento] += 1; //vamos a darle el valor de la suma las veces que se repite este elemento
            } else {
                listaCount[elemento] = 1; //los elementos que no se repiten se les asigna el valor de 1
            }
        }
    );
    console.log("Este es listaCount");
    console.log(listaCount);
    //--------------------------------------------------------------
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    console.log("Este es listaArray");
    console.log(listaArray);
    const moda = listaArray [listaArray.length - 1];
    console.log("La moda es: ")
    return moda;
}

//==========================OPCION 2==============================
//const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}
//console.log(mode(NUMBERS));
/* en este caso al encontrar la moda en mas de dos elementos de su array no me muetra si no solamente un elemento */