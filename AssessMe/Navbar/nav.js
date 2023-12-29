document.querySelector('i').addEventListener('click', ()=>{
    if(document.querySelector('i').classList.contains('fa-bars')){
        document.querySelector('i').classList.remove('fa-bars')
        document.querySelector('i').classList.add('fa-xmark')

        document.getElementById('nav').classList.remove('close')
        document.getElementById('nav').classList.add('active')
        
    }
    else if(document.querySelector('i').classList.contains('fa-xmark')){
        document.querySelector('i').classList.remove('fa-xmark')
        document.querySelector('i').classList.add('fa-bars')

        document.getElementById('nav').classList.remove('active')
        document.getElementById('nav').classList.add('close')
    }
})

// const icon = document.querySelector('i');
// const nav = document.getElementById('nav');

// icon.addEventListener('click', () => {
//     if (icon.classList.contains('fa-bars')) {
//         icon.classList.replace('fa-bars', 'fa-xmark');
//         nav.classList.replace('close', 'active');
//     } else if (icon.classList.contains('fa-xmark')) {
//         icon.classList.replace('fa-xmark', 'fa-bars');
//         nav.classList.replace('active', 'close');
//     }
// });
