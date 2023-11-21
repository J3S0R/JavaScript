// Exercice 1 : Afficher les Nombres de 1 à 5

// Utilise une boucle while pour afficher les nombres de 1 à 5 dans la console

let i = 1
while(i <= 5) {
    console.log(i);
    i++
}

// Exercice 2 : Demander à l'Utilisateur de Saisir un Nombre Pair

// Utilise une boucle while pour demander à l'utilisateur de saisir un nombre tant que le nombre saisi n'est pas pair. Affiche un message approprié dans la console

let nombre = parseInt(prompt("Saisissez un nombre"))
while(nombre % 2 !== 0) {
     nombre = parseInt(prompt("Ce nombre n'est pas pair veuillez en saisir un autre"))
 }
 console.log(`Voici le chiffre que vous avez saisi ${nombre} il est bien pair`)

// Exercice 3 : Jeu de Devinette

// Génère un nombre aléatoire entre 1 et 10. Utilise une boucle while pour demander à l'utilisateur de deviner ce nombre. Continue jusqu'à ce que l'utilisateur devine correctement

let random = 4
guess = parseInt(prompt("Devinette : Saisissez un nombre entre 1 et 10"))
while(guess !== random) {
    guess = parseInt(prompt("Raté ! rééssayez"))
} 
alert("Bien joué !")