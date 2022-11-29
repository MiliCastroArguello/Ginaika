function promedioEdad (usuario1,usuario2,usuario3,usuario4,usuario5){
    let promedio = (usuario1 + usuario2 + usuario3 + usuario4 + usuario5)/5;
    let mensaje = `El promedio de edad de la gente que ingresó a la web es de: ${promedio}`;
    alert(mensaje);
}

let usuario1 = parseInt(prompt ("Ingrese su Edad"));
if (usuario1 >17){
    alert ("Completar encuesta - Mayor de edad")
} else {
    alert ("Menor de edad")
}
let usuario2 = parseInt(prompt ("Ingrese su Edad"));
if (usuario2 >17){
    alert ("Completar encuesta - Mayor de edad")
} else {
    alert ("Menor de edad")
}
let usuario3 = parseInt(prompt ("Ingrese su Edad"));
if (usuario3 >17){
    alert ("Completar encuesta - Mayor de edad")
} else {
    alert ("Menor de edad")
}
let usuario4 = parseInt (prompt ("Ingrese su Edad"));
if (usuario4 >17){
    alert ("Completar encuesta - Mayor de edad")
} else {
    alert ("Menor de edad")
}
let usuario5 = parseInt (prompt ("Ingrese su Edad"));
if (usuario5 >17){
    alert ("Completar encuesta - Mayor de edad")
} else {
    alert ("Menor de edad")
}

promedioEdad (usuario1,usuario2,usuario3,usuario4,usuario5);
alert ("Los datos fueron ingresados correctamente");



