var cards = [
  {img:"imgs/cards/1.jpg", revealed: false},
  {img:"imgs/cards/1.jpg", revealed: false},
  {img:"imgs/cards/2.jpg", revealed: false},
  {img:"imgs/cards/2.jpg", revealed: false},
  {img:"imgs/cards/3.jpg", revealed: false},
  {img:"imgs/cards/3.jpg", revealed: false},
  {img:"imgs/cards/4.jpg", revealed: false},
  {img:"imgs/cards/4.jpg", revealed: false},
  {img:"imgs/cards/5.jpg", revealed: false},
  {img:"imgs/cards/5.jpg", revealed: false},
];

var card1 = null, card2 = null;

function shuffle() {
  cards = shuffleArray(cards);
  console.log(cards)
  for (let index = 0; index < cards.length; index++) {
    addClickRotateCard(index);
    addImageCard(index);
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr;
}

function addClickRotateCard(index) {
  const cardContainer = document.getElementById("card-" + toIndexString(index) );

  cardContainer.onclick = function() {
    if (cards[index].revealed === false) {
      rotateCard(index);
      setTimeout(() => validateMoves(index), 1500);
    } 
  }
}

function rotateCard(index) {
  const cardContainer = document.getElementById("card-" + toIndexString(index) );
  let card = cardContainer.querySelector(".card")
  card.classList.toggle("card-rotation");
}

function addImageCard(index) {
  const cardContainer = document.getElementById("card-" + toIndexString(index) );

  let card = cardContainer.querySelector(".card-front")
  let img = card.querySelector("img");
  img.src = cards[index].img;
}

function toIndexString(index) {
  if (index <10)
    return "0" + index;
  return index + "";
}

function validateMoves(index) {
  if (card1 === null) {
    card1 = index;
    return;
  }
    
  card2 = index;
  compareImages();
}

function compareImages() {
  if(cards[card1].img  === cards[card2].img) {
    cards[card1].revealed = true;
    cards[card2].revealed = true;
  } else {
    rotateCard(card1);
    rotateCard(card2);
  }
  initImageOpensPlayer();
}

function initImageOpensPlayer() {
  card1 = null;
  card2 = null;
}

function restartPlay() {
  for (let index = 0; index < cards.length; index++) {
    if (cards[index].revealed === true)
      rotateCard(index);
    cards[index].revealed = false;
  }
  shuffle();
}

shuffle();

