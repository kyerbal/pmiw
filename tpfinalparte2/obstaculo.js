class Obstaculo {
  constructor(posX, posY, velocidad) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad;
    this.tamaño = 30; // tamaño del obstáculo
  }

  mover() {
    this.posY += this.velocidad;
    
    // cambia la dirección si toca el borde superior o inferior
    if (this.posY > height - this.tamaño || this.posY < 0) {
      this.velocidad *= -1; // Cambiar dirección
    }
  }

  dibujar() {
    fill(128, 128, 128); // color gris de los obstaculos
    rect(this.posX, this.posY, this.tamaño, this.tamaño);
  }
}
