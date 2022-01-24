//----------------------------------Funciones Helpers--------------------------------------
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//-----------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------
/*Metodo para extraer el salario del array de objetos "colombia", en un nuevo array que se
 llamara "salariosCol" */
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);
//------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------
/*Metodo para ordenar los elementos de menor a mayor del array "salariosCol", pero lo 
guardamos en la nueva variable "salarioColSorted"  */
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return (salaryA - salaryB);
    }
);
//-------------------------------------------------------------------------------------------


//--------------------------------Calculadora de medianas-------------------------------------
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad];
        const personitaMitad2 = lista[mitad - 1];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
    }
    
    return mitad;
}
console.log(
    medianaSalarios(salariosColSorted)
);
//----------------------------------------------------------------------------------------


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//---------------------------------------------Mediana TOP 10%----------------------------------

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(
    spliceStart, spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(
    {medianaGeneralCol, medianaTop10Col,}
);