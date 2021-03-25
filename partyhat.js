function setup() {
    let c = createCanvas(300, 380);
    // canvas.parent('#partyhat');
    background(181, 255, 195);
}

function draw() {

}

function mousePressed() {
    noStroke();
    fill(186, 166, 0);
    circle(mouseX, mouseY, 10);
}