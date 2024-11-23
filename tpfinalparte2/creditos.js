class Creditos {
  constructor() {
    this.boton = new Boton(250, 400, 150, 50, color(0, 255, 0), color(255), "Volver");
  }

  mostrar() {
    background(0);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(creditosTextos, 20, 20, width - 40, height - 60);

    this.boton.dibujar();
    if (this.boton.clicEnBoton()) {
      pantallaActiva = 1; // volvemos a la pantalla de inicio
    }
  }
}
