// Some code for the timer
var number = 10;

var intervalInfo;

var timerDone = "";

// Create an array for questions, then a different array of answers for each questions.
// So if you have 4 questions, you have 4 answer arrays
// Put the correct answer in the first place in each answer array
//

var questionArray = ["What is the first letter of this sentence?", "When are you answering this question?", "How many letters does this sentence have?"];

var answerObject = {["w", "h", "s", "q"];

["Now", "Today", "Later", "Never"];

[34, 21, 2, 116]};

$("#start").on("click", run);

// Create an array for questions, then a different array of answers for each questions.
// So if you have 4 questions, you have 4 answer arrays
// Put the correct answer in the first place in each answer array
// On click have it select a random question and display it, as well as each answer
// Can the answers be randomized?


	function run() {
	      intervalInfo = setInterval(decrement, 1000);

	      // Select a question at random and display it
	      var visibleQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
	      $("#question").append(visibleQuestion);
	      // Pick the correct array based on the question, make buttons based on the answers
	      // Display the buttons
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