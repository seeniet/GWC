//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var edward1Score = 0;
var jacob2Score = 0;






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
q1a1.addEventListener("click", edward);
q1a2.addEventListener("click", jacob);


q2a1.addEventListener("click", edward);
q2a2.addEventListener("click", jacob);


q3a1.addEventListener("click", edward);
q3a2.addEventListener("click", jacob);







//#TODO: Define quiz functions here
function edward (){
  questionCount=questionCount+ 1;
  edward1Score+=1;
  questionCount+=1;
  alert ("a");
  if (questionCount>=3)
  {
        updateResult();        
  }
  
}

function jacob (){
  questionCount=questionCount+ 1;
  jacob2Score+=1;
  questionCount+=1;
  alert ("a");
  if (questionCount>=3)
    {
      updateResult();
    }

}
  

function updateResult()
{
  if (edward1Score>jacob2Score){
    result.innerHTML = "Edward";
  }
else if (jacob2Score>edward1Score){
  result.innerHTML = "Jacob";
}
else {
  result.innerHTML = "Wow! This is Your Partner!";
}
}