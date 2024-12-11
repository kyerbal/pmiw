class Juego {
  constructor() {
    this.autoAzul = new Auto (10, height / 2, 'azul');
    this.autoRojo = new Auto (750, height / 2, 'rojo');
    this.balas = [];
    this.obstaculos = [];
    this.crearObstaculos();
    this.juegoTerminado = false;
    this.ganador = new Ganador();
    this.fondo = loadImage('data/fondo.jpg');

  }

  crearObstaculos() {
    for (let i = 0; i < 4; i++) {
      this.obstaculos[i] = new Obstaculo(120 * (i + 1), random(10, height - 15), 2);
    }
  }

  mostrar() {
    image(this.fondo, 0, 0, width, height);
    if (this.juegoTerminado) {
      let mensaje = "";
      if (!this.autoAzul.vida.estaVivo()) {
        mensaje = "¡Auto Rojo Gana!";
      } else if (!this.autoRojo.vida.estaVivo()) {
        mensaje = "¡Auto Azul Gana!";
      }
      controlPantallas.pantallas[5].mostrar(mensaje);
      return;
    }

    this.autoAzul.dibujar();
    this.autoRojo.dibujar();
    this.autoAzul.mover();
    this.autoRojo.mover();

    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
      this.balas[i].mover();
      if (this.balas[i].colisionConAuto(this.autoAzul) || this.balas[i].colisionConAuto(this.autoRojo)) {
        this.balas[i] = null;
      }
    }
    this.balas = this.balas.filter(bala => bala !== null);

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
      this.obstaculos[i].mover();

      // Comprobar colisiones con balas
      for (let j = 0; j < this.balas.length; j++) {
        if (this.balas[j].colisionConObstaculo(this.obstaculos[i])) {
        }
      }
    }
    if (!this.autoAzul.vida.estaVivo() || !this.autoRojo.vida.estaVivo()) {
      this.juegoTerminado = true;
    }
  }


dispararBala(auto) {
  let nuevaBala;
  if (auto.color === 'azul') {
    nuevaBala = new Bala(auto.posX + auto.ancho + 5, auto.posY + auto.alto / 2, 5, balaAzul);
  } else {
    nuevaBala = new Bala(auto.posX - 25, auto.posY + auto.alto / 2, -5, balaRoja);
  }
  this.balas.push(nuevaBala);
}

reiniciarJuego() {
  this.autoAzul = new Auto(10, height / 2, 'azul');
  this.autoRojo = new Auto(750, height / 2, 'rojo');
  this.balas = [];
  this.obstaculos = [];
  this.crearObstaculos();
  this.juegoTerminado = false;
}
}
