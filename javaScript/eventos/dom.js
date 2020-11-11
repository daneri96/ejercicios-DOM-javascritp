'use strict'

function lista() {

    var array = ["Batman", "Superman", "Spiderman"];
    var listas = document.getElementById("miLista");
    array.forEach(elemento => {
        var li = document.createElement('li');
        li.textContent = elemento; //añade el contenido de la lista
        listas.appendChild(li);

        li.id = "mislistas";

    });


    var boton = document.getElementById("miBoton");

    boton.addEventListener("click", () => {
        var caja = document.getElementById("micaja").value; //valor que hay en la caja
        var li = document.createElement('li');
        li.textContent = caja;
        listas.appendChild(li);

    });

}



lista();