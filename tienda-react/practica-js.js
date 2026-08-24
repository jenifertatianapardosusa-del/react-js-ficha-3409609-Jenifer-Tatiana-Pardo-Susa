// console.log("JavaScript listo para practicar");

// Reto 1: Funciones, parametros, return

// Multiplicación

//function calcularTotal(precio, cantidad) {
//const total = precio * cantidad;
//return total;
//}
//const resultado = calcularTotal(50000, 3);
//console.log("El resultado de la multiplicación es: ")
//console.log(resultado);

// Suma 

//function calcularSuma(a, b) {
//    const suma = a + b;
//    return suma;
//}
//const resultado2 = calcularSuma (8, 9);
//console.log ("El resultado de la suma es: ")
//console.log(resultado2);

// Resta

//function calcularresta(c, d){
//    const resta = c - d 
//    return resta;
//}
//const resultado3 = calcularresta (2, 4)
//console.log("El resultado de la resta es: ")
//console.log(resultado3);

// División 

//function calcularDivision(e, f){
//    const division = e / f
 //   return division;
//}
//const resultado4 = calcularDivision(5, 7)
//console.log("El resultado de la division: ")
//console.log(resultado4);

// Promedio 

//function calcularPromedio(nota1, nota2, nota3){
//    const promedio = nota1 + nota2 + nota3 / 3
//    return promedio;
//}
//const resultado5 = calcularPromedio(5.0, 3.5, 4.0)
//console.log("El promedio de notas es: ")
//console.log(resultado5);

// 1. cuadrado(numero)
//const cuadrado = numero => numero * numero;

// 2. esMayorEdad(edad)
//const esMayorEdad = edad => edad >= 18;

// 3. nombreCompleto(nombre, apellido)
//const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;


// Ejecutar y comprobar resultados

//console.log("Cuadrado de 5:", cuadrado(5));

//console.log("¿Es mayor de edad?:", esMayorEdad(20));

//console.log("Nombre completo:", nombreCompleto("Diego", "Beltran"));


const productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000,
        categoria: "Perifericos",
        stock: 5
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 90000,
        categoria: "Perifericos",
        stock: 0
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 650000,
        categoria: "Pantallas",
        stock: 3
    },
    {
        id: 4,
        nombre: "Audifonos",
        precio: 120000,
        categoria: "Audio",
        stock: 8
    },
    {
        id: 5,
        nombre: "Webcam",
        precio: 180000,
        categoria: "Accesorios",
        stock: 4
    },
    {
        id: 6,
        nombre: "Parlantes",
        precio: 150000,
        categoria: "Audio",
        stock: 6
    },
    {
        id: 7,
        nombre: "Memoria USB",
        precio: 35000,
        categoria: "Almacenamiento",
        stock: 10
    },
    {
        id: 8,
        nombre: "Disco SSD",
        precio: 280000,
        categoria: "Almacenamiento",
        stock: 5
    },
    {
        id: 9,
        nombre: "Laptop",
        precio: 2500000,
        categoria: "Computadores",
        stock: 2
    },
    {
        id: 10,
        nombre: "Pad Mouse",
        precio: 30000,
        categoria: "Perifericos",
        stock: 12
    }
];
//console.log(productos);
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// nombres de los productos
const nombres = productos.map(producto => producto.nombre);
//console.log(nombres);

// precios con IVA
const preciosConIva = productos.map(producto => producto.precio * 1.19);
//console.log(preciosConIva);

// nombres en mayúscula
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
//console.log(nombresMayuscula);

// resumen de productos
const resumenProductos = productos.map(
    producto => `${producto.nombre} cuesta $${producto.precio}`
);
//console.log(resumenProductos);

// 1. productos con precio mayor a $100.000
const productosMayores = productos.filter(producto => producto.precio > 100000);
//console.log("Productos mayores a $100.000:", productosMayores);


// 2. productos con precio entre $50.000 y $200.000
const productosEntre = productos.filter(
    producto => producto.precio >= 50000 && producto.precio <= 200000
);
//console.log("Productos entre $50.000 y $200.000:", productosEntre);


// 3. productos de una categoría escogida
// Escogemos la categoría "Perifericos"
const productosPerifericos = productos.filter(
    producto => producto.categoria === "Perifericos"
);
//console.log("Productos de la categoría Perifericos:", productosPerifericos);


// 4. buscar el producto con id 5
const producto5 = productos.find(producto => producto.id === 5);
//console.log("Producto con ID 5:", producto5);


// 5. función buscarProducto(id)
const buscarProducto = id => {
    return productos.find(producto => producto.id === id);
};

// probar la función
//console.log("Producto encontrado:", buscarProducto(5));


/*const hayAgotados = productos.some(
    producto => producto.stock === 0
);

const hayProductoMillonario = productos.some(
    producto => producto.precio > 1000000
);

const preciosValidos = productos.every(
    producto => producto.precio > 0
);

const stocksValidos = productos.every(
    producto => producto.stock >= 0
);

const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
);

console.log(hayAgotados);
console.log(hayProductoMillonario);
console.log(preciosValidos);
console.log(stocksValidos);
console.log(valorInventario);*/

console.log(
    `El producto ${productos[0].nombre} cuesta $${productos[0].precio}`
);

const { nombre, precio, stock } = productos[0];

console.log(nombre, precio, stock);

const productoActualizado = {
    ...productos[0],
    precio: 60000,
    stock: 8
};

const estado = productoActualizado.stock > 0
    ? "Disponible"
    : "Agotado";

console.log(estado);