"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    password;
    email;
    role;
    gender;
    constructor(name, password, email, role, gender) {
        this.name = name,
            this.password = password,
            this.email = email,
            this.role = role,
            this.gender = gender;
    }
}
exports.User = User;
