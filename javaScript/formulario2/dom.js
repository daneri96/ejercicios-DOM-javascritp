'use strict'


function validacion() {
    // regexPara datos nombre y telefono
    var regXnombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    var regXtelefono = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    var regDni = /(^([0-9]{8,8}\-[A-Z])|^)$/;
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", () => {
        //capturamos los input y el span que mostrara si validan o no
        var nombre = document.getElementById("nombre");
        var telefono = document.getElementById("telefono");
        var dni = document.getElementById("dni");
        var valido = document.getElementById("valido");
        if (regXnombre.test(nombre.value) && regXtelefono.test(telefono.value) && regDni.test(dni.value)) {
            valido.innerHTML = "correcto";
            valido.style.color = "blue";
        } else {
            valido.innerHTML = "incorrecto";
            valido.style.color = "red";
        }
    });
}

validacion();