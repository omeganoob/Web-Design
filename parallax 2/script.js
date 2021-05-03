let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let forest = document.getElementById('forest');
let header = document.getElementById('header');

window.addEventListener('scroll', ()=>{
  let value = window.scrollY;

  text.style.top = 50 + value * -0.25 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * 2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  rocks.style.top = value * -0.2 + "px";
  forest.style.top = value * 0.25 + "px";
  header.style.top = value * 0.75 + "px";
});

const toggle = document.getElementById('toggle');
toggle.onclick = ()=>{
  toggle.classList.toggle('active');
}