let wins = 0;
let losses = 0;
let score = 0;
let randomGoal;

resetGame();

$("#score").html("Score: " + score);

$("#wins").html("Wins: " + wins);

$("#losses").html("Losses: " + losses);

$(document).on("click", ".crystalCollector", function(){
    
    let number = parseInt($(this).attr("random"));

    score += number;

    $("#score").html("Score: " + score);

    if(score === randomGoal){
        wins++
        $("#wins").html("Wins: " + wins);
        $("#winLossStatus").html("You won!");
        resetGame();
        score = 0;
        $("#score").html("Score: " + score);
    }
    else if(score > randomGoal){
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#winLossStatus").html("You lost!");
        resetGame();
        score = 0;
        $("#score").html("Score: " + score);
    }

});

function resetGame(){

    let images = ["assets/images/blue.jpg", "assets/images/orange.jpg", "assets/images/red.jpg", "assets/images/tanzanite.jpg"];

    $(".boxes").empty()

    randomGoal = Math.floor(Math.random() * 102) + 19;

    $("#randomGoal").html("Goal: " + randomGoal);

    for(let i = 0; i < 4; i++){
        let randomNumber = Math.floor(Math.random() * 12) + 1;
        let crystalCollector = $("<div>");
        crystalCollector.attr({
            "class": "crystalCollector",
            "random": randomNumber
        });

        crystalCollector.css({
            "background-image": "url('" + images[i] +"')",
            "padding-right": "100px"
        });

        $(".boxes").append(crystalCollector);

        console.log(randomNumber);

    }
}
