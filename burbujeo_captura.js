// El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

const padre = document.querySelector('.border-primary')
const hijo = document.querySelector('.border-secundary')
const nieto = document.querySelector('.border-danger')

// método addEventListener para escuchar el evento click, que desencadena una función flecha
padre = document.addEventListener(("click") => console.log('Me diste click'))
hijo = document.addEventListener(("click") => { 
    console.log("Me diste click")
})
nieto = document.addEventListener(("click") => { 
    console.log("Me diste click")
})