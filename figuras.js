//========================CODIGO PARA LA FIGURA DEL CUADRADO======================
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");*/

//----------------Encapsulando en funciones----------------------------
function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


//====================CODIGO PARA LA FIGURA DEL TRIANGULO===============================
console.group("Triangulos")

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 
const alturaTriangulo = 5.5;

console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTringulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es de: " +areaTriangulo + "cm^2");*/

//----------------Encapsulando en funciones----------------------------
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


//=============CODIGO PARA LA FIGURA DEL CIRCULO=====================
console.group("Circulos");

/*// Radio del Circulo
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// Valor de PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El valor de la circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area del Circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm^2");*/

//----------------Encapsulando en funciones----------------------------
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//---------------------Calculando la altura de un triangulo isósceles------------------------------------
function alturaTrianguloIsosceles(ladoA, ladoB, base){
    if (ladoA != ladoB){
        console.error("los lados A y B deben ser iguales para ser un triangulo isósceles");
        alert("los lados A y B deben ser iguales para ser un triangulo isósceles");
    }else{
        const b = (base / 2)**2;
        const c = ladoA * ladoB;
        return  Math.sqrt(c-b);
    }
}

//======================INTERACTUANDO CON HTML============================

//-------------------Calculos para el cuadradro---------------------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm^2");
}
//-----------------Calculos para el triangulo-------------------------------
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value);  
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perímetro del triangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value);
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = parseInt(inputAltura.value);
    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área del triangulo es: " + area + "cm^2");
}

//-----------------Calculos para el circulo-------------------------------
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = parseInt(inputRadio.value);
    const perimetro = perimetroCirculo(valueRadio);
    alert("El perímetro del circulo es: " + perimetro + "cm");
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = parseInt(inputRadio.value);
    const area = areaCirculo(valueRadio);
    alert("El área del circulo es: " + area + "cm^2");
}
function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = parseInt(inputRadio.value);
    const diametro = diametroCirculo(valueRadio);
    alert("El diametro del circulo es: " + diametro + "cm");
}

//-------------Calculos para altura del triangulo isosceles-------------
function calcularAlturaTrianguloIsosceles(){
        const inputLadoA = document.getElementById("inputTrianguloIsoscelesLadoA");
        const valueLadoA = parseInt(inputLadoA.value);
        const inputLadoB = document.getElementById("inputTrianguloIsoscelesLadoB");
        const valueLadoB = parseInt(inputLadoB.value);
        const inputBase = document.getElementById("inputTrianguloIsoscelesBase");
        const valueBase = parseInt(inputBase.value);
        const altura = alturaTrianguloIsosceles(valueLadoA, valueLadoB, valueBase);
        alert("La altura para su triangulo Isósceles es: " + altura + "cm");
}