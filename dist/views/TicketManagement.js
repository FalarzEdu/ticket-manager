"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TicketManagement {
    constructor(ticketController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.ticketController = ticketController;
    }
    primaryInterface() {
        let question = this.prompt("What would you like to do?\n1 - Buy a ticket\n2 - Exit");
        switch (question) {
            case "1":
                this.buyTicket();
                break;
            case "2":
                break;
            default:
                break;
        }
    }
    buyTicket() {
        let question = this.prompt("Which transport would you like to buy a ticket?\n1 - Plane\n2 - Bus");
        switch (question) {
            case "1":
                this.ticketController.buyPlaneTicket();
                break;
            case "2":
                this.ticketController.buyBusTicket();
                break;
            default:
                break;
        }
    }
}
exports.default = TicketManagement;
