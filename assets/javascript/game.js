// Global Variables 
// -------------------------------------------------------------------------
//create an array of words
const word = ['day', 'fat', 'lazy', 'yep', 'beach', 'polk', 'find', 'sodium', 'slept', 'hungry', 'trick'];

//choose words randomly
	let randNum = Math.floor(Math.random() * word.length);
	let chooseWord = word[randNum];
	let rightWord = [];
	let wrongWord = [];
	let underScore = [];

// Testing
	console.log(chooseWord); 

// DOM Manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongWord = document.getElementsByClassName('wrongWord');


//Main 
// -------------------------------------------------------------------------
//create underscore based on length of words

let generateUnderscore = () => {
	for(let i = 0; i < chooseWord.length; i++) {
		underScore.push('_');

	}
	return underScore;
}

console.log(generateUnderscore());

//get users guess
document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);

// if users guess is right
	if(chooseWord.indexOf(keyword) > -1) {

// add to right words array
	rightWord.push(keyword);
	
// replace underscore with right letter
	underScore[chooseWord.indexOf(keyword)] = keyword;
	docUnderScore[0].innerHTML = underScore.join(' ');
	docRightGuess[0].innerHTML = rightWord.join(' ');
	docWrongWord[0].innerHTML = wrongWord.join(' ');

//check to see if users guess matches guesses
	if(underScore.join('') == chooseWord) {
		alert('You Win');
	}
	else {
		wrongWord.push(keyword);
	}
		}
	});
//check to see if users guess m
	

// add to wrong words array if wrong	
	


//check if guess is right
//if right push to right array
//if wrong push to wrong array
