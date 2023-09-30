"use strict";
var planets;
(function (planets) {
    planets[planets["mercurio"] = 3] = "mercurio";
    planets[planets["terra"] = 1] = "terra";
    planets[planets["venus"] = 2] = "venus";
})(planets || (planets = {}));
const result = planets.mercurio;
console.log(result);