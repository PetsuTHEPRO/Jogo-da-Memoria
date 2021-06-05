const cards = document.querySelectorAll('.memory-card');
const info = document.querySelector('.information-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let keyPB = false, soundkey;

function informationCard(){
  let infoCard;
  let cardsflip = document.querySelectorAll(".memory-card.flip");

  if(keyPB){
    window.location.href = "parabens.html?som="+getKeyS();
    return;
  }
  if(cardsflip.length == 16){
    keyPB = true;
  }
  if(firstCard != null){
    infoCard = "../../assets/images/Fichas/" + firstCard.dataset.framework + ".png";

    let imgInfo = document.querySelector(".info-img");
    imgInfo.src = infoCard;
    
  }
  let isVisible = info.style.visibility == 'hidden';
  info.style.visibility = isVisible? 'visible' : 'hidden';
}

function sound_cardB(){
  if(getKeyS() == 'true') return;
  document.getElementById("sound_cardB").src = "../../assets/sounds/"+soundkey+".mp3";
  document.getElementById("sound_cardB").type = "audio/mpeg";
  document.getElementById("sound_cardB").play();
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  sound_cardB();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  informationCard();
  soundkey = "acerto";

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  soundkey = "erro";

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resetBoard();
  }, 1000);

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));