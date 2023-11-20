// Les variables sont des symboles qui associent un nom à une valeur

// const ne peut pas être réasigné
const a = 1

// let peut être réasigné
let b = 2
b = 3


// Les valeurs assignables 

// int 
const A = 10

// float 
const B = 1.1

// string
const C = "Hello World !" 
const D = " Comment ça va ?"
// Addition de string = concaténation
console.log(C + D)

// boolean
const isMajeur = true
const isMineur = false

// null 
const E = null

// tableaux (les éléments contenus dans un tableau = index)
const notes = [9, 10, 11, "Hello", [1, 2, 3, "Tableau dans le tableau"], 99]

// objets : permettent de sauvegarder des données comme dans un tableau qui possèdent des propriétés et un type
const person = {
    firstname: "Jonathan",
    lastname: "Rose",
    age: 21,
    notes: [10, 20, 15],
    job: {
        name: "Développeur",
        location: "France",
        hours: 35
    },
    "espaces avec guillemets": 1,
    [C]: "affiche la variable C"
}
