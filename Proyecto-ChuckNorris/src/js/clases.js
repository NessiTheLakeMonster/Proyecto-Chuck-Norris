export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

export class Frase {
    constructor(categoria, nombre) {
        this.categoria = categoria;
        this.nombre = nombre;
    }
}