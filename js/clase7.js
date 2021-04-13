//EJEMPLO 1
// var input = document.querySelector("input[type=file]")
// var vistaPrevia = document.querySelector("#vistaPrevia")
// input.addEventListener("change", (e) => {
//     console.log(e.target.files[0].name)
//     var url = URL.createObjectURL(e.target.files[0])
//     //DOMSTRING UTF-16
//     //vistaPrevia.src = url
//     vistaPrevia.setAttribute("src", url)
// })
//DRAG && DROP

//EJEMPLO 2
// let caja = document.getElementById('caja')
// caja.addEventListener('dragover', (e) => {
//     e.preventDefault()
// })
// caja.addEventListener('drop', (e) => {
//     e.preventDefault()
//     //console.log(e)
//     var archivo = new FileReader()
//     archivo.addEventListener('load', (e) => {
//         console.log(e.target.result)
//         caja.style.backgroundImage = "url('" + e.target.result + "')"
//     })
//     archivo.readAsDataURL(e.dataTransfer.files[0])
// })

//EJEMPLO 3
// function ejecutarOver(e) {
//     e.preventDefault()
// }
// function ejecutarStart(e) {
//     e.dataTransfer.setData("text", e.target.id)
// }
// function ejecutarDrop(e) {
//     e.preventDefault()
//     var data = e.dataTransfer.getData("text")
//     console.log(data)
//     console.log(e.target)
//     e.target.appendChild(document.getElementById(data))
// }

//PROMESAS ES UN OBJETO, EL CONSTRUCTOR NOS DEVUELVE DOS FUNCIONES COMO PARAMETRO
//RESOLVE: STATE FULLFILED, RESULT VALUE
//REJECT: STATE REJECT, RESULT ERROR
//MÉTODOS THEN, CATCH
//TRY(LANZAR) CATCH(CAPTURAR) FINALLY (OPCIONAL)
let promesa = new Promise((resolve, reject) => {
    console.log("Estamos haciendo algo...")
    var x = 1
    if (x < 10) {
        throw new Error("Ups el número es muy pequeño")
    }
    resolve()

})
promesa.then(() => {
    console.log("lo hiciste!!!")
}).catch((rta) => {
    console.log(rta)
})