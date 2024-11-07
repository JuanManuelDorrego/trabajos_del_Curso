let edad = 19;
let edadMaxima = 50;
let snack = "chicitos";
let snackDia = 2;

let snackRestantes = (edadMaxima - edad) * 365 * snackDia;
alert("Necesitarás " + snackRestantes + " " + snack + " " +"para que te alcancen hasta los " + edadMaxima + " años.");

// Agregar cálculo de costo
let precioPorUnidad = 500; // Por ejemplo
let costoTotal = snackRestantes * precioPorUnidad;
alert("Gastaras " + costoTotal + " pesos en " + snack + " el resto de tu vida")
