"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("./Ticket"));
class PlaneTicket extends Ticket_1.default {
    constructor(id, owner, origin, destiny, classSector) {
        super(id, owner, origin, destiny);
        this.classSector = classSector;
    }
    // Getters -----------------------------------------------
    getClassSector() {
        return this.classSector;
    }
    // Setters -----------------------------------------------
    setClassSector(classSector) {
        this.classSector = classSector;
    }
}
exports.default = PlaneTicket;
