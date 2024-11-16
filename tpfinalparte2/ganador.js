class Ganador {
  constructor() {
    this.boton = new Boton(250, 400, 150, 50, color(0, 255, 0), color(255), "Volver");
  }

  mostrar(mensaje) {
    background(0); // Fondo negro
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(mensaje, width / 2, height / 2 - 50); // mostrar el mensaje de ganador

    this.boton.dibujar(); // mostrar el botón de "Volver"
  }

  teclaPresionada() {
    if (this.boton.clicEnBoton()) {
      pantallaActiva = 1; // volvemos a la pantalla de inicio
      juego.reiniciarJuego(); // reiniciar el juego
    }
  }
}
