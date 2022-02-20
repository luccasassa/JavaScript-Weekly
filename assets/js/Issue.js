/* <MAIN */

let productos = [
    {id: 1, categoria: 'Mother', modelo: 'Gigabyte GA-A320M-S2H Ryzen 2da Gen Ready M-ATX', precio: 4610},
    {id: 2, categoria: 'Mother', modelo: 'Asus PRIME A320M-K Ryzen 2da Gen Ready M-ATX', precio: 4990},
    {id: 3, categoria: 'Mother', modelo: 'Asrock A320M-HDV R4.03 Ryzen M-ATX', precio: 5800},
    {id: 4, categoria: 'Mother', modelo: 'MSI A320M PRO-VH AM4', precio: 6370},
    {id: 5, categoria: 'Mother', modelo: 'Asrock X370M-HDV AM4', precio: 6450},
    {id: 6, categoria: 'Mother', modelo: 'Gigabyte AB350M V2.0 DS3H AM4', precio: 7430},
    {id: 7, categoria: 'Mother', modelo: 'Asrock B450M-HDV 4.0 AM4 HDMI M.2', precio: 7875},
    {id: 8, categoria: 'Mother', modelo: 'Asus PRO A320M-R WI-FI/CSM AM4 OEM', precio: 7980},
    {id: 9, categoria: 'Mother', modelo: 'Asrock B450M Pro4-F AM4', precio: 8200},
    {id: 10, categoria: 'Mother', modelo: 'Gigabyte GA-A320M-H AM4', precio: 8330},

    {id: 11, categoria: 'Procesador AMD', modelo: 'Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler', precio: 29999},
    {id: 12, categoria: 'Procesador AMD', modelo: 'Ryzen 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler', precio: 31700},
    {id: 13, categoria: 'Procesador AMD', modelo: 'Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler', precio: 37960},
    {id: 14, categoria: 'Procesador AMD', modelo: 'Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler', precio: 43080},
    {id: 15, categoria: 'Procesador AMD', modelo: 'Ryzen 7 PRO 4750G + Wraith Stealth Cooler OEM', precio: 42230},
    {id: 16, categoria: 'Procesador AMD', modelo: 'Ryzen 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler', precio: 45900},
    {id: 17, categoria: 'Procesador AMD', modelo: 'Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler', precio: 53750},
    {id: 18, categoria: 'Procesador AMD', modelo: 'Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler', precio: 56450},
    {id: 19, categoria: 'Procesador AMD', modelo: 'Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Coole', precio: 82750},
    {id: 20, categoria: 'Procesador AMD', modelo: 'Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler', precio: 118650},

    {id: 21, categoria: 'RAM', modelo: 'Team DDR4 16GB (2x8GB) 2666MHz T-Force Zeus', precio: 9500},
    {id: 22, categoria: 'RAM', modelo: 'GeiL DDR4 16GB 3000MHz EVO X II RGB Black', precio: 9600},
    {id: 23, categoria: 'RAM', modelo: 'OLOy DDR4 16GB 3200MHz Owl Black CL16', precio: 9700},
    {id: 24, categoria: 'RAM', modelo: 'GeiL DDR4 16GB (2x8GB) 3000MHz EVO SPEAR Phantom Gaming Edition', precio: 9800},
    {id: 25, categoria: 'RAM', modelo: 'OLOy DDR4 16GB (2x8GB) Warhawk Red RGB 3000MHz CL16', precio: 10200},
    {id: 26, categoria: 'RAM', modelo: 'OLOy DDR4 16GB Warhawk Black RGB 3000MHz CL16', precio: 10350},
    {id: 27, categoria: 'RAM', modelo: 'OLOy DDR4 16GB Owl Black 3000MHz CL16', precio: 10500},
    {id: 28, categoria: 'RAM', modelo: 'OLOy DDR4 16GB (2x8GB) Warhawk Black RGB 3000MHz CL16', precio: 10650},
    {id: 29, categoria: 'RAM', modelo: 'Adata DDR4 16GB 3600MHz XPG Spectrix D45G RGB CL18', precio: 10800},
    {id: 30, categoria: 'RAM', modelo: 'GeiL DDR4 16GB (2x8GB) 3000MHz Super Luce RGB TUF Edition', precio: 11400},
    
    {id: 31, categoria: 'GPU', modelo: 'MSI GeForce GTX 1660 SUPER 6GB GDDR6 Ventus XS OC', precio: 125000},
    {id: 32, categoria: 'GPU', modelo: 'XFX Radeon RX 6600 XT BLACK 8GB GDDR6 SPEEDSTER QICK308', precio: 131000},
    {id: 33, categoria: 'GPU', modelo: 'Zotac GeForce RTX 2060 6GB GDDR6 Black', precio: 135000},
    {id: 34, categoria: 'GPU', modelo: 'Zotac GeForce RTX 3060 12GB GDDR6 Twin Edge LHR', precio: 138000},
    {id: 35, categoria: 'GPU', modelo: 'MSI GeForce RTX 3060 12GB GDDR6 VENTUS 3X OC LHR', precio: 151000},
    {id: 36, categoria: 'GPU', modelo: 'MSI GeForce RTX 3060 12GB GDDR6 VENTUS 2X OC LHR', precio: 160000},
    {id: 37, categoria: 'GPU', modelo: 'Zotac GeForce RTX 3060 Ti 8GB GDDR6 Twin Edge LHR', precio: 169000},
    {id: 38, categoria: 'GPU', modelo: 'Zotac GeForce RTX 3070 8GB GDDR6 Twin Edge LHR', precio: 185000},
    {id: 39, categoria: 'GPU', modelo: 'MSI GeForce RTX 3060 Ti 8GB GDDR6 VENTUS 2X OCV1 LHR', precio: 200000},
    {id: 40, categoria: 'GPU', modelo: 'PNY GeForce RTX 3080 Ti 12GB GDDR6X REVEL RGB CAJA NEGRA', precio: 380000},

    {id: 41, categoria: 'SSD', modelo: 'Gigabyte 120GB 500MB/s', precio: 3400},
    {id: 42, categoria: 'SSD', modelo: 'Pny 240GB CS900 Sata 3 2.5', precio: 3900},
    {id: 43, categoria: 'SSD', modelo: 'Team 256GB GX2 530MB/s', precio: 3940},
    {id: 44, categoria: 'SSD', modelo: 'WD 240GB GREEN 545MB/s', precio: 5000},
    {id: 45, categoria: 'SSD', modelo: 'M.2 WD 250GB BLUE 560MB/s', precio: 5070},
    {id: 46, categoria: 'SSD', modelo: 'Adata 480GB SU650 550MB/s', precio: 6850},
    {id: 47, categoria: 'SSD', modelo: 'M.2 Adata XPG SX6000 Lite 512GB 1800MB/s NVMe PCI-E x4', precio: 7060},
    {id: 48, categoria: 'SSD', modelo: 'M.2 WD 250GB Black SN750 3100MB/s NVMe PCI-E x4', precio: 8700},
    {id: 49, categoria: 'SSD', modelo: 'Team 1TB GX2 530MB/s', precio: 11200},
    {id: 50, categoria: 'SSD', modelo: 'M.2 WD 1TB Black SE750 3600MB/s NVMe PCIe Gen4', precio: 18600},

    {id: 51, categoria: 'Gabinete', modelo: 'Aerocool Bionic G BK V2 Black 1x 120mm Fan aRGB ATX', precio: 5060},
    {id: 52, categoria: 'Gabinete', modelo: 'Deepcool E-SHIELD', precio: 5600},
    {id: 53, categoria: 'Gabinete', modelo: 'Kolink Inspire K7 ARGB Vidrio Templado', precio: 6030},
    {id: 54, categoria: 'Gabinete', modelo: 'Kolink Quantum dRGB Vidrio Templado 1xCooler 120mm RGB', precio: 6550},
    {id: 55, categoria: 'Gabinete', modelo: 'Xpg Invader TG Black', precio: 7500},
    {id: 56, categoria: 'Gabinete', modelo: 'Deepcool MACUBE310 BK', precio: 8300},
    {id: 57, categoria: 'Gabinete', modelo: 'Deepcool CG540 3 Fans 120mm RGB', precio: 9300},
    {id: 58, categoria: 'Gabinete', modelo: 'Deepcool MACUBE310P WH', precio: 10300},
    {id: 59, categoria: 'Gabinete', modelo: 'Deepcool MATREXX 55 V3 ADD-RGB 3F Black', precio: 11600},
    {id: 60, categoria: 'Gabinete', modelo: 'Lian Li Lancool 205 Mesh W White', precio: 12100},

    {id: 61, categoria: 'Fuente', modelo: 'Cooler Master MWE V2 600W 80 Plus Bronze', precio: 7170},
    {id: 62, categoria: 'Fuente', modelo: 'Sate 750w 80 + Bronze', precio: 10050},
    {id: 63, categoria: 'Fuente', modelo: 'Adata 650W XPG PYLON 80 Plus Bronze', precio: 13500},
    {id: 64, categoria: 'Fuente', modelo: 'Redragon 800W 80+ Bronze GC-PS011', precio: 14500},
    {id: 65, categoria: 'Fuente', modelo: 'Redragon 850W 80+ Gold GC-PS010', precio: 18000},

    {id: 66, categoria: 'Monitor', modelo: 'Samsung 24" Curvo F390', precio: 27900},
    {id: 67, categoria: 'Monitor', modelo: 'FreeSync AMD LG 24" IPS 75Hz 24MK430H-B', precio: 30000},
    {id: 68, categoria: 'Monitor', modelo: 'LG 24" 24MK600M IPS Full HD Bordes Ultra Finos', precio: 34000},
    {id: 69, categoria: 'Monitor', modelo: 'FreeSync AMD 27" TN 75Hz Full HD 27MK400H-B', precio: 34500},
    {id: 70, categoria: 'Monitor', modelo: 'LG 25 Pulgadas Ultrawide IPS25UM58-P', precio: 429000},
    {id: 71, categoria: 'Monitor', modelo: 'Samsung 24" G35 Odyssey Full HD', precio: 45800},
    {id: 72, categoria: 'Monitor', modelo: 'Asus 24" VG248QG 165Hz 1ms FHD', precio: 47750},
    {id: 73, categoria: 'Monitor', modelo: 'Viewsonic 32" Curvo VX3268 2K 144Hz 1ms', precio: 72100},
    {id: 74, categoria: 'Monitor', modelo: 'Acer PREDATOR 27" XB273 144Hz 1ms', precio: 81500}
];

