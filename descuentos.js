const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btnDiscount = document.querySelector('#calcular');
const resultTxt = document.querySelector('#result');


btnDiscount.addEventListener('click', calcularTotal);

function calcularTotal(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount) { 
        resultTxt.innerHTML = "Por favor, llena el formulario";
        return;
    };
    if(discount >= 100){
        resultTxt.innerHTML = "ERROR: Descuento no puede ser igual o mayor a 100%";
        return;
    }
    let total = (price * (100 - discount)) / 100;
    resultTxt.innerHTML = `El precio con descuento es: $${total}`;
}