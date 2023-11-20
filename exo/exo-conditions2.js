// Pour ce premier exercice, il est demandé de déclarer et définir trois variables numériques.

// Si elles sont égales, écrire : « Les trois variables sont identiques. »
// Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales. »
// Sinon, écrire : « Les trois variables sont différentes. »

let a = 1
let b = 2
let c = 3

if ((a === b) && (b === c) && (a === c)) {
    console.log("Les trois variables sont identiques.")
} else if ((a === b || a === c)) {
    console.log("deux des variables sont de valeur égales.")
} else console.log("Les trois variables sont différentes")

