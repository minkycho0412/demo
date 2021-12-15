var diam = 1;

let p1, p2, p3, p4, p5, p6;
let pColors, pChange;
let i = 5;


function setup() {
    var canvas = createCanvas(150, 150);

    canvas.parent('tempogif');
    
    p1 = color (137,46,141); //purple
    p2 = color (255,140,18); //orange
    p3 = color (255, 96, 78); //red
    p4 = color (255,121,165); //pink
    p5 = color (55,191,61); //green
    p6 = color (24,152,227); //blue
    
    pColors = [p1, p2, p3, p4, p5, p6]; // p1=pColors[0], p2=pColors[1] ...
    pChange = pColors[i];
}

// new p5(sketch, 'tempogif');

function draw() {
    background(0);
    
    fill(0);
    square(0,0,200,20);
    
    ellipseMode(CENTER);
    noStroke();
    fill(pChange);
    ellipse(75, 75, diam);
    
    if(diam >= 200) {
        inOut = false;
    }
        
    if(diam <= 1) {
        inOut = true;
        i=(i+1)%6;
        pChange = pColors[i];
    }
        
    if(inOut){
        switch(document.querySelector("#slider").value) {
            case "1":
                diam += 1;
                break;
            case "2":
                diam += 2;
                break;
            case "3":
                diam += 3;
                break;
            case "4":
                diam += 4;
                break;
            case "5":
                diam += 5;
                break;
        }
    } else {
        switch(document.querySelector("#slider").value) {
            case "1":
                diam -= 1;
                break;
            case "2":
                diam -= 2;
                break;
            case "3":
                diam -= 3;
                break;
            case "4":
                diam -= 4;
                break;
            case "5":
                diam -= 5;
                break;
        }
    }

}