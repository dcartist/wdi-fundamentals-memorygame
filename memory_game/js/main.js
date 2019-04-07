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
var cardsInPlay = [];
var returnCard = function(a){
	var x = document.getElementById(a);
	x.setAttribute('src','images/back.png');
	return;
	
};
var checkForMatch = function(){
	if(cardsInPlay.length == 2){
		if (cards[cardsInPlay[0]].suit == cards[cardsInPlay[1]].suit) {
		  console.log("You found a match!");
		  console.log(cardsInPlay[0] + cardsInPlay[1])
		  // var x = document.getElementById(cardsInPlay[0]);
		  // var x = document.getElementById(cardsInPlay[0]).src;
		  // console.log('Data by id '+ x);
		  // this.setAttribute('src',cards[i].cardImage);
		  // var checking = this.getAttribute('data-id');
		  alert('you found a match!');
		  // setTimeout(checkForMatch, 5000);
		  // window.setTimeout(window.alert, 1000, 'That was really slow!');
		  returnCard(cardsInPlay[0]);
		  returnCard(cardsInPlay[1]);
		  cardsInPlay.length = 0;

		  // x.setAttribute('src','images/back.png');

		} else {
		  console.log("Sorry, try again.");
		  alert('Sorry!');
		  returnCard(cardsInPlay[0]);
		  returnCard(cardsInPlay[1]);
		  cardsInPlay.length = 0;
		};
	} else {
		console.log('one more');

		// returnCard();
	};
	
};
var turnOver = function(){
	// this.setAttribute('src','images/back.png');
	var checking = this.getAttribute('data-id');
	this.setAttribute('src',cards[checking].cardImage);
	this.setAttribute('data-check',true);
	this.setAttribute('alt',true);
	cardsInPlay.push(checking);
	// cardsInPlay.push(cards[checking].suit);

	console.log('turned'+ count + " "+ checking + " "+ cards[checking].suit);
	checkForMatch();
}


var cardElement = [];

var createBoard = function() {
	// body... 
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






