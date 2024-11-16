class Tanque {constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.angulo = 0;
    this.color = color;
    this.projectiles = [];
    this.vivo = true;
    this.espacio = 30;
  }

  mostrar() {
    if (this.vivo) {
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.angulo);
      fill(this.color);
      rectMode(CENTER);
      rect(0, 0, this.espacio, 20);
      rect(15, 0, 20, 5);
      pop();
    }
  }

  mover(dir) {
    let vel = p5.Vector.fromAngle(this.angulo).mult(dir);
    this.pos.add(vel);

    // Evitar que el tanque se salga del lienzo
    this.pos.x = constrain(this.pos.x, this.espacio / 2, width - this.espacio / 2);
    this.pos.y = constrain(this.pos.y, this.espacio / 2, height - this.espacio / 2);
  }

  girar(direccion) {
    this.angulo += direccion;
  }

  disparar() {
    if (this.vivo) {
      let vel = p5.Vector.fromAngle(this.angulo).mult(10);
      this.projectiles.push(new Proyectil(this.pos.x, this.pos.y, vel, this.color));
    }
  }

  actualizarProyectiles(objetivo, paredes) {
    for (let p of this.projectiles) {
      p.mover();
      p.mostrar();
      if (p.colisionaCon(objetivo)) {
        objetivo.vivo = false;
      }
      p.reboteEnPared(paredes);
    }
  }

  verificarImpacto(proyectil) {
    let distancia = dist(proyectil.pos.x, proyectil.pos.y, this.pos.x, this.pos.y);
    return distancia < 20;
  }
}
