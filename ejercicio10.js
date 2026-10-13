//Objeto = JSON (JavaScript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Felix Bendezú",
  nombres: "Alexis Joaho",
  edad: 19,
telefonos: ["956111222", "956333000", "956777000"],
formacion: [
{ nivel: "Primaria", nombre: "Sebatian Barranca", anio: 20015 },
{ nivel: "Secundaria", nombre: "John F. Kennedy", anio: 20019 },
{ nivel: "Superior", nombre: "SENATI", anio: 2024 }
],
habilidades: [
{ skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
{ skill: "Lenguajes programacion", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
{ skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"] }


  ]
}

//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

//¿Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefonos.length)

//Mostrar cada uno de motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
console.log(element)  
});

//