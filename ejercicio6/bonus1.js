// Bonus 1:
// Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) 
// y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

function productosBaratos (arr){
    let productos = []
    for (let i of arr){
        if (i.precio>=5 && i.precio<=10){
            productos.push(i.nombre)
        }
    }
    return productos
}
// código de prueba
let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]