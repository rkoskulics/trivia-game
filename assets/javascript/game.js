// Some code for the timer
var number = 10;

var intervalInfo;

var timerDone = "";


var questionAnswers = {question1: ["What is the first letter of this sentence?", "w", "h", "s", "q"],
 question2: ["When are you answering this question?", "Now", "Today", "Later", "Never"],
 question3: ["How many letters does this sentence have?", 34, 21, 2, 116]};


$("#start").on("click", run);

	function run() {
	    intervalInfo = setInterval(decrement, 1000);

	    // Select a number at random to select an item from questionAnswers
	    var visibleQuestionNumber = [Math.floor(Math.random() * 3)];
	    console.log(visibleQuestionNumber);
	    // Use the random number to select a random array
	    var visibleQuestion = questionAnswers[Object.keys(questionAnswers)[visibleQuestionNumber]];
		console.log(visibleQuestion);
		// Show the question on the screen
	    $("#question").append(visibleQuestion[0]);
	    // Make buttons based on the answers
	    for(var i = 1; i < visibleQuestion.length; i++ ) {
          var answerButton= $('<input type="button" value="' + visibleQuestion[i] + '"/>');
        // Display the buttons
        $("#answers").append(answerButton);
        }

	      
	    
	}

	function decrement() {

	    number--;

	    $("#showTimer").html("<h2>" + number + "</h2>");

	    if (number === 0) {

	    stop();

	    }
	}

	function stop() {

	    clearInterval(intervalInfo);

	    timerDone = "Timer Up!"

	    $("#showTimer").html("<h2>" + timerDone + "</h2>");

	    console.log("Timer Done");


	}