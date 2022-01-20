/*const lista1 = [
    100,
    200,
    500,
    700,
    400000000,
    250,
];*/
//========================================================
/* funcion que nos ayuda a calcular una media aritmetica
cuando recibimos como parametros un array de string o de
numeros */

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//===========================================================================
/* esta funcion nos ayuda a verificar si el parametro que paso es par o impar
que para nuestro ejercicio tambien puede recibir como parametro un array de 
string o uno de numeros */

function esPar(numerito){
    if (numerito % 2 === 0) { //utilizamos el (modulo 2) para hallar si es par
        return true;
    }else {
        return false;
    }
}

//==============================================================================
/* funcion que nos ayuda a ordenar de menor a mayor un array de string o uno de
numeros */

//---------------Esta opcion lo realizamos con un ciclo for y algunos metodos----------------
function ordenarLista(lista){
    let newList = [];
    for (i = lista.length; i > 0; i--) {
        let min = Math.min(...lista);//metodo para obtener el valor minimo de un array
        let find = lista.indexOf(min);//metodo para obtener el indice de un elemento en un array
        newList.push(min);
        lista.splice(find, 1);//metodo que cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos
    }
    //console.log(newList);
    return newList;
}
//------------------------------Esta opcion la realizamos con el metodo sort--------------------------
function ordenarLista2(lista){
    lista.sort(function(a, b) {
        return a - b;
      });
      return lista;
}

//=======================================================================================
/* Finalmente tenemos la funcion que nos ayuda a calcular una mediana, para esta funcion
incluimos todas las anteriores funciones para poder realizar el calculo de la mediana */
function calcularMediana(lista){
    lista = ordenarLista2(lista);
    console.log(lista);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}

