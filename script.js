/* Coins array */

let coins = [];

const coinsContainer = document.querySelector(".coins-container");
const coinImage = "./images/coin.svg";

/* Tamagotchi svg */

const tamagotchi = {
  body: {
    first: "./images/tamagotchi/tama_first.png",
    second: "./images/tamagotchi/tama_second.png",
  },
  mouth: {
    normal: "./images/tamagotchi/mouth_normal.png",
    happy: "./images/tamagotchi/mouth_happy.png",
    sad: "./images/tamagotchi/mouth_sad.png",
  },
  neckwear: {
    bowtie: "./images/tamagotchi/bowtie.png",
    normalTie: "./images/tamagotchi/tie_normal.png",
    headTie: "./images/tamagotchi/tie_head.png",
  },
};

/* Buy button */

const buyButton = document.querySelector(".buy-button");

buyButton.addEventListener("click", () => {
  coins.push("Coin");
  const newCoin = document.createElement("img");
  newCoin.src = coinImage;
  newCoin.classList.add("coin-styling");

  coinsContainer.appendChild(newCoin);

  // console.log(coins);
  if (coins.length > 10) {
    coins = [];
    while (coinsContainer.firstChild) {
      coinsContainer.removeChild(coinsContainer.firstChild);
    }
  }
});

/* Change tie button */

const changeButton = document.querySelector(".change-button");
const neckImage = document.querySelector(".tama-neck");
let count = 0;

changeButton.addEventListener("click", () => {
  const neckwearArray = Object.values(tamagotchi.neckwear);
  neckImage.src = neckwearArray[++count % neckwearArray.length];
});

/* Sell button */

const sellButton = document.querySelector(".sell-button");

sellButton.addEventListener("click", () => {
  coins.pop("Coin");
  // console.log(coins);
  const lastCoin = document.querySelector(".coin-styling:last-child");
  if (coins.length >= 0) {
    coinsContainer.removeChild(lastCoin);
  }
});

/* Crypto for your thoughts button */

const cryptoButton = document.querySelector(".crypto-button");

cryptoButton.addEventListener("click", () => {
  window.alert(
    "There are no thoughts or feelings in crypto boys. Continue mining."
  );
});

/* Scroll event */
