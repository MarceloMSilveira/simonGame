var level =0;
var gameBegin = true;
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

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
        default:
            break;
    }
}

function playSound(colorName) {
    var source = getAudioSource(colorName);
    var audioElement = $("<audio>").attr("src", source).get(0);
    audioElement.play();
}

function nextSequence (){
    //seleciona nr aleatório entre 0 e 3
    var randomNumber = Math.floor(4*Math.random());
    $("h1").text("Level "+level);
    level++;
    return randomNumber;
}

$(".btn").click(function(e){
    var userChosenColour = e.target.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
});

//start game when any key is pressed:
$(document).keypress(function () {
    if (gameBegin){
        //show current level (level 0):
        $("h1").text("Level "+level);
        //identifica a cor aleatoriamente escolhida
        //chama nextSequence que (muda o texto para identificar a fase)
        var randomChosenColour = buttonColours[nextSequence()];
        
        //toca som do botão escolhido:
        playSound(randomChosenColour);
        //anima o botão escolhido:
        animatePress(randomChosenColour);
        //coloca a cor dentro do array de padrões 
        //escolhidos pelo jogo
        gamePattern.push(randomChosenColour);

        //configura flag para executar somente na primeira vez
        gameBegin=false;
    }
})