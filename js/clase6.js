//jsonp
// function mostrar(users) {
//     //console.log(users[0].name)
//     //console.log(users.length)
//     var main = document.querySelector("main")
//     for (var i = 0; i < users.length; i++) {
//         main.innerHTML = main.innerHTML + users[i].name + "<br>"
//     }
// }
//OPTIMISTIC UI
// var boton = document.querySelector("#boton")
// boton.addEventListener("click",(e)=>{
//     e.preventDefault()
//     activarAjax("https://jsonplaceholder.typicode.com/users")
// })
// function activarAjax(url){
//     let xhr = new XMLHttpRequest()
//     xhr.open("get",url)
//     xhr.addEventListener("load",()=>{
//         if(xhr.status == 200){
//             //console.log(xhr.responseText)
//             actualizar(xhr.responseText)
//         }
//     })
//     xhr.send()
// }
// function actualizar(json){
//     boton.classList.remove("btn-primary")
//     boton.classList.add("btn-danger")
//     //console.log(JSON.parse(json))
//     var content = JSON.parse(json)
//     console.log(content.length)
//     console.log(content[0].email)
//     var main = document.querySelector("main")
//     main.innerHTML = content[1].name
// }

// let form = document.querySelector("form")
// form.addEventListener("submit", e => {
//     e.preventDefault()
//     console.log(form[0].value)
//     console.log(form[1].value)
//     console.log(form[2].files[0].name)
// })

// let form = document.forms.namedItem("formulario")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let campos = new FormData()
//     campos.append("nombre del cliente", form.nombre.value)
//     campos.append("edad", form.edad.value)
//     campos.append("archivo", form.archivo.files[0].name)
//     for (x of campos) {
//         console.log(x[0] + ': ' + x[1])
//     }
// })

//OTROS EVENTOS AJAX
const xhrArrancar = document.querySelector(".xhr-arrancar")
const xhrError = document.querySelector(".xhr-error")
const xhrAbortar = document.querySelector(".xhr-abortar")
const log = document.querySelector("#log-evento")
xhrArrancar.addEventListener("click",()=>{
    armarXHR("labrador.jpg")
})
xhrError.addEventListener("click",()=>{
    armarXHR("https://cualquiercosaquenoexistahoy.com/nadadenada");
})
xhrAbortar.addEventListener("click",()=>{
    armarXHR("labrador.jpg").abort()
})
function armarXHR(dato){
    const xhr = new XMLHttpRequest()
    agregarEventos(xhr)
    xhr.open("get",dato)
    xhr.send()
    return xhr
}
function agregarEventos(xhr){
    xhr.addEventListener("loadstart",manejarEvento)
    xhr.addEventListener("progress",manejarEvento)
    xhr.addEventListener("load",manejarEvento)
    xhr.addEventListener("loadend",manejarEvento)
}
function manejarEvento(e){
    setTimeout(()=>{
        console.log(e)
        log.textContent = log.textContent + `${e.type}: ${e.loaded} transferidos\n`
    },4000)
}
