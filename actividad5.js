//crear una función autoejecutable, que imprima cuantas horas, minutos y seguntos
//faltan para terminar el día
(function() {
    let ahora = new Date()

    let horas = 23 - ahora.getHours()
    let minutos = 59 - ahora.getMinutes()
    let segundos = 59 - ahora.getSeconds()

    console.log("Faltan", horas, "horas,", minutos,
                "minutos y", segundos, "segundos para terminar el dia")
})();


//crear una funcion autoejecutable que solicite un numero (expresado en segundos ) y nos
//devuelva un saludo, despues del tiempo indicado 
//setTimeowt
(function(segundos) {
    setTimeout(function() {
        console.log("Hola, buenas noches")
    }, segundos * 1000)
})(5);