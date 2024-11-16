//Botones
function dibujarBoton(x, y, ancho, alto, colorRelleno, colorTexto, texto) { //funcion generica para los botones
  fill(colorRelleno);
  rect(x, y, ancho, alto);
  fill(colorTexto);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
function mostrarBotonesInicio() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Iniciar aventura");
  dibujarBoton(400, 400, 150, 50, color(0, 0, 255), color(255), "Creditos");
}

function mostrarBotonReiniciar() {
  dibujarBoton(250, 400, 140, 50, color(0, 0, 255), color(255), "Reiniciar");
}

function mostrarBotonesSiNo() {
  dibujarBoton(150, 400, 100, 50, color(0, 255, 0), color(255), "Sí");
  dibujarBoton(400, 400, 100, 50, color(255, 0, 0), color(255), "No");
}

function mostrarBotonesRojoBlanco() {
  dibujarBoton(150, 400, 100, 50, color(255, 0, 0), color(255), "Rojo");
  dibujarBoton(400, 400, 100, 50, color(255), color(0), "Blanco");
}

function mostrarBotonesCamino() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Camino corto");
  dibujarBoton(400, 400, 150, 50, color(255, 0, 0), color(255), "Camino largo");
}

function mostrarBotonesEnfrentarteYEntregarte() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Enfrentarte");
  dibujarBoton(400, 400, 150, 50, color(255, 0, 0), color(255), "Entregarte");
}

function mostrarBotonAvanzar() {
  dibujarBoton(500, 400, 100, 50, color(0, 0, 255), color(255), "Avanzar");
}
