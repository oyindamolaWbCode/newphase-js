let titleValue = document.querySelector("#titleValue");
let amountValue = document.querySelector("#amountValue");
let inputContainer = document.querySelector(".history-list");
let submitInput = document.querySelector("#submitInput");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let balance = document.getElementById("balance");

submitInput.addEventListener("click", () => {
  let titlevalue = titleValue.value;
  let amountvalue = amountValue.value;

  if (!amountvalue || !titlevalue) {
    alert("Input required!");
  } else {
    let listDoc = document.createElement(`div`);
    listDoc.setAttribute(`class`, `lists`);

    if (amountvalue >= 0) {
      listDoc.style.borderRightWidth = "3px";
      listDoc.style.borderRightStyle = "solid";
      listDoc.style.borderRightColor = "green";
    } else {
      listDoc.style.borderRightWidth = "3px";
      listDoc.style.borderRightStyle = "solid";
      listDoc.style.borderRightColor = "red";
    }

    let textNode = document.createElement("p");
    textNode.textContent = titlevalue;

    let numberNode = document.createElement("span");
    numberNode.textContent = amountvalue;

    listDoc.appendChild(textNode);
    listDoc.appendChild(numberNode);

    inputContainer.appendChild(listDoc);
    let storedLists = JSON.parse(localStorage.getItem("listArray")) || [];
    let list = [
      ...storedLists,
      {
        title: titlevalue,
        number: amountvalue,
      },
    ];

    localStorage.setItem("listArray", JSON.stringify(list));
    console.log(list);
    // titlevalue.value = "";
    // amountvalue.value = "";
  }

  // localStorage.setItem('userExpenses', JSON.stringify(userExpenses))
  //add or subtract to income and expenses

  if (amountvalue >= 0) {
    let storeedIncome = localStorage.getItem("balance" || 0);
    localStorage.setItem(
      "balance",
      Number(amountvalue) + Number(storeedIncome)
    );

    income.textContent = Number(localStorage.getItem("balance"));
    balance.textContent = Number(localStorage.getItem("balance"));

    let total = balance.textContent;
    balance.textContent = Number(total) + Number(amountvalue);
    console.log(total);
  } else {
    let storedExpenses = localStorage.getItem("expenses" || 0);
    localStorage.setItem(
      "expenses",
      Number(storedExpenses) + Number(amountvalue)
    );

    let total = balance.textContent;
    let y = expense.textContent;
    console.log(y, total);
    balance.textContent = Number(total) - amountvalue.slice(1);
    expense.textContent = Number(localStorage.getItem("expenses"));
    balance.textContent = income.textContent - expense.textContent.slice(1);
  }
});

const loadIncome = () => {
  income.textContent = Number(localStorage.getItem("balance"));
  expense.textContent = Number(localStorage.getItem("expenses"));
  balance.textContent = income.textContent - expense.textContent.slice(1);
  let storedLists = JSON.parse(localStorage.getItem("listArray")) || [];

  const result =
    storedLists &&
    storedLists.map((lists, index) => {
      return `
    <div key='${index}' class="lists ${lists.number < 0 ? "red" : "green"}" >
    <p>${lists.title}</p>
    <span>${lists.number}</span>
</div>
    `;
    });

  inputContainer.innerHTML = result.join(" ");

  console.log(result);
};

loadIncome();
