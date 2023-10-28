import { Categoria, Frase } from "./clases.js";

// URLS de la API -------------------------------------------------------------
let apiURLrandom = 'https://api.chucknorris.io/jokes/random';
let apiURL = 'https://api.chucknorris.io/jokes/random?category=';

// Elementos HTML -------------------------------------------------------------
var fraseHTML = document.getElementById('frase');
var catHTML = document.getElementById('cat');

// Funciones asíncronas para obtener la frase y la categoría ------------------
export async function obtenerFrase(nomCategoria) {
    try {
        const response = await fetch(apiURL + nomCategoria);

        if (!response.ok) {
            throw new Error('No se pudo generar una frase de la categoría ${nomCategoria}');
        }

        const data = await response.json();
        cargarFrase(data);

    } catch (eror) {
        console.log('error');
    }
}

export async function obtenerFraseRandom() {
    try {
        const response = await fetch(apiURLrandom);

        if (!response.ok) {
            throw new Error('No se pudo generar una frase');
        }

        const data = await response.json();
        cargarFrase(data);

    } catch (eror) {
        console.log('error');
    }
}

// Funciones para cargar la frase y la categoría ------------------------------
export function cargarCategorias() {
    var categoria = localStorage.getItem("categoria");

    if (categoria != null) {
        obtenerFrase(categoria);
    } else {
        obtenerFraseRandom()
    }
}

export function cargarFrase(data) {
    var frase = new Frase(data);

    if (data.categories != "") { // Si la frase tiene categoría la muestra
        catHTML.textContent = "Categoria: " + data.categories
    }

    fraseHTML.textContent = data.value
}

// Ejecuciones de las funciones necesarias -------------------------------------
cargarCategorias()