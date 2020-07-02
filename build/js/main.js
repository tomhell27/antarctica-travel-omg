'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var nav = document.querySelector('nav');
nav.classList.remove('header__nav-nojs');
nav.classList.add('header__close');

var buttons = document.querySelectorAll('.header__button');

buttons.forEach(function (e) {
  e.classList.remove('visually-hidden');
});

var cross = document.querySelector('.header__button--close');
var burger = document.querySelector('.header__button--open');
var items = document.querySelectorAll('.header__a');

var onMenuEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    hideMenu();
  }
};

var showMenu = function () {
  nav.classList.add('header__nav-isjs');
  document.body.classList.add('header__body-fix');
  document.addEventListener('keydown', onMenuEscPress);
};

var hideMenu = function () {
  nav.classList.remove('header__nav-isjs');
  document.body.classList.remove('header__body-fix');
  document.removeEventListener('keydown', onMenuEscPress);
};

burger.addEventListener('click', function () {
  showMenu();
});

burger.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    showMenu();
  }
});

cross.addEventListener('click', function () {
  hideMenu();
});

cross.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    hideMenu();
  }
});

items.forEach(function (e) {
  e.addEventListener('click', function () {
    hideMenu();
  });

});
