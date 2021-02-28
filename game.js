// empty array to store the pattern of buttons pressed so far
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

nextSequence();

$(".btn").on("click", function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor)
    playSound(userChosenColor);
});

// randomizer function to help select button color at random
function randomizer() {
    return Math.floor(Math.random() * 4);
}

function nextSequence() {

    let randomChosenColor = buttonColors[randomizer()];

    // Add randomChosenColor to end of gamePattern array to store pattern so far
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name) {
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    // temp query to allow for sound to play during testing
    // $("body").on("click", function () {
    //     audio.play();
    // });
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

