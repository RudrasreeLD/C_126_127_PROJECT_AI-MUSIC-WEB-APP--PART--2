song_1 = "";
song_2 = "";

function preload()
{
    song_1 = loadSound("THE SPECTRE.mp3");
    song_2 = loadSound("ON MY WAY.mp3");
}

function setup()
{
    canvas = createCanvas(690, 547);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 20, 20, 650, 500);
}