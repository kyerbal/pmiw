class Juego {
  constructor() {
    this.avionetaAzul = new Avioneta(10, height / 2, 'azul');
    this.avionetaRojo = new Avioneta(750, height / 2, 'rojo');
    this.balas = [];
    this.obstaculos = [];
    this.crearObstaculos();
    this.boton = new Boton(320, 500, 150, 50, color(0, 255, 0), color(255), "Volver");
    this.juegoTerminado = false;
    this.teclasPresionadas = [false, false];
    this.ganador = new Ganador(); // Pantalla de ganador
  }

  crearObstaculos() {
    for (let i = 0; i < 4; i++) {
      this.obstaculos[i] = new Obstaculo(150 * (i + 1), random(10, height - 50), 2);
    }
  }

  dibujar() {
    background(0);

    if (this.juegoTerminado) {
      let mensaje = "";
      if (!this.avionetaAzul.vida.estaVivo()) {
        mensaje = "¡Avioneta Roja Gana!";
      } else if (!this.avionetaRojo.vida.estaVivo()) {
        mensaje = "¡Avioneta Azul Gana!";
      }
      this.ganador.mostrar(mensaje); // Mostrar la pantalla de ganador
      return;
    }

    this.avionetaAzul.dibujar();
    this.avionetaRojo.dibujar();

    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
      this.balas[i].mover();
      if (this.balas[i].colisionConAvioneta(this.avionetaAzul) || this.balas[i].colisionConAvioneta(this.avionetaRojo)) {
        this.balas[i] = null;
      }
    }
    this.balas = this.balas.filter(bala => bala !== null);

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
      this.obstaculos[i].mover();
    }

    if (!this.avionetaAzul.vida.estaVivo() || !this.avionetaRojo.vida.estaVivo()) {
      this.juegoTerminado = true; // El juego ha terminado
    }
  }

  teclaPresionada() {
    if (this.juegoTerminado) {
      this.ganador.teclaPresionada(); // Click para volver
    } else {
      this.avionetaAzul.teclaPresionada(this.teclasPresionadas[0]);
      this.avionetaRojo.teclaPresionada(this.teclasPresionadas[1]);
    }
  }
}
