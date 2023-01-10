var data = [];

function setup() {
    createCanvas(500, 500)
    background(0)     //Black
}

function mousePressed(){
    console.log("Mouse Pressed")
    let x = map(mouseX, 0, width, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)
    let point = createVector(x, y)
    data.push(point)
}

function draw(){
    background(0)
    for (let i = 0; i < data.length; i++){
        var x = map(data[i].x, 0, 1, 0, width)
        var y = map(data[i].y, 0, 1, height, 0)

        fill(255)
        stroke(255)
        ellipse(x, y, 8, 8)
    }
}