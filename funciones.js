function comprobar(formulario) {
    var error = "" // Variable que contendrá el mensaje de alerta.
    var datoOk = true; // Boolean que devolverá si hay o no fallos.
    var contador = 0; // Contador de fallos
    var error1 = error2 = error3 = error4 = error5 = error6 = error7 = error8 = ""; // Variables que iran mostrando cada error.

    /* Empiezo filtrando desde el final, para fijar el focus en 
    el campo más arriba que tenga errores.*/

    /* Añado borde rojo a los campos con error. */

    if (!formulario.acepta.checked) {
        formulario.acepta.focus();
        formulario.acepta.style.border = "3px solid red";
        error8 = "- Tienes que aceptar las condiciones.\n";
        datoOk = false;
        contador++;

        // Si rellenamos el campo bien, devuelve el borde normal.

    } else {
        formulario.acepta.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (formulario.voto.value == "") {
        formulario.voto.focus();
        formulario.voto.style.border = "2px solid red";
        error7 = "- Votación\n";
        datoOk = false;
        contador++;
    } else {
        formulario.voto.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (formulario.psw.value == "" || (formulario.psw.value != formulario.pswOk.value)) {
        formulario.psw.focus();
        formulario.psw.style.border = "2px solid red";
        formulario.pswOk.style.border = "2px solid red";
        error6 = "- Contraseña\n";
        datoOk = false;
        contador++;
    } else {
        formulario.psw.style.border = "3px solid rgb(186, 123, 68)";
        formulario.pswOk.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (formulario.aficiones.value == "") {
        formulario.aficiones.focus();
        formulario.aficiones.style.border = "2px solid red";
        error5 = "- Aficiones\n";
        datoOk = false;
        contador++;
    } else {
        formulario.aficiones.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (!formulario.hombre.checked && !formulario.mujer.checked) {
        formulario.hombre.focus();
        document.getElementById('genero').style.border = "2px solid red";
        error4 = "- Sexo\n";
        datoOk = false;
        contador++;
    } else {
        document.getElementById('genero').style.border = "none";
    }

    var expMail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (!expMail.test(formulario.mail.value)) {
        formulario.mail.focus();
        formulario.mail.style.border = "2px solid red";
        error3 = "- Mail\n";
        datoOk = false;
        contador++;
    } else {
        formulario.mail.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (formulario.apellidos.value.length == 0) {
        formulario.apellidos.focus();
        formulario.apellidos.style.border = "2px solid red";
        error2 = "- Apellido(s)\n";
        datoOk = false;
        contador++;
    } else {
        formulario.apellidos.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (formulario.nombre.value.length < 2) {
        formulario.nombre.focus();
        formulario.nombre.style.border = "2px solid red";
        error1 = "- Nombre\n";
        datoOk = false;
        contador++;
    } else {
        formulario.nombre.style.border = "3px solid rgb(186, 123, 68)";
    }

    if (!datoOk) {
        var msjError = "Los siguientes " + contador + " campos faltan o son erróneos:\n";
        msjError += error1 + error2 + error3 + error4 + error5 + error6 + error7 + error8;
        alert(msjError);
    }
    return datoOk;

}