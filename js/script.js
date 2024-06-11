window.addEventListener("load", (e) => {
    document.getElementById("seleccionPersonajes").style.display = "none"
    document.getElementById("gameplay").style.display = "none"

})

function cargarJuego() {
    cargarJuego.stopPropagation
    cargarJuego.preventDefault

    document.getElementById("bienvenida").style.display = "none"
    document.getElementById("gameplay").style.display = "none"
    document.getElementById("seleccionPersonajes").style.display = "block"


}

function personajeSeleccionado() {
    let yasuo = document.getElementById("yasuo")
    let lissandra = document.getElementById("lissandra")
    let ahri = document.getElementById("ahri")
    let jinx = document.getElementById("jinx")
    let riven = document.getElementById("riven")
    let vi = document.getElementById("vi")
    let singed = document.getElementById("singed")
    let tf = document.getElementById("tf")

    if (yasuo.checked) {
        personajeElegido = 1
    }
    else if (lissandra.checked) {
        personajeElegido = 2
    }
    else if (ahri.checked) {
        personajeElegido = 3
    }
    else if (jinx.checked) {
        personajeElegido = 4
    }
    else if (riven.checked) {
        personajeElegido = 5
    }
    else if (vi.checked) {
        personajeElegido = 6
    }
    else if (singed.checked) {
        personajeElegido = 7
    }
    else if (tf.checked) {
        personajeElegido = 8
    }else{
        alert("Al no seleccionar ninguna opcion se eligira un campeon aleatorio :3")
        personajeElegido = (Math.floor(Math.random() * 8) + 1)
    }

    personajeEnemigo = (Math.floor(Math.random() * 8) + 1)
    gameplay()
}

function gameplay() {
    document.getElementById("bienvenida").style.display = "none"
    document.getElementById("seleccionPersonajes").style.display = "none"
    document.getElementById("gameplay").style.display = "block"


    //Imagend el personaje elegido
    // if (personajeElegido === 1){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/yasuo-1.png">`
    // }
    // else if(personajeElegido ===2){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/lissandra-1.png">`
    // }
    // else if(personajeElegido ===3){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/ahri-1.png">`
    // }
    // else if(personajeElegido ===4){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/jinx-1.png">`
    // }
    // else if(personajeElegido ===5){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/riven-1.png">`
    // }
    // else if(personajeElegido ===6){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/vi-1.png">`
    // }
    // else if(personajeElegido ===7){
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/singed-1.png">`
    // }else{
    //     document.getElementById("campeonAliado").innerHTML = `<img src="./img/tf-1.png">`
    // }

    document.getElementById("campeonAliado").innerHTML = `<img id="oscurecerAliado" src="./img/${averiguarPersonaje(personajeElegido)}-1.png">`
    document.getElementById("nombreCampeonAliado").textContent = `${averiguarPersonaje(personajeElegido).toUpperCase()}`


    //Imagend el personaje Enemigo
    // if (personajeEnemigo === 1){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/yasuo-1.png">`
    // }
    // else if(personajeEnemigo ===2){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/lissandra-1.png">`
    // }
    // else if(personajeEnemigo ===3){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/ahri-1.png">`
    // }
    // else if(personajeEnemigo ===4){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/jinx-1.png">`
    // }
    // else if(personajeEnemigo ===5){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/riven-1.png">`
    // }
    // else if(personajeEnemigo ===6){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/vi-1.png">`
    // }
    // else if(personajeEnemigo ===7){
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/singed-1.png">`
    // }else{
    //     document.getElementById("campeonEnemigo").innerHTML = `<img src="./img/tf-1.png">`
    // }

    document.getElementById("campeonEnemigo").innerHTML = `<img id="oscurecerEnemigo" src="./img/${averiguarPersonaje(personajeEnemigo)}-1.png">`
    document.getElementById("nombreCampeonEnemigo").textContent = `${averiguarPersonaje(personajeEnemigo).toUpperCase()}`

    calcularVidas()
}

