var questions = [

    {question: 'Which is the largest U.S. state?', points: 10, answer: 'Alaska', response: ''},
    {question: 'In the lower 48, which state has the northern most point?', points: 20, answer: 'Minnesota', response: ''},
    {question: 'In the lower 48, which state has the southern most point?', points: 20, answer: 'Florida', response: ''},
    {question: 'What was the first U.S. state to achieve statehood?', points: 25, answer: 'Delaware', response: ''},
    {question: 'What was the last U.S. state to achieve statehood?', points: 25, answer: 'Hawaii', response: ''}

];

var results = '';
var totalScore = 0;
var questionScore = 0;

//ask the questions, add responses as a final property to each question object
for (var i=0; i < questions.length; i += 1) {

    var userEntry = prompt(questions[i].question);
    questions[i].response = userEntry;

}

//print all the question properties out
for (var i=0; i < questions.length; i += 1) {

        results += "<h2>" + questions[i]["question"] + "</h2>";
        results += "<h3>Your response: " + questions[i]["response"] + "</h2>";
        results += "<h3>Correct answer: " + questions[i]["answer"] + "</h2>";
        
        //write score for each question1
        
        if (questions[i]["answer"] === questions[i]["response"]) {

            questionScore = questions[i]["points"];

            //make correct scores green
            results += "<h3 id=\"correct\">Points: " + questionScore + " / " + questions[i]["points"] + "</h2>";

        } else {

            questionScore = 0

            //make incorrect scores red
            results += "<h3 id=\"incorrect\">Points: " + questionScore + " / " + questions[i]["points"] + "</h2>";

            };

}

//score the quiz - if isCorrect is true, then add all the points to a counter - and write it to the bottom of the document
for (var i=0; i < questions.length; i += 1) {

    if (questions[i]["answer"] === questions[i]["response"]) {

        totalScore += questions[i]["points"];

    }

}

document.write("<h2>Total score: " + totalScore + " / 100 (" + totalScore + "%)</h2>");
document.write(results);