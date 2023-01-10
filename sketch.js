var data = [];

function setup() {
    createCanvas(1000, 1000)
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
    let x1 = 0;    
    let y1 = m * x1 + b;
    let x2 = 1;
    let y2 = m * x2 + b;

    // rescale variables
    x1 = map(x1, 0, 1, 0, width)
    y1 = map(y1, 0, 1, height, 0)

    x2 = map(x2, 0, 1, 0, width)
    y2 = map(y2, 0, 1, height, 0)
    line(x1, y1, x2, y2)
}

function mousePressed(){

    // add point to data
    let x = map(mouseX, 0, height, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)
    let point = createVector(x, y)
    data.push(point)

    background(0) //clear previous canvas
    fill(255)     // white color for elements
    stroke(255)
     
    // draw points
    for (let i = 0; i < data.length; i++){
        let xi = map(data[i].x, 0, 1, 0, width)
        let yi = map(data[i].y, 0, 1, height, 0)
        ellipse(xi, yi, 8, 8)
    }
}



function draw(){ 
    if (data.length > 1){       
    let [m, b] = linearRegression()
    drawLine(m, b)
    }
}
