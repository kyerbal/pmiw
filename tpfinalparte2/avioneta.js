class Avioneta {
  constructor(posX, posY, color) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.ancho = 40;
    this.alto = 20;
    this.velocidad = 2;
    this.vida = new Vida(3, color); // numero inicial de vidas en 3
    this.disparosRecibidos = 0; // contador de disparos recibidos
  }

  // cuando una avioneta reciba un disparo
  recibirDisparo() {
    this.disparosRecibidos++; // aumenta el contador de disparos recibidos
    this.vida.perderVida();  // cada disparo disminuye la vida 

    if (this.vida.estaVivo()) {
      return;
    }
  }

dibujar() {
  if (this.color === 'azul') { // si es azul usa azul y sino rojo
    fill(color(0, 0, 255)); //  azul
  } else {
    fill(color(255, 0, 0)); // rojo
  }

  rect(this.posX, this.posY, this.ancho, this.alto); // dibuja la avioneta
  this.vida.mostrar(); // mostrar las vidas de la avioneta
}

  teclaPresionada() {
    if (this.color === 'azul') {
      this.mover(); // la avioneta azul se mueve con las teclas 
    } else if (this.color === 'rojo') {
      this.mover(); // la avioneta roja se mueve con las teclas
    }
  }

  mover() {
    // movimiento libre con las teclas
    if (this.color === 'azul') {
      if (keyIsDown(LEFT_ARROW)) {
        this.posX -= this.velocidad;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.posX += this.velocidad;
      }
      if (keyIsDown(UP_ARROW)) {
        this.posY -= this.velocidad;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.posY += this.velocidad;
      }
    } else if (this.color === 'rojo') {
      if (keyIsDown(65)) { // 'A' para mover a la izquierda
        this.posX -= this.velocidad;
      }
      if (keyIsDown(68)) { // 'D' para mover a la derecha
        this.posX += this.velocidad;
      }
      if (keyIsDown(87)) { // 'W' para mover arriba
        this.posY -= this.velocidad;
      }
      if (keyIsDown(83)) { // 'S' para mover abajo
        this.posY += this.velocidad;
      }
    }

    // limitar a la avioneta para que no salga del lienzo
    this.posX = constrain(this.posX, 0, width - this.ancho);
    this.posY = constrain(this.posY, 0, height - this.alto);
  }
}
