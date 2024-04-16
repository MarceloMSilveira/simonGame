var level =0;
var gameBegin = true;
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function startOver(params) {
    gameBegin=true;
    level=0;
    gamePattern=[];
}

function animatePress(currentColor) {
    var colorId = "#"+currentColor;
    var buttonToAnimate = $(colorId);
    buttonToAnimate.addClass("pressed");    
    setTimeout(function(){
        buttonToAnimate.removeClass("pressed");
    }, 100);
}

function getAudioSource (color){
    switch (color) {
        case "red":
            return "./sounds/red.mp3"
            break;
        case "blue":
            return "./sounds/blue.mp3"
            break;
        case "yellow":
            return "./sounds/yellow.mp3"
            break;
        case "green":
            return "./sounds/green.mp3"
            break;
        case "wrong":
            return "./sounds/wrong.mp3"
            break;
        default:
            break;
    }
}

function playSound(colorName) {
    var source = getAudioSource(colorName);
    var audioElement = $("<audio>").attr("src", source).get(0);
    audioElement.play();
}

function showEfects(colorBtn){
    animatePress(colorBtn);
    playSound(colorBtn);
}

function nextSequence (){
    userClickedPattern=[];
    //seleciona nr aleatório entre 0 e 3
    var randomNumber = Math.floor(4*Math.random());
    //associa o nr a uma cor 
    var randomChosenColour = buttonColours[randomNumber];
    //armazena a nova cor
    gamePattern.push(randomChosenColour);
    showEfects(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
    console.log(gamePattern);
}

function checkAnswer(currentLevel) {
    var i = currentLevel;
    if (userClickedPattern[i]===gamePattern[i]){
        console.log("success");
        if (userClickedPattern.length===gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        console.log("wrong");
        $("h1").text("Game-over, press any key to restart.");
        startOver();
    }
    
}

$(".btn").click(function(e){
    var userChosenColour = e.target.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    var indexOfLastAnswer = userClickedPattern.length-1;
    checkAnswer(indexOfLastAnswer);
});

//start game when any key is pressed:
$(document).keypress(function () {
    if (gameBegin){
        $("h1").text("Level 0");

        nextSequence();
        
        
        //configura flag para executar somente na primeira vez
        gameBegin=false;
    }
}) 