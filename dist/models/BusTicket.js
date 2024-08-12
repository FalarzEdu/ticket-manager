"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("./Ticket"));
class BusTicket extends Ticket_1.default {
    constructor(id, owner, origin, destiny, seatType) {
        super(id, owner, origin, destiny);
        this.seatType = seatType;
    }
    // Getters -----------------------------------------------
    getSeatType() {
        return this.seatType;
    }
    // Setters -----------------------------------------------
    setSeatType(seatType) {
        this.seatType = seatType;
    }
}
exports.default = BusTicket;
