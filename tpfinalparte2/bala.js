class Bala {
  constructor(posX, posY, velocidad, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad;
    this.imagen = imagen;
    this.ancho = 20; // Tamaño de la bala
    this.alto = 50;
  }

  mover() {
    this.posX += this.velocidad;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY - 25, this.ancho, this.alto);
  }

  colisionConAuto(auto) {
    if (this.posX + this.ancho > auto.posX &&
        this.posX < auto.posX + auto.ancho &&
        this.posY + this.alto > auto.posY &&
        this.posY < auto.posY + auto.alto) {
      auto.recibirDisparo();
      this.posX = -1000; // Destruir la bala
      return true;
    }
    return false;
  }

  colisionConObstaculo(obstaculo) {
    if (this.posX + this.ancho > obstaculo.posX &&
        this.posX < obstaculo.posX + obstaculo.tamaño &&
        this.posY + this.alto > obstaculo.posY &&
        this.posY < obstaculo.posY + obstaculo.tamaño) {
      this.velocidad = -this.velocidad + random(-2, 2);
    }
  }
}
