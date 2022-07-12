function preload() 
{

}
function setup()
{
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("noseX : " + results[0].pose.nose.x);
        console.log("noseY : " + results[0].pose.nose.y);
    }
}

function draw()
{
  image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('myfilter.png');
}