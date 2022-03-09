const d = document;
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

//aplico LocalStorage
if (localStorage.getItem('oscuro') === 'true') {
    d.body.classList.add("dark-mode")
    input.checked = true
} else {
    d.body.classList.remove("dark-mode")
    input.checked = false
}