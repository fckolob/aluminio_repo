botones

const botonCorrediza = document.querySelector("#botonCorrediza");
const botonBatiente = document.querySelector("#botonBatiente");
const botonesCorrediza = document.querySelectorAll(".corrediza");
const botonesBatiente = document.querySelectorAll(".batiente");

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
});

botonBatiente.addEventListener("click", () => {
    console.log("Se eligio una abertura batiente");
    botonCorrediza.classList.add("esconderBoton");
    botonBatiente.classList.add("esconderBoton");
    botonesBatiente.forEach(boton => {
        boton.classList.remove("esconderBoton");
        boton.classList.add("boton");
    });
});



