// Some code for the timer
var number = 5;

var intervalInfo;

var timerDone = "";

var visibleQuestion = [];

var questionNumber = 0;

var correctAnswers = 0;

var wrongAnswers = 0;

var questionAnswers = {question1: ["What is the first letter of this sentence?", "w", "h", "s", "q"],
 question2: ["When are you answering this question?", "Now", "Today", "Later", "Never"],
 question3: ["How many letters does this sentence have?", "34", "21", "2", "116"]};

// Start the game
$("#start").on("click", run);

// Restart the game with the initial game state
$("#restart").on("click", restart)
	function restart() {
		visibleQuestion = [];
		questionNumber = 0;
		correctAnswers = 0;
		wrongAnswers = 0;
		$("#question").html("<h2></h2>");
		$("#answers").html("<h2></h2>");
		run();
	}

	function run() {
		$("#start").hide();
		$("#restart").hide();
		$("#gameStatus").html("<h2>Game On!</h2>");
	    intervalInfo = setInterval(decrement, 1000);	    
	    // Create array and add the question answer combo to it
	    var visibleQuestion = questionAnswers[Object.keys(questionAnswers)[questionNumber]];
	    console.log(visibleQuestion);
	    // Displays the question
		$("#question").append(visibleQuestion[0]);
	    // Display the answers in buttons
	    for(var j = 1; j < visibleQuestion.length; j++ ) {
	    	// var a = $("<button>");
	    	// a.attr("data-name", visibleQuestion[j]);
	    	// a.text(visibleQuestion[j]);
	    	// $("#answers").append(a);
        	var answerButton= $('<input type="button" value="' + visibleQuestion[j] + '"/>');
        	answerButton.addClass("score");
        	answerButton.attr("data-name", visibleQuestion[j]);
        // Display the buttons
        $("#answers").append(answerButton);
        }	    
	}	
	// Timer function
	function decrement() {
	    number--;
	    $("#showTimer").html("<h2>" + number + "</h2>");
	    if (number === 0) {
	    stop();
	    }
	}

	function stop() {
	    clearInterval(intervalInfo);
	    // Clear the window
		$("#question").html("<h2></h2>");
		$("#answers").html("<h2></h2>");
		number = 5;
		questionNumber = questionNumber + 1;
		console.log(questionNumber);
		// If all the questions have been used then show results
		if (questionNumber > 2) {
			timerDone = "";
			$("#showTimer").html("<h2>" + timerDone + "</h2>");
			$("#gameStatus").html("<h2>Game Over!</h2>");
			$("#question").html('<h2>Correct Answers: ' + correctAnswers + '</h2>');
			$("#answers").html('<h2>Wrong Answers: ' + wrongAnswers + '</h2>');
			$("#restart").show();
			visibleQuestion = 0;
		}else{
		// Wait a few seconds then run the run function again
		timerDone = "Get Ready For The Next Question";
		$("#showTimer").html("<h2>" + timerDone + "</h2>");
	    setTimeout(run, 2000);
		}
	}
	// function to check if the right button is pushed
	function scoreKeeper() {
		var buttonValue = $(this).attr("value");
		console.log(buttonValue);
		if (buttonValue === "w" || buttonValue === "Now" || buttonValue === "34") {
			correctAnswers = correctAnswers + 1
			stop();
		}else{
			wrongAnswers = wrongAnswers + 1
			stop();
		}

	}
	$("#restart").hide();
	// Create an event listener for all buttons with the ID answer
	$(document).on("click", ".score", scoreKeeper);