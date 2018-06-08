import oldLogic from './old';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss';
import 'ubuntu-fontface/_ubuntu.scss'
import $ from 'jquery';
// import '../docs/offer.pdf';
// import '../docs/policy.pdf';

import Siema from 'siema';

document.addEventListener('DOMContentLoaded', ready);
function ready() {

  const newsSiema = new Siema({
    selector: '.newsSiema',
    perPage: {
      400: 1,
      800: 2,
      1240: 3
    },
    loop: true
  });
  document.querySelector('.news-prev').addEventListener('click', () => newsSiema.prev());
  document.querySelector('.news-next').addEventListener('click', () => newsSiema.next());


  const reviewSiema = new Siema({
    selector: '.reviewSiema',
    loop: true
  });
  document.querySelector('.reviewSiema-prev').addEventListener('click', () => reviewSiema.prev());
  document.querySelector('.reviewSiema-next').addEventListener('click', () => reviewSiema.next());

  const fameSiema = new Siema({
    selector: '.fameSiema',
    loop: true
  });
  document.querySelector('.fameSiema-prev').addEventListener('click', () => fameSiema.prev());
  document.querySelector('.fameSiema-next').addEventListener('click', () => fameSiema.next());








  const showMore = document.querySelector('.show-more');
  if (showMore) {
    showMore.addEventListener('click', () => {
      document.querySelector('.rest-of-faq').classList.add('visible');
      showMore.classList.add('hidden');
    });
  }

  oldLogic();

  const yearBlock = document.getElementById('currentYear');
  const date = new Date().getFullYear();
  yearBlock.innerText = date;


  const scrollToElement = (id, duration) => {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, duration || 2000);
  };

  $('.scrollToTeachers').on('click', () => scrollToElement('#teachers', 1000));
  $('.scrollToFaq').on('click', () => scrollToElement('#faq', 1000));
  $('.scrollToFooter').on('click', () => scrollToElement('#footer', 1000));
  $('.scrollToPay').on('click', () => scrollToElement('#pay', 1000));
  $('.scrollToActions').on('click', () => scrollToElement('#actions', 1000));

}