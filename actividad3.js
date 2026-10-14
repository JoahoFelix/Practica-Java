//funcion 1:
//crear una funcionn que reciba un arreglo de numeros y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares
// funcion 1:
// crear una funcion que reciba un arreglo de numeros y retorne como resultado
// un objeto indicandonos cuantos valores son pares e impares

function tarea(numeros = [1,3,6,8,2,9]) {
  let pares = 0;
  let impares = 0;

  numeros.forEach(numero => {

    if (numero % 2 == 0) {
      pares++;
    } else {
      impares++;
    }
  });

  return {
    pares: pares,
    impares: impares
  };
}

const resultado = tarea();

//console.log("Los numeros pares son:", resultado.pares, "y los impares son:", resultado.impares);

//funcion 2:
//escribir una funcion que retorne true|false dependendiendo si el valor de entrada 
//corresponde a un numero capicúa(se lee igual de izquierda a derecha o viceversa) ejm: 121, 444, 3223. solo permite analizar valores 
//de hasta 5 digitos (99999)
//Test , demostracion, console.log
function capicua(numeros) {
  let original = "" + numeros
  let invertido = ""

  if (numeros > 99999) {
    return false
  }

  for (let i = original.length - 1; i >= 0; i--) {
    invertido += original[i]
  }

  if (original == invertido) {
    return true
  } else {
    return false
  }
}

//Test
console.log(capicua(222))
