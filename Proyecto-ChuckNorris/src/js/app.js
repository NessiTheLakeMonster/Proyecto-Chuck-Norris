import { Categoria } from "./clases.js";
import { Frase } from "./clases.js";

const apiURL = 'https://api.chucknorris.io/jokes/categories';

var categoria

obtenerCategorias();

async function obtenerCategorias() {
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

function cargarCategorias(data) {
    var categoria = new Categoria(data);
    listarTablaCategorias(categoria.nombre);
}

function listarTablaCategorias(categoria) {
    var tabla = document.getElementById("tablaCategorias");

    categoria.forEach(function (categoria) {
        var fila = document.createElement("tr");

        var enlaceCelda = document.createElement("td");
        var enlace = document.createElement("a");
        enlace.href = '../frase.html';
        enlace.textContent = categoria;

        enlaceCelda.appendChild(enlace);
        fila.appendChild(enlaceCelda);
        tabla.appendChild(fila);
    });
}

function cargarFrase() {
    
}
