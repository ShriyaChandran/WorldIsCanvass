var cursor;
var drawing=[];

function setup(){
    database = firebase.database();
    createCanvas(500,500); 
    var saveButton = createButton("save");
    saveButton.position(480,480);
    saveButton.mousePressed(saveDrawing);
    var clearButton = createButton("clear");
    clearButton.position(680,480);
    clearButton.mousePressed(clearDrawing);
}

function draw(){
    background("white");
    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }
        console.log(point);
        drawing.push(point);
        beginShape();
        stroke("cyan");
        strokeWeight(4);
        noFill();
        for(var i =0; i<drawing.length;i = i+1){
            vertex(drawing[i].x,drawing[i].y);
        }
        endShape();
       
    }
}

function clearDrawing(){
    drawing=[];
    database.ref('drawings').remove();
}
function saveDrawing(){
    database.ref('drawings').push(drawing);
}

