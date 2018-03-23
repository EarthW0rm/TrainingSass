;(function(){
    'use strict';

    var btn = document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    
    var menuOpened = false;

    function toogleMenu(evt){
        if(menuOpened){
            closeMenu();
        } else {
            openMenu();
        }
    }

    btn.addEventListener('click', toogleMenu);

    function closeMenu(){
        menuOpened = false;
        html.classList.remove('menu-opened');
    }

    function openMenu(){
        menuOpened = true;
        html.classList.add('menu-opened');
    }
}());