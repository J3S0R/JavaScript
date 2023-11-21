// Exercice 1 : Comparaison de nombres

// Déclare deux variables, nombre1 et nombre2, et assigne-leur des valeurs numériques.
// Utilise une structure de contrôle conditionnelle (par exemple, une déclaration if) pour déterminer et afficher dans la console lequel des deux nombres est le plus grand.

const nombre1 = 80
const nombre2 = 70

if (nombre1 > nombre2) {
    console.log(`${nombre1} est le plus grand`)
} else {
    console.log(`${nombre2} est le plus grand`)
}

// Exercice 2 : Vérification de l'âge

// Déclare une variable age et assigne-lui la valeur de ton choix.
// Utilise une structure if pour vérifier si la personne est majeure (âge supérieur ou égal à 18 ans) et affiche un message approprié dans la console.

const age = 21
if (age >= 18) {
    console.log("Vous êtes majeur")
} else {
    console.log("Vous êtes mineur")
}

// Exercice 3 : Classification d'un nombre

// Déclare une variable nombre et assigne-lui une valeur numérique.
// Utilise une structure if et else pour déterminer si le nombre est positif, négatif ou égal à zéro, et affiche le résultat dans la console.

const nombre = 0
if (nombre > 0) {
    console.log("Le nombre est positif")
} else if (nombre === 0) {
    console.log("Le nombre est 0")
} else {
    console.log("Le nombre est négatif")
}

// Exercice 4 : Vérification de la parité

// Déclare une variable nombrePair et assigne-lui une valeur numérique.
// Utilise une structure if pour vérifier si le nombre est pair et affiche un message approprié dans la console.

const nombrePair = 1
if (nombrePair % 2 === 0) {
    console.log("Le nombre est pair")
} else {
    console.log("Le nombre est inpair")
}

// Exercice 5 : Comparaison de chaînes

// Déclare deux variables de chaînes de caractères, mot1 et mot2, et assigne-leur des valeurs.
// Utilise une structure if pour vérifier si les deux mots sont identiques et affiche un message approprié dans la console.

const mot1 = "Rose"
const mot2 = "Rose"
if (mot1 != mot2) {
    console.log("Les deux mots sont différents")
} else {
    console.log("Les deux mots sont identiques")
}

// Si age inférieur à 13 ans = Mickey Si entre 13 et 18 Regarder Matrix Sinon Regarder The Walking dead
// const age = prompt("Entrez votre age ")
const film1 = "Mickey"
const film2 = "Matrix"
const film3 = "The Walking Dead"

 if (age <= 13) {
     console.log("Je vous conseille de regarder " + film1)
 } else if (age < 18) {
     console.log("Je vous conseille de regarder " + film2)
 } else {
     console.log("Je vous conseille de regarder " + film3)
 }

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