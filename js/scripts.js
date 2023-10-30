document.addEventListener("DOMContentLoaded", function () {
let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", buttonFunction);

let tally = 0;


function questionThreeIncrease() {
    tally += 1;
}
function questionFourIncrease() {
    tally += 3;
}
function questionFiveIncrease() {
    tally += 5;
}
function buttonFunction(){
let answer3= document.querySelector('input[name="question3"]:checked').value;
let answer4= document.querySelector('input[name="question4"]:checked').value;
let answer5= document.querySelector('input[name="question5"]:checked').value;

tally= 0;

    document.getElementById('neither').classList.remove('hidden');
    document.getElementById('cSharp').classList.remove('hidden');
    document.getElementById('javaScript').classList.remove('hidden');
    document.getElementById('python').classList.remove('hidden');
    

if (answer3 === "true") {
questionThreeIncrease();
} 
if (answer4 === "true") {
    questionFourIncrease();
} 
if (answer5 === "true") {
    questionFiveIncrease();
    } 

    document.getElementById('neither').classList.add('hidden');
    document.getElementById('cSharp').classList.add('hidden');
    document.getElementById('javaScript').classList.add('hidden');
    document.getElementById('python').classList.add('hidden');

if ( tally >= 5){
    document.getElementById('javaScript').classList.remove('hidden');
} else if ( tally >= 3){
    document.getElementById('python').classList.remove('hidden');
} else if ( tally >= 1){
    document.getElementById('cSharp').classList.remove('hidden');
} else if ( tally<1){
    document.getElementById('neither').classList.remove('hidden');
} 
}
});

