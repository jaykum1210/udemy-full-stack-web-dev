var a = Math.random();
var b = parseInt(a*6 +1);
console.log(b);
var c = Math.random();
var d = parseInt(c*6 +1);
console.log(d);

function e(){
    if(b>d){
        document.querySelector("#winner").innerHTML = "🚩 Player 1 Wins!";
    }
    else if(b<d){
        document.querySelector("#winner").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("#winner").innerHTML = "Draw!";
    }
}
e();
function roll(selector, dicenumber) {
    document.querySelector(selector).src = `images/dice-${dicenumber}.svg`;
}
roll(".ima1", b);
roll(".ima2", d);