const miNuevoMonitor = {
    id: 75,
    categoria: 'Monitor',
    modelo: 'Viewsonic 24" XG2431 240Hz 1Ms',
    precio: 84500
}
productos.push(miNuevoMonitor);

let id, categoria, modelo, precio;
let opcion0 = null, opcion1 = null;
let busqueda = null, palabra = null;
let mostrarLista = null;
let eliminarInicio = null, eliminarFin = null;

alert(`F12 ANTES DE EJECUTAR EL PROYECTO.
Los valores se mostrarán por consola.`);

menuPrincipal(productos);

/* MAIN> */


/* <FUNCIONES */

function menuPrincipal(productos) {
    do {
        opcion0 = parseInt(prompt(`(m0) MENU PRINCIPAL:
        1. Filtrar stock.
        2. Agregar producto/s.
        3. Eliminar producto/s.
        0. SALIR.`));
        // 4. Modificar productos. EN CUANTO SEPA COMO HACERLO, LO AGREGO.

        switch (opcion0) {
            case 1:
                menu1(productos);
            break;

            case 2:
                menu2(productos);
            break;
                
            case 3:
                menu3(productos);
            break;
            
            case 4:
                menu4(productos);
            break;

            case 0:
                alert(`Hasta luego!`);
            break;

            default:
                alert(`*** OPCIÓN NO VÁLIDA ***`);
            break;
        }
    } while (opcion0 != 0);
}

