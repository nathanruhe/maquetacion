const carta1 = $("#carta1");
const carta2 = $("#carta2");
const carta3 = $("#carta3");
const carta4 = $("#carta4");
const carta5 = $("#carta5");
const carta6 = $("#carta6");
const carta7 = $("#carta7");
const carta8 = $("#carta8");

let array = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];

let prendas = "";
let final = 0;

jQuery(() => {
    for (let element of array) {
        let boton = $(element).children("button");

        boton.on("click", () => {
            let prenda = element.children().eq(0).text();
            let precio = element.children().eq(2).text();
            let precioNum = parseInt(precio);
      
            prendas += `<p>PRENDA: ${prenda} ${precio}</p>`;

            $("#modal").html(prendas);
            final += precioNum;
            $("#total").html(`TOTAL COMPRA: ${final}€`);
        });
    };
});












