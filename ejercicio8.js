const alimentos = [
  ["Lechuga", "Brocoli","Zapallo", "Zanahoria", ], //vegetales
  ["Mandarina", "Pera", "Sandia"], //frutas
  ["Pescado", "Cerdo"], //carnes
  ["Arroz"], //cereal
]

//¿Cuántos elementos tiene la matriz?
console.log("Total elementos matriz:", alimentos.length)

//¿Cuál es el array de la matriz que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
if (categoriaAlimentos.length > mayor ){
  mayor = categoriaAlimentos.length
}  
});
//console.log("Array más grande contiene:", mayor)
//¿Cuál es el array de la matriz que tiene menos datos?
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
if (categoriaAlimentos.length < menor ){
  menor = categoriaAlimentos.length
}  
});
console.log("Array más pequeño contiene:", menor)

//¿Cuántos elementos en total tiene la matriz? Considerando todos los arrelgos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
});
console.log("En total tenemos:", sumatoria, "alimentos")