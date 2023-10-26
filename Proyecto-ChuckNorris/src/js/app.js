import { Categoria } from "./clases.js";
import { Frase } from "./clases.js";

const apiURL = 'https://api.chucknorris.io/jokes/categories';
let apiURLrandom = 'https://api.chucknorris.io/jokes/random';

const btnCategoria = document.getElementById("generarFrase");

var categoria

obtenerCategorias();

btnCategoria.addEventListener('click', function () {
    localStorage.setItem("categoria", categoriaRandom(categoria));
    window.location.href = '../src/frase.html'
});

/* ----------------------------- FUNCIONES ASINCRONAS --------------------------- */

export async function obtenerCategorias() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('No se pudieron obtener las categorias');
        }

        const data = await response.json();
        cargarCategorias(data)

    } catch (error) {
        console.log('error');
    }
}

/* ---------------------------------- FUNCIONES --------------------------------- */

export function cargarCategorias(data) {
    var categoria = new Categoria(data);
    listarTablaCategorias(categoria.nombre);
}

export function categoriaRandom(categoria) {
    var random = Math.floor(Math.random() * categoria.length);
    return categoria[random];
}

export function listarTablaCategorias(categoria) {
    var tabla = document.getElementById("tablaCategorias");

    categoria.forEach(function (categoria) {
        var fila = document.createElement("tr");

        var enlaceCelda = document.createElement("td");
        var enlace = document.createElement("a");
        enlace.href = '../src/frase.html';
        enlace.textContent = categoria;

        enlace.addEventListener('click', function() {
            localStorage.setItem("categoria", categoria);
        })

        enlaceCelda.appendChild(enlace);
        fila.appendChild(enlaceCelda);
        tabla.appendChild(fila);
    });
}

