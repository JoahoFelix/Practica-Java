let edades = ["18","21", "25", "30", "35", "40", "45", "50", "55", "60"
]



//Mayor 
//Menor
//Promedio
let mayor = 0, menor = edades[0], promedio = 0

edades.forEach(edad => {
  if(edad > mayor) mayor = edad
  if(edad < menor) menor = edad
  promedio += edad
  
});
promedio = (promedio/ edades.length).toFixed(2)
console.log("Total de edades:", edades.length)
console.log("La mayor edad:", mayor)
console.log("La menor edad:", menor)
console.log("El promedio:", promedio)


