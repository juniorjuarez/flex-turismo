const btnMobile = document.getElementById('btn-mobile')

function showMenu(event){
    if(event.type === 'touchstart')event.preventDefault();

    nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)  

}

btnMobile.addEventListener('click',showMenu)
btnMobile.addEventListener('touchstart',showMenu)



