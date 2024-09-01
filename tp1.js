
let diametro;           
let numAnillos = 15;    
let colores;            
let img;                


function preload() {
  img = loadImage("julio_le_parc.jpg");
}

function setup() {
  createCanvas(800, 400); 
  background(255);        
  diametro = 300;
  colores = new Array(numAnillos);
  colorRandom();          
  img.resize(400, 400);   
}

function draw() {
  background(255);

  // Dibuja los círculos 
  dibujarCirculo(width / 2 + 200, height / 2, diametro);

  // Configuración y dibujo de textos 
  textAlign(CENTER);
  textSize(14);
  fill(0);
  text("Presiona las teclas '+' y '-' para cambiar el tamaño del círculo", width / 2 + 190, height / 2 + 170);
  text("Presiona la tecla 'R' para reiniciar", width / 2 + 190, height / 2 + 190);

  // Muestra la imagen
  image(img, 0, 0);
}

// Función para dibujar los círculos 
function dibujarCirculo(centerX, centerY, diametro) {
  let anchoAnillo = diametro / numAnillos;
  for (let i = 0; i < numAnillos; i++) {
    fill(colores[i]);
    noStroke();
    ellipse(centerX, centerY, diametro - i * anchoAnillo, diametro - i * anchoAnillo);
  }
}

// Función para asignar colores aleatorios a los anillos
function colorRandom() {
  for (let i = 0; i < numAnillos; i++) {
    colores[i] = color(random(255), random(255), random(255));
  }
}

// Función que se ejecuta cuando se presiona una tecla
function keyPressed() {
  if (key === '+') {
    diametro += 20; 
  } else if (key === '-') {
    diametro -= 20; 
    if (diametro < 20) {
      diametro = 20;
    }
  } else if (key === 'r' || key === 'R') {
    reiniciarPrograma(); 
  }
}

// Función para reiniciar los parámetros iniciales
function reiniciarPrograma() {
  diametro = 300;
  colorRandom();
}
