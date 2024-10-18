
function mousePressed() {
 
  if (pantallaActual === 0) { // Pantalla inicial
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 1; // Ir a la pantalla de inicio de la aventura
    }
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 15; // Ir a la pantalla de créditos
       if (!mySound.isPlaying()) {
        mySound.play();
      }
    }
  } else if ( pantallaActual === 15) { 
    // Detectar clic en el botón "Reiniciar" en la pantalla de créditos
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar desde la pantalla 0
       mySound.stop();
    }
  } else if (pantallaActual === 2) {
    // Detectar clic en el botón "Sí"
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 4; // Ir a la pantalla 4
    }
    // Detectar clic en el botón "No"
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 3; // Ir a la pantalla 3
    }
  } else if (pantallaActual === 3) {
    // Detectar clic en el botón "Reiniciar"
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar desde la pantalla 0
    }
  } else if (pantallaActual === 4) {
    // Detectar clic en el botón "ROJO"
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 5; // Ir a la pantalla 5
    }
    // Detectar clic en el botón "BLANCO"
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 5; // Ir a la pantalla 5
    }
  } else if (pantallaActual === 5) {
    // Detectar clic en el botón "Sí"
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 6; // Ir a la pantalla 6
    }
    // Detectar clic en el botón "No"
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 7; // Ir a la pantalla 7
    }
  } else if (pantallaActual === 8) {
    // Detectar clic en el botón "CAMINO CORTO"
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 13; // Ir a la pantalla 9
    }
    // Detectar clic en el botón "CAMINO LARGO"
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 10; // Ir a la pantalla 10
    }
  } else if (pantallaActual === 9) {
    // Detectar clic en el botón "Avanzar" en pantalla 9
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 7; // Avanzar a la pantalla 7
    }
  } else if (pantallaActual === 10) {
    // Detectar clic en el botón "ENFRENTARTE"
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 13; // Ir a la pantalla 13
    }
    // Detectar clic en el botón "ENTREGARTE"
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 11; // Ir a la pantalla 12
    }
  } else if (pantallaActual === 12) {
    // Detectar clic en el botón "Reiniciar" en la pantalla 12
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar desde la pantalla 0
    }
  } else if (pantallaActual === 14) {
    // Detectar clic en el botón "Reiniciar" en la pantalla 14
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar desde la pantalla 0
    }
  } else {
    // Para las otras pantallas con el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual++; // Avanzar a la siguiente pantalla
      if (pantallaActual >= pantallas.length) {
        pantallaActual = 0; // Volver a la primera pantalla si llegamos al final
      }
    }
  }
}
