const about_content = document.getElementById("about-content")
const about =  document.getElementById("about")

function PBorder(){
    about_content.classList.add('border-pink');
    about.classList.add('pinkBg');
}

function GBorder(){
    about_content.classList.remove('border-pink');
    about.classList.remove('pinkBg'); 
} 

const titleBtn = document.getElementById("titleBtn")
 const homeH2 = document.getElementById("homeH2")
const home =  document.getElementById("home")
 
function styleMainH(){
    homeH2.classList.add('h2-pink');
    homeH2.classList.remove('h-gray');
    home.classList.add('home2');
}

function styleMainL(){
     homeH2.classList.remove('h2-pink');
     homeH2.classList.add('h-gray');
     home.classList.remove('home2');
 }
