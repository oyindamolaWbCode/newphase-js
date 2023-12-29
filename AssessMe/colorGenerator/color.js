let nextColor = document.getElementById("next-color");
let boxOne = document.getElementById("color-one");
let boxTwo = document.getElementById("color-two");
let boxThree = document.getElementById("color-three");

const colorCollections = [
  "red",
  "green",
  "blue",
  "purple",
  "yellow",
  "orange",
  "pink",
  "teal",
  "black",
  "indigo",
  "violet",
];

nextColor.addEventListener("click", () => {
  // for(i = 0; i < colorCollections.length; i++){

  // }

  const colorIndicateOne = Math.floor(Math.random() * colorCollections.length);
  const colorAppearOne = colorCollections[colorIndicateOne];

  const colorIndicateTwo = Math.floor(Math.random() * colorCollections.length);
  const colorAppearTwo = colorCollections[colorIndicateTwo];

  const colorIndicateThree = Math.floor(
    Math.random() * colorCollections.length
  );
  const colorAppearThree = colorCollections[colorIndicateThree];

  boxOne.style.background = colorAppearOne;
  boxTwo.style.background = colorAppearTwo;
  boxThree.style.background = colorAppearThree;
});
