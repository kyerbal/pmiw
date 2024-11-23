//Alumnos: Leandro Isasi 93081/8 - Facundo Cristobal 119003/5
//Comisión: 5
//Profesor: Leonardo Garay
//https://youtu.be/ktskIDASOTY


let flujoDePantalla; 
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
  
  flujoDePantalla = new FlujoDePantalla();
}

class FlujoDePantalla {
  constructor() {
    this.pantallaActiva = 1; // Por defecto, comienza en la pantalla de inicio
  }

  // Método para dibujar la pantalla activa
  dibujar() {
    background(200); // Fondo general

    // Si la pantalla activa es la de Créditos
    if (this.pantallaActiva === 3) {
      pantallaCreditos.mostrar(); // Muestra la pantalla de créditos
      if (!sonido.isPlaying()) {
        sonido.loop(); // Reproduce música en bucle si no está sonando
      }
    } else {
      // Detener música si la pantalla activa no es de créditos
      if (sonido.isPlaying()) {
        sonido.stop();
      }

      // Mostrar la pantalla correspondiente según el valor de pantallaActiva
      if (this.pantallaActiva === 1) {
        pantallaInicio.mostrar(); // Muestra la pantalla de inicio
      } else if (this.pantallaActiva === 2) {
        juego.dibujar(); // Muestra la pantalla del juego y dibuja el juego
        juego.teclaPresionada(); // Verifica si se presionaron teclas durante el juego
      } else if (this.pantallaActiva === 4) {
        pantallaInstrucciones.mostrar(); // Muestra la pantalla de instrucciones
      }
    }
  }

  // Método para cambiar la pantalla activa
  cambiarPantalla(nuevaPantalla) {
    this.pantallaActiva = nuevaPantalla; // Actualiza el valor de pantallaActiva
  }
}

// Función para manejar la interacción del usuario y cambiar entre pantallas
function keyPressed() {
  if (key === '1') {
    flujoDePantalla.cambiarPantalla(1); // Cambiar a la pantalla de inicio
  } else if (key === '2') {
    flujoDePantalla.cambiarPantalla(2); // Cambiar a la pantalla del juego
  } else if (key === '3') {
    flujoDePantalla.cambiarPantalla(3); // Cambiar a la pantalla de créditos
  } else if (key === '4') {
    flujoDePantalla.cambiarPantalla(4); // Cambiar a la pantalla de instrucciones
  }
}

function draw() {
  flujoDePantalla.dibujar(); // Llama al método dibujar de FlujoDePantalla
}
