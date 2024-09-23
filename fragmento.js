class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
       <p>The Room</p>
        `;

    }
}

customElements.define("franco-leon", MiComponente123);