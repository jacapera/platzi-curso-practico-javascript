const notes = [
{
    course: "Eduación Física",
    note: 10,
    credit: 2,
},
{
    course: "Programación",
    note: 8,
    credit: 5,
},
{
    course: "Finanzas personales",
    note: 7,
    credit: 5,
},
];

function calcularDivisorConDividendo(lista){
    const notesWithCredit = lista.map(
        function (listaObject){
            return listaObject.note * listaObject.credit;
        }
    );
    return notesWithCredit;
}
console.log(
    calcularDivisorConDividendo(notes)
);   



    const notesWithCredit = notes.map(function(listaObject){
        return listaObject.note * listaObject.credit;
    });
    console.log(notesWithCredit);
    //utilizamos metodo map() para obtener un nuevo arreglo con la multiplicacion de cada nota y sus respectivos creditos
        //(3) [20, 40, 35]
    
    const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    });

    const credits = notes.map(function(noteObject){
    return noteObject.credit;
    });//utilizamos nuevamente el metodo map() para obtener un nuevo array con los elementos .credit
    //(3) [2, 5, 5]
    const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    });//nuevamente usamos el metodo reduce() para guardar en la variable sumOfCredits la suma de los elementos del array credits
    //12
    const promedioPonderado = sumOfNotesWithCredit / sumOfCredits;



