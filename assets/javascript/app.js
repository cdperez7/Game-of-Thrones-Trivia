// When start is clicked the game will begin
$("#start").on("click", function () {

    game.begin();


})

// When the submit button is clicked, game over + displays results
$(document).on("click", "#submit", function () {
    game.gameOver();
})


// array of all the questions to be asked during the game
var questions = [{

    question: "What is the common soup for people living in Flea Bottom (King's Landing)?",
    answers: ["A bowl of brown", "Sour porridge", "Dirty water", "Rat stew"],
    correctAnswer: "A bowl of brown",
}, {
    question: "What are the words of House Mormont?",
    answers: ["Hear us roar", "Here we stand", "Unbowed, Unbent, Unbroken", "We stand together"],
    correctAnswer: "Here we stand",

}, {
    question: "What was the name of Arthur Dayne's sword?",
    answers: ["Sky Fire", "Gut Ripper", "Dawn", "Ice"],
    correctAnswer: "Dawn",
}, {
    question: "What were the words Jon Arryn kept repeating before his death?",
    answers: ["Trust nobody", "The Night Walkers are coming", "Promise me, Ned", "The seed is strong"],
    correctAnswer: "The seed is strong",
}, {
    question: "Jon Snow was the _____ Lord Commander of the Nights Watch",
    answers: ["998th", "1000th", "999th", "992nd"],
    correctAnswer: "998th",
}, {
    question: "What do the Dothraki refer to the ocean/sea as?",
    answers: ["The great water", "The endless sea", "Poison water", "Horse poison"],
    correctAnswer: "Poison water",
}, {
    question: "What did Tommen name his cat?",
    answers: ["Forrest", "Balerion", "Ser Pounce", "Mittens"],
    correctAnswer: "Ser Pounce",
}];

// the main function for the game containing most of what happens
var game = {
    timeRemaining: 150,
    correct: 0,
    incorrect: 0,

    // function that attaches time remaining to html, counts down, and tells it what to do at 0 seconds left
    countdown: function () {
        game.timeRemaining--;
        $("#timeRemaining").html(game.timeRemaining);
        if (game.timeRemaining <= 0) {
            console.log("Time is up");
            game.gameOver();
        }
    },

    // what to do when game begins. Set time, remove start bar, replace with questions that are looped through with for loop
    // struggled with the final append, but had help with tutor for that part
    begin: function () {
        time = setInterval(game.countdown, 1000);
        $("#triviaContent").prepend('<h2> Time Remaining: <span id ="timeRemaining"> 150 </span> seconds remaining </h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#triviaContent").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#triviaContent").append("<input type = 'radio' name = 'question-" + i + "' value = '" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        // added button to submit content instead of waiting for time to run out
        $("#triviaContent").append('<br><br><button id="submit"> Submit Answers </button>');

    },

    // Adds a results screen, and appends all of the information depending on user input.
    result: function () {
        clearInterval(timeRemaining);
        $("#triviaContent h2").remove();
        $("#triviaContent").html("<h2> Game completed </h2>");
        $("#triviaContent").append("<h3> Correct Answers: " + this.correct + "</h3>");
        $("#triviaContent").append("<h3> Incorrect Answers: " + this.incorrect + "</h3>");
        $("#triviaContent").append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    },

    // function to specify what happens when questions are answered. The input of each of these matches with the above. I am not sure if there is an easier way than copying 7 times but this worked for me. 
    gameOver: function () {
        $.each($("input[name='question-0']:checked"), function () {
            // if this (what they click) = correct answer then log as correct/vice versa. Struggled on the below this code before finding a good example on google
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // use this to display the results at the end. Was stuck on this part for a bit but google helped. 
        this.result();

    },


}