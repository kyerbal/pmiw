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
}

function setup() {
  createCanvas(640, 480); 
}

function draw() {
  background(200);
  image(pantallas[pantallaActual], 0, 0, 640, 480);

  if (pantallaActual === 0) {
    mostrarBotonesInicio(); 
  } else if (pantallaActual === 3) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 2) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 4) {
    mostrarBotonesRojoBlanco();
  } else if (pantallaActual === 5) {
    mostrarBotonesSiNoEnPantalla5();
  } else if (pantallaActual === 8) {
    mostrarBotonesCamino();
  } else if (pantallaActual === 10) {
    mostrarBotonesEnfrentarteYEntregarte();
  } else if (pantallaActual === 12 || pantallaActual === 14) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 15){
    mostrarBotonReiniciar();
  } else {
    mostrarBotonAvanzar(); 
  }
}
