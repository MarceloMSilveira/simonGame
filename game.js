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
    var randomNumber = Math.floor(4*Math.random());
    return randomNumber;
}

/*
var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

//console.log(gamePattern);

//selecting the element

var colorId = "#"+randomChosenColour;
var buttonToAnimate = $(colorId);
buttonToAnimate.css("transform", "scale(0)"); // Reduz o tamanho do botão
setTimeout(function(){
    buttonToAnimate.css("transform", "scale(1)"); // Retorna ao tamanho original
},50);

//criando e tocando o elemento audio de acordo com a cor :

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

var source = getAudioSource(randomChosenColour);
var audioElement = $("<audio>").attr("src", source).get(0);
audioElement.play();
*/

$(".btn").click(function(e){
    var userChosenColour = e.target.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
});


/*
$("#green").click(function(e){
    
    var randomChosenColour = buttonColours[nextSequence()];

    gamePattern.push(randomChosenColour);

    //console.log(gamePattern);

    //selecting the element
    var colorId = "#"+randomChosenColour;
    var buttonToAnimate = $(colorId);
    buttonToAnimate.css("transform", "scale(0.9)"); // Reduz o tamanho do botão
    setTimeout(function(){
        buttonToAnimate.css("transform", "scale(1)"); // Retorna ao tamanho original
    },50);

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

    var source = getAudioSource(randomChosenColour);
    var audioElement = $("<audio>").attr("src", source).get(0);
    audioElement.play();
});
*/