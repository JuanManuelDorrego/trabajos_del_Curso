// Array de ejemplo
let personas = [
    { nombre: "Ana", edad: 32 },
    { nombre: "Carlos", edad: 45 },
    { nombre: "Beatriz", edad: 20 },
    { nombre: "Daniel", edad: 25 }
];

// Ordenar el array por edad de menor a mayor
personas.sort((a, b) => a.edad - b.edad);

// Agregar la propiedad 'posicion' a cada objeto
personas.forEach((persona, indice) => {
    persona.posicion = indice + 1;
});

// Imprimir el array resultante
console.log(personas);
