canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;
    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
} 

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); 
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keyDown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed = '38') {
        up();
        console.log("up");
    }
    if (keyPressed = '40') {
        down();
        console.log("down");
    }
    if (keyPressed = '37') {
        left();
        console.log("left");
    }
    if (keyPressed = '39') {
        right();
        console.log("right");
    }
}