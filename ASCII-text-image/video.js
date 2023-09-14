const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
//const density = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~>i!lI;:,"^`\'. ';
const size = 64;
let video;
let asciiDiv;

function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    video.size(size, size);
    asciiDiv = createDiv();
}

function draw() {
    background(0);
    video.loadPixels();
    let asciiImage = '';
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixleIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixleIndex + 0];
            const g = video.pixels[pixleIndex + 1];
            const b = video.pixels[pixleIndex + 2];
            const avg = (r+g+b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg,0,255,len,0));

            const char = density.charAt(charIndex);
            if (char == ' ') asciiImage += '&nbsp';
            else asciiImage += char;
        }
        asciiImage += '<br>';
    }
    asciiDiv.html(asciiImage);
}
