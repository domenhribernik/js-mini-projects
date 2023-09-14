//const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
const density = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~>i!lI;:,"^`\'. ';
let img;

function preload() {
    img = loadImage("photos/girl-pearl100.jpg");
}

function setup() {
    noCanvas();

    background(0);
    //image(img, 0, 0, width, height)

    let w = width / img.width;
    let h = height / img.height;
    img.loadPixels();
    for (let j = 0; j < img.height; j++) {
        let row = '';
        for (let i = 0; i < img.width; i++) {
            const pixleIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixleIndex + 0];
            const g = img.pixels[pixleIndex + 1];
            const b = img.pixels[pixleIndex + 2];
            const avg = (r+g+b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg,0,255,len,0));

            const char = density.charAt(charIndex);
            if (char == ' ') row += '&nbsp';
            row += char;
        }
        createDiv(row);
    }
}
