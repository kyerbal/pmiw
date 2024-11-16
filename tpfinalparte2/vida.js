class Vida {
  constructor(inicio, color) {
    this.vidas = inicio; // numero d vidas
    this.color = color; // color de la avioneta
  }

  perderVida() {
    if (this.vidas > 0) {  
      this.vidas--; // disminuir las vidas cuando se recibe un disparo
    }
  }

  mostrar() {
    textSize(20);
    fill(255);
    textAlign(CENTER);
    if (this.color === 'azul') {
      text('Vidas: ' + this.vidas, 50, 30); // mostrar en la esquina izquierda para la avioneta azul
    } else {
      text('Vidas: ' + this.vidas, width - 50, 30); // mostrar en la esquina derecha para la avioneta roja
    }
  }

  estaVivo() {
    return this.vidas > 0; // Si las vidas son mayores que 0, la avioneta sigue viva
  }
}
