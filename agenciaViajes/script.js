
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
const datos = document.createElement("div");
datos.style.cssText = "border: 2px solid black; background: white; margin: auto; padding: 20px;"

function filtrar () {
    const central = document.querySelector(".central");
    let datos2 = ""

    for (let element of arrayPersonas) {
        let result = element.destino.toLowerCase();
        if (result == "mallorca" | result == "canarias" | result == "galicia") {

            datos2 += `<p>Nombre: ${element.nombre}</p><p>Origen: ${element.origen}</p><p>Destino: ${element.destino}</p><p>Total personas: ${element.totalPersonas}</p><p>Fecha: ${element.fecha}</p><br>` 
        }; 
    };
    datos.innerHTML = datos2
    central.appendChild(datos);
};