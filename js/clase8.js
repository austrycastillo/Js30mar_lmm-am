//EJEMPLO 1
// let promesa = new Promise((resolve, reject) => {
//     console.log("Estamos iniciando algo...")
//     var x = Math.floor(Math.random() * 10)
//     setTimeout(() => {
//         x > 5 ? resolve('perfectoooo') : reject('maloooo')
//     }, 1000)
//     console.log("Estamos terminando algo")
// })
// promesa.then((valor) => {
//     console.log(valor + " lo hiciste!!!")
// }).catch((rta) => {
//     console.log(rta + " muestro el catch")
// }).finally(() => {
//     console.log("finallllllllll")
// })

//sintaxis general en lenguajes
// try{
//     contenido
// }catch(err){
//     mostramos err
// }finally{

// }

//EJEMPLO 2 ---***** VERIFICAR URL EN CASO DE QUE NO EXISTA
// function activar() {
//     return new Promise((resolve, reject) => {
//         var xhr = new XMLHttpRequest()
//         xhr.open('get', 'https://jsonplaceholder.typicode.com/posts')
//         xhr.addEventListener("load", () => {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.response))
//             } else {
//                 reject('algo')
//             }
//         })
//         xhr.send()

//     })
// }
// activar().then((r) => {
//     console.log(r)
// }).catch((a) => {
//     console.log(a + "Algo salió mal")
// })

//EJEMPLO 3
// let promesa = new Promise((resolve,reject)=>{
//     let xhr = new XMLHttpRequest()
//     xhr.open("get","archivo.txt")
//     xhr.addEventListener("load",()=>{
//         if(xhr.status == 200){
//             resolve(xhr.response)
//         }
//     })
//     xhr.send()
// })
// promesa.then((valor)=>{
//     console.log(valor)
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest()
//         xhr.open("get","archivo2.txt")
//         xhr.addEventListener("load",()=>{
//             if(xhr.status == 200){
//                 resolve(xhr.response + valor)
//             }
//         })
//         xhr.send()
//     })
// }).then((valor)=>{
//     console.log("PROMESA 2 RESULTA "+ valor)
// }).catch(()=>{
//     console.log("Error!")
// })

//REST: ??, descansar(tranferencia de representación de estado)
//- protocolo http, una interfaz , una arquitectura
//para conectar varios sistemas, obtenemos datos
//RESTFULL: son programas basados en rest
//API: (interfaz de programación de aplicaciones)
//- conjunto de definiciones para desarrollar
//API REST: interfaz para transferir datos
//FETCH API -> libreria, recuperar recursos, si fuese ajax
//un parametro obligatorio(ruta del recurso)
//devolver una promesa
//las propiedades del response-> ok, status, headers, json, arrayBuffer
// var btn = document.getElementById("btn")
// btn.addEventListener('click', () => {
//     fetch('archivo.txt').then((response) => {
//         console.log('respuesta ' + response.ok)
//         if (response.ok) {
//             response.text().then((datos) => {
//                 console.log('muestro la respuesta: ', datos)
//             })
//         } else {
//             mostrarError('status: ' + response.status)
//         }
//     }).catch(mostrarError)
// })
// function mostrarError(x) {
//     console.log('Errorrrr', x)
// }

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response)
    return response.json()
}).then((usuarios)=>{
    console.log(usuarios)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarios[0].id}`).then((response)=>{
        console.log(response)
        return response.json()
    }).then((posts)=>{
        console.log(posts)
        console.log(posts[0].title)
    })
})