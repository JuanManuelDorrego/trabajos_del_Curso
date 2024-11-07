let estudiantes = [
    { nombre: "Juan", nota: 6 },
    { nombre: "María", nota: 8 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 4 }
];


estudiantes.forEach(estudiante => {
    if (estudiante.nota > 5) {
        estudiante.nota += 2;
        if (estudiante.nota > 10) {
            estudiante.nota = 10;
        }
    }
});

console.log(estudiantes);
