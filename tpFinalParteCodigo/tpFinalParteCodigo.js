let estado = 0; // Controla el flujo del juego
let autos = []; // Array para almacenar los autos
let imagenes = {};

// Cargar imágenes de los autos
function preload() {
  imagenes['autoRojo'] = loadImage('autoRojo.png');
  imagenes['autoGris'] = loadImage('autoGris.png');
  imagenes['autoBlanco'] = loadImage('autoBlanco.png');
}

// Inicializar autos y otros elementos
function setup() {
  createCanvas(640, 480);
  autos = [
    { nombre: 'Rojo', img: imagenes['autoRojo'] },
    { nombre: 'Gris', img: imagenes['autoGris'] },
    { nombre: 'Blanco', img: imagenes['autoBlanco'] }
  ];
}

// Función principal de dibujo
function draw() {
  background(245);

  switch (estado) {
    case 0:
      pantallaInicial();
      break;
    case 1:
      seleccionDeAuto();
      break;
    case 2:
   
  }
}

// Pantalla inicial
function pantallaInicial() {
  textSize(24);
  textAlign(CENTER);
  text("Presentación de Tobey Marshall", width / 2, height / 2 - 50);
  text("Presiona una tecla para iniciar", width / 2, height / 2 + 50);

  if (keyIsPressed) {
    estado = 1; // Pasar a la selección de autos
  }
}

// Selección de auto
function seleccionDeAuto() {
  textSize(18);
  textAlign(CENTER);
  text("Selecciona tu auto", width / 2, 50);

  for (let i = 0; i < autos.length; i++) {
    image(autos[i].img, i * 200 + 50, 100, 150, 80); // Mostrar autos

    if (mouseIsPressed && mouseX > i * 200 + 50 && mouseX < i * 200 + 200 && mouseY > 100 && mouseY < 180) {
      autoSeleccionado = autos[i].nombre;
      estado = 2; // Pasar a la modificación de auto
    }
  }
}
