const precioOriginal = 120;
const descuento = 18;


/*console.log({
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
})*/

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onclickCalcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = parseInt(inputPrecio.value);
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = parseInt(inputCupon.value);
    const precioFinal = calcularPrecioConDescuento(valuePrecio, valueCupon);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioFinal;
}

const cupones =[
    "jacapera_es_batman", 
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];   

function agregar(arr, num) {
    let resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      resultado.push(arr[i]);
    }
  
    resultado.push(num);
  
    return resultado;
  }