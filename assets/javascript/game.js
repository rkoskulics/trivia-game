// Some code for the timer
var number = 10;

var intervalInfo;

var timerDone = "";

$("#start").on("click", run);


function run() {
      intervalInfo = setInterval(decrement, 1000);
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