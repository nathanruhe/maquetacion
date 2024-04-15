
// creamos los botones
const button1 = document.createElement("button");
const button2 = document.createElement("button");

// seleccionar y verificar si existe
const divPadre = document.querySelector(".divbtn");
if (divPadre) {
    // creamos los atributos
    button1.type = "button";
    button1.textContent = "Solicitar Información";

    button2.type = "button";
    button2.textContent = "Filtrar";

    // los añadimos al html
    divPadre.appendChild(button1);
    divPadre.appendChild(button2);
};

// damos estilo a los dos buttons
const button3 = document.querySelectorAll("button");
if (button3) {
    button3.forEach(btn => btn.style.cssText = "background: black; color: white; padding: 5px 10px");
};



// punto 3
button1.addEventListener("click", () => info());

let arrayPersonas = [];

function info () {
    const nombreSelect = document.querySelector("#nombre").value
    const origenSelect = document.querySelector("#origen").value
    const destinoSelect = document.querySelector("#destino").value
    const personaSelect = document.querySelector("#persona").value
    const fechaSelect = document.querySelector("#fecha").value

    let personaInfo = {
        nombre: nombreSelect,
        origen: origenSelect,
        destino: destinoSelect,
        totalPersonas: personaSelect,
        fecha: fechaSelect,
    };

    arrayPersonas.push(personaInfo);
    console.log(arrayPersonas);
};


// punto 4
button2.addEventListener("click", () => filtrar());

// function filtrar () {
//     for (let element of arrayPersonas) {
//         let result = element.destino.toLowerCase();
//         if (result == "mallorca" | result == "canarias" | result == "galicia") {
//             console.log(element);
//         }; 
//     };
// };


// punto 5
let arrayDestino = [];

function filtrar () {
    for (let element of arrayPersonas) {
        let result = element.destino.toLowerCase();
        if (result == "mallorca" | result == "canarias" | result == "galicia") {
            let string = JSON.stringify(element);
            arrayDestino.push(string)
        }; 
    };
    alert(arrayDestino)
};