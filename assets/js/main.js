//Variables
const d = document
const logo = d.querySelector(".logo")
const tema = d.querySelector(".tema")

//Fetch stock.json
const productos = d.querySelector(".productos")
const template = d.querySelector(".template").content
const fragment = d.createDocumentFragment()

//Agregar productos al carrito
const contenidoMid = d.querySelector('.contenido-mid')
const contenidoBot = d.querySelector('.contenido-bot')
const templateCarritoMid = d.querySelector('.template-carrito-mid').content
const templateCarritoBot = d.querySelector('.template-carrito-bot').content
let carrito = {}

//Modal windows
const modalContainerCarrito = d.querySelector('#modal_container-carrito');
const openCarrito = d.querySelector('#open-carrito');
const closeCarrito = d.querySelector('#close-carrito');
//
const modalContainerLogin = d.querySelector("#modal_container-login")
const openLogin = d.querySelector('#open-login');
const closeLogin = d.querySelector('#close-login');
//
const modalContainerSignin = d.querySelector("#modal_container-signin")
const openSignin = d.querySelector('#open-signin');
const closeSignin = d.querySelector('#close-signin');


//Traer datos JSON
addEventListener("load", async () => {
    try {
        const resultado = await fetch("../db.json")
        const datos = await resultado.json()

        console.table(datos)
        mostrarStock(datos)

    } catch (e) {
        console.log('No se pudo fetchear el .json');
    }
})


//Stock de productos FETCH
const mostrarStock = (datos) => {
    datos.forEach(i => {
        template.querySelector(".titulo").textContent = i.titulo
        template.querySelector(".subtitulo").textContent = i.subtitulo
        template.querySelector(".descripcion").textContent = i.descripcion
        template.querySelector(".precio").textContent = i.precio
        template.querySelector(".agregar").dataset.id = i.id
        template.querySelector("img").setAttribute("src", i.img)

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    });

    productos.appendChild(fragment)
}


//Detectar boton producto
productos.addEventListener('click', (e) => {
    addCarrito(e)
})


//Detectar botones suma/resta
contenidoMid.addEventListener('click', (e) => {
    btnAccion(e)
})


//Carrito agregar objetos
const addCarrito = (e) => {

    if (e.target.classList.contains('agregar')) {
        //éste método me trae todos los datos del producto al tocar su boton
        setCarrito(e.target.parentElement)
    }
    //detiene cualquier otro evento que se pueda generar en 
    e.stopPropagation()
}


//Carrito modificar objetos
const setCarrito = objeto => {
    //esté metodo agrega los datos al objeto vacio (agregados) para rellenarlo
    const producto = {
        id: objeto.querySelector('.agregar').dataset.id,
        titulo: objeto.querySelector(".titulo").textContent,
        precio: objeto.querySelector(".precio").textContent,
        // img: objeto.querySelector('img').dataset.id,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad+1
    }

    carrito[producto.id] = {...producto}
    pintarCarritoMid()
}


//Carrito pintar mid
const pintarCarritoMid = () => {

    contenidoMid.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarritoMid.querySelector('.nombre-producto').textContent = producto.titulo
        templateCarritoMid.querySelector('.restar').dataset.id = producto.id
        templateCarritoMid.querySelector('.cant-producto').textContent = producto.cantidad
        templateCarritoMid.querySelector('.sumar').dataset.id = producto.id
        templateCarritoMid.querySelector('.precio-producto').textContent = producto.cantidad * producto.precio
        // templateCarritoMid.querySelector('img').dataset.id = producto.img


        const clone = templateCarritoMid.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenidoMid.appendChild(fragment)

    pintarCarritoBot()
}


//Carrito pintar bot
const pintarCarritoBot = () => {

    contenidoBot.innerHTML = ''

    if (Object.values(carrito).length == 0) {
        contenidoBot.innerHTML = `
        <div class="carrito-vacio">
            <span class="esta-vacio">SU CARRITO ESTÁ VACÍO</span>
        </div>
        `
        return
    }

    //acumulador
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

    templateCarritoBot.querySelector('.cantidad-total').textContent = nCantidad
    templateCarritoBot.querySelector('.precio-total').textContent = nPrecio

    const clone = templateCarritoBot.cloneNode(true)
    fragment.appendChild(clone)
    contenidoBot.appendChild(fragment)

    //Vaciar carrito
    d.querySelector('.vaciar-carrito').addEventListener('click', () => {
        carrito = {};
        pintarCarritoMid();
    })
}

const btnAccion = (e) => {
    //acction de aumentar
    if (e.target.classList.contains('sumar')) {
        // console.log(carrito[e.target.dataset.id])

        const producto = carrito[e.target.dataset.id]
        producto.cantidad++

        carrito[e.target.dataset.id] = {...producto}
        pintarCarritoMid();
    }

    if (e.target.classList.contains('restar')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--

        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }

        pintarCarritoMid()
    }

    e.stopPropagation()
}


//////////////////////////////////////////////////////////////////


//Carrito modal window
openCarrito.addEventListener('click', () => {
    modalContainerCarrito.classList.add('show-carrito');
});

closeCarrito.addEventListener('click', () => {
    modalContainerCarrito.classList.remove('show-carrito');
});


//Login modal window
openLogin.addEventListener('click', () => {
    modalContainerLogin.classList.add('show-login');
});

closeLogin.addEventListener('click', () => {
    modalContainerLogin.classList.remove('show-login');
});


//Login modal window
openSignin.addEventListener('click', () => {
    modalContainerSignin.classList.add('show-signin');
});

closeSignin.addEventListener('click', () => {
    modalContainerSignin.classList.remove('show-signin');
});


//Form alert
d.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    alert(JSON.stringify(data))
})


//Newsletter
d.querySelector('#newsletter').addEventListener('submit', (e) => {
    alert('GRACIAS POR SUSCRIBIRTE A NUESTRO NEWSLETTER')
})


//DarkMode
tema.addEventListener("click", () => {

    if (!d.body.classList.contains("dark")) {
        d.body.classList.add("dark")
        localStorage.setItem('temaOscuro', 'true')
        tema.textContent = "light_mode"
        logo.src = "./assets/img/logo/logo-blanco.png"

    } else {
        d.body.classList.remove("dark")
        localStorage.setItem('temaOscuro', 'false')
        tema.textContent = "bedtime"
        logo.src = "./assets/img/logo/logo-negro.png"
    }
})


//LocalStorage
if (localStorage.getItem('temaOscuro') === true) {
    d.body.classList.add("dark")
    tema.textContent = "light_mode"
    logo.src = "./assets/img/logo/logo-blanco.png"

} else {
    d.body.classList.remove("dark")
    tema.textContent = "bedtime"
    logo.src = "./assets/img/logo/logo-negro.png"
}