// set up the humburger button
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener("click",()=>{
    menu.classList.toggle('hidden');
})