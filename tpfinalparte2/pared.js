class Pared {constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  mostrar() {
    fill(100);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
