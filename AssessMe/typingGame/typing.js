let timeCount = document.getElementById("time");
let scoreCount = document.getElementById("score");
let wordType = document.getElementById("word");
let inputWord = document.querySelector("input");

const wordsplay = [
  "elephant",
  "keyboard",
  "sunshine",
  "mountain",
  "butterfly",
  "waterfall",
  "fireworks",
  "carousel",
  "umbrella",
  "whisper",
  "octopus",
  "rainbow",
  "moonlight",
  "blossom",
  "jubilant",
  "serendipity",
  "magnificent",
  "quicksilver",
  "labyrinth",
  "fantasy",
  "chocolate",
  "tiger",
  "zephyr",
  "synergy",
  "enigma",
  "phoenix",
  "garden",
  "volcano",
  "laughter",
  "harmony",
  "eccentric",
  "cascade",
  "blissful",
  "silhouette",
  "nostalgia",
  "bittersweet",
  "dandelion",
  "firecracker",
  "paradox",
  "eternity",
  "harmonious",
  "moonstone",
  "tranquility",
  "radiance",
  "serenity",
  "whimsical",
  "effervescent",
  "melancholy",
  "illuminating",
  "enchanting",
  "mellifluous",
  "inspiration",
  "captivating",
  "resplendent",
  "ethereal",
  "ambrosia",
  "intrigue",
  "effulgent",
  "rhapsody",
  "luminescent",
  "tranquil",
  "mesmerize",
  "scintillating",
  "reflection",
  "enrapture",
  "ephemeral",
  "soothing",
  "quintessence",
  "iridescence",
  "idyllic",
];

let score = 0;
let time = 10;

const countDown = () => {
  if (time > 0) {
    time--;
    timeCount.innerHTML = `Time Left: ${time}`;
    // return true;
  } else if (time <= 0) {
    window.location.href = "./index.html";
  }
};

setInterval(countDown, 1000);

const randomWords = () => {
  const wordIndex = Math.floor(Math.random() * wordsplay.length);
  wordType.textContent = wordsplay[wordIndex];
};

randomWords();

inputWord.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (
      wordType.textContent.toLowerCase() == inputWord.value.trim().toLowerCase()
    ) {
      score += 1;
      scoreCount.textContent = `Score: ${score}`;
      time = 10;
      randomWords();
      inputWord.value = "";
      document.querySelector(".game").textContent = "Correct Spelling";
    } else {
      document.querySelector(".game").textContent = "Incorrect spelling";
    }
  }
});
