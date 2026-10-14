//funcion 3:
//crear una funcion que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos siempre que tengan el mismo numero /
//de elementos, de lo contrario, devolver array vacio[]

function sumarArreglos(arreglo1, arreglo2) {
  let resultado = []

  if (arreglo1.length == arreglo2.length) {
    arreglo1.forEach((numero, i) => {
      resultado.push(numero + arreglo2[i])
    })
  } else {
    return []
  }

  return resultado
}

//Test
console.log(sumarArreglos([5,4,1,8,9], [10,2,6,0]))

console.log("-------------------")

//funcion 4:
//crear una funcion que solicite un numero positivo y retorne todos los divisores 
//desde 1 hasta el numero que hayas indicado. El resultado se obtiene
//como arreglo

function divisores(numero) {
  let resultado = []

  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      resultado.push(i)
    }
  }

  return resultado
}

//Test

let numero1 = 11
let numero2 = 30
console.log("Los divisores de", numero1, "son:", divisores(numero1))
console.log("Los divisores de", numero2, "son:", divisores(numero2))
//ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40]

