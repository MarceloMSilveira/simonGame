var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence (){
    var randomNumber = Math.floor(4*Math.random());
    return randomNumber;
}

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
})

*/