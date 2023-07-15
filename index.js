var rn1 = Math.floor(Math.random() * 6) + 1;
var imgSource = "img/" + rn1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", imgSource);

var rn2 = Math.floor(Math.random() * 6) + 1;
var imgSource2 = "img/" + rn2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", imgSource2);

if (rn1 > rn2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if (rn1 < rn2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw";
}