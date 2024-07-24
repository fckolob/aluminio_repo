//botones

const botonCorrediza = document.querySelector("#botonCorrediza");
const botonBatiente = document.querySelector("#botonBatiente");
const botonAtrasCorrediza = document.querySelector("#atras-corrediza");
const botonAtrasBatiente = document.querySelector("#atras-batiente");
const botonesCorrediza = document.querySelectorAll(".corrediza");
const botonesBatiente = document.querySelectorAll(".batiente");

//Declarando clases.
class Abertura{
    ancho = null;
    alto = null;
    vidrioFantasia = null;
    anchoDeMarco = null;
    altoDeMarco = null;
    horizontalDeHoja = null;
    lateralDeHoja = null;
    anchoDeVidrio = null;
    altoDeVidrio = null;
    cantidadDeVidrios = null;
    mitadLateralDeHoja = null;
    constructor(ancho, alto, vidrioFantasia){
        this.ancho = ancho;
        this.alto = alto;
        this.vidrioFantasia = vidrioFantasia;
    }
    hacerDescuentos(){
        this.anchoDeMarco = this.ancho;
        this.altoDeMarco = this.alto;
    }
}

class Batiente extends Abertura{
    mano = null;
    dobleBatiente = null;
    
    pestilloDerechaVistaInterior = null;
    aperturaInterior = null;
    contravidriosHorizontales = null;
    contravidriosVerticales = null;
    
    
   

    constructor(ancho, alto, mano, dobleBatiente, vidrioFantasia,  pestilloDerechaVistaInterior, aperturaInterior){
        super.ancho = ancho;
        super.alto = alto;
        this.mano = mano;
        this.dobleBatiente = dobleBatiente;
        super.vidrioFantasia = vidrioFantasia;
        this.pestilloDerechaVistaInterior = pestilloDerechaVistaInterior;
        this.aperturaInterior = aperturaInterior;
        
    }

    hacerDescuentos(){
        super.hacerDescuentos();
    }

    
}




class Corrediza extends Abertura{
    
    enganche = null;

    constructor(ancho, alto, vidrioFantasia){

        super.ancho = ancho;
        super.alto = alto;
        super.vidrioFantasia = vidrioFantasia;
    }

    hacerDescuentos(){
        super.hacerDescuentos();
    }

}

class VentanaBatiente extends Batiente{

    goteron = null;

    constructor(ancho, alto, mano, dobleBatiente, vidrioFantasia, pestilloDerechaVistaInterior, aperturaInterior){
        super.ancho = ancho;
        super.alto = alto;
        super.mano = mano;
        super.dobleBatiente = dobleBatiente;
        super.vidrioFantasia = vidrioFantasia;
        super.pestilloDerechaVistaInterior = pestilloDerechaVistaInterior;
        super.aperturaInterior = aperturaInterior;
    }

    hacerDescuentos(){
        super.hacerDescuentos;
    }
}

class PuertaBatiente extends Batiente{
    marcoPerimetral = null;
    cantidadAnchosDeMarco = null;
    diseño = null;
    enterrarMarco = null;
    lambriz = null;
    

    constructor(ancho, alto, mano, dobleBatiente, vidrioFantasia, pestilloDerechaVistaInterior, aperturaInterior, marcoPerimetral, enterrarMarco, diseño){
        super.ancho = ancho;
        super.alto = alto;
        super.mano = mano;
        super.dobleBatiente = dobleBatiente;
        super.vidrioFantasia = vidrioFantasia;
        super.pestilloDerechaVistaInterior = pestilloDerechaVistaInterior;
        super.aperturaInterior = aperturaInterior;
        this.marcoPerimetral = marcoPerimetral;
        this.enterrarMarco = enterrarMarco;
        this.diseño = diseño;
    }

    hacerDescuentos(){

        super.hacerDescuentos();

        if (this.marcoPerimetral === true){
            this.cantidadAnchosDeMarco = 2;
        }
        else{
            this.cantidadAnchosDeMarco = 1;
        }
    }
}

class PuertaSerie30 extends PuertaBatiente{
    
   
    
    

    constructor(ancho, alto, mano, dobleBatiente, vidrioFantasia, pestilloDerechaVistaInterior, aperturaInterior, marcoPerimetral, enterrarMarco, diseño){
        super.ancho = ancho;
        super.alto = alto;
        
        super.dobleBatiente = dobleBatiente;
        super.vidrioFantasia = vidrioFantasia;
        super.pestilloDerechaVistaInterior = pestilloDerechaVistaInterior;
        super.aperturaInterior = aperturaInterior; 
        super.marcoPerimetral = marcoPerimetral;
        super.enterrarMarco = enterrarMarco;
        super.diseño = diseño;
        
    }

    hacerDescuentos(){
        super.hacerDescuentos();
        if (this.marcoPerimetral === true){
            this.enterrarMarco = false;
            this.lateralDeHoja = this.alto - 66;
            this.mitadLateralDeHoja = (this.alto - 66) / 2;
        }
        else{
            this.lateralDeHoja = this.alto - 38;
            this.mitadLateralDeHoja = (this.alto - 38) / 2;
        }
        if(enterrarMarco === true){
            this.altoDeMarco === this.alto + 20;
        }
        if(this.dobleBatiente === true){
            this.horizontalDeHoja = this.ancho / 2 - 144;
            this.contravidriosHorizontales = this.ancho / 2 - 145;
            this.lambriz = this.ancho / 2 - 147;
            this.anchoDeVidrio = this.ancho / 2 - 147;

        }
        else{
            this.horizontalDeHoja = this.ancho - 175;
            this.contravidriosHorizontales = this.ancho - 176;
            this.lambriz = this.ancho - 178;
            this.anchoDeVidrio = this.ancho - 178; 
        }
        
    }
}

//Escondiendo botones.

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

