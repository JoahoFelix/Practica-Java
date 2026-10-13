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

//Tipos de funciones: ANONIMA (funciones por expresion)
const mensaje = function (){
return "Ingenieria de Software"
}
console. log(mensaje) //Tipo de dato = function
console. log(mensaje()); //Ejecuta la función

//Para aplicar este tipo de funciones, se requiere ; antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar ;
//(Declaracion de la funcion)(ejecucion de la funcion);
(function (){
console. log("Hola que tal");
})();

(
  function(nombre = ''){
    console.log('Bienvenido:', nombre)
  }
)('Katherine')

//crea una funcion autoejecutable que calcule el promedio de 3 notas
//estas funciones suelen ejecutar tareas sin retornar datos
(
  function (nota1, nota2, nota3){
  console.log((nota1 + nota2 + nota3) / 3)
  }
)(14,12,20);
