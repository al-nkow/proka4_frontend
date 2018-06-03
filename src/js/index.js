import {last} from './last';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss';
import 'ubuntu-fontface/_ubuntu.scss'

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

  const showMore = document.querySelector('.show-more');
  if (showMore) {
    showMore.addEventListener('click', () => {
      document.querySelector('.rest-of-faq').classList.add('visible');
      showMore.classList.add('hidden');
    });
  }

}







// import $ from 'jquery';
// const testFunc = (a, b) => {
//   console.log('>>>>>', a, b);
// };
//
// let a = 5;
// let b = 6;
//
// testFunc(a, b);
//
// console.log('HELLO!!!', last);
// $('.carousel').carousel();