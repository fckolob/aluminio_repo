//botones

const botonCorrediza = document.querySelector("#botonCorrediza");
const botonBatiente = document.querySelector("#botonBatiente");
const botonAtrasCorrediza = document.querySelector("#atras-corrediza");
const botonAtrasBatiente = document.querySelector("#atras-batiente");
const botonesCorrediza = document.querySelectorAll(".corrediza");
const botonesBatiente = document.querySelectorAll(".batiente");

class Abertura{
    ancho;
    alto;
    anchoDeMarco;
    altoDeMarco;
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    hacerDescuentos(){
        this.anchoDeMarco = this.ancho;
        this.altoDeMarco = this.alto;
    }
}

class Batiente extends Abertura{
    mano;
    marcoPerimetral;
    dobleBatiente;
    cantidadAnchosDeMarco;
    constructor(ancho, alto, mano, dobleBatiente, marcoPrimetral){
        super.ancho = ancho;
        super.alto = alto;
        this.mano = mano;
        this.marcoPerimetral = marcoPrimetral;
        this.dobleBatiente = dobleBatiente;
    }

    hacerDescuentos(){

        super.hacerDescuentos();

        if (dobleBatiente === true){
            this.cantidadAnchosDeMarco = 2;
        }
        else{
            this.cantidadAnchosDeMarco = 1;
        }
    }
}


botonesCorrediza.forEach(boton => {
    boton.classList.add("esconderBoton");
});

botonesBatiente.forEach(boton => {
    boton.classList.add("esconderBoton");
});






//Funciones



//Eventos de los botones

botonCorrediza.addEventListener("click", () => {
    console.log("Se eligio una abertura corrediza");
    botonCorrediza.classList.add("esconderBoton");
    botonBatiente.classList.add("esconderBoton");
    botonesCorrediza.forEach(boton => {
        boton.classList.remove("esconderBoton");
        boton.classList.add("boton");
        
    });

    botonAtrasCorrediza.classList.remove("esconderBoton");
    botonAtrasCorrediza.classList.add("boton");
});

botonBatiente.addEventListener("click", () => {
    console.log("Se eligio una abertura batiente");
    botonCorrediza.classList.add("esconderBoton");
    botonBatiente.classList.add("esconderBoton");
    botonesBatiente.forEach(boton => {
        boton.classList.remove("esconderBoton");
        boton.classList.add("boton");
    });
    botonAtrasBatiente.classList.remove("esconderBoton");
    botonAtrasBatiente.classList.add("boton");
});

botonAtrasCorrediza.addEventListener("click", () => {
    botonesCorrediza.forEach(boton => {
        boton.classList.remove("boton");
        boton.classList.add("esconderBoton");
    });
    botonAtrasCorrediza.classList.remove("boton");
    botonAtrasCorrediza.classList.add("esconderBoton");

    botonBatiente.classList.remove("esconderBoton");
    botonBatiente.classList.add("boton");
    botonCorrediza.classList.remove("esconderBoton");
    botonCorrediza.classList.add("boton");

    
})

botonAtrasBatiente.addEventListener("click", () => {
    botonesBatiente.forEach(boton => {
        boton.classList.remove("boton");
        boton.classList.add("esconderBoton");
    });

    botonAtrasBatiente.classList.remove("boton");
    botonAtrasBatiente.classList.add("esconderBoton");
    botonBatiente.classList.remove("esconderBoton");
    botonBatiente.classList.add("boton");
    botonCorrediza.classList.remove("esconderBoton");
    botonCorrediza.classList.add("boton");
})

