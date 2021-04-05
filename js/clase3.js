//ejemplo 1
// function agregarBoton(e) {
//     console.log("tocaste")
//     var b = document.createElement("button")
//     b.innerText = "soy el nuevo"
//     document.body.appendChild(b)
//     document.getElementById("a").removeEventListener("click",agregarBoton,false)
// }
// var btn = document.getElementById("a")
// btn.addEventListener("click", agregarBoton, false)

//ejemplo2
// var a = document.getElementById("a")
// a.addEventListener("click", () => {
//     document.querySelector(".uno").style.display = "block"
//     a.addEventListener("click", () => {
//         document.querySelector(".dos").style.display = "block"
//         a.innerText = "reiniciar"
//         a.addEventListener("click", () => {
//             window.location.href = "clase3.html"
//         })
//     })
// })

//ejemplo 3
// let form = document.querySelector("form")
// let input = document.querySelector("#input1")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(e)
//     console.log(e.target[0].type)
//     console.log(e.target[0].value)
//     //ltrim - rtrim - trim limpiar espacios en blanco
//     if (e.target[0].value == "") {
//         console.log("dato incompleto")
//     }
//     let valor = input.value
//     valor = valor.trim()
//     let long = valor.length
//     console.log(long)
//     console.log(encodeURIComponent(valor))
//     if (long < 2) {
//         input.setCustomValidity("Este campo no puede ser tan pequeño")
//     }

//     for (let i = 0; i < long; i++) {
//         var letra = valor[i]
//         var codigo = letra.charCodeAt()
//         if (codigo >= 97 && codigo <= 122) {
//             console.log("bien")
//         }
//         if (letra == "a") {
//             console.log("Encontraste la letra a en " + i)
//         }
//     }
// })
// let x = "A"
// console.log(x.charCodeAt())

//ejemplo 4
//EXPRESIONES REGULARES RegExp
// let exp = /amor/
// exp = /[Aa]mor/ //amor con a minúscula y mayúscula
// exp = /[a-z,A-Z]/ //rango de letras 
// exp = /[0-9]/ //rango numerico
// exp = /^[a-z0-9]{3,6}$/ //letras y números entre 3 y 6 caracteres
// exp = /^.{4,10}$/ //cualquier caracter entre 4 y 10
// exp = /^[a-zA-Z\s]/ // letras y espacios en blanco, \d cualquier digito
// exp = /^\d{7,14}$/ //cualquier digito entre 7 y 14 caracteres, [0-9]
// exp = /\d{3}/
// console.log(exp.test("155"))

//ejemplo 5
var campos = {
    nombre: false,
    correo: false
}
var form = document.getElementById("form")
var inputs = document.querySelectorAll("input")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (campos[nombre] && campos[correo]) {
        console.log("enviado")
        document.querySelector("#p-submit").classList.add("p-submit-enviado")
    }else{
        console.log("no enviado")
        document.querySelector("#p-submit").innerHTML = "No enviado"
        document.querySelector("#p-submit").classList.add("p-submit-error")
    }
})