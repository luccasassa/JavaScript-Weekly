/* Diseño algorítmico de una cafetera básica */

alert(`*** Essenza Mini | Nespresso ® ***
BIENVENIDO! CONFIGURE DESDE CERO SU CAFETERA`);

let nombre = prompt(`Ingrese su nombre por favor:`);
let capMaxima = 10;
let cantActual = 0;
let opcion = 999;

alert(`Recuerde que la capacidad máxima de la cafetera son ${capMaxima} cápsulas.
Proceda al MENU.`);

menu(capMaxima,cantActual,opcion, nombre);

/* FUNCION */

function menu(capMaxima,cantActual,opcion,nombre) {
    
    do {
        opcion = parseInt(prompt(`SELECCIONE UNA OPCION:
        1. Llenar cafetera.
        2. Servir taza.
        3. Vaciar cafetera.
        4. Agregar cápsulas.
        5. Mostrar estado actual de la cafetera.
        0. SALIR`));
        
        switch (opcion) {
            case 1:
                if (cantActual != capMaxima) {
                    cantActual = capMaxima;
                    alert(`*** CAFETERA LLENA ***`);
            
                } else {
                    alert(`*** LA CAFETERA YA ESTÁ LLENA ***`);
                }
            break;

            case 2:
                if (cantActual <= 0) {
                    alert(`CÁPSULAS INSUFICIENTES
                    Por favor primero llene o agregue cápsulas a la cafetera.`);
            
                } else {
                    cantActual--;
                    alert(`*** CAFÉ SERVIDO ***`);
                }
            break;

            case 3:
                if (cantActual != 0) {
                    cantActual = 0;
                    alert(`*** CAFETERA VACÍA ***`);
            
                } else {
                    alert(`*** LA CAFETERA YA ESTÁ VACÍA ***`);
                }
            break;

            case 4:
                if (cantActual >= capMaxima) {
                    alert(`LA CAFETERA YA ESTÁ LLENA
                    No se pueden agregar más cápsulas.`);
                    
                } else {
                    let agrego = parseInt(prompt(`Cuántas cápsulas desea agregar?`));
                    
                    if ((cantActual + agrego) > capMaxima) {
                        alert(`*** IMPOSIBLE DE AGREGAR ***
                        La cantidad que ingresó supera la capacidad máxima de la cafetera.`);
            
                    } else {
                        alert(`*** CAFÉ AGREGADO CORRECTAMENTE ***`);
                        cantActual += agrego;
                    }
                }
            break;

            case 5:
                alert(`Cantidad de cápsulas actual de la cafetera: ${cantActual}`);
            break;

            case 0:
                alert(`Hasta luego ${nombre}!`);
            break;

            default:
                alert(`*** OPCIÓN NO VÁLIDA ***`);
            break;
        }
    } while (opcion != 0);
}