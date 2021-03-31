// var p = document.getElementById("p1")
// let a = document.createElement("a")
// a.innerText = "Visitar al sitio web de ..."
// //a = document.createTextNode("Enlace")
// p.appendChild(a);
// a.href="https://www.educacionit.com/"
// a.target="blank"

//crear dentro de una etiqueta existente, varios item con contenido
/*
<ol>
    <li>item</li>
</ol>
*/
// const ul = document.querySelector("ul")
// var items = ["uno", "dos", "tres", "cuatro"]
// for (var i = 0; i < items.length; i++) {
//     let li = document.createElement("li");
//     li.innerText = items[i];
//     ul.appendChild(li)
// }
//crear una tabla con contenido. 4 columnas
// let c = document.createElement("ul")
// let num = ["uno", "dos", "tres", "cuatro"]
// num.forEach(element => {
//     let lx = document.createElement("li")
//     lx.innerText = element
//     c.appendChild(lx)
//     //console.log(element)
// });
// document.body.appendChild(c)

// var tab = document.querySelector("#table1");
// let tr = document.createElement("tr")
// let num = ["uno", "dos", "tres", "cuatro"]
// num.forEach(element => {
//     let td = document.createElement("td")
//     td.innerText = element
//     tr.appendChild(td)
// });
// tab.appendChild(tr)

// var alumnos = [
//     {'nombre':'Rodrigo', 'edad':'25'},
//     {'nombre':'Felipe', 'edad':'34'},
//     {'nombre':'Luciano', 'edad':'36'}
// ]
// //crear una tabla con contenido. que tenga 4 columnas
// var tab = querySelector("#table1");
// for(var x = 0; x < items.length; x++){
//     let tr = document.createElement("<tr><th>NOMBRE</th><th>Edad</th>")
//     info+="<tr><td>"+alumnos[i].nombre+"</td><td>"+alumnos[i].edad+"</td><tr>"
//     tr.innerText = alumnos[i];

// }
//dos parametros(la acción,tiempo)
// setInterval(function () {
//     //alert("Hello")
// }, 3000)
//eventos-> handler(acción que responde a los eventos)
//       -> listener(oyente, pendiente de qué pase un evento)

function activar() {
    var barra = document.getElementById("caja2")
    var width = 0;
    setInterval(rellenar, 100)
    function rellenar() {
        if (width != 100) {
            width++;
            barra.style.width = width + "%"
        }
    }
}

// function mostrarMas() {
//     var div = document.getElementById("mas")
//     var p = document.createElement("p")
//     p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet!"
//     div.appendChild(p)
// }
// //btn.onclick = mostrarMas
// btn.onclick = ()=>{
//     var div = document.getElementById("mas")
//     var p = document.createElement("p")
//     p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet!"
//     div.appendChild(p)
// }
// var btn = document.querySelector("#mostrar")
// btn.addEventListener("click", ()=> {
//     var div = document.getElementById("mas")
//     var p = document.createElement("p")
//     p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium debitis aspernatur quas eaque aliquid earum sint ipsum impedit eveniet, natus officia eos? Necessitatibus voluptatem facilis dignissimos quam. Illo, eveniet!"
//     div.appendChild(p)
// })
/*
Propagación
bubbling: false -> tocar primero al tag más específico
capturing:true  -> tocar primero al tag menos específico
*/
// var padre = document.getElementById("padre")
// var hijo = document.getElementById("hijo")
// var nieto = document.getElementById("nieto")
// nieto.addEventListener("click", function (e) {
//     //console.log(e)
//     e.stopPropagation()
//     console.log("soy el nieto")
// }, false)
// padre.addEventListener("click", function () {
//     console.log("soy el padre")
// }, false)

// window.addEventListener("resize", function () {
//     console.log(window.outerWidth)
//     if (window.outerWidth > 400) {
//         document.body.style.backgroundColor = "red"
//     } else {
//         document.body.style.backgroundColor = "green"

//     }
// })

var es = document.getElementById("es")
es.addEventListener("click", () => {
    var din = document.createElement("button")
    din.innerText = "dinámico"
    din.id = "din"
    document.body.appendChild(din)
})
document.addEventListener("click", (e) => {
    console.log(e.target.id)
    if (e.target.id == "din") {
        console.log("Soy el botón dinámico")
    }
})


