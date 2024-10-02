let pantalla = 0; // Pantalla inicial
let jugador = ""; // Almacena el jugador seleccionado
let auto = ""; // Almacena el auto seleccionado
let resultado = ""; // Almacena el resultado de la carrera

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255);

  switch (pantalla) {
    case 0:
      pantallaPresentacion();
      break;
    case 1:
      pantallaCompetir();
      break;
    case 2:
      elegirJugador();
      break;
    case 3:
      presentacionJugador();
      break;
    case 4:
      elegirAuto();
      break;
    case 5:
      presentacionCarrera();
      break;
    case 6:
      autoCorriendo();
      break;
    case 7:
      resultadoCarrera();
      break;
    case 8:
      fotoConCopa();
      break;
    case 9:
      finalTriste();
      break;
    case 10:
      arrestados();
      break;
  }
}

function pantallaPresentacion() {
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("Need for Speed: \n La pelicula", width / 2, height / 2 - 100);
  textSize(20);
  text("Presiona Enter para empezar", width / 2, height / 2);
}

function pantallaCompetir() {
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("Competencia De León", width / 2, height / 2 - 100);
  textSize(20);
  text("Presiona Enter para continuar", width / 2, height / 2);
}

function elegirJugador() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Elige tu jugador", width / 2, height / 2 - 100);
  textSize(20);
  text("1: Tobey Marshall", width / 2, height / 2);
  text("2: Dino Brewster", width / 2, height / 2 + 50);
}

function presentacionJugador() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Que personaje elegiste?", width / 2, height / 2 - 100);
  textSize(20);
  text("Jugando como: " + jugador, width / 2, height / 2);
  text("Presiona Enter para continuar", width / 2, height / 2 + 50);
}

function elegirAuto() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Elige tu auto", width / 2, height / 2 - 100);
  textSize(20);
  text("1: Rojo", width / 2, height / 2);
  text("2: Gris", width / 2, height / 2 + 50);
  text("3: Blanco", width / 2, height / 2 + 100);
}

function presentacionCarrera() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Preparación de la carrera con tu auto " + auto, width / 2, height / 2 - 100);
  textSize(20);
  text("Presiona Enter para continuar", width / 2, height / 2);
}

function autoCorriendo() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("El auto está corriendo la carrera...", width / 2, height / 2 - 100);
  textSize(20);
  text("Presiona Enter para ver el resultado", width / 2, height / 2);
}

function resultadoCarrera() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  if (auto === "Rojo") {
    resultado = "Has ganado";
    text(resultado, width / 2, height / 2 - 100);
    text("Presiona Enter para seguir", width / 2, height / 2);
  } else if (auto === "Gris" || auto === "Blanco") {
    resultado = "Has perdido";
    text(resultado, width / 2, height / 2 - 100);
    text("Presiona Enter para seguir ", width / 2, height / 2);
  }
}

function fotoConCopa() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("¡Has ganado! ", width / 2, height / 2 - 100);
}

function finalTriste() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Final triste... has perdido", width / 2, height / 2 - 100);
  text("La policía te está buscando", width / 2, height / 2);
  text("Presiona Enter para liberarte", width / 2, height / 2 + 50);
}

function arrestados() {
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("¡La policía te ha arrestado!", width / 2, height / 2 - 100);
  text("Foto siendo arrestado", width / 2, height / 2);
}

// Controles de teclado para navegar entre pantallas
function keyPressed() {
  if (keyCode === ENTER) {
    if (pantalla === 0) pantalla = 1;
    else if (pantalla === 1) pantalla = 2;
    else if (pantalla === 3) pantalla = 4;
    else if (pantalla === 4) pantalla = 5;
    else if (pantalla === 5) pantalla = 6;
    else if (pantalla === 6) pantalla = 7;
    else if (pantalla === 7 && resultado === "Has ganado") pantalla = 8;
    else if (pantalla === 7 && resultado === "Has perdido") pantalla = 9;
    else if (pantalla === 9) pantalla = 10;
  }

  // Elegir jugador
  if (pantalla === 2) {
    if (key === '1') {
      jugador = "Tobey Marshall";
      pantalla = 3;
    } else if (key === '2') {
      jugador = "Dominic Cooper";
      pantalla = 3;
    }
  }

  // Elegir auto
  if (pantalla === 4) {
    if (key === '1') {
      auto = "Rojo";
      pantalla = 5;
    } else if (key === '2') {
      auto = "Gris";
      pantalla = 5;
    } else if (key === '3') {
      auto = "Blanco";
      pantalla = 5;
    }
  }
}
