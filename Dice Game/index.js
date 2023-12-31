var randomNumber1 = Math.floor(Math.random()*7) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "./Images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*7) + 1;
var randomImageSource2 = "./Images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "Left wala jeet gaya💥";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "Right wala jeet gaya💢";
}
else{
    document.querySelector("h2").innerHTML = "Hai bhagavan, ye kya hua😲!!";
}


function refreshPage(){
    window.location.reload();
}