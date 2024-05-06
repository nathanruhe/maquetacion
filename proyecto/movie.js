class Movie {
    constructor(title, releaseYear, nationality, genre, actors = [""], director, writer, language, platform, mainCharacterName, producer, distributor, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.photo = photo;
    }
}


// PRIMERA PELICULA
const blackPantherMovie = new Movie("Black Panther: Wakanda Forever", 2022, "USA", "Acción", ["Tom Holland"], "Steven Spielberg", "Pedro Almodóvar", "Inglés", "Cines", "T'Challa", "Marvel Studios", "Walt Disney Studios", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4E26547ADB216527A0A75F01774F40189FFFB18ACE28727F3567072FE1C6942/scale?width=1200&aspectRatio=1.78&format=webp");

// SEGUNDA PELICULA
const TheMechanicMovie = new Movie("Mechanic: Resurrection", 2016, "Francia", "Acción-Suspense", ["Jason Statham", "Donald Sutherland", "Ben Foster"], "Dennis Gansel", "Brian Pittman", "Inglés", "Cines", "Arthur Bishop", "Millennium Films", "Lionsgate", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uCOgzrtJh1aBrLECv5vY_MZe1PDHfo18vskJedkd8A&s" );


let arrayMovie = [blackPantherMovie, TheMechanicMovie]


// CODIGO PELICULAS
const botonMovie = document.querySelector("#enlacePeliculas")
botonMovie.addEventListener("click", () => movie());

function movie () {
    const prof = document.querySelector("#sectionProfesionales");
    prof.style.cssText = "display: none"

    const prin = document.querySelector("#sectionPrincipal");
    prin.style.cssText = "display: none"

    const movie = document.querySelector("#sectionPeliculas");
    movie.style.cssText = "display: block"

    mostrarPelis(arrayMovie);
}


const mostrarPelis = (arrayMovie) => {
    const listaMovie = document.querySelector("#listaPeliculas");
    listaMovie.innerHTML = '';
    
    arrayMovie.forEach(peliculas => {
        const divPadreMovie = document.createElement("div");
        divPadreMovie.style.cssText = "border-radius: 10px; background: rgb(2, 2, 126); padding: 10px; display: flex;"
    
        const divFotoMovie = document.createElement("div");
        divFotoMovie.style.cssText = "background: white; width: 400px;"
    
        const divTextoMovie = document.createElement("div");
        divTextoMovie.style.cssText = "background: white; padding: 20px; width: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
    
        let datos1 = `<img src="${peliculas.photo}" alt="foto"></img>`
        let datos2 = ""
    
        if (peliculas.actors.length == 1) {
            datos2 += `<p>Titulo: ${peliculas.title}</p><p>Año estreno: ${peliculas.releaseYear}</p><p>Nacionalidad: ${peliculas.nationality}</p><p>Género: ${peliculas.genre}</p><p>Actor: ${peliculas.actors}</p><p>Director: ${peliculas.director}</p><p>Escritor: ${peliculas.writer}</p><p>Lenguaje: ${peliculas.language}</p></p><p>Plataforma: ${peliculas.platform}</p></p><p>Protagonista: ${peliculas.mainCharacterName}</p></p><p>Productor: ${peliculas.producer}</p></p><p>Distribuidor: ${peliculas.distributor}</p>`
        } else {
            datos2 += `<p>Titulo: ${peliculas.title}</p><p>Año estreno: ${peliculas.releaseYear}</p><p>Nacionalidad: ${peliculas.nationality}</p><p>Género: ${peliculas.genre}</p><p>Actores: ${peliculas.actors.map(actor => `<br>${actor}`).join('')}</p><p>Director: ${peliculas.director}</p><p>Escritor: ${peliculas.writer}</p><p>Lenguaje: ${peliculas.language}</p></p><p>Plataforma: ${peliculas.platform}</p></p><p>Protagonista: ${peliculas.mainCharacterName}</p></p><p>Productor: ${peliculas.producer}</p></p><p>Distribuidor: ${peliculas.distributor}</p>`
        }
    
        divFotoMovie.innerHTML = datos1
        divTextoMovie.innerHTML = datos2
    
        listaMovie.appendChild(divPadreMovie)
        divPadreMovie.appendChild(divFotoMovie)
        divPadreMovie.appendChild(divTextoMovie)
    });
}



// CODIGO FORMULARIO
const botonForm = document.querySelector(".btn2")
botonForm.addEventListener("click", () => form());

function form () {
    const titulo = document.querySelector("#titulo").value;
    const anyo = document.querySelector("#anyo").value;
    const nacion = document.querySelector("#nacion").value;
    const genero = document.querySelector("#genero").value;
    const actor = document.querySelector("#actor").value.split(',');
    const director = document.querySelector("#director").value;
    const escritor = document.querySelector("#escritor").value;
    const lengua = document.querySelector("#lengua").value;
    const plataforma = document.querySelector("#plataforma").value;
    const prota = document.querySelector("#prota").value;
    const produc = document.querySelector("#produc").value;
    const distri = document.querySelector("#distri").value;
    const direc = document.querySelector("#direc").value;

    const nuevaPelicula = new Movie(titulo, anyo, nacion, genero, actor, director, escritor, lengua, plataforma, prota, produc, distri, direc);

    arrayMovie.push(nuevaPelicula);

    mostrarPelis(arrayMovie);

    console.log(arrayMovie);
};

