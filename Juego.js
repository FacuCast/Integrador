function Ganador(r) {
    for (let u = 1; u <= cant_jugadores; u++) {
        
        if (mayor < participantes.puntuacion[u]) {
            ganar = u;
            mayor = participantes.puntuacion[u]
        }
    }
}
function Perdedor(r) {
    menor = mayor;
    for (let u = 1; u <= cant_jugadores; u++) {
        
        if (menor > participantes.puntuacion[u]) {
            loser = u;
            menor = participantes.puntuacion[u]
        }
    }
}
function mujeres(r) {
    for (let u = 1; u <= cant_jugadores; u++) {
        
        if (participantes.sexo[u] == "Mujer" || participantes.sexo[u] == "mujer"){
            cant_mujer +=1;
        }else{
            cant_Hombre +=1;
        }
    }
}
function Mayores(r) {
    for (let q = 1; q <= cant_jugadores; q++) {
        if (participantes.edad[q] >= 18) {
            cant_mayoresEdad +=1;
        }else{
            cant_menoresEdad +=1;
        }
        
    }
}
function MayoresEdad(r) {
    for (let q = 1; q <= cant_jugadores; q++) {
        if (participantes.edad[q] >= 60) {
            cant_mayoresEdad60 +=1;
        }
    }
}

var mayor = 0;
var menor = 0;
var puntaje4 = 0;
var puntos = 0;
var ganar;
var loser;
var cant_mujer = 0;
var cant_Hombre = 0;
var cant_mayoresEdad = 0;
var cant_menoresEdad = 0;
var cant_mayoresEdad60 = 0;
var Verificar=1
var cant_jugadores=parseInt(prompt("Ingrese cantidad de jugadores: ", ""));

let participantes={
    nombre:[],
    edad:[],
    sexo:[],
    puntuacion:[]
};

while(isNaN(cant_jugadores)==true){
    cant_jugadores=parseInt(prompt("Ingrese cantidad de jugadores (Numeros no letras): ", ""));
}

for(var i=1;i<=cant_jugadores;i++){
    participantes.nombre[i] = prompt("Ingrese el nombre del participante: "+i+"","");
    while(participantes.nombre[i] == ""){
        participantes.nombre[i]=prompt("Ingrese un nombre valido: ", "");
    }

    participantes.edad[i] = parseInt(prompt("Ingrese su edad: ",""));
    while(participantes.edad[i] > 110){
        alert("Fua que grandes de edad sos!! ¡Te merece que te asignemos 5 puntos más que a los demás! #SARCASMO, tu edad real "+participantes.nombre[i]+" Por favor.")
        participantes.edad[i] = parseInt(prompt("Ingrese su edad real o una edad creíble.: ",""));
    }
    if(participantes.edad[i] < 5){
        alert("No creo que este sea un juego acto para tu edad! Pero ya que es un programa nada inofensivo te dejare jugar "+participantes.nombre[i]+" Suerte")
    }
    
    while(isNaN(participantes.edad[i])==true){
        participantes.edad[i]=parseInt(prompt("Ingrese su edad (Numeros no letras): ", ""));
    }

    while(Verificar == 1){
        participantes.sexo[i] = prompt("Ingrese su sexo ( Escriba Hombre o Mujer en minuscula): ","");
        if(participantes.sexo[i] == "Hombre" || participantes.sexo[i] == "hombre" || participantes.sexo[i] == "Mujer" || participantes.sexo[i] == "mujer"){
            Verificar=2;
        }else{
            Verificar=1;
            alert("Sexo ingresado Incorrecto!")
        }
    }
    Verificar = 1
}

for(var x=1;x<=cant_jugadores;x++){
    alert("Es el turno de lanzar de: "+participantes.nombre[x]+". Solo tendrás 3 lanzamientos. Suerte");

    for(var o=1;o<=3;o++){
        puntaje4=parseInt(prompt("Ingrese los puntos de este lanzamiento: ",""));
        if(isNaN(puntaje4)==true){
            alert("haz erraro el disparo. Te daremos 1 punto de consuelo.");
            puntaje4 = 1
        }
        puntos += puntaje4;
        participantes.puntuacion[x]= puntos;
        var puntaje = document.getElementsByName("p");
        
        alert("Fue el lanzamiento Nª"+o+". Para el participante: ."+participantes.nombre[x])
    }
    puntos=0;
}
for(var f = 1;f<=cant_jugadores;f++){
    document.write("el participante es: "+participantes.nombre[f]+" tiene: "+participantes.puntuacion[f] +'<br/>');
    document.write("<br/>");

}
document.write("<hr/>");
document.write("Información del torneo \n");
document.write("<hr/>");
document.write("Cantidad de participantes: "+cant_jugadores);
document.write("<br/>");
Ganador(ganar);
document.write("El ganador es: "+participantes.nombre[ganar]+ ", Con estos puntos: "+participantes.puntuacion[ganar]);
document.write("<br/>");
Perdedor(loser);
document.write("El perdedor es: "+participantes.nombre[loser]+ ", Con estos puntos: "+participantes.puntuacion[loser]);
document.write("<br/>");
mujeres(cant_mujer);
document.write("La cantidad de mujeres es: "+cant_mujer);
document.write("<br/>");
document.write("La cantidad de Hombres es: "+cant_Hombre);
document.write("<br/>");
Mayores(cant_mayoresEdad);
document.write("La cantidad de personas mayores de 18: "+cant_mayoresEdad);
document.write("<br/>");
document.write("La cantidad de personas menores de 18: "+cant_menoresEdad);
document.write("<br/>");
MayoresEdad(cant_mayoresEdad60);
document.write("La cantidad de personas mayores de 60: "+cant_mayoresEdad60);