function calcularVidas() {
    let ponerVidasJugador = ""
    for (let i = 0; i < vidasJugador; i++) {
        ponerVidasJugador += `<img class="corazon" src="./img/corazon.png">`
    }
    document.getElementById("vidasAliado").innerHTML = ponerVidasJugador

    let ponerVidasEnemigo = ""
    for (let i = 0; i < vidasEnemigo; i++) {
        ponerVidasEnemigo += `<img class="corazon" src="./img/corazon.png">`
    }
    document.getElementById("vidasEnemigo").innerHTML = ponerVidasEnemigo



    if(vidasEnemigo === 0){
        document.getElementById("ataques").style.display = "none"
        document.getElementById("resultado").innerHTML = `<h2>Ganaste la partida!!</h2>`
        document.getElementById("oscurecerEnemigo").style.filter = "brightness(50%)"
        document.getElementById("reiniciar").style.display ="block"
    }
    else if(vidasJugador ===0){
        document.getElementById("ataques").style.display = "none"
        document.getElementById("resultado").innerHTML = `<h2>Perdiste la partida</h2>`
        document.getElementById("oscurecerAliado").style.filter = "brightness(50%)"
        document.getElementById("reiniciar").style.display ="block"

    }

}

function averiguarPersonaje(personaje) {
    switch (personaje) {
        case 1:
            return "yasuo"
        case 2:
            return "lissandra"
        case 3:
            return "ahri"
        case 4:
            return "jinx"
        case 5:
            return "riven"
        case 6:
            return "vi"
        case 7:
            return "singed"
        case 8:
            return "tf"
    }

}

function ataqueFuego() {
    ataqueAliado = 1
    document.getElementById("ataqueAliado").textContent = `${averiguarPersonaje(personajeElegido)} ataca con Fuego`
    ataqueEnemigo = ataqueAleatorio()

    combate()
}
function ataqueAgua() {
    ataqueAliado = 2
    document.getElementById("ataqueAliado").textContent = `${averiguarPersonaje(personajeElegido)} ataca con Agua`
    ataqueEnemigo = ataqueAleatorio()

    combate()
}
function ataqueTierra() {
    ataqueAliado = 3
    document.getElementById("ataqueAliado").textContent = `${averiguarPersonaje(personajeElegido)} ataca con Tierra`
    ataqueEnemigo = ataqueAleatorio()

    combate()
}

function ataqueAleatorio() {
    let numeroAleatorio = (Math.floor(Math.random() * 3) + 1)
    if (numeroAleatorio === 1) {
        document.getElementById("ataqueEnemigo").textContent = `${averiguarPersonaje(personajeEnemigo)} ataca con Fuego`
    } else if (numeroAleatorio === 2) {
        document.getElementById("ataqueEnemigo").textContent = `${averiguarPersonaje(personajeEnemigo)} ataca con Agua`
    } else {
        document.getElementById("ataqueEnemigo").textContent = `${averiguarPersonaje(personajeEnemigo)} ataca con Tierra`
    }
    return numeroAleatorio
}

function combate() {
    console.log(ataqueAliado)
    console.log(ataqueEnemigo)

    if (ataqueAliado === ataqueEnemigo) {
        document.getElementById("resultado").innerHTML = `<p>Empate</p>`
    }
    else if (ataqueAliado === 1 && ataqueEnemigo === 3) {
        document.getElementById("resultado").innerHTML = `<p>${averiguarPersonaje(personajeEnemigo)} pierde una vida</p>`
        vidasEnemigo--
    }
    else if (ataqueAliado === 2 && ataqueEnemigo === 1) {
        document.getElementById("resultado").innerHTML = `<p>${averiguarPersonaje(personajeEnemigo)} pierde una vida</p>`
        vidasEnemigo--
    }
    else if (ataqueAliado === 3 && ataqueEnemigo == 2) {
        document.getElementById("resultado").innerHTML = `<p>${averiguarPersonaje(personajeEnemigo)} pierde una vida</p>`
        vidasEnemigo--
    } else {
        document.getElementById("resultado").innerHTML = `<p>${averiguarPersonaje(personajeElegido)} pierde una vida</p>`
        vidasJugador--
    }
    calcularVidas()
}

//Variables globales
let personajeElegido
let personajeEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let ataqueAliado
let ataqueEnemigo

//Fin variables globales


let iniciarJuego = document.getElementById("iniciarJuego")
iniciarJuego.addEventListener("click", cargarJuego)

let seleccionarPersonaje = document.getElementById("btnPersonaje")
seleccionarPersonaje.addEventListener("click", personajeSeleccionado)



let btnFuego = document.getElementById("btnFuego")
btnFuego.addEventListener("click", ataqueFuego)

let btnAgua = document.getElementById("btnAgua")
btnAgua.addEventListener("click", ataqueAgua)

let btnTierra = document.getElementById("btnTierra")
btnTierra.addEventListener("click", ataqueTierra)

let reiniciar = document.getElementById("btnReiniciar")
reiniciar.addEventListener("click",(e)=>{
    location.reload()
})