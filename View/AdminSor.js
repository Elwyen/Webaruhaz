export class AdminSor {
    constructor(termek, torlesFuggveny) {
        this.termek = termek;
        this.torlesFuggveny = torlesFuggveny;
    }

    letrehozSor() {
        const sor = document.createElement('tr');
        sor.innerHTML = `
            <td>${this.termek.id}</td>
            <td>${this.termek.nev}</td>
            <td>${this.termek.ar}</td>
            <td>${this.termek.leiras}</td>
            <td><button class="torles-gomb">Törlés</button></td>
        `;
        sor.querySelector('.torles-gomb').addEventListener('click', () => {
            this.torlesFuggveny(this.termek.id);
        });
        return sor;
    }
}
