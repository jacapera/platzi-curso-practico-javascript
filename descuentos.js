function onclickCalcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = parseInt(inputPrecio.value);
    const inputDescuento = document.getElementById("inputDescuento");
    const valueDescuento = parseInt(inputDescuento.value);
    const porcentajePrecioConDescuento = 100 - valueDescuento;
    const precioConDescuento = (valuePrecio * porcentajePrecioConDescuento) / 100;
    const descuento = (valuePrecio * valueDescuento) / 100;
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El valor del descuento fue de: $"+ descuento+"\nEl precio con descuento son: $" + precioConDescuento;
}

//  ================Solución #1: arrays y switch (este es el array)===============================
const cupones =[
    "jacapera_es_batman", 
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];
//===============================================================================================

//=========================Solución #2: legibilidad, error first y muerte al switch=================================
/*function calcularDescuentoCupon(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = parseInt(inputPrecio.value);
    const inputCupones = document.getElementById("inputCupones");
    const valueCupones = inputCupones.value;
    let descuento;
    const resultP = document.getElementById("resultP");

//==========Solución #2: legibilidad, error first y muerte al switch(con if y else if)=============================== 
    if(!cupones.includes(valueCupones)){
        resultP.innerText = "El cupón " + valueCupones + " no es Válido";
        //alert("El cupón " + valueCupones + " no es Válido");
        return 0;
    }else if (valueCupones === "jacapera_es_batman"){
        descuento = 15;
    }else if(valueCupones === "pero_no_le_digas_a_nadie"){
        descuento = 30;
    }else if(valueCupones === "es_un_secreto"){
        descuento = 25;
    }
    //=========================fin del if y else if===================================================================

    //============================Solución #1: arrays y switch (este es el switch)=====================================
    /*switch(valueCupones){
        case cupones[0]:
            descuento = 15;
        break;

        case cupones[1]:
            descuento = 30;
        break;
        
        case cupones[2]:
            descuento = 25;
        break;
    }
    */
   //======================================fin del switch=====================================================================

    /*
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (valuePrecio * porcentajePrecioConDescuento) / 100;
    const descuento2 = (valuePrecio * descuento) / 100;
    //const resultP = document.getElementById("resultP");
    resultP.innerText = "El valor del descuento con cupon fue de: $"+ descuento2 +" ("+descuento+"%)" + "\nEl precio con descuento del cupon son: $" + precioConDescuento;
    return precioConDescuento;
}*/

//========================================Solución #3: arrays y condicionales mucho más inteligentes====================================
function calcularDescuentoCupon(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = parseInt(inputPrecio.value);
    const inputCupones = document.getElementById("inputCupones");
    const valueCupones = inputCupones.value;

    //==============array de objetos====================================
    const coupons = [
        {
            name: "jacapera_es_batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];
    //=====================================================================
    const isCouponValueValid = function(coupon){
        return coupon.name === valueCupones;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    let descuento;
    const resultP = document.getElementById("resultP");

    if(!userCoupon){
        resultP.innerText = "El cupón " + valueCupones + " no es Válido";
        //alert("El cupón " + valueCupones + " no es válido");
    }else{
        descuento = userCoupon.discount;
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (valuePrecio * porcentajePrecioConDescuento) / 100;
        const descuento2 = (valuePrecio * descuento) / 100;
        //const resultP = document.getElementById("resultP");
        resultP.innerText = "El valor del descuento con cupon fue de: $"+ descuento2 +" ("+descuento+"%)" + "\nEl precio con descuento del cupon son: $" + precioConDescuento;
        return precioConDescuento;
    }
    
}
