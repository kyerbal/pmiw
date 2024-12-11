class Vida {
  constructor(inicio, color) {
    this.vidas = inicio; // numero d vidas
    this.color = color; // color del auto
  }

  perderVida() {
    if (this.vidas > 0) {  
      this.vidas--; // restar vidas cuando recibe una bala
    }
  }

  mostrar() {
    textSize(20);
    fill(255);
    textAlign(CENTER);
    if (this.color === 'azul') {
      text('Vidas: ' + this.vidas, 50, 30); // mostrar en la esquina izquierda para el auto azul
    } else {
      text('Vidas: ' + this.vidas, width - 50, 30); // mostrar en la esquina derecha para el auto rojo
    }
  }

  estaVivo() {
    return this.vidas > 0; // vida mayor que 0, auto vivo
  }
}
