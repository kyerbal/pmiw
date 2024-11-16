//Alumnos: Leandro Isasi 93081/8 - Facundo Cristobal 119003/5
//Comisión: 5
//Profesor: Leonardo Garay
//https://youtu.be/ktskIDASOTY

let pantallaActiva = 1;
let pantallaInicio, pantallaCreditos, pantallaInstrucciones, juego;
let creditosTextos;
let instruccionesTextos;
let sonido;

function preload() {
  sonido = loadSound('data/musica.mp3');
  creditosTextos = loadStrings('data/creditos.txt');
  instruccionesTextos = loadStrings('data/instrucciones.txt');
}

function setup() {
  createCanvas(640, 480);
  pantallaInicio = new Inicio();
  pantallaCreditos = new Creditos();
  pantallaInstrucciones = new Instrucciones();
  juego = new Juego(); // Inicializa el juego
}

function draw() {
  background(200);

  // pantalla de créditos
  if (pantallaActiva === 3) {
    pantallaCreditos.mostrar();
    if (!sonido.isPlaying()) {
      sonido.loop();
    }
  } else {
    if (sonido.isPlaying()) {
      sonido.stop();
    }

    // mostrar otras pantallas
    if (pantallaActiva === 1) {
      pantallaInicio.mostrar();
    } else if (pantallaActiva === 2) {
      juego.dibujar();
      juego.teclaPresionada();
    } else if (pantallaActiva === 4) {
      pantallaInstrucciones.mostrar();
    }
  }
}
