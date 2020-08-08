"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создать блок
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); // назначить блоку класс

wrapper.append(div); // добавить блок на страницу в блок wrapper
// wrapper.appendChild(div); // добавить блок на страницу в блок wrapper

// wrapper.prepend(div); // добавить блок в начало 

// hearts[0].before(div); // поставить перед первым сердечком
// hearts[0].after(div); // поставить после первого сердечка

// wrapper.insertBefore(div, hearts[0]); // вставить div перед первым элементом псевдомассива hearts

// circles[0].remove(); // удалить первый кружочек
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]); // заменить первое сердечко на первый кружочек 
// wrapper.replaceChild(circles[0], hearts[0]); // заменить первое сердечко на первый кружочек

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); // добавить код к HTML элементу