function mostrarBoton(x, y, width, height, color, texto) {
  fill(color);
  rect(x, y, width, height);
  fill(255);
  textSize(20);
  text(texto, x + 10, y + 30);  // Ajusta la posición del texto
}
function mostrarBotonesInicio() {
  mostrarBoton(150, 400, 150, 50, color(0, 255, 0), "Iniciar aventura");
  mostrarBoton(400, 400, 150, 50, color(0, 0, 255), "Créditos");
}

function mostrarBotonReiniciar() {
  mostrarBoton(250, 400, 140, 50, color(0, 0, 255), "Reiniciar");
}

function mostrarBotonesSiNo() {
  mostrarBoton(150, 400, 100, 50, color(0, 255, 0), "Sí");
  mostrarBoton(400, 400, 100, 50, color(255, 0, 0), "No");
}

function mostrarBotonesRojoBlanco() {
  mostrarBoton(150, 400, 100, 50, color(255, 0, 0), "Rojo");
  mostrarBoton(400, 400, 100, 50, color(255), "Blanco");
}

function mostrarBotonesSiNoEnPantalla5() {
  mostrarBoton(150, 400, 100, 50, color(0, 255, 0), "Sí");
  mostrarBoton(400, 400, 100, 50, color(255, 0, 0), "No");
}

function mostrarBotonesCamino() {
  mostrarBoton(150, 400, 150, 50, color(0, 255, 0), "Camino corto");
  mostrarBoton(400, 400, 150, 50, color(255, 0, 0), "Camino largo");
}

function mostrarBotonesEnfrentarteYEntregarte() {
  mostrarBoton(150, 400, 150, 50, color(255, 0, 0), "Enfrentarte");
  mostrarBoton(400, 400, 150, 50, color(255, 0, 0), "Entregarte");
}

function mostrarBotonAvanzar() {
  mostrarBoton(500, 400, 100, 50, color(0, 0, 255), "Avanzar");
}
