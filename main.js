function preload(){}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";

}

function draw(){
    image(video,0,0,400,400);
    tint(tint_colour);

}

function take_snapshot(){
    save('my_image.png');

}

function filter_apply(){
    tint_colour = document.getElementById("colour_name").value;


}