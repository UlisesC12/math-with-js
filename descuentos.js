const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btnDiscount = document.querySelector('#calcular');
const resultTxt = document.querySelector('#result');

let couponCodes = {
    'PLATZI90': 90,
    'PLATZI80': 80,
    'PLATZI70': 70,
    'PLATZI60': 60,
    'PLATZI50': 50,
    'PLATZI40': 40,
    'PLATZI30': 30,
    'PLATZI20': 20,
    'PLATZI10': 10,
    'PLATZI05': 5,
}

btnDiscount.addEventListener('click', calcularTotal);

function calcularTotal(){
    const price = Number(inputPrice.value);
    const discount = couponCodes[inputDiscount.value];
    console.log(inputDiscount.value);
    if(!price) { 
        resultTxt.innerHTML = "Por favor, especifique el precio.";
        return;
    };
    if(!discount) { 
        resultTxt.innerHTML = "ERROR: No se encontró código válido";
        return;
    };
    if(discount >= 100){
        resultTxt.innerHTML = "ERROR: Descuento no puede ser igual o mayor a 100%";
        return;
    }
    let total = (price * (100 - discount)) / 100;
    resultTxt.innerHTML = `El Descuento es de: ${discount}%<br>El precio con descuento es: $${total}`;
}