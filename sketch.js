// posicao da bola
let x = 200;
let y = 200;

// velocidade da bola aleatoria
let vx = Math.random() * 10 - 5;
let vy = Math.random() * 10 - 5;




// funcao setup do p5.js
function setup() {
    createCanvas(400, 400);
}

// funcao de desenho do p5.js
function draw() {
    background(0);
    fill(255);
    ellipse(x, y, 50, 50);
    x+=vx;
    y+=vy;

    // se tocar na parede, inverte a velocidade
    if (x > width || x < 0) {
        vx *= -1;
    }
    if (y > height || y < 0) {
        vy *= -1;
    }

}
