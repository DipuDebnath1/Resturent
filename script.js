let navbar=document.querySelector('.navbar');
let btn=document.querySelector('.navbtn');

btn.onclick=()=>{
    navbar.classList.toggle('active');
    btn.classList.toggle('fa-times');
}