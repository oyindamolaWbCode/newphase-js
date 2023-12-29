let searchBtn = document.getElementById("search");
let searchInput = document.querySelector("input");
let resultOutput = document.getElementById("result");
let synWord = document.querySelector(".syn");
let meaning = document.querySelector(".meaning");
let word = document.querySelector("h1");

const dictionary = [
  {
    word: "happy",
    meaning: "feeling or showing pleasure or contentment",
    synonym: ["joyful", "delighted", "glad", "cheerful"],
  },
  {
    word: "sad",
    meaning: "feeling sorrow or unhappiness",
    synonym: ["unhappy", "gloomy", "miserable", "depressed"],
  },
  {
    word: "brave",
    meaning: "showing courage or willingness to face danger",
    synonym: ["courageous", "fearless", "valiant", "daring"],
  },
  {
    word: "excited",
    meaning: "very enthusiastic and eager",
    synonym: ["enthusiastic", "thrilled", "animated", "eager"],
  },
  {
    word: "clever",
    meaning: "quick to understand, learn, and devise or apply ideas",
    synonym: ["smart", "intelligent", "bright", "astute"],
  },
  {
    word: "confused",
    meaning: "unable to think clearly or understand",
    synonym: ["bewildered", "puzzled", "perplexed", "disoriented"],
  },
  {
    word: "generous",
    meaning: "willing to give and share unstintingly",
    synonym: ["charitable", "benevolent", "liberal", "kindhearted"],
  },
  {
    word: "angry",
    meaning: "feeling strong displeasure or hostility",
    synonym: ["irate", "furious", "enraged", "incensed"],
  },
  {
    word: "patient",
    meaning:
      "able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious",
    synonym: ["tolerant", "unperturbed", "enduring", "forbearing"],
  },
  {
    word: "creative",
    meaning: "having the ability to produce or use original and unusual ideas",
    synonym: ["imaginative", "innovative", "resourceful", "inventive"],
  },
];

searchBtn.addEventListener("click", () => {
  let input = searchInput.value;

  if (!input) {
    alert("Input empty, kindly type into the box");
  } else {
    let result = dictionary.find((dict) =>
      dict.word.toLowerCase().includes(input.trim().toLowerCase())
    );

    if (result) {
      word.textContent = result.word;
      meaning.textContent = result.meaning;
      synWord.innerHTML = ` <b>Synonmy</b> :${result.synonym.join(",")}`;
    } else {
      word.textContent = input;
      meaning.textContent = "Word not found";
      synWord.textContent = "";
    }
    console.log(result);
  }
});
