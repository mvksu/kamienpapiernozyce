var userScore = 0;
var roundnumber = 0;
var AIScore = 0;
var moves = []; 
var modeLog;
var user;
var arraySize;
var aiMoveInt;
var aiMove;
var setMove;
var winner;


var rr = 0;
var rp = 0;
var rs = 0;
var pr = 0;
var pp = 0;
var ps = 0;
var sr = 0;
var sp = 0;
var ss = 0;

var aiWinTotal;

var rrp = 0;
var rpp = 0;
var rsp = 0;
var prp = 0;
var ppp = 0;
var psp = 0;
var srp = 0;
var spp = 0;
var ssp = 0;

const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getAIchoice() {
    const choices = ['r', 'p', 's'];
    if (document.getElementById("aiCheck").checked == true && arraySize != null)
    {
        modeLog = 'AI Mode';
        convertToInt(moves[arraySize].userMove)
        aiPredict()
        return choices[aiMoveInt];
    }
    else 
    {
        modeLog = 'Random Mode'
        const randomNumber = Math.floor(Math.random() * 3)
        return choices[randomNumber];
    }
    
}
function convertToInt(letter) {
    if (letter == 'r') return previousMoveInt = 0;
    if (letter == 'p') return previousMoveInt = 1;
    if (letter == 's') return previousMoveInt = 2;
}

function convertToLetter(letter) {
    if (letter == 'r') return 'Kamień'
    if (letter == 'p') return 'Papier'
    if (letter == 's') return 'Nożyce'
}

function showResults() {
    document.getElementById("player1").innerHTML = convertToLetter(moves[arraySize].userMove);
    document.getElementById("ai1").innerHTML = convertToLetter(moves[arraySize].AImove);
    document.getElementById("round1").innerHTML = roundnumber;
    if (moves[arraySize].winner == "user") {
        document.getElementById("player1").style.color = 'green'
        document.getElementById("ai1").style.color = 'white'
    }
    else {
        document.getElementById("ai1").style.color = '#fc121b'
        document.getElementById("player1").style.color = 'white'
    }
    if (roundnumber-1 > 0) {
        document.getElementById("round2").innerHTML = roundnumber-1;
    }

    document.getElementById("player2").innerHTML = convertToLetter(moves[arraySize-1].userMove);
    document.getElementById("ai2").innerHTML = convertToLetter(moves[arraySize-1].AImove);
    if (moves[arraySize-1].winner == "user") {
        document.getElementById("player2").style.color = 'green'
        document.getElementById("ai2").style.color = 'white'
    }
    else {
        document.getElementById("ai2").style.color = '#fc121b'
        document.getElementById("player2").style.color = 'white'
    }
    if (roundnumber-2 > 0) {
        document.getElementById("round3").innerHTML = roundnumber-2;
    }

    document.getElementById("player3").innerHTML = convertToLetter(moves[arraySize-2].userMove);
    document.getElementById("ai3").innerHTML = convertToLetter(moves[arraySize-2].AImove);

    if (moves[arraySize-2].winner == "user") {
        document.getElementById("player3").style.color = 'green'
        document.getElementById("ai3").style.color = 'white'
    }
    else {
        document.getElementById("ai3").style.color = '#fc121b'
        document.getElementById("player3").style.color = 'white'
    }
}
function win(userChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 500);
}

function lose(userChoice) {
    AIScore++;
    aiScore_span.innerHTML = AIScore;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 500);
}
function draw(userChoice) {
    
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('gray-glow')
    }, 500);
}

function game(userChoice) { 
    roundnumber++;
    document.getElementById("roundnumber").innerHTML = roundnumber;
    const AIchoice = getAIchoice();
    setTimeout(() => {
        document.getElementById("right").src = `${AIchoice}r.PNG`
        document.getElementById("left").src = `${userChoice}.PNG`
    }, 650)
        
    switch (userChoice + AIchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, AIchoice);
            setMove = {userMove: userChoice, AImove: AIchoice,  winner: 'user'}
            result = 'User wins';
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, AIchoice);
            setMove = {userMove: userChoice, AImove: AIchoice,  winner: 'AI'}
            result = 'AI wins';
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, AIchoice);
            setMove = {userMove: userChoice, AImove: AIchoice,  winner: 'draw'}
            result = 'draw';
            break; 
    }


    moves.push(setMove);
    if (moves.length > 5) {
        moves.shift();
    }
    arraySize = moves.length - 1;

    showResults();




    console.log("Player move:  " + userChoice);
    console.log("------------------------------");
    console.log("AI Strategy mode:  "+ modeLog);
    // console.log(aiResult);
    console.log('Total wins per AI Mode: ');
    console.log('rr: '+rr+" rp:"+rp+" rs:"+rs+" pp:"+pp+" ps:"+ps+" sr:"+sr+" sp:"+sp+" ss:"+ss);
    console.log("Win ratio per AI Mode:");
    console.log('rr: '+rrp+"% rp:"+rpp+"% rs:"+prp+"% pp:"+ppp+"% ps:"+psp+"% sr:"+srp+"% sp:"+srp+"% sp:"+ssp+"% ss:"+ssp);
    console.log("AI Move:  " + AIchoice);
    console.log("Result:  " + result);
    console.log("------------------------------");
    
}




function main() {
    document.getElementById("resetButton").addEventListener('click', function() {
        userScore = 0;
        roundnumber = 1;
        AIScore = 0;
        userScore_span.innerHTML = userScore;
        document.getElementById("roundnumber").innerHTML = roundnumber;
        aiScore_span.innerHTML = userScore;
    })
    
    rock_div.addEventListener('click', function() {
        document.getElementById("right").style.animation = "bounce 0.75s"
        document.getElementById("left").style.animation = "bounce 0.75s"
        setTimeout(() => {
            document.getElementById("right").style.animation = "none"
            document.getElementById("left").style.animation = "none"
        },1000)
        
        userMove = 'r'
        game("r")
    })
    paper_div.addEventListener('click', function() {
        document.getElementById("right").style.animation = "bounce 0.75s"
        document.getElementById("left").style.animation = "bounce 0.75s"
        setTimeout(() => {
            document.getElementById("right").style.animation = "none"
            document.getElementById("left").style.animation = "none"
        },1000)
        userMove = 'p'
        game("p")
    })
    scissors_div.addEventListener('click', function() {
        document.getElementById("right").style.animation = "bounce 0.75s"
        document.getElementById("left").style.animation = "bounce 0.75s"
        setTimeout(() => {
            document.getElementById("right").style.animation = "none"
            document.getElementById("left").style.animation = "none"
        },1000)
        userMove = 's'
        game("s")
    })
    

}
main();

