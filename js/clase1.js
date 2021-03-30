// console.log("Holaaaa")
// /*Tipo de datos */
// var nombre = "Petra"//String
// var edad = 20//number
// var resp = true //boolean
// //var x;//undefined
// var arreglo = [20,21,"Juan"]
// console.log(arreglo[2])
// var ob = {
//     nombre: "Luis",
//     apellido: "Contreras",
//     edad: 40
// }
//variables y constantes
//var: variable: redeclarable, redefinible, scope global
//let: variable: no redeclarable, redefinible, scope local
//const: constante: no redeclarable, no redefinible, scope local
// var x = 2
// console.log(x)
//         if(true){
//             var x = 14
//             console.log(x)
//         }
// console.log(x)
// var x = 200
// console.log(x)

// let x = 2
// console.log(x)
//                 if(true){
//                     let x = 40
//                     console.log(x) 
//                 }

// console.log(x)

// const x = 2
// console.log(x)
//                 if (true) {

//                     console.log(x)
//                 }
// console.log(x)

//funciones
// function mostrar() {
//     console.log("estoy dentro de la función")
// }
// function mostrar2() {
//     var mensaje = "retornando"
//     return mensaje
// }
// function mostrar3(dato) {
//     console.log("El dato: " + dato)
// }
// function mostrar4(nombre = "Fulano") {
//     console.log("Tu nombre es: " + nombre)
// }
// function sumar(a, b, c) {
//     var suma = a + b + c
//     return suma;
// }
// //función anónima
// var fun = function () {
//     console.log("soy anónima!")
// }
// //lambda o flecha
// var fun2 = () => {
//     console.log("soy flecha")
// }
// var fun3 = (edad) => {
//     console.log("mi edad es " + edad)
// }
// var fun4 = edad => "soy flecha edad " + edad
// //mostrar4("Daniel")
// //console.log(sumar(2, 4, 8))
// console.log(fun4(16))

//foreach
// var datos = ["uno", "dos", "tres"]
// datos.forEach(valor => {
//     console.log(valor)
// })
// //for of
// for (valor of datos) {
//     console.log(valor)
// }

// var cliente = {
//     nombre: "Ana",
//     apellido: "Perez",
//     correo: "ana@correo.com"
// }
// console.log(cliente.nombre)
// for (clave in cliente) {
//     console.log(clave + ": " + cliente[clave])
// }

let p = document.querySelector("p")
// p = document.getElementById("parrafo")
// p = document.querySelector("#parrafo")
// p = document.querySelector(".p1")
//p= document.getElementsByClassName("p1")[0]
// console.log(p.innerHTML)
// p.innerText = "Hola otra vez"
// p.innerHTML = "hola  <b>Hola Js</b>"
// p.style.color = "red"
// p.style.backgroundColor="lightpink"
// p.style.border = "2px solid blue"
// p.style.padding = "30px"
// var div = document.querySelector("div")
// div.classList.add("dos")
//paso uno crear elemento
let div = document.createElement("div")
//paso dos opcional agregar contenido
div.innerHTML= "<u>Hola contenido nuevo</u>"
//paso 3 confirmar el lugar donde va
document.body.appendChild(div)
