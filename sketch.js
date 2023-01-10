var data = [];

function setup() {
    createCanvas(500, 500)
    background(0)     //Black
}

function drawLine(){
    m = 0.5
    b = 0
    var x1 = 0;    
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;

    // rescale variables
    x1 = map(x1, 0, 1, 0, width)
    y1 = map(y1, 0, 1, height, 0)

    x2 = map(x2, 0, 1, 0, width)
    y2 = map(y2, 0, 1, height, 0)
    line(x1, y1, x2, y2)
}

function mousePressed(){
    let y = map(mouseY, 0, height, 1, 0)
    let point = createVector(x, y)
    data.push(point)
}

function draw(){
    background(0)
    fill(255)
    stroke(255)
     
    for (let i = 0; i < data.length; i++){
        var x = map(data[i].x, 0, 1, 0, width)
        var y = map(data[i].y, 0, 1, height, 0)

       ellipse(x, y, 8, 8)
    }
   drawLine()
}