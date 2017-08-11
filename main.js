let cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
let hand = [];
let score = 0;

document.getElementById("easy").addEventListener("click", easyGame);

document.getElementById("hard").addEventListener("click", hardGame);


function easyGame(){
  document.body.innerHTML = `
  <header>
    <h1>[meme]ory Game</h1>
  </header>
  <div class="game-container">
    <div class="game-info"></div>
      <div class="lives"></div>
      <div class="timer"></div>
    <div class="gameboard">
    </div>
  </div>`;
  createCards();
  createLives();
  createTimer();
}

function hardGame(){
  document.body.innerHTML = `
  <header>
    <h1>[meme]ory Game</h1>
  </header>
  <div class="game-container">
    <div class="game-info"></div>
      <div class="lives"></div>
      <div class="timer"></div>
    <div class="gameboard">
    </div>
  </div>`;
  createCards();
  createLives();
  createTimer();
}

function shuffleCards(){
  let a = 0;
  let b = 0
  for (a = cards.length-1; a > 0; a -= 1) {
    b = Math.floor(Math.random()*(a + 1));
    temp = cards[a];
    cards[a] = cards[b];
    cards[b] = temp;
  }
  return cards;
}

function createCards(){
  shuffleCards();
  for (let i = 0; i < cards.length; i++){
    let one_card = document.createElement("div");
    one_card.setAttribute("class", "card hidden");
    one_card.addEventListener("click", revealCards, false);
    one_card.innerHTML = cards[i];
    document.querySelector(".gameboard").appendChild(one_card);
  }
};

function createLives(){
  for (let i = 0; i < 12; i++){
    let one_life = document.createElement("div");
    one_life.setAttribute("class", "life");
    document.querySelector(".lives").appendChild(one_life);
  }
}

function createTimer(){
  let timer = document.querySelector(".timer");
};

function revealCards(){
  if (hand.length === 0){
  this.classList.remove("hidden");
  this.classList.add("shown");
  hand.push(this);
} else if (hand.length === 1){
  this.classList.remove("hidden");
  this.classList.add("shown");
  hand.push(this);
  setTimeout(clearCards, 1000);
  }
};

function clearCards(){
  if (hand[0].innerHTML === hand[1].innerHTML){
  score +=2;
    if (score === 20) {
    setTimeout(gameVictory, 250);
    } else {
      hand[0].removeEventListener("click", revealCards, false);
      hand[1].removeEventListener("click", revealCards, false);
      hand.pop();
      hand.pop();
    }
  } else {
    hand[0].classList.remove("shown");
    hand[0].classList.add("hidden");
    hand[1].classList.remove("shown");
    hand[1].classList.add("hidden");
    hand.pop();
    hand.pop();
  }
}

function gameVictory(){

}

function gameLoss(){

}
