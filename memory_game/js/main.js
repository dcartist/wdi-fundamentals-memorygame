var cards = [ 
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
// var count = 0;
var cardsInPlay = []; // shows what cards are in play

//flipping the card back over to back.png 
var returnCard = function(a){
	var x = document.getElementById(a);
	x.setAttribute('src','images/back.png');
	return;
};
//reseting the cards in play
var reset = function(){
cardsInPlay.length = 0;
};

var checkForMatch = function(){
	if(cardsInPlay.length == 2){
		if (cards[cardsInPlay[0]].suit == cards[cardsInPlay[1]].suit) {
		  console.log("You found a match!");
		  console.log(cardsInPlay[0] + cardsInPlay[1])
		  alert('you found a match!');
		  // returnCard(cardsInPlay[0]);
		  // returnCard(cardsInPlay[1]);
		  reset();

		} else {
		  console.log("Sorry, try again.");
		  alert('Sorry!');
		  // returnCard(cardsInPlay[0]);
		  // returnCard(cardsInPlay[1]);
		  reset();
		};
	} else {
		console.log('one more');
	};
	
};

//turnig the card 
var turnOver = function(){
	// this.setAttribute('src','images/back.png');
	var checking = this.getAttribute('data-id');
	this.setAttribute('src',cards[checking].cardImage);
	this.setAttribute('data-check',true);
	this.setAttribute('alt',true);
	console.log('turned'+ checking + " "+ cards[checking].suit);
	
	cardsInPlay.push(checking);

	checkForMatch();
	// cardsInPlay.push(cards[checking].suit);
};


var cardElement = [];

var createBoard = function() {
	for (i=0;i<4;i++){
	var newCardItem = document.createElement('img');
	newCardItem.setAttribute('style', 'margin: 40px 10px;');
	newCardItem.setAttribute('data-id',i);
	newCardItem.setAttribute('data-check',false);
	// newCardItem.setAttribute('alt',false);
	newCardItem.setAttribute('id', i);
	newCardItem.setAttribute('src', 'images/back.png');
	newCardItem.addEventListener('click', turnOver);
	cardElement.push(newCardItem);
	document.getElementById('game-board').appendChild(newCardItem);
	}
};
  createBoard();






