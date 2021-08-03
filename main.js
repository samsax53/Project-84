var canvas = document.getElementById("myCanvas");
var ref = canvas.getContext("2d");

var imageWidth = 790;
var imageHeight = 440;

var imageMn = "";
var inform = document.getElementById("mainLabel");
var mBold = document.getElementById("mainBold");
var key_type = "";
var OutCode = "";
var key_code = document.getElementById("codeLabel");

var imageX = 10;
var imageY = 10;

function add() {

    imgTag = new Image();
    imgTag.onload = loadImage;
    imgTag.src = imageMn;

}

function loadImage() {
    ref.drawImage(imgTag, imageX, imageY, imageWidth, imageHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if(keyPressed >='65' && keyPressed<='122'){
		imageMn = "Alpkey.png";
		key_type = "You pressed an " + "<b style='color: green;' id='mainBold'>" + "alphabet key" +"</b>";
		startLoading();
    }
    if(keyPressed >='48' && keyPressed<='57'){
		key_type = "You pressed a " + "<b style='color: green;' id='mainBold'>" + "number key" +"</b>";
		imageMn = "numkey.png";
		startLoading();
    }
    if(keyPressed >='37' && keyPressed<='40'){
		key_type = "You pressed an " + "<b style='color: green;' id='mainBold'>" + "arrow key" +"</b>";
		imageMn = "Arrkey.png";
		startLoading();
    }
    if(keyPressed =='17' || keyPressed =='18' || keyPressed =='27'){
		key_type = "You pressed a " + "<b style='color: green;' id='mainBold'>" + "special key" +"</b>";
		imageMn = "spkey.png";
		startLoading();
    }
	if(keyPressed =='13' || keyPressed =='16' || keyPressed =='46'){
		key_type = "You pressed an " + "<b style='color: green;' id='mainBold'>" + "other key" +"</b>";
		imageMn = "otherkey.png";
		startLoading();
    }
}

function startLoading() {
	OutCode = "Key code: " + "<b style='color: black;'>" + keyPressed; + "</b>"
	inform.innerHTML = key_type;
	imgTag.src = imageMn;
	key_code.innerHTML = OutCode;
	loadImage();
}