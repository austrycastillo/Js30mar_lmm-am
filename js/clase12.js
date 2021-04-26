/*
recibir el formulario
var datos = new FormData(formulario)
*/
// var form = document.getElementById("form")
// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     var datos = new FormData(form)
//     console.log(datos)
//     console.log(datos.get("usuario"))
// })
// fetch("post.php",{
//     method:"POST",
//     body:datos
// }).then(res => res.json())
//     .then(data =>{
//         console.log(data)
//     })

/*
<?php
$usuario = $_POST['usuario];
bd-> mysqli, PDO-> insert
*/
// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     console.log(res)
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// })
/*
PATRONES DE DISEÑO: CREACIONAL
constructor
*/
// class Home {
//     constructor() {
//         this.habitacion = 0;
//         this.banio = 0;
//         this.cocina = 0;
//         this.living = 0;
//         this.patio = 0;
//         this.cochera = 0;
//     }
//     setHabitacion(valor){
//         this.habitacion = valor
//     }
//     setBanio(valor){
//         this.banio = valor
//     }
//     setCocina(valor){
//         this.cocina = valor
//     }
//     setLiving(valor){
//         this.living = valor
//     }
//     setPatio(valor){
//         this.patio = valor
//     }
//     setCochera(valor){
//         this.cochera = valor
//     }
//     informar(){
//         return {
//             habitacion: this.habitacion,
//             banio: this.banio,
//             cocina: this.cocina,
//             living: this.living,
//             patio: this.patio,
//             cochera: this.cochera
//         }
//     }
// }

// const casita1 = new Home()
// casita1.setHabitacion(4)
// casita1.setBanio(2)
// casita1.setCocina(1)
// casita1.setLiving(2)
// casita1.setPatio(2)
// casita1.setCochera(1)
// console.log(casita1.informar())
// const casita2 = new Home()
// casita2.setLiving(1)
// casita2.setBanio(1)
// console.log(casita2.informar())

//CREACIONAL modulo
// const paciente = {
//     nombre: "no declarado",
//     apellido: "no declarado",
//     madre: "no declarado",
//     padre: "no declarado",
//     setNombre: (valor)=>{
//         paciente.nombre = valor
//     },
//     setApellido: (valor)=>{
//         paciente.apellido = valor
//     },
//     setMadre: (valor)=>{
//         paciente.madre = valor
//     },
//     setPadre: (valor)=>{
//         paciente.padre = valor
//     },
//     getNombre:()=>{
//         return paciente.nombre
//     },
//     getApellido:()=>{
//         return paciente.apellido
//     },
//     getMadre:()=>{
//         return paciente.madre
//     },
//     getPadre:()=>{
//         return paciente.padre
//     }
// }
// paciente.nombre = "Leonardo"
// paciente.apellido = "Perez"
// console.log(`Paciente de nombre: ${paciente.getNombre()}, apellido: ${paciente.getApellido()}, madre: ${paciente.getMadre()}`)

//CREACIONAL: prototipo
// function Persona(nombre,apellido){
//     this.nombre = nombre
//     this.apellido = apellido
// }
// Persona.prototype.getNombre = function(){
//     console.log(`El nombre de la persona es ${this.nombre}`)
// }
// Persona.prototype.getApellido = function(){
//     console.log(`El apellido de la persona es ${this.apellido}`)
// }

// function Medico(nombre,apellido,especialidad){
//     Persona.call(this,nombre,apellido)
//     this.especialidad = especialidad
// }
// Medico.prototype = new Persona()
// Medico.prototype.getMedico = function (){
//     this.getNombre()
//     this.getApellido()
//     console.log(`Es un médico con la especialdiad: ${this.especialidad}`)
// }

// let p1 = new Persona("Ana","Pacilio")
// let p2 = new Medico("Julian","Pacilio","Cardiología")
// p1.getNombre()
// p1.getApellido()
// p2.getMedico()

//CREACIONAL: singleton
// const alumnos = {
//     listaAlumnos: [],
//     buscarUno: function(id){
//         return this.listaAlumnos[id]
//     },
//     agregar:function(datos){
//        this.listaAlumnos.push(datos)
//     },
//     mostrar: function(){
//         return this.listaAlumnos;
//     }
// }
// const a1 = {
//     nombre: 'Daniel',
//     edad: 16
// }
// const a2 = {
//     nombre: 'Ezequiel',
//     edad: 23
// }
// const a3 = {
//     nombre: 'Alejandro',
//     edad: 80
// }

// alumnos.agregar(a1)
// alumnos.agregar(a2)
// alumnos.agregar(a3)
// const x = alumnos.mostrar()
// console.log(x)
// console.log(alumnos.buscarUno(2))

//ESTRUCTURAL: facade
class Pelicula{
    getAccion(){
        return [
            {
                nombre: 'Duro de matar',
                duración: '120min',
                actores: ['Bruce Willis','Ezequiel Stolarczuk']
            },
            {
                nombre: 'Misión imposible',
                duración: '160min',
                actores: ['Tom Cruise','Rodrigo Placeres']
            }
        ]
    }
    getTerror(){
        return [
            {
                nombre: 'El Exhorcista',
                duración: '250min',
                actores: ['Linda Blair','Amanda Flow']  
            }
        ]
    }
    getAmor(){

    }
}
const film = ()=>{
    const x =  new Pelicula()
    const accion = x.getAccion()
    const terror = x.getTerror()
    const resultado = [...accion,...terror]
    return resultado
}
console.log(film())