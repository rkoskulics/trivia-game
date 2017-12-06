// Some code for the timer
var number = 10;

var intervalInfo;

var timerDone = "";

var visibleQuestion = [];

var questionNumber = 0


var questionAnswers = {question1: ["What is the first letter of this sentence?", "w", "h", "s", "q"],
 question2: ["When are you answering this question?", "Now", "Today", "Later", "Never"],
 question3: ["How many letters does this sentence have?", 34, 21, 2, 116]};


$("#start").on("click", run);

	function run() {
	    intervalInfo = setInterval(decrement, 1000);	    
	    // Create array and add the question answer combo to it
	    var visibleQuestion = questionAnswers[Object.keys(questionAnswers)[questionNumber]];
	    console.log(visibleQuestion);
	    // Displays the question
		$("#question").append(visibleQuestion[0]);
	    // Display the answers in buttons
	    for(var j = 1; j < visibleQuestion.length; j++ ) {
        	var answerButton= $('<input type="button" value="' + visibleQuestion[j] + '"/>');
        // Display the buttons
        $("#answers").append(answerButton);
        }	    
	}

	// Display the question and answer on the screen
	function display() {
		// Displays the question
		$("#question").append(visibleQuestion[0]);
	    // Display the answers in buttons
	    for(var j = 1; j < visibleQuestion.length; j++ ) {
        	var answerButton= $('<input type="button" value="' + visibleQuestion[j] + '"/>');
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

	// function clearWindow() {
	// 	// Clear the window
	// 	$("#game").empty();
	// 	number = 10;
	// 	questionNumber = questionNumber + 1;
	// }

	function stop() {
	    clearInterval(intervalInfo);
	    timerDone = "Timer Up!"
	    $("#showTimer").html("<h2>" + timerDone + "</h2>");
	    // Clear the window
		$("#question").html("<h2></h2>");
		$("#answers").html("<h2></h2>");
		number = 10;
		questionNumber = questionNumber + 1;
	    // Wait a few seconds then run the run function again
	    setTimeout(run, 5000);
	}