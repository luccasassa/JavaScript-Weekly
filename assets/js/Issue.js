let productos = [
    {id: 1, tipo: 'Mothers', modelo: 'Gigabyte GA-A320M-S2H Ryzen 2da Gen Ready M-ATX', precio: 4610},
    {id: 2, tipo: 'Mothers', modelo: 'Asus PRIME A320M-K Ryzen 2da Gen Ready M-ATX', precio: 4990},
    {id: 3, tipo: 'Mothers', modelo: 'Asrock A320M-HDV R4.03 Ryzen M-ATX', precio: 5800},
    {id: 4, tipo: 'Mothers', modelo: 'MSI A320M PRO-VH AM4', precio: 6370},
    {id: 5, tipo: 'Mothers', modelo: 'Asrock X370M-HDV AM4', precio: 6450},
    {id: 6, tipo: 'Mothers', modelo: 'Gigabyte AB350M V2.0 DS3H AM4', precio: 7430},
    {id: 7, tipo: 'Mothers', modelo: 'Asrock B450M-HDV 4.0 AM4 HDMI M.2', precio: 7875},
    {id: 8, tipo: 'Mothers', modelo: 'Asus PRO A320M-R WI-FI/CSM AM4 OEM', precio: 7980},
    {id: 9, tipo: 'Mothers', modelo: 'Asrock B450M Pro4-F AM4', precio: 8200},
    {id: 10, tipo: 'Mothers', modelo: 'Gigabyte GA-A320M-H AM4', precio: 8330},

    {id: 11, tipo: 'Procesador AMD', modelo: 'Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler', precio: 29999},
    {id: 12, tipo: 'Procesador AMD', modelo: 'Ryzen 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler', precio: 31700},
    {id: 13, tipo: 'Procesador AMD', modelo: 'Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler', precio: 37960},
    {id: 14, tipo: 'Procesador AMD', modelo: 'Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler', precio: 43080},
    {id: 15, tipo: 'Procesador AMD', modelo: 'Ryzen 7 PRO 4750G + Wraith Stealth Cooler OEM', precio: 42230},
    {id: 16, tipo: 'Procesador AMD', modelo: 'Ryzen 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler', precio: 45900},
    {id: 17, tipo: 'Procesador AMD', modelo: 'Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler', precio: 53750},
    {id: 18, tipo: 'Procesador AMD', modelo: 'Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler', precio: 56450},
    {id: 19, tipo: 'Procesador AMD', modelo: 'Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Coole', precio: 82750},
    {id: 20, tipo: 'Procesador AMD', modelo: 'Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler', precio: 118650},

    {id: 21, tipo: 'RAM', modelo: 'Team DDR4 16GB (2x8GB) 2666MHz T-Force Zeus', precio: 9500},
    {id: 22, tipo: 'RAM', modelo: 'GeiL DDR4 16GB 3000MHz EVO X II RGB Black', precio: 9600},
    {id: 23, tipo: 'RAM', modelo: 'OLOy DDR4 16GB 3200MHz Owl Black CL16', precio: 9700},
    {id: 24, tipo: 'RAM', modelo: 'GeiL DDR4 16GB (2x8GB) 3000MHz EVO SPEAR Phantom Gaming Edition', precio: 9800},
    {id: 25, tipo: 'RAM', modelo: 'OLOy DDR4 16GB (2x8GB) Warhawk Red RGB 3000MHz CL16', precio: 10200},
    {id: 26, tipo: 'RAM', modelo: 'OLOy DDR4 16GB Warhawk Black RGB 3000MHz CL16', precio: 10350},
    {id: 27, tipo: 'RAM', modelo: 'OLOy DDR4 16GB Owl Black 3000MHz CL16', precio: 10500},
    {id: 28, tipo: 'RAM', modelo: 'OLOy DDR4 16GB (2x8GB) Warhawk Black RGB 3000MHz CL16', precio: 10650},
    {id: 29, tipo: 'RAM', modelo: 'Adata DDR4 16GB 3600MHz XPG Spectrix D45G RGB CL18', precio: 10800},
    {id: 30, tipo: 'RAM', modelo: 'GeiL DDR4 16GB (2x8GB) 3000MHz Super Luce RGB TUF Edition', precio: 11400},
    
    {id: 31, tipo: 'GPU', modelo: 'MSI GeForce GTX 1660 SUPER 6GB GDDR6 Ventus XS OC', precio: 125000},
    {id: 32, tipo: 'GPU', modelo: 'XFX Radeon RX 6600 XT BLACK 8GB GDDR6 SPEEDSTER QICK308', precio: 131000},
    {id: 33, tipo: 'GPU', modelo: 'Zotac GeForce RTX 2060 6GB GDDR6 Black', precio: 135000},
    {id: 34, tipo: 'GPU', modelo: 'Zotac GeForce RTX 3060 12GB GDDR6 Twin Edge LHR', precio: 138000},
    {id: 35, tipo: 'GPU', modelo: 'MSI GeForce RTX 3060 12GB GDDR6 VENTUS 3X OC LHR', precio: 151000},
    {id: 36, tipo: 'GPU', modelo: 'MSI GeForce RTX 3060 12GB GDDR6 VENTUS 2X OC LHR', precio: 160000},
    {id: 37, tipo: 'GPU', modelo: 'Zotac GeForce RTX 3060 Ti 8GB GDDR6 Twin Edge LHR', precio: 169000},
    {id: 38, tipo: 'GPU', modelo: 'Zotac GeForce RTX 3070 8GB GDDR6 Twin Edge LHR', precio: 185000},
    {id: 39, tipo: 'GPU', modelo: 'MSI GeForce RTX 3060 Ti 8GB GDDR6 VENTUS 2X OCV1 LHR', precio: 200000},
    {id: 40, tipo: 'GPU', modelo: 'PNY GeForce RTX 3080 Ti 12GB GDDR6X REVEL RGB CAJA NEGRA', precio: 380000},

    {id: 41, tipo: 'SSD', modelo: 'Gigabyte 120GB 500MB/s', precio: 3400},
    {id: 42, tipo: 'SSD', modelo: 'Pny 240GB CS900 Sata 3 2.5', precio: 3900},
    {id: 43, tipo: 'SSD', modelo: 'Team 256GB GX2 530MB/s', precio: 3940},
    {id: 44, tipo: 'SSD', modelo: 'WD 240GB GREEN 545MB/s', precio: 5000},
    {id: 45, tipo: 'SSD', modelo: 'M.2 WD 250GB BLUE 560MB/s', precio: 5070},
    {id: 46, tipo: 'SSD', modelo: 'Adata 480GB SU650 550MB/s', precio: 6850},
    {id: 47, tipo: 'SSD', modelo: 'M.2 Adata XPG SX6000 Lite 512GB 1800MB/s NVMe PCI-E x4', precio: 7060},
    {id: 48, tipo: 'SSD', modelo: 'M.2 WD 250GB Black SN750 3100MB/s NVMe PCI-E x4', precio: 8700},
    {id: 49, tipo: 'SSD', modelo: 'Team 1TB GX2 530MB/s', precio: 11200},
    {id: 50, tipo: 'SSD', modelo: 'M.2 WD 1TB Black SE750 3600MB/s NVMe PCIe Gen4', precio: 18600},

    {id: 51, tipo: 'Gabinete', modelo: 'Aerocool Bionic G BK V2 Black 1x 120mm Fan aRGB ATX', precio: 5060},
    {id: 52, tipo: 'Gabinete', modelo: 'Deepcool E-SHIELD', precio: 5600},
    {id: 53, tipo: 'Gabinete', modelo: 'Kolink Inspire K7 ARGB Vidrio Templado', precio: 6030},
    {id: 54, tipo: 'Gabinete', modelo: 'Kolink Quantum dRGB Vidrio Templado 1xCooler 120mm RGB', precio: 6550},
    {id: 55, tipo: 'Gabinete', modelo: 'Xpg Invader TG Black', precio: 7500},
    {id: 56, tipo: 'Gabinete', modelo: 'Deepcool MACUBE310 BK', precio: 8300},
    {id: 57, tipo: 'Gabinete', modelo: 'Deepcool CG540 3 Fans 120mm RGB', precio: 9300},
    {id: 58, tipo: 'Gabinete', modelo: 'Deepcool MACUBE310P WH', precio: 10300},
    {id: 59, tipo: 'Gabinete', modelo: 'Deepcool MATREXX 55 V3 ADD-RGB 3F Black', precio: 11600},
    {id: 60, tipo: 'Gabinete', modelo: 'Lian Li Lancool 205 Mesh W White', precio: 12100},

    {id: 61, tipo: 'Fuente', modelo: 'Cooler Master MWE V2 600W 80 Plus Bronze', precio: 7170},
    {id: 62, tipo: 'Fuente', modelo: 'Sate 750w 80 + Bronze', precio: 10050},
    {id: 63, tipo: 'Fuente', modelo: 'Adata 650W XPG PYLON 80 Plus Bronze', precio: 13500},
    {id: 64, tipo: 'Fuente', modelo: 'Redragon 800W 80+ Bronze GC-PS011', precio: 14500},
    {id: 65, tipo: 'Fuente', modelo: 'Redragon 850W 80+ Gold GC-PS010', precio: 18000},

    {id: 66, tipo: 'Monitor', modelo: 'Samsung 24" Curvo F390', precio: 27900},
    {id: 67, tipo: 'Monitor', modelo: 'FreeSync AMD LG 24" IPS 75Hz 24MK430H-B', precio: 30000},
    {id: 68, tipo: 'Monitor', modelo: 'LG 24" 24MK600M IPS Full HD Bordes Ultra Finos', precio: 34000},
    {id: 69, tipo: 'Monitor', modelo: 'FreeSync AMD 27" TN 75Hz Full HD 27MK400H-B', precio: 34500},
    {id: 70, tipo: 'Monitor', modelo: 'LG 25 Pulgadas Ultrawide IPS25UM58-P', precio: 429000},
    {id: 71, tipo: 'Monitor', modelo: 'Samsung 24" G35 Odyssey Full HD', precio: 45800},
    {id: 72, tipo: 'Monitor', modelo: 'Asus 24" VG248QG 165Hz 1ms FHD', precio: 47750},
    {id: 73, tipo: 'Monitor', modelo: 'Viewsonic 32" Curvo VX3268 2K 144Hz 1ms', precio: 72100},
    {id: 74, tipo: 'Monitor', modelo: 'Acer PREDATOR 27" XB273 144Hz 1ms', precio: 81500},
    {id: 75, tipo: 'Monitor', modelo: 'Viewsonic 24" XG2431 240Hz 1Ms', precio: 84500}
];

