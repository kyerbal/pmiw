//Interaccion
function clicEnBoton(x, y, ancho, alto) { //funcion que retorna valores
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function controlDeFlujoDeAccionesDePantallas() {
  // Usan los botones de mostrarBotonesInicio
  if (pantallaActual === 0) {
    if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 1;
    } else if (clicEnBoton(400, 400, 150, 50)) {
      pantallaActual = 15;
      if (!mySound.isPlaying()) {
        mySound.loop();
      }
    }
    // Usan los botones de mostrarBotonAvanzar
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 11 || pantallaActual === 13) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 9) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 13;
    }
    // Usan los botones de mostrarBotonesSiNo
  } else if (pantallaActual === 2) {
    if (clicEnBoton(150, 400, 100, 50)) {
      pantallaActual = 4;
    } else if (clicEnBoton(400, 400, 100, 50)) {
      pantallaActual = 3;
    }
    // Usan los botones de mostrarBotonesRojoBlanco
  } else if (pantallaActual === 4) {
    if (clicEnBoton(150, 400, 100, 50) || clicEnBoton(400, 400, 100, 50)) {
      pantallaActual = 5;
    }
    // Usan los botones de mostrarBotonesSiNo
  } else if (pantallaActual === 5 || pantallaActual === 8) {
    if (clicEnBoton(150, 400, 100, 50) || clicEnBoton(150, 400, 150, 50)) {
      pantallaActual++;
    } else if (clicEnBoton(400, 400, 100, 50) || clicEnBoton(400, 400, 150, 50)) {
      pantallaActual += 2;
    }
    // Usan los botones de mostrarBotonReiniciar
  } else if (pantallaActual === 3 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
      if (pantallaActual === 0 && mySound.isPlaying()) {
        mySound.stop();
      }
    }
    // Usan los botones de mostrarBotonesEnfrentarteYEntregarte
  } else if (pantallaActual === 10) {
    if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 13;
    } else if (clicEnBoton(400, 400, 150, 50)) {
      pantallaActual = 11;
    }
  }
}
