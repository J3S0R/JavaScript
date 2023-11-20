// Si age inférieur à 13 ans = Mickey Si entre 13 et 18 Regarder Matrix Sinon Regarder The Walking dead
const age = prompt("Entrez votre age ")
film1 = "Mickey"
film2 = "Matrix"
film3 = "The Walking Dead"

if (age <= 13) {
    console.log("Je vous conseille de regarder " + film1)
} else if (age < 18) {
    console.log("Je vous conseille de regarder " + film2)
} else {
    console.log("Je vous conseille de regarder " + film3)
}



