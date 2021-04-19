//EJEMPLO 1
// var boton = document.getElementById("encontrarme")
// boton.addEventListener("click",encontrarmeGeo)

// function encontrarmeGeo(){
//     let status = document.querySelector("#status")
//     if(!navigator.geolocation){
//         status.innerHTML = "La geolocalización no está disponible en tu navegador"
//     }else{
//         status.innerHTML = "Localizando..."
//         setTimeout(()=>{
//             navigator.geolocation.getCurrentPosition(success,error)
//         },2000)
//     }
// }

// function success(position){
//     console.log(position)
//     let latitud = position.coords.latitude
//     let longitud = position.coords.longitude
//     let a = document.querySelector("a")
//     a.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`
//     a.innerText = "Ver mapa"
//     a.target = "_blank"
//     let map = document.querySelector("#map")
//     map.innerHTML = `Latitud: ${latitud}°, Longitud: ${longitud}°`
// }
// function error(){
//     status.innerHTML = "Error, no podemos obtener tu ubicación"
// }

//OOP-> programación orientada a objetos
//clases: atributos y métodos(funciones/procedimientos) 
//clases -> oop ecmascript 6, prototipos -> funcional ecmascript 5
// let persona = {
//     nombre: "Fulano",
//     apellido: "De Tal",
//     edad: 300,
//     datos: function () {
//         return `<p>Hola ${this.nombre}</p>`
//     }
// }

// class Auto {
//     //atributos
//     marca
//     rueda
//     //constructor
//     constructor(m, r) {
//         this.marca = m
//         this.rueda = r
//     }
//     //métodos
//     acelerar() {
//         return `${this.marca} tiene una aceleración por ${this.rueda} ruedas`
//     }
// }

// let x = new Auto("ford", 4)//instanciando la clase, creando un objeto, esto es una instancia de clase
// let y = new Auto("audi", 3)

//EJEMPLO 2
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let edad = document.getElementById("edad")
let form = document.getElementById("form")

class Persona {
    // Inicializando valores
    constructor(n, a, ed) {
        this.nombre = n
        this.apellido = a
        this.edad = ed
    }
    //Metodos
    saludar() {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
    static cantar(){
        console.log("Tararara lala...")
    }
}
class Operar{
    agregar(persona){
        let div = document.querySelector("div")
        let div2 = document.createElement("div")
        div2.innerHTML = `<b>Nombre: ${persona.nombre}<br>Apellido: ${persona.apellido}<br>Edad: ${persona.edad}</b>`
        div.appendChild(div2)
    }
    eliminar(){}
    editar(){}
    consultar(){}
}
//Instanciar
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(nombre.value)
    nombre = nombre.value
    apellido = apellido.value
    edad = edad.value
    let obP1 = new Persona(nombre, apellido, edad)
    let obO1 = new Operar()
    obO1.agregar(obP1)

    //ob.saludar()
})
//let austry = new Persona("Austry","Castillo",100)
Persona.cantar()