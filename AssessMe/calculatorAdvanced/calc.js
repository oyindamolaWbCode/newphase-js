let button = document.querySelectorAll("button");

button.forEach((button) => {
  console.log(button.textContent);
  button.addEventListener("click", () => {
    let a = document.querySelector("#input-display").textContent;
    // document.querySelector("#input-display").textContent =
    //   a + button.textContent;

    if (button.textContent == "=") {
      document.querySelector("#result-display").textContent = eval(a);
    } else if (button.textContent == "DEL") {
      document.querySelector("#input-display").textContent = a.slice(1);
    } else if (button.textContent == "AC") {
      document.querySelector("#input-display").textContent = "";
      document.querySelector("#result-display").textContent = "";
    } else if (button.textContent == "%") {
      document.querySelector("#input-display").textContent = a / 100;
    } else if (button.textContent == "C") {
      document.querySelector("#input-display").textContent = a.slice(1);
    } else if (button.textContent == "√") {
      document.querySelector("#result-display").textContent = Math.sqrt(a);
    } else if (button.textContent == "²") {
      document.querySelector("#result-display").textContent = a * a;
    } else {
      document.querySelector("#input-display").textContent =
        a + button.textContent;
    }
  });
});
