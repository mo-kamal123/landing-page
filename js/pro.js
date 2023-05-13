
let imgs = ["2.jpg", "3.jpg", "4.jpg", "5.jpg" ];
let disc = ["Relax", "Happy", "Enjoy", "Explore"];
let land = document.querySelector(".landing");
let text = document.querySelector(".main");


setInterval(() => {
    let random = Math.floor(Math.random() * imgs.length);
    land.style.backgroundImage ='url("img/'+ imgs[random] +'")';
    text.innerHTML = disc[random];
    console.log(text.innerHTML);
}, 3000);

let nav = document.querySelector(".nav");
let navLi = document.querySelector(".navli");
let icon = document.querySelector(".bar");
let head = document.querySelector(".header");
icon.onclick = function () {
    nav.classList.toggle('click');
    navLi.classList.toggle('cl');
    head.classList.toggle('display');
    
};
console.log (navLi);
// 'url("imgs/'+imgsArray[randomNum] +'")';

// for (i = 0, i < disc.length, i++ ) {
//     text.innerHTML = disc[i];
//     console.log= text
// }

