// ahorcado
var intentos = 6
var segundosGanados = 0
var letras = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
var numeroAhorcado = 0

function autoComprobar(palabra){
  let completo = 0
  for (let i = 0; i < palabra.length; i++){
      if (document.getElementById(`noteID${i}`).innerHTML != ``){
        completo += 1
      }} 
  if (intentos = 0){
    document.getElementById("palabra").innerHTML = ``
    for (let i = 0; i < palabra.length; i++) {
      document.getElementById("palabra").innerHTML += `
      <div class="caja" id="noteID${i}">
      <h3>${palabra[i]}</h3></div>`;
    document.getElementById("letras").innerHTML += ``
    for (let i = 0; i < letras.length; i++) {
      document.getElementById("letras").innerHTML += `
        <button class=letras" id= letra${letras[i]}>${letras[i]}</button>`;
    setTimeout(function(){
      if (numeroAhorcado < 2){
        numeroAhorcado += 1
        location.href = `https://ODS.nicolasgr8.repl.co/ahorcado/${ODS}`;
      } else {
        location.href = `https://ODS.nicolasgr8.repl.co/entremedio/quiz/${ODS}`
      }
    }, 4000);
    } else if (completo = palabra.length){
      document.getElementById("letras").innerHTML += ``
      for (let i = 0; i < letras.length; i++) {
      document.getElementById("letras").innerHTML += `
        <button class=letras" id= letra${letras[i]}>${letras[i]}</button>`;
      segundosGanados += 10
      setTimeout(function(){
        if (numeroAhorcado < 2){
          numeroAhorcado += 1
            location.href = `https://ODS.nicolasgr8.repl.co/ahorcado/${ODS}`;
      } else {
          location.href = `https://ODS.nicolasgr8.repl.co/entremedio/quiz/${ODS}`
      }
    }, 4000);
    }
}

function  comprobarAhorcado(letra, palabra){
  document.getElementById(letra).value
  for (let i = 0; i < palabra.length; i++) {
    if (letra in palabra){
      var indices = [];
      var idx = palabra.indexOf(letra);
      while (idx != -1) {
        indices.push(idx);
        idx = palabra.indexOf(letra, idx + 1);}
    for (let i = 0; i < indice.length; i++)
      document.getElementById(`noteID${indice[i]}`).innerHTML += ` <h3>${letra}</h3>`;
    } else{
      intentos -= 1;
      document.getElementById(`imagen`).innerHTML = ` 
        <img src="imagen${intentos}">`;
    }
}

function createBlanks(palabra) {
  for (let i = 0; i < palabra.length; i++) {
   document.getElementById("palabra").innerHTML += `        
        <div class="caja" id="noteID${i}"></div>
            `;
}}

function createLetras() {
  for (var i = 0; i < letras.length; i++) {
  document.getElementById("letras").innerHTML += `
        <button class=letras" id= letra${letras[i]} onclick="comprobar(${letras[i]}, palabra)">${letras[i]}</button>`;
}}

// quizz
var numeroQuiz = 0

  
function createPregunta(pregunta) {
   document.getElementById("pregunta").innerHTML += `
<h3>${pregunta}</h3>`
}

function createRespuestas(correcta, incorrecta1, incorrecta2, incorrecta3) {
  let respuestas = [correcta, incorrecta1, incorrecta2, incorrecta3]
  respuestas = respuestas.sort(function(){return Math.random() - 0.5});
  let lugar = respuestas.index(correcta)
  for (let i = 0; i < lista.length; i++){
  if (i = lugar){
    document.getElementById("respuestas").innerHTML += `
        <button class="respuesta" id= respuestaCorrecta onclick="comprobar(correcto)">${respuesta[i]}</button>`;
  } else {
    document.getElementById("respuestas").innerHTML += `
        <button class="respuesta" id= respuestaIncorrecta onclick="comprobar(incorrecto)">${respuesta[i]}</button>`;
  }
}}
function corregir(){
  document.getElementByID()
}
  
function comprobarQuiz(ID){
  if (ID = "correcto"){
    document.getElementById("respuestaIncorrecta").style.color = "red";
    document.getElementById("respuestaCorrecta").style.color = "green";
    segundosGanados = 5;
    setTimeout(function(){
     if (numeroQuiz < 2){
      numeroQuiz += 1
      location.href = "https://ODS.nicolasgr8.repl.co/quiz";
     } else {
       location.href = "https://ODS.nicolasgr8.repl.co/entremedio-rosco"
     }
}, 4000);
  } else {
    document.getElementById("respuestaIncorrecta").style.color = "red";
    document.getElementById("respuestaCorrecta").style.color = "green";
    setf (nTimeout(function(){
     iumeroQuiz < 2){
      numeroQuiz += 1
      location.href = "https://ODS.nicolasgr8.repl.co/quiz";
     } else {
       location.href = "https://ODS.nicolasgr8.repl.co/entremedio-rosco"
     }
}, 4000);
  }
}


// rosco
var palabrasFaltantes = 26
var vuelta = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
var pasapalabras = 0


function crearLetra(palabras){
  let = 
  for (let i = 0; i < palabras.length; i++){
    document.getElementByClassName("circle").innerHTML += `<li class="item" id="${palabras[i]}" letraId="${letras[i]}">${letras[i]}</li>`
  }
}

function crearDefinicion(definicion) {
  document.getElementById("definicion").innerHTML = `<h3 class="definicion">${definicion}</h3>`
}

function comprobar(respuesta) {
  if ($(`label:contains(opal fruits)`).Id = respuesta)
    respuestasFaltantes -= 1;
    document.getElementBy()
  else {
    
  }
}