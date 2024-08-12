"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticket {
    constructor(id, owner, origin, destiny) {
        this.id = id;
        this.owner = owner;
        this.origin = origin;
        this.destiny = destiny;
    }
    // Getters -----------------------------------------------
    getId() {
        return this.id;
    }
    getOrigin() {
        return this.origin;
    }
    getDestiny() {
        return this.destiny;
    }
    // Setters -----------------------------------------------
    setId(id) {
        this.id = id;
    }
    setOrigin(origin) {
        this.origin = origin;
    }
    setDestiny(destiny) {
        this.destiny = destiny;
    }
    // Private methods ----------------------------------------
    // Public methods -----------------------------------------
    calcPrice() {
    }
}
exports.default = Ticket;
