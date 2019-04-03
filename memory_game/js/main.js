var cards =[
{rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"},

{rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"},

{rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"},

{rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"}];

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
console.log("User flipped" + card[cardId]);
cardsInPlay.push(cardId);
checkForMatch();
};

flipCard(0);
flipCard(2);



