//Construir un objeto con los datos una pelicula
const pelicula = {
  titulo: "Spider-Man: Brand New Day",
  anio: 2026,
  idiomas: ["Ingles","Español"],
  duracionMin:145,
  generos: [	"Aventuras", "fantasía", "acción", "ciencia ficción", "cine de superhéroes", "comedia"],
  presupuesto: 225000000,
  recaudacion: 2507000000,
  elenco:[
    {nombre: "Tom Holland",personaje: "Peter Parker",rol: "Heroe"},
    {nombre: "Zendaya",personaje: "Jean Grey",rol: "Interés romántico de Peter Parker "},
    {nombre: "Jon Bernthal ",personaje: "Frank Castle",rol: " The Punisher"},
    {nombre: "Jacob Batalon",personaje: "Ned Leeds",rol: "Mejor Amigo de Peter Parker"},
    {nombre: "Mark Ruffalo",personaje: "Bruce Banner",rol: "Hulk"}



  ], 
  sinopsis: "Peter Parker vive de forma anomima, luego de que el Doctor Strange hiciera unu echizo que borro su identidad de todo el mundo y se olviden quien es Spider-Man",
  direccion: ["Destin Daniel Cretton"],
  escritores: ["Chris McKenna", "Erik Sommers"]
}

console.log(pelicula);
