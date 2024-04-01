"use strict";
;
;
// Podemos Aplicar em variaveis
let userName;
async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/ViniciusJMoreira`);
    const user = await response.json();
    console.log(user);
}
;
fetchUser();
