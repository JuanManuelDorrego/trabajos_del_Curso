let miAuto = {};
miAuto.marca = "Toyota";
miAuto.año = 2020;
miAuto.nuevo = true;

let propertyKey = "modelo";
miAuto[propertyKey] = "Corolla";

let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 20000;

let nextProperty = "color";
miAuto[nextProperty] = "Rojo";

for (let key in miAuto) {
    console.log(`${key}: ${miAuto[key]}`);
}

/*

Para Pensar...

¿Qué devuelve miAuto[propertyKey]?

Devuelve "Corolla".
¿Qué devuelve miAuto["modelo"]?

Devuelve "Corolla".
¿Qué devuelve miAuto[nextProperty]?

Devuelve "Rojo".
¿Qué devuelve miAuto["color"]?

Devuelve "Rojo".

*/