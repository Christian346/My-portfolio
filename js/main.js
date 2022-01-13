const menuBtn = document.querySelector('.menu-btn')// get menubutton
const hamburger = document.querySelector('.menu-btn_burger') // get hambuger button

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');// the ul
const navItems = document.querySelectorAll('.menu-nav_item'); // gets whole array li elements 

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open'); //say it is open and add its class so that sass can rotate it 
        // it add a style to a the hamburger button

       nav.classList.add('open');
       menuNav.classList.add('open');

       navItems.forEach(item => item.classList.add('open'));// add open class to each item in list on nav items


       showMenu = true;
    }
    else{
        hamburger.classList.remove('open');// take it back a reset it to without .open class in sass
        nav.classList.remove('open');
       menuNav.classList.remove('open')

       navItems.forEach(item => item.classList.remove('open'));
       
        showMenu = false;
    }
}