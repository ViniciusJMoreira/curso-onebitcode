"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./utilities/Database");
const User_1 = require("./utilities/User");
const newUser = new User_1.User('Vinicius', '1234', 'vinicius@gmail.com', 'Admin', "Male");
const data = new Database_1.Database();
data.setUser(newUser);
console.log(data.getUser);
