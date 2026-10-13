//funcion 1:
//crear una funcionn que reciba un arreglo de numeros y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares
function tarea(numeros = [1,3,6,8,2,9]) { 
  let pares = 0
  let impares = 0
  numeros.forEach(numero => {
   
    if (numero % 2 ==0) {
      return "Par"
       
    } else {
      impares++; 
    }
  });

  return {
    pares: pares,
    impares: impares
  };
} 
console.log("Los numero pares son:" ,pares, "y los impares son:",impares)

//funcion 2:
//escribir una funcion que retorne true|false dependendiendo si el valor de entrada 
//corresponde a un numero capicúa(se lee igual de izquierda a derecha o viceversa) ejm: 121, 444, 3223. solo permite analizar valores 
//de hasta 5 digitos (99999)
//Test , demostracion, console.log