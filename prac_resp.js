burger=document.querySelector('.burger')
nav-list=document.querySelector('.nav-list')
menu=document.querySelector('menu')
burger.addEventListener('click',()=>{
    nav-list.classList.toggle('v-class')
    menu.classList.toggle('h-nave')

})