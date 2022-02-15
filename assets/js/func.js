/* Tienda de Hardware */

alert('F12 PARA ABRIR CONSOLA');

const productos = [
{id: 8129, tipo: 'Notebook', precio: '80000'},
{id: 2315, tipo: 'Monitor', precio: '27000'},
{id: 7563, tipo: 'Placa de video', precio: '160800'},
{id: 5701, tipo: 'Televisor', precio: '60000'},
{id: 1027, tipo: 'Playstation', precio: '90000'},
{id: 6328, tipo: 'Celular', precio: '65000'},
{id: 8260, tipo: 'Tablet', precio: '32000'},
{id: 2833, tipo: 'Escritorio', precio: '18000'},
{id: 3428, tipo: 'Mouse', precio: '5000'},
{id: 1109, tipo: 'Teclado', precio: '8000'},
{id: 9180, tipo: 'Auriculares', precio: '9000'}
];

mostrarDatos(productos);

function mostrarDatos(productos) {

    let c = 0;

    productos.forEach(i => {
        c++;
        
        console.log(`Producto ${c}: 
        ID: #${i.id}
        TIPO: ${i.tipo}
        PRECIO: $${i.precio}
        `);
    });
}