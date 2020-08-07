"use strict";

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // получить все кнопки (псевдомассив из кнопок)
// const btns = document.getElementsByTagName('button')[1]; // получить только вторую кнопку

console.log(btns[1]); // получить только вторую кнопку

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // обращение к классу heart

hearts.forEach(item => {
    console.log(item); // выведение всех сердечек в консоль
});

const oneHeart = document.querySelector('.heart'); // первый элемент, который подходит под данный селектор
console.log(oneHeart);