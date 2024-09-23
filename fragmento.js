class ListaPeliculas extends HTMLElement {
    constructor() {
        super();
        this.peliculas = [
            "The Room",
            "Birdemic: Shock and Terror",
            "Plan 9 from Outer Space",
            "Manos: The Hands of Fate",
            "Troll 2"
        ];
        this.indiceActual = 0;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>
                <button id="anterior">Anterior</button>
                <span>${this.peliculas[this.indiceActual]}</span>
                <button id="siguiente">Siguiente</button>
            </div>
        `;

        this.querySelector('#anterior').addEventListener('click', () => this.mostrarAnterior());
        this.querySelector('#siguiente').addEventListener('click', () => this.mostrarSiguiente());
    }

    mostrarAnterior() {
        if (this.indiceActual > 0) {
            this.indiceActual--;
            this.render();
        }
    }

    mostrarSiguiente() {
        if (this.indiceActual < this.peliculas.length - 1) {
            this.indiceActual++;
            this.render();
        }
    }
}

customElements.define("franco-leon", ListaPeliculas);