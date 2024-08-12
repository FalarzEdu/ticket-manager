"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TicketManagement_1 = __importDefault(require("../views/TicketManagement"));
const TicketController_1 = __importDefault(require("./TicketController"));
class UserController {
    constructor() {
        this.ticketManagement = new TicketManagement_1.default(new TicketController_1.default);
    }
    create(name, password) {
        // Precisa do banco de dados
    }
    verifyAuth(name, password) {
        // Precisa do banco de dados
        // TESTE ----
        //this.ticketManagement.primaryInterface();
    }
}
exports.default = UserController;
