'use strict'

function validar() {

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    var enviar = document.getElementById("enviar");

    enviar.addEventListener("click", () => {
        var micaja = document.getElementById("micaja");

        //test ejecuta la busqueda y devuelve si es el valor es true or false
        if (emailRegex.test(micaja.value)) {
            var correcto = document.getElementById("correcto");
            correcto.innerHTML = "correcto";
        } else {
            var correcto = document.getElementById("correcto");
            correcto.innerHTML = "incorrecto";
        }
    });
}

validar();