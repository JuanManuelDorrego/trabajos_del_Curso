let actoresPrincipales = ["Ana García", "Oscar Pérez", "Juan López", "Eduardo Ruiz", "Ignacio Fernández"];
let actoresVocales = [];

// Paso 1
actoresPrincipales.forEach(actor => {
    let [nombre, apellido] = actor.split(" ");
    if ("AEIOUaeiou".includes(nombre.charAt(0)) || "AEIOUaeiou".includes(apellido.charAt(0))) {
        actoresVocales.push(actor);
    }
});

console.log("Actores Vocales:", actoresVocales);

// Paso 2
let actoresPrincipalesPorPelicula = {
    "Pelicula1": "Ana García",
    "Pelicula2": "Oscar Pérez",
    "Pelicula3": "Juan López",
    "Pelicula4": "Eduardo Ruiz",
    "Pelicula5": "Ignacio Fernández"
};
actoresPrincipales = [];

for (let pelicula in actoresPrincipalesPorPelicula) {
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
}

console.log("Actores Principales:", actoresPrincipales);

// Paso 3
let peliculas = [];

for (let pelicula in actoresPrincipalesPorPelicula) {
    peliculas.push(pelicula);
}

console.log("Películas:", peliculas);

// Paso 4
let peliculaPorActor = {};

// Paso 5 y 6
for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!peliculaPorActor[actor]) {
        peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
}

console.log("Película por Actor:", peliculaPorActor);
