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
    normalTie: "./images/tamagotchi/tie_normal_new.png",
    headTie: "./images/tamagotchi/tie_head.png",
  },
};

/* Buy button */

const buyButton = document.querySelector(".buy-button");
const mouthImage = document.querySelector(".tama-mouth");

buyButton.addEventListener("click", () => {
  coins.push("Coin");
  const newCoin = document.createElement("img");
  newCoin.src = coinImage;
  newCoin.classList.add("coin-styling");

  coinsContainer.appendChild(newCoin);

  if (coins.length > 10) {
    coins = [];
    while (coinsContainer.firstChild) {
      coinsContainer.removeChild(coinsContainer.firstChild);
    }
  }

  const mouthsArray = Object.values(tamagotchi.mouth);
  mouthImage.src = mouthsArray[1];
});

/* Change tie button mobile */

const changeButton = document.querySelector(".change-button");
const neckImage = document.querySelector(".tama-neck");
const tieHead = tamagotchi.neckwear.headTie;
let count = 0;

changeButton.addEventListener("click", () => {
  const neckwearArray = Object.values(tamagotchi.neckwear);
  neckImage.src = neckwearArray[++count % neckwearArray.length];
});

/* Change tie button desktop */

const arrowButton = document.querySelector(".arrow-button");

document.addEventListener("keydown", logKey);

function logKey(event) {
  if (event.keyCode === 39) {
    const neckwearArray = Object.values(tamagotchi.neckwear);
    neckImage.src = neckwearArray[++count % neckwearArray.length];
  }
  if (event.keyCode === 37) {
    const neckwearArray = Object.values(tamagotchi.neckwear);
    const reverse = neckwearArray.reverse();
    neckImage.src = reverse[++count % reverse.length];
  }
}

/* Styling classes for neckwear */

changeButton.addEventListener("click", setClasses);
document.addEventListener("keydown", setClasses);

function setClasses() {
  let active = neckImage;

  if (active.src.endsWith("/images/tamagotchi/tie_normal_new.png")) {
    neckImage.classList.add("normalTie");
    neckImage.classList.remove("bowtie", "headTie");
  } else if (active.src.endsWith("/images/tamagotchi/tie_head.png")) {
    neckImage.classList.add("headTie");
    neckImage.classList.remove("bowtie", "normalTie");
  } else {
    neckImage.classList = "tama-neck bowtie";
  }
}

/* Sell button */

const sellButton = document.querySelector(".sell-button");
const mouthsArray = Object.values(tamagotchi.mouth);

sellButton.addEventListener("click", () => {
  coins.pop("Coin");
  const lastCoin = document.querySelector(".coin-styling:last-child");
  if (coins.length >= 1) {
    coinsContainer.removeChild(lastCoin);
  } else {
    window.alert("Buy some crypto, dude!");
    while (coinsContainer.firstChild) {
      coinsContainer.removeChild(coinsContainer.firstChild);
    }
  }
  mouthImage.src = mouthsArray[2];
});

/* Makes the mouth go back to normal */

setInterval(() => {
  mouthImage.src = mouthsArray[0];
}, 1000);

/* Crypto for your thoughts button */

const cryptoButton = document.querySelector(".crypto-button");

cryptoButton.addEventListener("click", () => {
  window.alert(
    "There are no thoughts or feelings in crypto boys. Continue mining."
  );
});

/* Scroll event desktop */

const tamaBody = document.querySelector(".tama-body");
const bodyArray = Object.values(tamagotchi.body);

function scroll(event) {
  if (event.deltaY < 0) {
    tamaBody.src = bodyArray[1];
  } else {
    tamaBody.src = bodyArray[0];
  }
}

window.addEventListener("wheel", scroll);
