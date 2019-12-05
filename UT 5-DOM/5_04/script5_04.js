document.addEventListener("DOMContentLoaded", iniciar);


function iniciar() {
    var divBotones1 = document.getElementById("botones1");
    var botonCrear = document.createElement("button");
    botonCrear.id = "nuevaplanta";
    botonCrear.textContent = "Crear nueva planta";
    divBotones1.appendChild(botonCrear);

    var botonBorrar = document.createElement("button");
    botonBorrar.id = "borrarplanta";
    botonBorrar.textContent = "Borrar última planta";
    divBotones1.appendChild(botonBorrar);

    var divBotones2 = document.getElementById("botones2");
    var botonMostrar = document.createElement("button");
    botonMostrar.id = "mostrarfilas";
    botonMostrar.textContent = "Mostrar nº plantas";
    divBotones2.appendChild(botonMostrar);

    document.getElementById("nuevaplanta").addEventListener("click", anadirPlanta, false);
    document.getElementById("borrarplanta").addEventListener("click", borrarPlanta, false);
    document.getElementById("mostrarfilas").addEventListener("click", mostrarFilas, false);
}




function anadirPlanta() {

    var tabla = document.getElementById("tablaplantas");

    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    celda1.textContent = prompt("Nombre de la planta");
    celda2.textContent = prompt("Ubicación de la planta");
    celda3.textContent = prompt("Nº ejemplares");
    celda4.textContent = prompt("Flor de la planta");

    var fila = document.createElement("tr");
    //añadimos el classname planta para en el borrado buscar solo los elementos que tengan este classname, ya que si buscamos los tr corremos el riesgo de borrar el título
    fila.className = "planta";
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);

    tabla.appendChild(fila);
}

function borrarPlanta() {

    var filas = document.getElementsByClassName("planta");
    filas[(filas.length) - 1].remove();

}

function mostrarFilas() {

    var filas = document.getElementsByClassName("planta");
    var numFilas = filas.length;
    alert("Hay un total de " + numFilas + " plantas en la tabla");
}