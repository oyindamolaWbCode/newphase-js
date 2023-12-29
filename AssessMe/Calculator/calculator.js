let button = document.querySelectorAll("button");

button.forEach((button) => {
  //   console.log(button.textContent);
  button.addEventListener("click", () => {
    let x = document.querySelector("input").value;

    if (button.textContent == "=") {
      document.querySelector("input").value = eval(x);
    } else if (button.textContent == "DEL") {
      document.querySelector("input").value = x.slice(1);
    } else if (button.textContent == "AC") {
      document.querySelector("input").value = "";
    } else if (button.textContent == "%") {
      document.querySelector("input").value = x / 100;
    } else {
      document.querySelector("input").value = x + button.textContent;
    }
  });
});
