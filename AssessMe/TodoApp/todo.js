//Get DOM

let todoOutput = document.getElementById("todo-output");
let userInput = document.querySelector("input");
let addButton = document.querySelector("button");

// addButton.addEventListener("click", () => {
//   //return input value in the input box
//     let input = userInput.value;
//     //check for empty input box
//   if (!input) {
//     alert("Input required");
//   } else {
//     //creates a li tag
//     let li = document.createElement(`li`);
//     //The user input value is been displayed on the li
//     li.textContent = input;
//     //giving li a class name
//     li.setAttribute(`class`, `list`);

//     //creating an i tag called trash
//     let trash = document.createElement(`i`);

//     //giving the i tag a classname
//     trash.setAttribute(`class`, `fa-regular fa-trash-can`);
//     //Add style to trash
//     trash.style.float = "right";
//     //append/attaching trash to li
//     li.append(trash);

//     console.log(li);
//     //attaching li which contains trash to ul
//     todoOutput.append(li);

//     //set the input box to empty after adding a list
//     userInput.value = "";

//     //creating a funtion to delete list
//     trash.addEventListener("click", () => {
//         //using remove() method to delete/remove a list
//       li.remove();
//     });
//   }
// });

const add = () => {
  //return input value in the input box
  let input = userInput.value;
  //check for empty input box
  if (!input) {
    alert("Input required");
  } else {
    //creates a li tag
    let li = document.createElement(`li`);
    //The user input value is been displayed on the li
    li.textContent = input;
    //giving li a class name
    li.setAttribute(`class`, `list`);

    //creating an i tag called trash
    let trash = document.createElement(`i`);

    //giving the i tag a classname
    trash.setAttribute(`class`, `fa-regular fa-trash-can`);
    //Add style to trash
    trash.style.float = "right";
    //append/attaching trash to li
    li.append(trash);

    console.log(li);
    //attaching li which contains trash to ul
    todoOutput.append(li);

    //set the input box to empty after adding a list
    userInput.value = "";

    //creating a funtion to delete list
    trash.addEventListener("click", () => {
      //using remove() method to delete/remove a list
      li.remove();
    });
  }
};

//uses the enter key to add todo to list

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    add();
  }
  console.log(e);
});
