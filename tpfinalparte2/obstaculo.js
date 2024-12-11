class Obstaculo {
  constructor(posX, posY, velocidad) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 50;
    this.alto = 30;
    this.velocidad = velocidad;
    this.tamaño = 30; // tamaño del obstaculo
  }

  mover() {
    this.posY += this.velocidad; //movimiento vertical y velocidad
    if (this.posY <= 0 || this.posY >= 460) { // cambia la dirección si toca el borde superior o inferior de la pantalla, puse 460 y no height porq queda mal
      this.velocidad *= -1; // cambiar dirección cuando toca los bordes
    }
  }

  dibujar() {
    image(obstaculospiedras, this.posX, this.posY, this.ancho, this.alto);
  }
}
