"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    #storage = [];
    get getUser() {
        return this.#storage;
    }
    setUser(user) {
        this.#storage.push(user);
    }
}
exports.Database = Database;
