var rockBtn = document.getElementById("rock")
var paperBtn = document.getElementById("paper")
var scissorBtn = document.getElementById("scissor")
var logoBtn = document.querySelector(".buttons")
var player1Score = document.getElementById('player1')
var player2Score = document.getElementById('player2')
var you = document.getElementById('hand')
var opponent = document.getElementById('opponent');
var overDiv = document.getElementById('over')
var won = document.getElementById('winner')
var playAgainBtn = document.getElementById('Again')
var audio = document.getElementById('audio')
var fail = document.getElementById('failed')
var score1=0;
var score2=0;
var click =0;

rockBtn.onclick = () => {
    // logoBtn.style.visibility = "hidden";
    you.style.visibility = "visible";
    opponent.style.visibility = "visible";
    document.getElementById("hand").src =" assets/rock-hand.png";
    var img = ["assets/paper-hand.png","assets/scissors-hand.png"];
    var source = opponent.src=img[Math.floor(Math.random()*img.length)];
    rockWins(source);
}
paperBtn.onclick = () => {
    // logoBtn.style.visibility = "hidden";
    you.style.visibility = "visible";
    opponent.style.visibility = "visible";
    document.getElementById("hand").src ="assets/paper-hand.png";
    var img = ["assets/rock-hand.png","assets/scissors-hand.png"];
    var source =opponent.src=img[Math.floor(Math.random()*img.length)];
    paperWins(source);
    
}
scissorBtn.onclick = () => {
    // logoBtn.style.visibility = "hidden";
    you.style.visibility = "visible";
    opponent.style.visibility = "visible";
    document.getElementById("hand").src ="assets/scissors-hand.png";
    var img = ["assets/rock-hand.png","assets/paper-hand.png"];
    var source =opponent.src=img[Math.floor(Math.random()*img.length)];
    scissorsWins(source);
}


function rockWins(src){
    if(src==="assets/scissors-hand.png"){
        score1++;
        player1Score.innerText=score1;
        if(score1==5){
            You();
    
            
        }
    }else{
        score2++;
        player2Score.innerText=score2;
        if(score2==5){
            Comp();
        }
    }
}
function paperWins(src){
    if(src==="assets/rock-hand.png"){
        score1++;
        player1Score.innerText=score1;
        if(score1==5){
            You();
        }
    }else{
        score2++;
        player2Score.innerText=score2;
        if(score2==5){
            Comp();
        }
    }
}
function scissorsWins(src){
    if(src==="assets/paper-hand.png"){
        score1++;
        player1Score.innerText=score1;
        if(score1==5){
            You();
        }
    }else{
        score2++;
        player2Score.innerText=score2;
        if(score2==5){
            Comp();
        }
    }
}

function You(){
    logoBtn.style.visibility = "hidden"
    overDiv.style.visibility = "visible";
    won.innerText = "You ";
    audio.play();
}

function Comp(){
    logoBtn.style.visibility = "hidden"
    overDiv.style.visibility = "visible";
    won.innerText = "Comp "
    fail.play()
}
playAgainBtn.onclick = () => {
    location.reload(true);
}