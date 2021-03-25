let horseCursor = p => {
    
    let horse;
    let effect = false;

    p.preload = () => {
        horse = p.loadImage('./assets/horse.png');
    }

    p.setup = () => {
        let c = p.createCanvas(p.windowWidth, p.windowHeight);
        c.parent('#container');
        p.background(242, 141, 213);
    }

    p.draw = () => {
        if(!effect) {
            p.background(242, 141, 213);
        }

        p.imageMode(p.CENTER);
        p.image(horse, p.mouseX, p.mouseY, 250, 200);
    }

    p.mousePressed = () => {
        effect = true;
    }

    p.mouseReleased = () => {
        effect = false;
    }
}

let partyHat = p => {

    p.setup = () => {
        let c = p.createCanvas(300, 380);
        c.parent('#partyhat');
        p.background(181, 255, 195);
    }

    p.mouseDragged = () => {
        p.noStroke();
        p.fill(186, 166, 0);
        p.circle(p.mouseX, p.mouseY, 10);
    }
}

let h = new p5(horseCursor);
let p = new p5(partyHat);