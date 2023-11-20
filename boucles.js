// Les boucles permettent de répéter des actions simplement et rapidement

// tant que (ne s'arrête pas tant que x n'est pas finis)
// Exemple répéter un texte 10 fois :
let i = 0
while(i < 10) {
    console.log("Hello")
    i = i + 1
}

// pour
// Exemple répéter un texte 10 fois :
for (let i = 0; i < 10; i++) {
    console.log("Hello")
}

// Exemple d'utilisation dans un tableau
const notes = [10, 20, 25, 30, 50, 11] 
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}
