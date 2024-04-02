"use strict";
var planets;
(function (planets) {
    planets[planets["mercurio"] = 0] = "mercurio";
    planets[planets["terra"] = 1] = "terra";
    planets[planets["venus"] = 2] = "venus";
})(planets || (planets = {}));
const result = planets.mercurio;
console.log(result);
var role;
(function (role) {
    role["admin"] = "admin";
    role["user"] = "user";
    role["visitor"] = "visitor";
})(role || (role = {}));
