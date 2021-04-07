//SPA ejemplo 1
// let main = document.querySelector("main")
// let link1 = document.querySelector("#plantilla")
// let link1Url = link1.id + ".html"
// //console.log(link1Url)
// link1.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let xhr = new XMLHttpRequest()
//     xhr.open("get",link1Url)
//     xhr.addEventListener("load",()=>{
//         if(xhr.status==200){
//             let plantilla = xhr.response
//             //console.log(plantilla)
//             main.innerHTML = plantilla
//         }

//     })
//     xhr.send()
// })

//ejemplo 1 completo
// let main = document.querySelector("main")
// let links = document.querySelectorAll("a")
// links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault()
//         var archivo = e.target.id + ".html"
//         //console.log(archivo)
//         cargar(archivo)
//     })
// })
// function cargar(archivo) {
//     let xhr = new XMLHttpRequest()
//     xhr.open("get", archivo)
//     xhr.addEventListener("load", () => {
//         if (xhr.status == 200) {
//             let plantilla = xhr.response
//             console.log(plantilla)
//             main.innerHTML = plantilla
//             history.pushState(//agrega info al historial
//                 plantilla, "", archivo
//             )
//         }

//     })
//     xhr.send()
// }
// //popstate info al intentar avanzar o retroceder
// window.addEventListener("popstate", (e) => {
//     console.log(e.state)
//     main.innerHTML = e.state
// })

//ejemplo 2
var a = document.querySelectorAll("a")
a.forEach((link) => {
    //console.log(link.classList[0])
    var clase = link.classList[0]
    link.addEventListener("click", (e) => {
        e.preventDefault()
        history.pushState({
            tab: clase
        }, null)
        var p = document.querySelectorAll("p")
        p.forEach(parr => {
            //console.log(parr.id)
            var id = parr.id
            if (clase == id) {
                parr.classList.remove("oculto")
                parr.classList.add("activo")
            } else {
                parr.classList.remove("activo")
                parr.classList.add("oculto")
            }
        })
    })
})
window.addEventListener("popstate",(e)=>{
    //console.log(e.state.tab)
    var claseH = e.state.tab
    var pH = document.querySelectorAll("p")
        pH.forEach(parrH => {
            //console.log(parrH.id)
            var idH = parrH.id
            if (claseH == idH) {
                parrH.classList.remove("oculto")
                parrH.classList.add("activo")
            } else {
                parrH.classList.remove("activo")
                parrH.classList.add("oculto")
            }
        })
})