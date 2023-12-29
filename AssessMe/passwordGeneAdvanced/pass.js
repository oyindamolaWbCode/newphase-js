let outputBox = document.querySelector("input");
let copy = document.getElementById("copy");
let generateBtn = document.getElementById("btn");

let passwordCollection = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let password = "";

generateBtn.addEventListener("click", () => {
  for (let i = 0; i < 12; i++) {
    const passConstruct = Math.floor(Math.random() * passwordCollection.length);
    password += passwordCollection[passConstruct];
    outputBox.value = password;

    console.log(password);
  }
  password = "";
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(outputBox.value);
  alert(`text copied ${outputBox.value}`);
});
