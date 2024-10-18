//Leandro Isasi - Facundo Cristobal
//Comisión 5
//link

let pantallas = []; 
let pantallaActual = 0; 
let mySound

function preload() {
  // Cargamos todas las imágenes de las pantallas
  pantallas[0] = loadImage('data/pantalla0.jpg'); 
  pantallas[1] = loadImage('data/pantalla1.jpg'); 
  pantallas[2] = loadImage('data/pantalla2.jpg'); 
  pantallas[3] = loadImage('data/pantalla2.0.jpg'); 
  pantallas[4] = loadImage('data/pantalla3.jpg'); 
  pantallas[5] = loadImage('data/pantalla4.jpg'); 
  pantallas[6] = loadImage('data/pantalla4.0.jpg'); 
  pantallas[7] = loadImage('data/pantalla5.jpg'); 
  pantallas[8] = loadImage('data/pantalla6.jpg'); 
  pantallas[9] = loadImage('data/pantalla7.jpg'); 
  pantallas[10] = loadImage('data/pantalla8.jpg'); 
  pantallas[11] = loadImage('data/pantalla9.jpg'); 
  pantallas[12] = loadImage('data/pantalla10.jpg'); 
  pantallas[13] = loadImage('data/pantalla13.jpg'); 
  pantallas[14] = loadImage('data/pantalla14.jpg'); 
  pantallas[15] = loadImage('data/creditos.jpg'); 
  mySound = loadSound ('data/cancion.mp3');
  textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480); 
}

function draw() {
  background(200);
  image(pantallas[pantallaActual], 0, 0, 640, 480);
 textSize(20);
  fill(255);

  // Mostrar los textos cargados desde el archivo de texto en las pantallas correspondientes
  if (pantallaActual === 0) {
    mostrarBotonesInicio(); 
    text(textos[0], 200, 40);  // Texto en la pantalla de inicio
  } else if (pantallaActual === 1) {
    text(textos[1], 20, 40);  // Descripción de Tobey
  } else if (pantallaActual === 2) {
    text(textos[2], 20, 40);  // Descripción de la carrera "La De León"
    mostrarBotonesSiNo();  // Opciones de si o no
  } else if (pantallaActual === 3) {
    text(textos[3], 20, 40);  // Tobey decide no participar
    mostrarBotonReiniciar();  // Botón para reiniciar
  } else if (pantallaActual === 4) {
    text(textos[4], 20, 40);  // Elección de autos
    mostrarBotonesRojoBlanco();  // Botones para elegir auto
  } else if (pantallaActual === 5) {
    text(textos[5], 20, 40);  // Modificación de auto
    mostrarBotonesSiNoEnPantalla5();  // Opciones de modificación
  } else if (pantallaActual === 7) {
    text(textos[7], 20, 40);  // Inicio de la carrera
  } else if (pantallaActual === 8) {
    text(textos[8], 20, 40);  // Elección de caminos
    mostrarBotonesCamino();  // Opciones de caminos
  } else if (pantallaActual === 10) {
    text(textos[10], 20, 40);  // Policía cerca después de la meta
    mostrarBotonesEnfrentarteYEntregarte();  // Opciones de enfrentarse o entregarse
  } else if (pantallaActual === 11) {
    text(textos[11], 20, 40);  // Aceptación de consecuencias
  } else if (pantallaActual === 12 || pantallaActual === 14) {
    text(textos[12], 20, 40);  // Final donde Tobey es arrestado
    mostrarBotonReiniciar();  // Botón para reiniciar
  } else if (pantallaActual === 14) {
    text(textos[14], 20, 40);  // Final donde Tobey es abatido
    mostrarBotonReiniciar();  // Botón para reiniciar
  } else if (pantallaActual === 15) {
    text(textos[15], 20, 40);  // Créditos
    mostrarBotonReiniciar();  // Botón para reiniciar
  } else {
    mostrarBotonAvanzar(); 
  }
}
