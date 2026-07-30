const botonMenu = document.getElementById("boton-menu");
const enlacesNavegacion = document.getElementById("enlaces-navegacion");
const elementoAnio = document.getElementById("anio");


botonMenu.addEventListener("click", function () {
    enlacesNavegacion.classList.toggle("activo");
});


const enlaces = enlacesNavegacion.querySelectorAll("a");

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        enlacesNavegacion.classList.remove("activo");
    });
});


const anioActual = new Date().getFullYear();

elementoAnio.textContent = anioActual;

const botonesHabilidades = document.querySelectorAll(".habilidad-boton");

botonesHabilidades.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const tarjeta = boton.closest(".habilidad-desplegable");
        const estaAbierta = tarjeta.classList.contains("activa");

        tarjeta.classList.toggle("activa");

        boton.setAttribute("aria-expanded", String(!estaAbierta));
    });
});