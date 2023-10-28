import { Categoria } from "./clases.js";

// URL de la API -------------------------------------------------------------
const apiURL = 'https://api.chucknorris.io/jokes/categories';

// Elementos HTML -------------------------------------------------------------
const btnCategoria = document.getElementById("generarFrase");

var categoria

// Evento del boton para generar una frase -------------------------------------
btnCategoria.addEventListener('click', function () {
    localStorage.clear();
    window.location.href = '../src/frase.html'
});

// Funciones asíncronas para obtener las categorías --------------------------
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

// Funciones para cargar las categorías ---------------------------------------
export function cargarCategorias(data) {
    var categoria = new Categoria(data);
    listarTablaCategorias(categoria.nombre);
}

export function categoriaRandom(categoria) {
    categoria.forEach(function (categoria) {
        var random = Math.floor(Math.random() * categoria.length);
        categoria = categoria[random];
    });
    console.log(categoria);
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

// Ejectuar la función para obtener las categorías ----------------------------
obtenerCategorias();