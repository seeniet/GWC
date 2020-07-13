//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var elenaCount = 0;
var damonScore = 0;
var stefenScore = 0;






//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", result1);







//#TODO: Define quiz functions here
function result1(){
  questionCount=questionCount+ 1;
  elenaCount=elenaCount+ 1;
  damonScore=damonScore+ 1;
}
function result2(){
  questionCount=questionCount+ 1;
  elenaCount=elenaCount+ 1;
  damonScore=damonScore+ 1;

}
function result3(){
  questionCount= questionCount+1;
  elenaCount= elenaCount+1;
  damonScore= damonScore+1;
  stefenScore= stefenScore+1;
}