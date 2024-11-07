let capitales ={
    Argentina:"Buenos Aires",
    Uruguay:"Montevideo"
}
let lugar = "Uruguay";

console.log(capitales["lugar"]);
console.log(capitales.lugar);
console.log(capitales[ lugar]);
console.log(capitales[ "Argentina"]);
console.log(capitales.Argentina);
console.log(capitales[ Argentina]);

/* Estas variables devolveran 
    undefined
    undefined
    Montevideo
    Buenos Aires
    Buenos Aires
    Uncaught
*/