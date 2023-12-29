let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#login");
let padlock = document.querySelector("#padlock");

let show = false;

padlock.addEventListener("click", () => {
  show = !show;
  if (show) {
    password.type = "text";
    padlock.classList.replace('fa-eye-slash', 'fa-eye')
  } else {
    password.type = "password";
    padlock.classList.replace('fa-eye', 'fa-eye-slash')
    
  }
});

let userInfo = null;

const loadData = () => {
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
};
loadData();

loginBtn.addEventListener("click", () => {
  let Email = email.value;
  let Password = password.value;
  if (!Password || !Email) {
    alert("Missing value");
  } else {
    if (Email != userInfo.email || Password != userInfo.password) {
      alert("Invalid email and password");
    } else {
      window.location.href = "../Dashboard/dashboard.html";
    }
  }
});
