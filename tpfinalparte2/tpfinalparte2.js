let Sonidoganaste;
let botonReiniciar;
let tanque1, tanque2;
let paredes = [];
let juegoActivo = true;

function preload() {
  Sonidoganaste = loadSound('data/ganador.mp3'); 
}

function setup() {
  createCanvas(640, 480);
  tanque1 = new Tanque(100, 240, 'blue');
  tanque2 = new Tanque(540, 240, 'red');

  for (let i = 0; i < 5; i++) {
    let x = random(100, width - 50);
    let y = random(100, height - 100);
    let w = random(50, 100);
    let h = random(30, 60);
    paredes.push(new Pared(x, y, w, h));
  }
}

function draw() {
  background(220);

  if (juegoActivo) {
    tanque1.mostrar();
    tanque2.mostrar();
    for (let pared of paredes) {
      pared.mostrar();
    }

    tanque1.actualizarProyectiles(tanque2, paredes);
    tanque2.actualizarProyectiles(tanque1, paredes);

    controlarMovimientos();
    verificarGanador();
  } else {
    textSize(32);
    textAlign(CENTER);
    fill(0);
    if (!tanque1.vivo) {
      text('¡Tanque Verde Gana!', width / 2, height / 2);
    } else if (!tanque2.vivo) {
      text('¡Tanque Azul Gana!', width / 2, height / 2);
    }

    // Crear el botón de reiniciar solo cuando hay un ganador
    if (!botonReiniciar) {
      botonReiniciar = createButton('Reiniciar Juego');
      botonReiniciar.position(10, 10);
      botonReiniciar.mousePressed(reiniciarJuego);
    }
  }
}

function controlarMovimientos() {
  if (keyIsDown(87)) tanque1.mover(1); // W
  if (keyIsDown(83)) tanque1.mover(-1); // S
  if (keyIsDown(65)) tanque1.girar(-0.1); // A
  if (keyIsDown(68)) tanque1.girar(0.1); // D

  if (keyIsDown(UP_ARROW)) tanque2.mover(1);
  if (keyIsDown(DOWN_ARROW)) tanque2.mover(-1);
  if (keyIsDown(LEFT_ARROW)) tanque2.girar(-0.1);
  if (keyIsDown(RIGHT_ARROW)) tanque2.girar(0.1);
}

function keyPressed() {
  if (juegoActivo) {
    if (key === ' ') tanque1.disparar();
    if (keyCode === RETURN) tanque2.disparar();
  }
}

function verificarGanador() {
  if (!tanque1.vivo || !tanque2.vivo) { 
    juegoActivo = false;
    if (!Sonidoganaste.isPlaying()) {
      Sonidoganaste.play(); // Reproducir sonido cuando haya un ganador
    }
  }
}

function reiniciarJuego() {
  tanque1 = new Tanque(100, 240, 'blue');
  tanque2 = new Tanque(540, 240, 'green');
  paredes = [];
  
  for (let i = 0; i < 5; i++) {
    let x = random(100, width - 100);
    let y = random(100, height - 100);
    let w = random(50, 100);
    let h = random(30, 60);
    paredes.push(new Pared(x, y, w, h));
  }
  juegoActivo = true;
  botonReiniciar.remove(); // Eliminar el botón cuando se reinicia el juego
  botonReiniciar = null; // Resetear la referencia del botón
}
