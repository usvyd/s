function preload(){
}
function setup(){
    canvas=createCanvas(10000, 10000);
    canvas.position(500, 300);
    video=createCapture(VIDEO);
    video.hide();

    
}
function draw(){
    
    image(video, 200, 200, 300, 300);
    circle(100,100,50,3)
    fill(0,128,0)
    circle(600,100,50,3)
    fill(0,128,0)
    circle(100,600,50,3)
    fill(0,128,0)
    circle(600,600,50,3)
    fill(0,128,0)

    rect(115,85,475, 30)
    fill(0,128,0)
    rect(115,585,475, 30)
    fill(0,128,0)
    rect(85,115,30, 475)
    fill(0,128,0)
    rect(585,115,30, 475)
    fill(0,128,0)
} 
function take_snapshot(){
    save('student_name.png');
}
