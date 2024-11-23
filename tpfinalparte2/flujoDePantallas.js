class FlujoDePantalla {
  constructor() {
    this.pantallaActiva = pantallaActiva; // Este valor define qué pantalla se muestra
  }

  // Método principal para dibujar la pantalla activa
  dibujar() {
    background(200); // Fondo general

    // Si la pantalla activa es la de Créditos
    if (this.pantallaActiva === 3) {
      pantallaCreditos.mostrar(); // Muestra la pantalla de créditos
      if (!sonido.isPlaying()) {
        sonido.loop(); // Reproduce música en bucle si no está sonando
      }
    } else {
      // Detener música si la pantalla activa no es de créditos
      if (sonido.isPlaying()) {
        sonido.stop();
      }

      // Mostrar la pantalla correspondiente según el valor de pantallaActiva
      if (this.pantallaActiva === 1) {
        pantallaInicio.mostrar(); // Muestra la pantalla de inicio
      } else if (this.pantallaActiva === 2) {
        juego.dibujar(); // Muestra la pantalla del juego y dibuja el juego
        juego.teclaPresionada(); // Verifica si se presionaron teclas durante el juego
      } else if (this.pantallaActiva === 4) {
        pantallaInstrucciones.mostrar(); // Muestra la pantalla de instrucciones
      }
    }
  }

  // Método para cambiar la pantalla activa
  cambiarPantalla(nuevaPantalla) {
    this.pantallaActiva = nuevaPantalla; // Actualiza el valor de pantallaActiva
  }
}
