class Ganador {
  constructor() {
    this.boton = new Boton(250, 400, 150, 50, color(0, 255, 0), color(255), "Volver");
    this.fondo = fondoGanador;
  }

  mostrar(mensaje) {
    image(this.fondo, 0, 0, width, height); // Dibujar el fondo
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(mensaje, width / 2, height / 2 - 50);

    this.boton.dibujar();
    if (this.boton.clicEnBoton()) {
      controlPantallas.cambiarPantalla(1);
    }
  }
}
