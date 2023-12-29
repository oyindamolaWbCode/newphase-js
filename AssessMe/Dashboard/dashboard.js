let name = document.querySelector('#username');
let email = document.getElementById('userEmail');
let password = document.querySelector('#userpass')

let userInfo = null

const loadData = () =>{
   userInfo = JSON.parse(localStorage.getItem('userInfo'))
   name.textContent = userInfo.name;
   email.textContent = userInfo.email;
   password.textContent = userInfo.password;
}
loadData()
