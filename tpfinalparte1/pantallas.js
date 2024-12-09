//Pantallas
function dibujarPantalla() {
  background(200);
  image(pantallas[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual]; //textos segun la pantalla
  fill(0);
  rect(20, 45, 610, 61);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(textoActual, 25, 50, 600, 60);

  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 2) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 3 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 4) {
    mostrarBotonesRojoBlanco();
  } else if (pantallaActual === 5) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 8) {
    mostrarBotonesCamino();
  } else if (pantallaActual === 10) {
    mostrarBotonesEnfrentarteYEntregarte();
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 9 || pantallaActual === 11 || pantallaActual === 13) {
    mostrarBotonAvanzar();
  }
}
