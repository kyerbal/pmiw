//Alumnos: Leandro Isasi 93081/8 - Facundo Cristobal 119003/5
//Comisión: 5
//Profesor: Leonardo Garay
//https://www.youtube.com/watch?v=wyWz0EyEKa4

//variables
let pantallas = [];
let pantallaActual = 0;
let mySound;
let textos = [];

//Cargar imagenes, archivo de textos, musica
function preload() {
  for (let i = 0; i < 16; i++) {
    pantallas[i] = loadImage("data/pantalla" + i + ".jpg");
  }
  mySound = loadSound('data/cancion.mp3');
  textos = loadStrings('data/textos.txt');
}

//lienzo
function setup() {
  createCanvas(640, 480);
}
function draw() {
  dibujarPantalla();
}
function mousePressed() {
  controlDeFlujoDeAccionesDePantallas();
}
