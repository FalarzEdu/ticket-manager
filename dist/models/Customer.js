"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name, password, balance) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
    // Getters -----------------------------------------------
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    // Setters -----------------------------------------------
    setName(name) {
        this.name = name;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
exports.default = Customer;
