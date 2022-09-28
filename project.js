const dropdownEl = document.querySelector("#selected-tool");
const mainDiv = document.querySelector(".main-content");
const dynamicOptions = document.querySelector(".dynamic-options");
let options = ["--opciones--", "Area", "Perimetro","Volumen"];
let figures2d = ["Circulo", "Cuadrado", "Triangulo"];
let figures3d = ["Cubo", "Esfera"];


//Display options on droprdown list
dropdownEl.innerHTML = `${options.map(choice => {
    return `
        <option value="${choice.toLowerCase().replaceAll(" ", "-")}">${choice}</option>
    `;
})}`;

//On Change Option
dropdownEl.addEventListener('change', displayValues);

//Ask for information


//Functions
function displayValues () {
    //2D Figures
    if(dropdownEl.value == "area" || dropdownEl.value == "perimetro"){
        dynamicOptions.innerHTML = `
            <label for="selected-figure">Selecciona una figura:</label>
            <select name="my-tool" id="selected-figure">
            ${figures2d.map((option)=>{
                return `
                <option value="${option.toLowerCase().replaceAll(" ", "-")}">${option}</option>
                `;
            })}
            </select><br><br>
        `;
    }
    //3D Figures 
    else if(dropdownEl.value == "volumen"){
        dynamicOptions.innerHTML = `
            <label for="selected-figure">Selecciona una figura:</label>
            <select name="my-tool" id="selected-figure">
            ${figures3d.map((option)=>{
                return `
                <option value="${option.toLowerCase().replaceAll(" ", "-")}">${option}</option>
                `;
            })}
            </select><br><br>
        `;
    } else {
        dynamicOptions.innerHTML = ``;
    }
}