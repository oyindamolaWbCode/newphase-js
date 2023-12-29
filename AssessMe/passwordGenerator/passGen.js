let passInput = document.querySelector("input");
let generatePass = document.querySelector("#generate");

let stringcollection = [
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

generatePass.addEventListener("click", () => {
  for (i = 0; i < 11; i++) {
    const randomIndex = Math.floor(Math.random() * stringcollection.length);
    password += stringcollection[randomIndex];
    passInput.value = password;

    console.log(password);
  }
  password = "";
  //   const colls = stringcollection.map((collection) => {
  //     const randomIndex = Math.floor(Math.random() * stringcollection.length);
  //     const randomElement = collection[randomIndex];
  //     console.log(randomElement);
  //   });
  //   console.log(colls);

  //   for (i = 0; i < stringcollection.length; i++) {
  //     const colls = Math.random(stringcollection);
  //     console.log(colls);
  //   }
});
