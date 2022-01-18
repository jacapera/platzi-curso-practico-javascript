/*
Enunciado

Dados dos arreglos arreglo1 y arreglo2, escribe una función arraysIguales que retorne true si los elementos de cada arreglo representan la misma cadena de texto (string), de lo contrario retorna false.

Una cadena de texto es representada por un arreglo, si los elementos del arreglo concatenados en orden forman una cadena de texto.

arreglo1[i] y arreglo2[i] incluyen solamente letras en minúscula de la a-z.

Input: arreglo1 = ["ab", "c"], arreglo2 = ["a", "bc"]
Output: true

Input: arreglo1 = ["a", "cb"], arreglo2 = ["ab", "c"]
Output: false

Input: arreglo1  = ["abc", "d", "defg"], arreglo2 = ["abcddefg"]
Output: true

___

PACER

Problema:

Escribir una función que retorne true si las cadenas de texto formadas por los elementos de cada uno de los dos arreglos pasados como parámetro son iguales, si no retorna false.

Datos de entrada: arreglos
Dato de salida: boleano

Ejemplos

["ab", "c"] // "abc"
["a", "bc"] // "abc"
true

["a", "cb"] // "acb"
["ab", "c"] // "abc"
false

["abc", "d", "defg"] // "abcddefg"
["abcddefg"]         // "abcddefg"
true

Utilizaré cadenas de texto para hacer la comparación.

Los elementos de los arreglos son sólo minúsculas.


Algoritmo:

definir una función arraysIguales que recibe dos arreglos como parámetros arreglo1 y arreglo2
  definir una variable cadena1 y asignarle como valor la concatenación de los elementos del arreglo arreglo1
  definir una variable cadena2 y asignarle como valor la concatenación de los elementos del arreglo arreglo2
  declarar una variable resultado
  asignar a la variable resultado la comparación de igualdad de cadena1 con cadena2
  retornar resultado.
*/


/* BORRAME AQUI PARA VOLVER AL ORIGINAL JACAPERA


function arraysIguales(arreglo1, arreglo2) {
    const cadena1 = arreglo1.join("");
    const cadena2 = arreglo2.join("");
    let resultado;
  
    resultado = (cadena1 === cadena2);
  
    return resultado;
  };
  
  console.log(arraysIguales(["ab", "c"], ["a", "bc"] )) // true
  console.log(arraysIguales(["a", "cb"], ["ab", "c"] )) // false
  console.log(arraysIguales(["abc", "d", "defg"],["abcddefg"]  )) // true
  
  
  //Refactorización
  
  console.log("Refactor");
  
  function arraysIgualesRef(arreglo1, arreglo2) {
    return arreglo1.join("") === arreglo2.join("");
  }
  
  console.log(arraysIguales(["ab", "c"], ["a", "bc"] )) // true
  console.log(arraysIgualesRef(["a", "cb"], ["ab", "c"] )) // false
  console.log(arraysIgualesRef(["abc", "d", "defg"],["abcddefg"]  )) // true


//============================================================================================================================= 
/*
 Enunciado

Dada una cadena de texto s, determina si es palindroma, considerando sólo caracteres alphanuméricos e ignorando si es mayúscula o minúscula.

Casos

Input: s = "Atar a la rata, no es mas que atar a la rata"
Output: true

Input: s = "vamos makers!"
Output: false


PACE
___

PROBLEMA

Descripción:
Escribir una función que retorne true si la cadena de texto que recibe como parámetro se lee igual de izquierda a derecha y de derecha a izquierda.

Datos de entrada y salida:
Entrada: string
Salida: boolean

Ejemplos
Input: "Atar a la rata"
"ataralarata" === "ataralarata" // true
Input: "vamos makers!"
"vamosmakers" === "srekamsomav" // false

Estructura para manipulación de datos:
Array. Para implementar el reverse / string si haces un loop desde la última posición a la posición 0 del string original.


ALGORITMO
definir una función palindrome que recibe como parámetro una casena de texto s
  declarar una variable sMinuscula y asignarle el valor retornado de convertir todos los caracteres afabéticos de la cadena s en mínúsculas.
  declarar una variable sArray
  declarar una variable sInversa
  remover todos los carateres no alphanuméricos de la cadena sMinuscula con una expresión regular.
  asignar como valor de la variable sArray un array cuyos elementos son cada uno de los caracteres de sMinuscula
  asingnar como valor de sArray la reversión de sArray
  asignar como valor de sInversa la cadena que se optiene como resultado de unir los elementos de sArray
 retornar la comparación de igualdad sMinuscula === sInversa
*/

// CÓDIGO

/* BORRAME AQUI PARA VOLVER AL ORIGINAL JACAPERA

function palindrome(s) {
    let sMinuscula = s.toLowerCase();
    let sInversa;
    let sArray;
  
    sMinuscula = sMinuscula.replace(/([^A-Za-z0-9])/g, "");
    sArray = sMinuscula.split("");
    sArray = sArray.reverse();
    sInversa = sArray.join("");
  
    return sMinuscula === sInversa;
  
  
  };
  
  console.log(palindrome("Atar a la rata")); // true
  console.log(palindrome("vamos makers!")); // false
  
  /*
  REFACTORIZACIÓN
  
  Implementa una solución con un código más limpio.
  */ 