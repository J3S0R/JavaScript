// Une condition indique à la machine comment réagir en fonctions de différents paramètres

/* Opérateurs logiques : 
&& = ET 
VRAI ET VRAI = VRAI
VRAI ET FAUX = FAUX
FAUX ET FAUX = FAUX

|| = OU  
VRAI OU VRAI = VRAI
VRAI OU FAUX = VRAI 
FAUX OU FAUX = FAUX 
*/


// Indiquer à l'utilisteur s'il à le droit de conduire ou non
// Méthode 1 
const age = 20
const pays = "FR"
if (
    (pays === "FR" && age >= 18) || (pays === "US" && age >= 16)
    ) {
        console.log("Vous avez le droit de conduire")
    } else {
        console.log("Vous n'avez pas le droit de conduire")
    }

// Méthode 2 
const old = 10
const country = "US"
const driveFR = country === "FR" && old >= 18
const driveUS = country === "US" && old >= 16
if (driveFR || driveUS) {
    console.log("Vous avez le droit de conduire")
} else {
    console.log("Vous n'avez pas le droit de conduire")
}

// Méthode 3
const age_old = 20
const pays_country = "USA"
const driveFrance = pays_country === "FR" && age_old >= 18
const driveUSA = pays_country === "US" && age_old >= 18

switch(pays_country) {
    case "FR":
        console.log("Je suis en France")
        break
    case "USA":
        console.log("Je suis aux USA")
        break
    default:
        console.log("Je ne suis ni en France ni aux USA")
        break
     }

