var objectDetector;
var confirma;

var objeto

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelload)
    document.getElementById("nomeDoObjetoEncontrado").innerHTML = "Status: Detectou objeto"
}

function modelload() {
    console.log("model load!")
    confirma = true
    objectDetector.detect(img, gotpose)
}

function gotpose(error, result) {
    if (error) {
        console.log("não foi identificado nada")
    } else {
        console.log(result);
        objeto = result
    }
}

function draw() {
    image(img, 0, 0, 600, 500)

    if(confirma) {
        for(i = 0; i <objeto.length; i++){
            
    fill("red")
    percent = floor(objeto[i].confidence * 100)
    text(objeto[i].label + " " + percent + "%", objeto[i].x, objeto[i].y)

    noFill()
    stroke(255, 0, 0)
    rect(objeto[i].x, objeto[i].y, objeto[i].width , objeto[i].height)
        }
    }


    console.log(objeto)


}

