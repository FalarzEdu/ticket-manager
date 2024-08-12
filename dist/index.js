"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("./controllers/UserController"));
const UserManagement_1 = __importDefault(require("./views/UserManagement"));
let user = new UserManagement_1.default(new UserController_1.default);
user.identification();
