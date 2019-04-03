var cards =["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
//beginning of code pasted
	if (cardsInPlay.length == 2){
		if (cardsInPlay[0] == cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	} else {
		console.log('blank');
	}
//end of code pasted 
console.log("User flipped" + cards[cardId])
cardsInPlay.push(cardId);
checkForMatch();
};

flipCard(0);
flipCard(2);



