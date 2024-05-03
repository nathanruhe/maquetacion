class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession ,photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
}


// PROFESIONALES
let professional1 = new Professional ("Tom Holland", 27, 65, 1.69, false, "Británico", 2, "actor", "https://hips.hearstapps.com/hmg-prod/images/tom-holland-arrives-at-the-sony-pictures-spider-man-no-way-news-photo-1645351294.jpg?crop=1.00xw:0.709xh;0,0&resize=640:*")

let professional2 = new Professional ("Jason Statham", 56, 74, 1.78, false, "Británico", 5, "actor", "https://hips.hearstapps.com/hmg-prod/images/actor-jason-statham-attends-the-21st-annual-critics-choice-news-photo-1568995137.jpg?crop=1.00xw:0.657xh;0,0.0334xh&resize=640:*")

let professional3 = new Professional ("Donald Sutherland", 88, 83, 1.92, false, "Canadiense", 3, "actor", "https://thumbs.dreamstime.com/b/donald-sutherland-cannes-france-may-actor-closing-gala-th-festival-de-172834918.jpg")


let arrayProf = [professional1,professional2, professional3]


// CODIGO PROFESIONALES
const botonProf = document.querySelector("#enlaceProfesionales")
botonProf.addEventListener("click", () => prof());

function prof () {
    const movie = document.querySelector("#sectionPeliculas");
    movie.style.cssText = "display: none"

    const prin = document.querySelector("#sectionPrincipal");
    prin.style.cssText = "display: none"

    const prof = document.querySelector("#sectionProfesionales");
    prof.style.cssText = "display: block"
}


arrayProf.forEach(profesional => {
    const divPadreProf = document.createElement("div");
    divPadreProf.style.cssText = "border-radius: 10px; background: rgb(2, 2, 126); padding: 10px; display: flex;"

    const divFotoProf = document.createElement("div");
    divFotoProf.style.cssText = "background: white; height: 300px; width: 300px;"

    const divTextoProf = document.createElement("div");
    divTextoProf.style.cssText = "background: white; padding: 20px; height: 300px; width: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center;"

    const listaProf = document.querySelector("#listaProfesionales");

    let datos1 = `<img src="${profesional.photo}" alt="foto"></img>`
    let datos2 = ""

    datos2 += `<p>${profesional.name}</p><br><p>Edad: ${profesional.age}</p><p>Peso: ${profesional.weight}</p><p>Altura: ${profesional.height}</p><p>Retirado?: ${profesional.isRetired}</p><p>Nacionalidad: ${profesional.nationality}</p><p>Num de oscars: ${profesional.oscarsNumber}</p><p>Profesion: ${profesional.profession}</p>`

    divFotoProf.innerHTML = datos1
    divTextoProf.innerHTML = datos2

    listaProf.appendChild(divPadreProf)
    divPadreProf.appendChild(divFotoProf)
    divPadreProf.appendChild(divTextoProf)
});



