//Leandro Isasi - Facundo Cristóbal
//Comisión 5
//https://youtu.be/jBCanXGr8is 

let pantallas = [];
let pantallaActual = 0;
let mySound;
let textos = [];

function preload() {
  for (let i = 0; i < 16; i++) {
    if (i === 3) {
      pantallas[i] = loadImage('data/pantalla3.jpg');
    } else if (i === 6) {
      pantallas[i] = loadImage('data/pantalla6.jpg');
    } else if (i === 15) {
      pantallas[i] = loadImage('data/creditos.jpg');
    } else {
      pantallas[i] = loadImage('data/pantalla' + i + '.jpg');
    }
  }
  
  mySound = loadSound('data/cancion.mp3');
  textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);
  image(pantallas[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual];

  // Definir el tamaño y la posición del rectángulo
  let textoAnchoMaximo = 600; // Ancho máximo para el texto
  let textoAlto = 60; // Altura del rectángulo

  let rectX = 20; // Posición X del rectángulo
  let rectY = 45; // Posición Y del rectángulo

  // rectángulo de los textos
  fill(0);
  rect(rectX, rectY, textoAnchoMaximo + 10, textoAlto + 1); // +1 para un borde adicional

  // configuracion del texto
  fill(255);
  textSize(16);
  textAlign(CENTER); 

  // Dibujar el texto dentro del rect
  text(textoActual, rectX + 5, rectY + 5, textoAnchoMaximo, textoAlto);

  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 2) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 3 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 4) {
    mostrarBotonesRojoBlanco();
  } else if (pantallaActual === 5) {
    mostrarBotonesSiNoEnPantalla5();
  } else if (pantallaActual === 8) {
    mostrarBotonesCamino();
  } else if (pantallaActual === 10) {
    mostrarBotonesEnfrentarteYEntregarte();
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 9 || pantallaActual === 11 || pantallaActual === 13) {
    mostrarBotonAvanzar();
  }
}
