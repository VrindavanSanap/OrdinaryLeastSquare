var data = [];

function setup() {
    createCanvas(500, 500)
    background(0)     //Black
}

function linearRegression(){

    /*
    Linear Regression formula
    https://wikimedia.org/api/rest_v1/media/math/render/svg/9caed0f59417a425c988764032e5892130e97fa4
    */
    let x_sum = 0
    let y_sum = 0
    
    let m = 0
    let b = 0

    for (let i = 0; i < data.length; i++){
        x_sum += data[i].x
        y_sum += data[i].y
    }

    let x_mean = x_sum / data.length
    let y_mean = y_sum / data.length

    let num = 0
    let den = 0

    for (let i = 0; i < data.length; i++){
        num += (data[i].x - x_mean) * (data[i].y - y_mean)
        den += (data[i].x - x_mean) * (data[i].x - x_mean)            
    }
    
    m =  num / den
    b = y_mean - (m * x_mean)

    return [m, b]
}

function drawLine(m, b){
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

    let x = map(mouseX, 0, height, 0, 1)
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
    
    if (data.length > 1){       
    let [m, b] = linearRegression()
    drawLine(m, b)
    }
}