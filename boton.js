class Boton {
  constructor(x, y, w, h, colorFondo, colorTexto, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colorFondo = colorFondo;
    this.colorTexto = colorTexto;
    this.texto = texto;
  }

  dibujar() {
    fill(this.colorFondo);
    rect(this.x, this.y, this.w, this.h);
    fill(this.colorTexto);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  clicEnBoton() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      return mouseIsPressed;
    }
  }
}
