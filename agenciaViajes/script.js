
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