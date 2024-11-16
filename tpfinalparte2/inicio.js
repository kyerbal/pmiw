class Inicio {
  constructor() {
    this.botonJugar = new Boton (50, 100, 150, 50, color(0, 255, 0), color(255), "Jugar");
    this.botonCreditos = new Boton (250, 100, 150, 50, color(0, 0, 255), color(255), "Creditos");
    this.botonInstrucciones = new Boton (450, 100, 150, 50, color(255, 0, 0), color(255), "Instrucciones");
    this.portada = loadImage('data/portada.jpg');
  }

  mostrar() {
    image(this.portada, 0, 0, width, height);

    // dibujar los botones
    this.botonJugar.dibujar();
    this.botonCreditos.dibujar();
    this.botonInstrucciones.dibujar();

    // clic en los botones
    if (this.botonJugar.clicEnBoton()) {
      pantallaActiva = 2; // pantalla de juego
    } else if (this.botonCreditos.clicEnBoton()) {
      pantallaActiva = 3; // pantalla de creditos
    } else if (this.botonInstrucciones.clicEnBoton()) {
      pantallaActiva = 4; // pantalla de instrucciones
    }
  }
}
