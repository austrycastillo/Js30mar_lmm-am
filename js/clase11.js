//preparar para herencia de prototipo: auto como superclase
//y como subclases taxi, bus, moto
// function Auto(ruedas, motor, asientos, color, marca) {
//     this.ruedas = ruedas
//     this.motor = motor
//     this.asientos = asientos
//     this.color = color
//     this.marca = marca
// }
// Auto.prototype.mostrar = function () {
//     return `Ruedas: ${this.ruedas}, Motor: ${this.motor}, Asientos: ${this.asientos}, Color: ${this.color}, Marca: ${this.marca}`
// }
// Auto.prototype.puertas = 4
// Auto.prototype.getRuedas = function () {
//     return this.ruedas
// }
// function Taxi(ruedas, motor, asientos, color, marca, estado, licencia) {
//     Auto.call(this, ruedas, motor, asientos, color, marca)
//     this.estado = estado
//     this.licencia = licencia
// }
// //Taxi.prototype = Object.create(Auto.prototype)
// Taxi.prototype = new Auto()
// Taxi.prototype.getEstado = function () {
//     return this.estado
// }
// function Bus(ruedas, motor, asientos, color, marca, linea) {
//     Auto.call(this, ruedas, motor, asientos, color, marca)
//     this.linea = linea
// }
// Bus.prototype = new Auto()
// function Moto(ruedas, motor, asientos, color, marca, cilindrada) {
//     Auto.call(this, ruedas, motor, asientos, color, marca)
//     this.cilindrada = cilindrada
// }
// Moto.prototype = new Auto()
// var a1 = new Auto(4, 1.1, 4, "azul", "Ford")
// var t1 = new Taxi(4, 1.6, 4, "gris", "Audi", "ocupado", "abc123")
// var b1 = new Bus(8, 3.5, 40, "negro", "volvo", 145)
// var m1 = new Moto(2,300,1,"rojo", "Yamaha","300cc")
// var m2 = new Moto(2,300,1,"verde", "Honda","300cc")

//funciones closure, clausura
//var c = 2//scope global
// function agregar() {
//     var c = 1//scope local
//     function plus(){
//         c += 2
//     }
//     plus()
//     return c
// }

// var agregar = function () {
//     var c = 1
//     return function () {
//         return c += 2
//     }
// }()//autoinvocada
// console.log(agregar())
// console.log(agregar())
// console.log(agregar())

// function iniciar(){
//     var nombre = "Aruba"
//     function mostrarNombre(){
//         console.log(nombre)
//     }
//     mostrarNombre()
// }
// iniciar()

// function saludar(usuario){
//     var texto = "Bienvenido a la casa del terror " + usuario
//     var decir = ()=>{
//         console.log(texto)
//     }
//     return decir()
// }

// saludar("admin")

//PERSISTENCIA DE DATOS
//COOKIES
//STORAGE API: SESSIÓN, LOCAL
//CACHE
//INDEXAR BASE DE DATOS
//MÉTODOS HTTP -> GET, POST, PUT, DELETE (CRUD)
// var form = document.getElementById("form")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     var nombreCookie = "OtraCookie"
//     var valor = document.form.info.value
//     console.log(valor)
//     guardarCookie(nombreCookie, valor)
// })
// function guardarCookie(nombreCookie, valor){
//     //guardar cookie
//     document.cookie = nombreCookie + " = " + valor + ";expires=Thu,18 Jul 2021 12:00:00 UTC";
// }
// var leer = document.getElementById("leer")
// leer.addEventListener("click",()=>{
//     var contenido = document.cookie;
//     console.log(contenido.length)
//     var p = document.createElement("p")
//     p.innerHTML = contenido
//     var div = document.querySelector("div")
//     div.appendChild(p)
// })
//TAREA DE FIN DE SEMANA ;)

//STORAGE API, SESSION
// var boton = document.querySelector("button")
// boton.addEventListener("click", () => {
//     sessionStorage.informacionHistoria = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ipsum labore, vero laborum quas accusantium maiores animi, perspiciatis soluta numquam accusamus sit nobis adipisci magnam? Deserunt neque totam amet mollitia."
//     sessionStorage.informacionMatamaticas = "b*2/2"
//     var div = document.querySelector("div")
//     div.innerHTML = "Guardaste: <br><b>Historia: </b>" + sessionStorage.informacionHistoria + "<br><br><b>Matemáticas:</b> " + sessionStorage.informacionMatamaticas;
// })

//local storage
document.querySelector(".boton").addEventListener("click", () => {
    var pelicula = document.querySelector(".pelicula")
    console.log(pelicula.value)
    localStorage.setItem("Pelicula", pelicula.value)
    alert("guardado")
})
document.querySelector("a").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(localStorage.getItem("Pelicula"))
})