//////////////////////////////////////////////////////////////

function menu1(productos) {
    do {
        opcion1 = parseInt(prompt(`(m1) QUE STOCK QUERES VER?
        1. Mostrar Stock de Mothers.
        2. Mostrar Stock de Procesadores.
        3. Mostrar Stock de Memorias RAM.
        4. Mostrar Stock de GPUs.
        5. Mostrar Stock de Sólidos.
        6. Mostrar Stock de Gabinetes.
        7. Mostrar Stock de Fuentes.
        8. Mostrar Stock de Monitores.
        9. Mostrar Stock Completo.
        0. VOLVER ATRAS.`));
        
        switch (opcion1) {
            case 1:
                mostrarLista = productos.filter(producto => producto.categoria === "Mother");
                console.log(`---------STOCK MOTHERS---------`);
                console.log(mostrarLista);
            break;

            case 2:
                mostrarLista = productos.filter(producto => producto.categoria === "Procesador AMD");
                console.log(`---------STOCK PROCESADORES AMD---------`);
                console.log(mostrarLista);
            break;

            case 3:
                mostrarLista = productos.filter(producto => producto.categoria === "RAM");
                console.log(`---------STOCK RAMs---------`);
                console.log(mostrarLista);
            break;

            case 4:
                mostrarLista = productos.filter(producto => producto.categoria === "GPU");
                console.log(`---------STOCK GRÁFICAS---------`);
                console.log(mostrarLista);
            break;

            case 5:
                mostrarLista = productos.filter(producto => producto.categoria === "SSD");
                console.log(`---------STOCK SÓLIDOS---------`);
                console.log(mostrarLista);
            break;

            case 6:
                mostrarLista = productos.filter(producto => producto.categoria === "Gabinete");
                console.log(`---------STOCK GABINETES---------`);
                console.log(mostrarLista);
            break;

            case 7:
                mostrarLista = productos.filter(producto => producto.categoria === "Fuente");
                console.log(`---------STOCK FUENTES---------`);
                console.log(mostrarLista);
            break;

            case 8:
                mostrarLista = productos.filter(producto => producto.categoria === "Monitor");
                console.log(`---------STOCK MONITORES---------`);
                console.log(mostrarLista);
            break;

            case 9:
                console.log(`---------STOCK COMPLETO---------`);
                productos.forEach(i => {
                    console.log('Producto #' + i.id + '\n'+
                    'CATEGORIA: $' + i.categoria + '\n'+
                    'MODELO: ' + i.modelo + '\n'+
                    'PRECIO: $' + i.precio);
                });
            break;

            case 0:
                menuPrincipal(productos);
            break;
            
            default:
                alert(`*** OPCIÓN NO VÁLIDA ***`);
            break;
        }
    } while (opcion1 != 0);
}

//////////////////////////////////////////////////////////////

function menu2(productos) {
    id = parseInt(prompt(`Ingrese el ID del nuevo producto:`));
    categoria = prompt(`Ingrese la CATEGORIA del nuevo producto:`);
    modelo = prompt(`Ingrese el MODELO del nuevo producto:`);
    precio = parseInt(prompt(`Ingrese el PRECIO del nuevo producto:`));

    class P {
        constructor(a,b,c,d) {
            this.id = a;
            this.categoria = b;
            this.modelo = c;
            this.precio = d;
        }
    }
    
    productos.push(new P(id,categoria,modelo,precio));
}

//////////////////////////////////////////////////////////////

function menu3(productos) {
    alert(`QUE PRODUCTO/S DESEA ELIMINAR?
    *** Ingrese un inicio y un final para seleccionar uno o varios productos ***`);

    eliminarInicio = prompt(`INICIO:`);
    eliminarFin = prompt(`FINAL:`);
    productos.splice(eliminarInicio,eliminarFin);
}

/* FUNCIONES> */