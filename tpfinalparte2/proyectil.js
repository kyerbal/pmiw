class Proyectil {
  constructor(x, y, vel, color) {
    this.pos = createVector(x, y);
    this.vel = vel;
    this.color = color;
  }

  mover() {
    this.pos.add(this.vel);

    // Rebote en los bordes
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  mostrar() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  colisionaCon(tanque) {
    return tanque.verificarImpacto(this);
  }

  reboteEnPared(paredes) {
    for (let pared of paredes) {
      if (this.pos.x > pared.x - pared.w / 2 &&
          this.pos.x < pared.x + pared.w / 2 &&
          this.pos.y > pared.y - pared.h / 2 &&
          this.pos.y < pared.y + pared.h / 2) {
        // Rebote en pared
        this.vel.x *= -1;
        this.vel.y *= -1;
      }
    }
  }
}
