//Pushbar Plugin
let pushbar = new Pushbar({
    blur: true,
    overlay: true
});

let intervalo = setTimeout(()=>{
    pushbar.open("pushbar-newsletter");
},5000);


//Swipper sliders
new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    initialSlide: 2,
    speed: 1000,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    mousewheel: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


//Variables
const d = document;
const productos = d.querySelector(".productos")
const template = d.querySelector(".template").content
const fragment = document.createDocumentFragment()


//Traer datos
addEventListener("DOMContentLoaded", async() => {
    try {
        const resultado = await fetch("../stock.json")
        const datos = await resultado.json()

        // console.log(datos)
        mostrarStock(datos)

    } catch (e) {
        console.log('Error [' + e + ']. No se pudo fetchear el .json');
    }
})


//Srock de productos FETCH
const mostrarStock = (datos) => {
    datos.forEach(i => {
        template.querySelector("img").setAttribute("src", i.img)
        template.querySelector(".nombre").textContent = i.producto
        template.querySelector(".genero").textContent = i.genero
        template.querySelector(".precio").textContent = i.precio
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    });

    productos.appendChild(fragment) //? ? ? ? ? ? ? ? ? ? ? ? ?
}


//Dark Mode
const input = d.getElementById("input-color-switch");

input.addEventListener("click", () => {

    if (input.checked) {
        d.body.classList.add("dark-mode")
        localStorage.setItem('oscuro', 'true')

    } else {
        d.body.classList.remove("dark-mode")
        localStorage.setItem('oscuro', 'false')
    }
})


//LocalStorage para DarkMode
if (localStorage.getItem('oscuro') === 'true') {
    d.body.classList.add("dark-mode")
    input.checked = true
} else {
    d.body.classList.remove("dark-mode")
    input.checked = false
}