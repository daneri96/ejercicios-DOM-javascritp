'use strict'

function valido() {
    //validación de email y password
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i; //digitos,mayusculas y minisculas
    var enviar = document.getElementById("enviar");

    enviar.addEventListener("click", () => {
        //elementos capturados para poder realizar una correción 
        var micaja = document.getElementById("email");
        var pass = document.getElementById("password");
        var valido = document.getElementById("valido");

        if (emailRegex.test(micaja.value) && password.test(pass.value)) {
            valido.innerHTML = "correcto";
            valido.style.color = "green";
        } else {
            valido.innerHTML = "incorrecto";
            valido.style.color = "red";
        }
    });
}

valido();