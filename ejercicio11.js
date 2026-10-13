const persona = {
apellidos: "Francia Minaya",
nombres: "Jhon Edward",
hablar: function() { return "Hola que tal" },
Locacion: {
departamento: "Ica",
provincia: "Chincha",
distrito: "Grocio Prado",
direccion: "Calle San Martin 123",
mostrar: function() {
return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`
    }
  }
}
console. log(persona.hablar())
console. log(persona. Locacion["departamento"])
console. log(persona. Locacion.mostrar())