

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#passWrd');
let confirmPassword = document.querySelector('#confirmpassWrd');
let signBtn = document.querySelector('#signup');



signBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    let Name = name.value;
    let Email = email.value;
    let Password = password.value;
    let ConfirmPassword = confirmPassword.value

    console.log(Name)
    if(!Password || !Email || !ConfirmPassword || !Name){
        alert('Missing parameter')
    }else{
        if(Password != ConfirmPassword){
            alert('Password not match')
        }else{
            const userInfo = {
               name: Name,
               email: Email,
               password: Password,
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            window.location.href='./signin.html'
        }
    }

})

