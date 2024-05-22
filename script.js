const btn_burger = document.getElementById('btn-burger');
const navBar = document.querySelector('header nav');

btn_burger.addEventListener('click',()=>{
    navBar.classList.toggle('active');
})