var a = Math.floor(Math.random() * 6) + 1;
var sr = "images/dice" + a+ ".png";
var selector = document.getElementsByClassName("img1")[0];
selector.setAttribute("src", sr);


var b = Math.floor(Math.random() * 6) + 1;
var sr2 = "images/dice" + b + ".png";
var selector2 = document.getElementsByClassName("img2")[0];
selector2.setAttribute("src", sr2);

if(a===b){
    document.querySelector("h1").innerHTML = "Match Draws 🏳️"
}
else if(a>b){
    document.querySelector("h1").innerHTML = "🚩A Wins"
}
else{
    document.querySelector("h1").innerHTML = "B Wins🚩"
}

