console.log("I'm also here");

const allDivs = document.getElementsByTagName("div");
const allThisClass = document.getElementsByClassName("mainHeader");
const theId = document.getElementById('dom');
const newWay = document.querySelectorAll(".mainFooter");
const newWaySingle = document.querySelector('main');


console.log(allDivs);
console.log(allThisClass);
console.log(theId);
console.log(newWay);
console.log(newWaySingle);

const hero = document.querySelector('.hero')
hero.style.backgroundColor = 'purple'


const b = document.getElementById('paragraph')
b.style.letterSpacing = '10px'

const theColor = prompt('ВВедите цвет')
hero.style.backgroundColor = theColor



