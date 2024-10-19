function mousePressed() {
  if (pantallaActual === 0) { // Pantalla inicial
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 1; // Ir a la pantalla de inicio de la aventura
    }
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 15; // Ir a la pantalla de créditos
      if (!mySound.isPlaying()) {
        mySound.loop(); // Comenzar el sonido en loop solo en pantalla 15
      }
    }
  } else if (pantallaActual === 15) { // Pantalla de créditos
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar desde la pantalla 0
      mySound.stop(); // Detener la música
    }
  } else if (pantallaActual === 1) { // Pantalla de inicio de la aventura
    // Verificamos el clic en el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 2; // Avanzar a la pantalla de decisión (pantalla 2)
    }
  } else if (pantallaActual === 2) { // Pantalla de decisión Sí/No
    // Detectar clic en el botón "Sí"
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 4; // Ir a la pantalla 4
    }
    // Detectar clic en el botón "No"
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 3; // Ir a la pantalla 3
    }
  } else if (pantallaActual === 3) { // Pantalla con opción de reiniciar
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar a pantalla 0
    }
  } else if (pantallaActual === 4) { // Pantalla de transición a pantalla 5
    // Detectar clic en cualquier opción (ROJO o BLANCO)
    if ((mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) ||
      (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450)) {
      pantallaActual = 5; // Ir a la pantalla 5
    }
  } else if (pantallaActual === 5) { // Segunda decisión Sí/No
    // Detectar clic en el botón "Sí"
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 6; // Ir a la pantalla 6
    }
    // Detectar clic en el botón "No"
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 7; // Ir a la pantalla 7
    }
  } else if (pantallaActual === 6) { // Continuación desde "Sí"
    // Avanzar a la pantalla 7 automáticamente cuando se presiona el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 7;
    }
  } else if (pantallaActual === 7) { // Continuación desde "No"
    // Avanzar a la pantalla 8 automáticamente cuando se presiona el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 8;
    }
  } else if (pantallaActual === 8) { // Elección entre camino corto o largo
    // Detectar clic en el botón "Camino corto"
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 9; // Ir a la pantalla 9
    }
    // Detectar clic en el botón "Camino largo"
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 10; // Ir a la pantalla 10
    }
  } else if (pantallaActual === 9) { // Pantalla del camino corto
    // Solo avanzar si se presiona el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 13; // Avanzar a la pantalla 13
    }
  } else if (pantallaActual === 10) { // Pantalla del camino largo
    // Detectar clic en el botón "Enfrentarte"
    if (mouseX > 150 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 13; // Ir a la pantalla 13
    }
    // Detectar clic en el botón "Frenar"
    if (mouseX > 400 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 11; // Ir a la pantalla 11
    }
  } else if (pantallaActual === 11) { // Pantalla opción frenar
    // Solo avanzar si se presiona el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 12; // Avanzar a la pantalla 12
    }
  } else if (pantallaActual === 12) { // Pantalla con botón de reiniciar
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar a la pantalla 0
    }
  } else if (pantallaActual === 13) { // Pantalla de transición final
    // Solo avanzar si se presiona el botón "Avanzar"
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 14; // Avanzar a la pantalla 14
    }
  } else if (pantallaActual === 14) { // Pantalla final con botón de reiniciar
    if (mouseX > 250 && mouseX < 390 && mouseY > 400 && mouseY < 450) {
      pantallaActual = 0; // Reiniciar a la pantalla 0
    }
  }
}
