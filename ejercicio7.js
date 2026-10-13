const paises = [
  ["Brasil", "Argentina", "Perú"],
  ["España", "Francia", "Portugal"],
  ["China", "Japon", "Corea Del Sur"],
  ["Ghana", "Sudrafrica", "Egipto"]
]

//Mostrar los paises de Asia (Unicamente) utilizando foreach
paises[2].forEach(pais => {
  //console.log(pais)
  
});

//Agregar dos paises en la lista de America
paises[0].push("Brasil")
paises[0].push("Ecuador")

console.log("-------------")
//Mostrar los paises de America
paises[0].forEach(pais =>{
  console.log(pais)
})