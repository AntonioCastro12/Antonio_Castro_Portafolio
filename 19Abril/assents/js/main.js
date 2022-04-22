const boton = document.querySelector("button")

boton.addEventListener( "click", (event)=>{
    let carrito = JSON.parse(localStorage.getItem("carrito"))

    console.log( carrito, typeof carrito)
})


const botonEliminar = documen.querySelectorAll(".btn-delete")[0]

botonEliminar.addEventListener("click", (event)=>{
    localStorage.removeItem("objeto")
})


const botonEliminarTodo = documen.querySelectorAll(".btn-delete")[1]

botonEliminar.addEventListener("click", (event)=>{
    localStorage.event
})