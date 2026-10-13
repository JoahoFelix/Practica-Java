//Crear un objeto que contenga información computador
//cadenas, enteros, decimales, lógicos, arreglos, nuevos objetos
const computadora = {
    marca: "ASUS",
    modelo: "TUF Gaming F16",
    color: "Negro",
    ram: 16,
    almacenamiento: 512,
    precio: 4500.50,
    encendida: true,
    accesorios: ["Mouse", "Teclado", "Cargador"],
    componentes: [
        {nombre: "Procesador", marca: "Intel Core i7"},
        {nombre: "Memoria RAM", capacidad: 16},
        {nombre: "Disco SSD", capacidad: 512}
    ]
};

console.log(computadora);