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
}

function hardGame(){
  document.body.innerHTML = "";
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
  let game_container = document.querySelector(".game-container");
  let gameboard = document.querySelector(".gameboard");
  let timer = document.querySelector(".timer");
  let lives = document.querySelector(".lives");
  shuffleCards();
  for (let i = 0; i < cards.length; i++) {
    let one_card = document.createElement("div");
    one_card.setAttribute("class", "card hidden");
    one_card.addEventListener("click", function(){
      this.classList.remove("hidden");
      this.classList.add("shown");
    }, false);
    one_card.innerHTML = cards[i];
    gameboard.appendChild(one_card);
  }
}
