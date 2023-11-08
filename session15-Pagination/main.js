const gameEl = document.querySelector("#game");
const endGameEl = document.querySelector("#end-game");

const memoryGameEl = document.querySelector(".memory-game");

const btnPlayAgain = document.querySelector("#btn-play-again");

const shuffleBtn = document.querySelector(".btn-shuffle");

let level;
let lockBoard = false;
let firstCard = null;
let secondCard = null;

let interval;

let sizes = {
  2: {
    row: 2,
    col: 2,
  },
  4: {
    row: 2,
    col: 4,
  },
  6: {
    row: 3,
    col: 4,
  },
};

let listCards = [
  {
    url: "https://i.pinimg.com/564x/63/e6/5c/63e65c9f222efd5f9a7656c00bd4de1a.jpg",
    name: "dog",
  },
  {
    url: "https://i.pinimg.com/564x/76/1e/4e/761e4e53c11d254fbd67b5211c5316ba.jpg",
    name: "cat",
  },
  {
    url: "https://i.pinimg.com/564x/5b/a3/b2/5ba3b2ac8ca269f8c111255b03ee2224.jpg",
    name: "penguin",
  },
  {
    url: "https://i.pinimg.com/564x/41/ed/ff/41edff9f12fab10f981232817e29394d.jpg",
    name: "lion",
  },
  {
    url: "https://i.pinimg.com/564x/ed/20/b8/ed20b8085f5f6f6eb4e5036a5110e614.jpg",
    name: "shark",
  },
  {
    url: "https://i.pinimg.com/564x/c4/19/b0/c419b0173bbd3ebee137c6735062ba1d.jpg",
    name: "sheep",
  },
];

let cards;

function shuffle(arr) {
  return arr.sort(function () {
    return 0.5 - Math.random();
  });
}

function renderCards(level) {
  listCards = shuffle(listCards);
  let cardsSlice = listCards.slice(0, level);
  cards = [...cardsSlice, ...cardsSlice];
  cards = shuffle(cards);

  let size = sizes[level];
  memoryGameEl.style.gridTemplateColumns = `repeat(${size.col}, 190px)`;
  memoryGameEl.style.gridTemplateRows = `repeat(${size.row}, 250px)`;

  memoryGameEl.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    memoryGameEl.innerHTML += `
            <div 
                class="memory-card" 
                data-name="${c.name}"
                onclick="flipCard(this)"
            >
                <img src="${c.url}" class="front-face" alt="${c.name}">
                <img src="https://i.pinimg.com/564x/e7/72/a4/e772a465efd5ed1b9a32880bd0099aa8.jpg"
                    class="back-face" alt="card-back">
            </div>
        `;
  }
}

function flipCard(card) {
  if (lockBoard) {
    return;
  }
  if (card === firstCard) {
    return;
  }

  card.classList.toggle("flip");

  if (!firstCard) {
    firstCard = card;
    return;
  }
  secondCard = card;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();

  checkWin();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function checkWin() {
  const flippedCards = document.querySelectorAll(".memory-card.flip");
  if (flippedCards.length === cards.length) {
    clearInterval(interval);

    setTimeout(() => {
      gameEl.style.display = "none";
      endGameEl.style.display = "flex";
    }, 1500);
  }
}

renderCards(6);
shuffleBtn.addEventListener("click", function () {
  renderCards(6);
});

btnPlayAgain.addEventListener("click", function () {
  renderCards(6);
  endGameEl.style.display = "none";
  gameEl.style.display = "flex";
});
