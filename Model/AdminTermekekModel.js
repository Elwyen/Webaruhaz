export class AdminTermekekModel {
    constructor() {
        this.termekek = [
            { id: 1, nev: 'Termék 1', ar: 1000, leiras: 'Ez egy nagyszerű termék.' },
            { id: 2, nev: 'Termék 2', ar: 2000, leiras: 'Ez a termék kiváló minőségű.' },
            { id: 3, nev: 'Termék 3', ar: 3000, leiras: 'Kedvelt termék sok vásárló által.' },
            { id: 4, nev: 'Termék 4', ar: 1500, leiras: 'Megbízható és tartós termék.' },
            { id: 5, nev: 'Termék 5', ar: 2500, leiras: 'Jó ár-érték arányú termék.' },
            { id: 6, nev: 'Termék 6', ar: 3500, leiras: 'Prémium termék igényes vásárlóknak.' },
            { id: 7, nev: 'Termék 7', ar: 1200, leiras: 'Kompakt és hatékony termék.' },
            { id: 8, nev: 'Termék 8', ar: 1800, leiras: 'Modern dizájn, kiváló teljesítmény.' },
            { id: 9, nev: 'Termék 9', ar: 2200, leiras: 'Funkcionális és stílusos termék.' },
            { id: 10, nev: 'Termék 10', ar: 2700, leiras: 'Nagyon népszerű termék a piacon.' }
        ];
    }

    getTermekek() {
        return this.termekek;
    }

    torolTermek(id) {
        this.termekek = this.termekek.filter(termek => termek.id !== id);
    }
}
