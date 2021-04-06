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
var exp = {
    nombre: /^[A-Z,a-z]{4,10}$/,
    correo: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
var form = document.getElementById("form")
var inputs = document.querySelectorAll("input")
var verificar = (e) => {
    //console.log(e.target.name)
    switch (e.target.name) {
        case "nombre":
            if (exp.nombre.test(e.target.value)) {
                console.log("estoy en el if")
                document.querySelector("#nombre").classList.add("input_correcto")
                document.querySelector("#nombre").classList.remove("input_incorrecto")
                document.querySelector("#p-nombre").classList.add("p-nombre")
                document.querySelector("#p-nombre").classList.remove("p-nombre-error")
                campos[nombre] = true
            } else {
                console.log("else")
                document.querySelector("#nombre").classList.add("input_incorrecto")
                document.querySelector("#nombre").classList.remove("input_correcto")
                document.querySelector("#p-nombre").classList.remove("p-nombre")
                document.querySelector("#p-nombre").classList.add("p-nombre-error")
                campos[nombre] = false
            }
            break;
            case "correo":
            if (exp.correo.test(e.target.value)) {
                console.log("estoy en el if")
                document.querySelector("#correo").classList.add("input_correcto")
                document.querySelector("#correo").classList.remove("input_incorrecto")
                document.querySelector("#p-correo").classList.add("p-correo")
                document.querySelector("#p-correo").classList.remove("p-correo-error")
                campos[correo] = true
            } else {
                console.log("else")
                document.querySelector("#correo").classList.add("input_incorrecto")
                document.querySelector("#correo").classList.remove("input_correcto")
                document.querySelector("#p-correo").classList.remove("p-correo")
                document.querySelector("#p-correo").classList.add("p-correo-error")
                campos[correo] = false
            }
            break;
    }

}
inputs.forEach((item) => {
    item.addEventListener("keyup", verificar)
    item.addEventListener("blur", verificar)
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (campos[nombre] && campos[correo]) {
        console.log("enviado")
        document.querySelector("#p-submit").classList.add("p-submit-enviado")
        //console.log(e.target.submit())
    } else {
        console.log("no enviado")
        document.querySelector("#p-submit").innerHTML = "No enviado"
        document.querySelector("#p-submit").classList.add("p-submit-error")
    }
})