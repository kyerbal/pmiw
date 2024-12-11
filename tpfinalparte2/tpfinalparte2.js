//Alumnos: Leandro Isasi 93081/8 - Facundo Cristobal 119003/5
//Comisión: 5
//Profesor: Leonardo Garay

let controlPantallas;
let sonido;
let creditosTextos, instruccionesTextos;
let portada;
let autoazul, autoroja, obstaculospiedras;
let balaAzul, balaRoja;
let fondoInstrucciones, fondoCreditos, fondoGanador;

function preload() {
  sonido = loadSound('data/musica.mp3');
  creditosTextos = loadStrings('data/creditos.txt');
  instruccionesTextos = loadStrings('data/instrucciones.txt');
  portada = loadImage('data/portada.jpg');
  autoazul = loadImage('data/autoazul.png');
  autoroja = loadImage('data/autoroja.png');
  obstaculospiedras = loadImage('data/obstaculospiedras.png');
  balaAzul = loadImage('data/balaazul.png');
  balaRoja = loadImage('data/balaroja.png');
  fondoInstrucciones = loadImage('data/fondoInstrucciones.png');
  fondoCreditos = loadImage('data/fondoCreditos.png');
  fondoGanador = loadImage('data/fondoGanador.png');
}



function setup() {
  createCanvas(640, 480);
  controlPantallas = new ControlDePantallas();
}

function draw() {
  background(200);
  controlPantallas.mostrarPantallaActual();
}

function keyPressed() {
  if (controlPantallas.pantallaActiva === 2) {
    let juego = controlPantallas.pantallas[2];
    if (key === ' ') {
      juego.dispararBala(juego.autoAzul);
    } else if (key === 'Enter') {
      juego.dispararBala(juego.autoRojo);
    }
  }
}
