'use strict';

//Autor: Hamilton Fuzer de Oliveira
//info
console.log(
  'As janelas fecham clicando no X, pressionando a tecla ESC ou clicando em qualquer lugar fora da janela'
);

const modal0 = document.querySelector('.modal0');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');

const overlay = document.querySelector('.overlay');
const btnCloseModal0 = document.querySelector('.close-modal0');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const showModal0 = document.querySelector('.show-modal0');
const showModal1 = document.querySelector('.show-modal1');
const showModal2 = document.querySelector('.show-modal2');

const openModal = function (n) {
  const modal = document.querySelector(`.modal${n}`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (n) {
  const modal = document.querySelector(`.modal${n}`);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//
showModal0.addEventListener('click', () => {
  openModal(0);
});
showModal1.addEventListener('click', () => {
  openModal(1);
});
showModal2.addEventListener('click', () => {
  openModal(2);
});

btnCloseModal0.addEventListener('click', () => {
  closeModal(0);
});
btnCloseModal1.addEventListener('click', () => {
  closeModal(1);
});
btnCloseModal2.addEventListener('click', () => {
  closeModal(2);
});

overlay.addEventListener('click', () => {
  closeModal(0);
  closeModal(1);
  closeModal(2);
});

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    (!modal0.classList.contains('hidden') ||
      !modal1.classList.contains('hidden') ||
      !modal2.classList.contains('hidden'))
  ) {
    closeModal(0);
    closeModal(1);
    closeModal(2);
  }
});
