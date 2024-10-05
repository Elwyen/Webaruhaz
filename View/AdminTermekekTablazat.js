import { AdminSor } from './AdminSor.js';

export class AdminTermekekTablazat {
    constructor(termekek, torlesFuggveny) {
        this.termekek = termekek;
        this.torlesFuggveny = torlesFuggveny;
    }

    render() {
        const tablaBody = document.querySelector('#termekekTablazat tbody');
        tablaBody.innerHTML = '';

        this.termekek.forEach(termek => {
            const sor = new AdminSor(termek, this.torlesFuggveny);
            tablaBody.appendChild(sor.letrehozSor());
        });
    }
}
