"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class UserManagement {
    constructor(userController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.userController = userController;
    }
    identification() {
        let name;
        let password;
        let question = this.prompt("Would you like to log in or register?\n1 - Log In\n2 - Register");
        switch (question) {
            case "1":
                name = this.prompt("Name:");
                password = this.prompt("Password:");
                this.userController.verifyAuth(name, password);
                break;
            case "2":
                name = this.prompt("Name:");
                password = this.prompt("Password:");
                this.userController.create(name, password);
            default:
                break;
        }
    }
}
exports.default = UserManagement;
