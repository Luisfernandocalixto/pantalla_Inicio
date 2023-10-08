function mostrarHora() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();


    let format = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh -= 12;
        format = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let tiempo = hh + ":" + mm + " " + format;

    let mostrar = document.querySelector('#reloj');  // referencia a reloj => id="reloj"
    mostrar.textContent = tiempo;
    // 
    let dia = date.getDay();
    let diaNum = date.getDate();
    let mes = date.getMonth();
    let anio = date.getFullYear();

    if (dia == 0) {
        dia = "Domingo";
    }
    else if (dia == 1) {
        dia = "Lunes";
    }
    else if (dia == 2) {
        dia = "Martes";
    }
    else if (dia == 3) {
        dia = "Miércoles";
    }
    else if (dia == 4) {
        dia = "Jueves";
    }
    else if (dia == 5) {
        dia = "Viernes";
    }
    else if (dia == 6) {
        dia = "Sabado";
    }

    // 
    if (mes == 0) {
        mes = "Enero";
    }
    else if (mes == 1) {
        mes = "Febrero";

    }
    else if (mes == 2) {
        mes = "Marzo";
    }
    else if (mes == 3) {
        mes = "Abril";
    }
    else if (mes == 4) {
        mes = "Mayo";
    }
    else if (mes == 5) {
        mes = "Junio";
    }
    else if (mes == 6) {
        mes = "Julio";
    }
    else if (mes == 7) {
        mes = "Agosto";
    }
    else if (mes == 8) {
        mes = "Septiembre";
    }
    else if (mes == 9) {
        mes = "Octubre";
    }
    else if (mes == 10) {
        mes = "Noviembre";
    }
    else if (mes == 11) {
        mes = "Diciembre";
    }

    // 
    let tiempoFecha = dia + " " + diaNum + " de " + mes + " " + anio;
    // 
    let mostrarFecha = document.querySelector('#fecha'); // referencia a fecha => id="fecha"
    mostrarFecha.textContent = tiempoFecha;

}

setInterval(mostrarHora, 1000);