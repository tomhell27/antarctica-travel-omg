'use strict'

var nav = document.querySelector('nav');
nav.classList.remove('header__nav-nojs');
nav.classList.add('header__close');

var buttons = document.querySelectorAll('.header__button');

buttons.forEach(function (e) {
    e.classList.remove('visually-hidden');
});

var closeButton = document.querySelector('.header__button--close');
var openButton = document.querySelector('.header__button--open');
var items = document.querySelectorAll('.header__a');

openButton.addEventListener('click', function () {
    nav.classList.add('header__nav-isjs');
    document.body.classList.add('header__body-fix');
});

closeButton.addEventListener('click', function () {
    nav.classList.remove('header__nav-isjs');
    document.body.classList.remove('header__body-fix');
});

items.forEach(function (e) {
    e.addEventListener('click', function () {
        nav.classList.remove('header__nav-isjs');
        document.body.classList.remove('header__body-fix');
    })
});
