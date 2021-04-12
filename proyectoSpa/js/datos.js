let main = document.querySelector("main")
let enlaces = document.querySelectorAll("a")
enlaces.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        //console.log(e.target.href)
        var ruta = e.target.href
        mostrar(ruta)
    })
})
function mostrar(ruta){
    var xhr = new XMLHttpRequest()
    xhr.open("get",ruta)
    xhr.addEventListener("load",()=>{
        if(xhr.readyState == 4){
            //console.log(xhr.responseText)
            var contenido = xhr.responseText
            main.innerHTML = contenido
        }
    })
    xhr.send()
}