const miNuevoMonitor = {
    id: 76,
    tipo: 'Monitor',
    modelo: 'Mi nuevo monitor creado por mi',
    precio: 20000
}
productos.push(miNuevoMonitor);

alert(`F12 ANTES DE EJECUTAR EL PROYECTO.
Los valores se mostrarán por consola.`);

let opcion0 = null, opcion1 = null, opcion2 = null, opcion3 = null;
let busqueda = null;
let mostrarLista = null;
let eliminar = null, tope = null;

menuPrincipal(productos);
/* MAIN */


/* FUNCIONES */

function menuPrincipal(productos) {
    do {
        opcion0 = parseInt(prompt(`(m0) MENU PRINCIPAL:
    1. Buscar e imprimir lista/s de stock.
    2. Buscar e imprimir producto/s de stock.
    3. Eliminar producto de la lista.
    0. SALIR.`));

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

            case 0:
                alert(`Hasta luego!`);
            break;

            default:
                alert(`*** OPCIÓN NO VÁLIDA ***`);
            break;
        }
    } while (opcion0 != 0);
}

//////////////////////////////////////////////////////////

function menu1(productos) {
    do {
        opcion1 = parseInt(prompt(`(m1) QUE STOCK QUERES VER?
        1. Mostrar lista de Mothers.
        2. Mostrar lista de Procesadores.
        3. Mostrar lista de Memorias RAM.
        4. Mostrar lista de GPUs.
        5. Mostrar lista de Sólidos.
        6. Mostrar lista de Gabinetes.
        7. Mostrar lista de Fuentes.
        8. Mostrar lista de Monitores.
        9. Mostrar Stock Completo.
        0. VOLVER ATRAS.`));
        
        switch (opcion1) {
            case 1:
                mostrarLista = productos.filter(objeto => objeto.tipo === "Mothers");
                console.log(mostrarLista);
            break;

            case 2:
                mostrarLista = productos.filter(objeto => objeto.tipo === "Procesador AMD");
                console.log(mostrarLista);
            break;

            case 3:
                mostrarLista = productos.filter(objeto => objeto.tipo === "RAM");
                console.log(mostrarLista);
            break;

            case 4:
                mostrarLista = productos.filter(objeto => objeto.tipo === "GPU");
                console.log(mostrarLista);
            break;

            case 5:
                mostrarLista = productos.filter(objeto => objeto.tipo === "SSD");
                console.log(mostrarLista);
            break;

            case 6:
                mostrarLista = productos.filter(objeto => objeto.tipo === "Gabinete");
                console.log(mostrarLista);
            break;

            case 7:
                mostrarLista = productos.filter(objeto => objeto.tipo === "Fuente");
                console.log(mostrarLista);
            break;

            case 8:
                mostrarLista = productos.filter(objeto => objeto.tipo === "Monitor");
                console.log(mostrarLista);
            break;

            case 9:
                console.log(`---------STOCK COMPLETO---------`);
                productos.forEach(i => {
                    console.log(`Producto #${i.id}
                    TIPO: ${i.tipo}
                    MODELO: ${i.modelo}
                    PRECIO: $${i.precio}`);
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

//////////////////////////////////////////////////////////

function menu2(productos) {
    palabra = prompt(`Buscar:`);
    busqueda = productos.filter(objeto => objeto.modelo === palabra);
    console.log(busqueda);
}

//////////////////////////////////////////////////////////

function menu3(productos) {
    alert(`QUE PRODUCTO DESEA ELIMINAR?
    *** Ingrese un inicio y un final para seleccionar uno o varios productos ***`);

    eliminar = prompt(`INICIO:`);
    tope = prompt(`FINAL:`);

    productos.splice(eliminar,tope);

    console.log(`---------LISTA ACTUALIZADA---------`);
    productos.forEach(i => {
        console.log(`Producto #${i.id}
        TIPO: ${i.tipo}
        MODELO: ${i.modelo}
        PRECIO: $${i.precio}`);
    });
}