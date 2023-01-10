var data = [];

function setup() {
    createCanvas(500, 500)
    background(0)     //Black
}

function mousePressed(){
    console.log("Mouse Pressed")
    var x = map(mouseX, 0, width, 0, 1)
    var y = map(mouseY, 0, height, 1, 0)
    var point = createVector(x, y)
    data.push(point)
}
// lol comment
function draw(){
    background(0)
    for (var i = 0; i < data.length; i++){
        var x = map(data[i].x, 0, 1, 0, width)
        var y = map(data[i].y, 0, 1, height, 0)

        fill(255)
        stroke(255)
        ellipse(x, y, 8, 8)
    }
}