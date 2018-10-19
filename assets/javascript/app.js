

//Game Starts - push a true or false question to the html
//The countdown will start at 8 and go down to 0 - the user has 8 seconds to answer the question
//The user will press t for true and f for false
//If the user chooses the correct answer, Alert Congratulations, add one to "correct", and start a 3 second timeout to the next question
//If the user chooses the wrong answer, Alert Loser, add one to "wrong", and start a 3 second timeout to the next question
//If the countdown reaches 0 seconds, Alert Loser (or "Out of Time!"), add one to "wrong", and start a 3 second timeout to the next question
//Push a new question to the page (consider using objects to accomplish this) and restart the 8 second timer
//Once the user has answered all of the questions, display a new page that has the number of answers correct, number of answers wrong, and an option to restart
//If the user pushes restart, put right and wrong answers to 0, start at question 1, restart the timer


var answersRight = 0;
var answersWrong = 0;
var questionArr = [
    "True or False: Approximately one quarter of human bones are in the feet", //true [0]
    "True or False: Popeye has four nephews named Peepeye, Poopeye, Pipeye, and Pupeye", //true[1]
    "True or False: In ancient Rome, a special room called a vomitorium was available for diners to purge food during and after meals", //false [2]
    "True or False: The average person will shed approximately 40 pounds of skin during their lifetime", //true[3]
    "True or False: Sneezes regularly exceed 100 mph", //true[4]
    "True or False: The Great Wall of China is visible from the moon", //false[5]
    "True or False: Virtually all Las Vegas Casinos ensure that there are no visible clocks"//true[6]
];
var timer = 13;
var intervalId;
var answer = "";
var letter;
var currentQuestion;



//Game Start
$(document).ready(function(){

//For loop to loop through questions
for (var i = 0; i < questionArr.length; i ++) {
    
//onkeyup functions - have all of the checking logic in one function
function askQuestion(questionArr){
        currentQuestion = questionArr[0];
        console.log(currentQuestion);
        resetTimer();
        $(".questionDiv").html(currentQuestion);
}
    
    
    $(document).keyup(function(event) {
        askQuestion(questionArr[i]);

            if (currentQuestion == questionArr[0], questionArr[1], questionArr[3], questionArr[4], questionArr[6]) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        alert("Correct! Nice Job");
                        answersRight++;
                        stop();
                        answer = "yes";
                        setTimeout(askQuestion(currentQuestion, 3000))
                    } else if (event.keyCode == 70){
                        alert("Incorrect! Nice try");
                        answersWrong++;
                        stop();
                        answer = "yes"
                        currentQuestion = questionArr + 1;
                        setTimeout(askQuestion(currentQuestion, 3000))
                    } else {
                    alert("That is not an answer!");
                    }
                }
            } else if (currentQuestion == questionArr[2], questionArr[5]){
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 70){
                        alert("Correct! Nice Job");
                        answersRight++;
                        stop();
                        answer = "yes";
                        currentQuestion = questionArr + 1;
                        setTimeout(askQuestion(currentQuestion, 3000))
                    } else if (event.keyCode == 84){
                        alert("Incorrect! Nice try");
                        answersWrong++;
                        stop();
                        answer = "yes"
                        currentQuestion = questionArr + 1;
                        setTimeout(askQuestion(currentQuestion, 3000))
                    } else {
                    alert("That is not an answer!");
                    }
                }
            }
    
        
    });

}


//Count down timer
function timeDown() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timeRemainingDiv").html("<h4>Time Remaining: " + timer + "</h4>");
    if (timer == 0){
        stop();
        alert("time is up!");
        answersWrong++;
    }
}

function stop() {
    clearInterval(intervalId);
}

function resetTimer() {
    timer = 13;
    timeDown();
    decrement();
}

       
        

});


