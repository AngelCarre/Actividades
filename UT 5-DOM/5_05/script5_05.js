document.addEventListener("DOMContentLoaded", iniciar, false);


function iniciar() {
    var divBotones1 = document.getElementById("botones1");
    var botonGenerar = document.createElement("button");
    botonGenerar.id = "generarpersonaje";
    botonGenerar.textContent = "Generar personaje";
    divBotones1.appendChild(botonGenerar);

    var botonBorrar = document.createElement("button");
    botonBorrar.id = "borrarpersonaje";
    botonBorrar.textContent = "Borrar personaje";
    divBotones1.appendChild(botonBorrar);

    var divBotones2 = document.getElementById("botones2");
    var botonSanji = document.createElement("button");
    botonSanji.id = "btnSanji";
    botonSanji.className = "contar";
    botonSanji.textContent = "Nº Sanji";
    divBotones2.appendChild(botonSanji);


    var botonZoro = document.createElement("button");
    botonZoro.id = "btnZoro";
    botonZoro.className = "contar";
    botonZoro.textContent = "Nº Zoro";
    divBotones2.appendChild(botonZoro);

    var botonNami = document.createElement("button");
    botonNami.id = "btnNami";
    botonNami.className = "contar";
    botonNami.textContent = "Nº Nami";
    divBotones2.appendChild(botonNami);

    var botonLuffy = document.createElement("button");
    botonLuffy.id = "btnLuffy";
    botonLuffy.className = "contar";
    botonLuffy.textContent = "Nº Luffy";
    divBotones2.appendChild(botonLuffy);

    document.getElementById("generarpersonaje").addEventListener("click", generarPersonaje, false);
    document.getElementById("borrarpersonaje").addEventListener("click", borrarPersonaje, false);

    var botonesContar = Array.from(document.getElementsByClassName("contar"));

    botonesContar.forEach(function (boton) {
        boton.addEventListener("click", contarImagenes, false);
    });

}


function generarPersonaje() {

    var opcion = prompt("Elija el nombre del personaje: \n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy");

    var imagen = document.createElement("img");
    switch (opcion) {


        case "1":
            imagen.src = "img_onepiece/sanji.jpg";
            imagen.className = "sanji";
            imagen.width = 100;
            imagen.height = 150;
            break;

        case "2":
            imagen.src = "img_onepiece/zoro.jpg";
            imagen.className = "zoro";
            imagen.width = 100;
            imagen.height = 150;
            break;

        case "3":
            imagen.src = "img_onepiece/nami.jpg";
            imagen.className = "nami";
            imagen.width = 100;
            imagen.height = 150;
            break;
        case "4":
            imagen.src = "img_onepiece/luffy.jpg";
            imagen.className = "luffy";
            imagen.width = 100;
            imagen.height = 150;
            break;
    }

    document.getElementById("imagenes").appendChild(imagen);

}

function borrarPersonaje() {
    var imagenes = document.querySelectorAll("img").length;
    if (imagenes > 0) {

        document.querySelectorAll("img")[imagenes - 1].remove();
    }

}

function contarImagenes() {
    var boton = this.id;

    switch (boton) {

        case "btnSanji":

            alert("Hay " + document.getElementsByClassName("sanji").length + " fotos de Sanji");
            break;

        case "btnZoro":

            alert("Hay " + document.getElementsByClassName("zoro").length + " fotos de Zoro");
            break;

        case "btnNami":

            alert("Hay " + document.getElementsByClassName("nami").length + " fotos de Nami");
            break;

        case "btnLuffy":

            alert("Hay " + document.getElementsByClassName("luffy").length + " fotos de Luffy");
            break;
    }

}