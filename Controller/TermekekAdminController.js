import { AdminTermekekModel } from '../Model/AdminTermekekModel.js';
import { AdminTermekekTablazat } from '../View/AdminTermekekTablazat.js';

export class TermekekAdminController {
    constructor() {
        this.model = new AdminTermekekModel();
        this.view = new AdminTermekekTablazat(this.model.getTermekek(), this.torolTermek.bind(this));
        this.view.render();
    }

    torolTermek(id) {
        this.model.torolTermek(id);
        this.view.termekek = this.model.getTermekek();
        this.view.render();
    }
}
