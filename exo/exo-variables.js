// Exercice 1 : Déclaration de variables

// Déclare une variable nom et assigne ton prénom à cette variable.
// Déclare une variable age et assigne ton âge à cette variable.
// Déclare une variable ville et assigne le nom de ta ville à cette variable

const nom = "Jonathan"
const age = 21
const ville = "Marseille"

// Exercice 2 : Manipulation de variables

// Crée une variable anneeCourante et assigne l'année en cours à cette variable.
// Calcule et affiche dans la console l'année de naissance en soustrayant ton âge de l'année en cours.

const anneeCourante = 2023
console.log(anneeCourante - 21)

// Exercice 3 : Concaténation de variables

// Utilise les variables nom, age et ville pour créer une phrase du type : "Je m'appelle [nom], j'ai [age] ans et j'habite à [ville]."
// Affiche cette phrase dans la console.

console.log("Je m'appelle " + nom + ", j'ai " + age + " ans et j'habite à " + ville)
console.log(`Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}.`);

// Exercice 4 : Conversion de types

// Crée une variable nombre et assigne une valeur numérique à cette variable.
// Crée une variable texte et assigne la valeur de nombre convertie en chaîne de caractères.
// Affiche le type de nombre et le type de texte dans la console.

const nombre = 21
const texte = "21"
console.log(typeof(nombre), typeof(texte))

// Exercice 5 : Opérations mathématiques

// Crée deux variables a et b contenant des nombres.
// Effectue les opérations suivantes et affiche les résultats dans la console :
// Addition de a et b.
// Soustraction de b de a.
// Multiplication de a par b.
// Division de a par b.

const a = 10
const b = 20
console.log(a + b)
console.log(b - a)
console.log(a * b)
console.log(a / b)




