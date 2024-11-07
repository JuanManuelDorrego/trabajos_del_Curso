let productos = [
    { nombre: "Televisor", precio: 500, cantidad: 10 },
    { nombre: "Laptop", precio: 1000, cantidad: 5 },
    { nombre: "Tablet", precio: 300, cantidad: 20 },
    { nombre: "Smartphone", precio: 800, cantidad: 7 }
];

function calcularValorTotal(productos) {
    let resultado = [];

    productos.forEach(producto => {
        let valorTotal = producto.precio * producto.cantidad;
        resultado.push({
            nombre: producto.nombre,
            valorTotal: valorTotal
        });
    });

    return resultado;
}

let valoresTotales = calcularValorTotal(productos);
console.log(valoresTotales);
