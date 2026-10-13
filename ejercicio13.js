//Formas de crear una funcion
//F1: Por declaración
function hacerAlgo(){
  return "resultado"
}

//F2: Por expresión
const saludo = function saludar(){
  return "Hola que tal"
}
console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}
console.log(suma(17,20))