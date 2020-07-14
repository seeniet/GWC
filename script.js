//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var house1Score = 0;
var location2Score = 0;
var movie3Score = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1q3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2q3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3q3");
var q3a4 = document.getElementById("q3a4");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", house);
q1a2.addEventListener("click", location);
q1a3.addEventListener("click", location);
q1a4.addEventListener("click", movie);

q2a1.addEventListener("click", movie);
q2a2.addEventListener("click", movie);
q2a3.addEventListener("click", location);
q2a4.addEventListener("click", house);

q3a1.addEventListener("click", location);
q3a2.addEventListener("click", house);
q3a3.addEventListener("click", movie);
q3a4.addEventListener("click", movie);






//#TODO: Define quiz functions here
function house (){
  questionCount=questionCount+ 1;
  house1Score+=1;
  questionCount+=1;
  alert ("a");
  if (questionCount>=3)
  (
  updateResult();
  )
}

function location (){
  questionCount=questionCount+ 1;
  elenaCount=elenaCount+ 1;
  damonScore=damonScore+ 1;

}
  
function movie (){
  questionCount= questionCount+1;
  elenaCount= elenaCount+1;
  damonScore= damonScore+1;
  stefenScore= stefenScore+1;
}