//HERENCIA: extends
//pilares de la oop: abstracción, encapsulamiento, polimorfismo,
//herencia
class Padre {
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }
    informar() {
        console.log(`Los datos son: nombre ${this._nombre} y edad ${this._edad}`)
    }
}
class Hijo extends Padre {
    constructor(nombre, edad, libro) {
        super(nombre, edad)
        this._libro = libro
    }
    informar() {
        super.informar()
        console.log("Soy el hijoooooooo")
    }
}
class Hijo2 extends Padre {

}
class Nieto extends Hijo {
    constructor(nombre, edad, libro, juego) {
        super(nombre, edad, libro)
        this._juego = juego
    }
}
// let padre = new Padre("Juan",50)
// let hijo = new Hijo("Samuel",15,"Harry Potter")
// let nieto = new Nieto("Fabi",2,"Piratas del Caribe","minecraft")
//MODIFICADORES DE ACCESO
// class Cliente{
//     constructor(nombre){
//         this._nombre = nombre
//     }
//     mostrar(){
//         return this._nombre
//     }
// }
// var cliente = new Cliente("Anita")

// class Cliente{
//     #nombre
//     constructor(nombre){
//         this.#nombre = nombre
//     }
//     //setter: inicializar propiedades
//     set nombre(nombre){
//         this.#nombre=nombre
//     }
//     //getters: retornan propiedades
//     //getNombre
//     get nombre(){
//         return this.#nombre
//     }
// }
// var cliente = new Cliente("Anita")

//JAVASCRIPT -> OBJETOS
//literal 
let obj1 = {
    nombre: "Ana",
    apellido: "Perez"
}
//a partir de una clase
// var cliente = new Cliente("Anita")
//prototipado
const person = new Object()
person.nombre = "Amelia"
person.apellido = "Briseño"
//otra +
let obj2 = Object.create(null)
obj2.nombre = "Diego"
obj2.apellido = "Castro"
//función constructora
// function Alumno(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }
// let J = new Alumno("Juan","Pacilio")
// J.__proto__.amor="rojo"
// let A = new Alumno("Ana","Perez")
// let M = new Alumno("Max","Martin")

// function Paciente(nombre, id, tratamiento) {
//     this.nombre = nombre
//     this.id = id
//     this.tratamiento = tratamiento
//     this.datos = function(){
//         return `Nombre: ${this.nombre} - Id: ${this.id} - Tratamiento: ${this.tratamiento}`
//     }
// }
// var Ada = new Paciente("Ada",123, "corazón")
// Ada.nacionalidad = "Inglesa"
// Paciente.prototype.honorario = 200
// var Pedro = new Paciente("Pedro",456,"Cabeza")
// Paciente.prototype.mostrar = function(){
//     return this.honorario
// }

//EJEMPLO DE HERENCIA CON PROTOTIPADO
function Animal(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}
Animal.prototype.getNombre = function () {
    return this.nombre
}
Animal.prototype.getEdad = function () {
    return this.edad
}
function Caballo(nombre, edad, paso) {
    Animal.call(this, nombre, edad)
    this.paso = paso
}
Caballo.prototype = Object.create(Animal.prototype)
Caballo.prototype.getPaso = function () {
    return this.paso
}
function Poni(nombre, edad, paso, medida) {
    Caballo.call(this, nombre, edad, paso)
    this.medida = medida
}
Poni.prototype = Object.create(Caballo.prototype)
Poni.prototype.getMedida = function(){
    return this.medida
} 
var A1 = new Animal("estrella", 5)
var C1 = new Caballo("tornado", 3, "trote")
var P1 = new Poni("love",2, "pasito","20cm")