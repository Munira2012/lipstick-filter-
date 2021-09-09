nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/9FMdLjKz/lipstick.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function gotposes(results){
    if (results.length >0){
        console.log (results);
        nosex=results[0].pose.nose.x -15;
        nosey=results[0].pose.nose.y +18;
console.log("nose x="+nosex);
console.log("nose y="+nosey);
    }
}
function modelloaded(){
    console.log ("modelloaded!,posenet is initialized");
}


function draw(){
image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,40,25);
}
function take_snapshot(){
    save('myfilterimage.png'); 
}
