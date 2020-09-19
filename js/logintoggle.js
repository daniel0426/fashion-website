
const loginBtn = document.querySelector('.loginBtn');
const closeBtn = document.querySelector('.closeBtn');
const loginContainer = document.querySelector('.login-container');
const body = document.querySelector('body');

loginBtn.addEventListener('click', ()=> {
    
        loginContainer.style.display="block";
        body.style.opacity="0.6";
})

closeBtn.addEventListener('click', ()=> {
    loginContainer.style.display="none";
    body.style.opacity="1";
})

