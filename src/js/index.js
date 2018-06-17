import oldLogic from './old';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss';
import 'ubuntu-fontface/_ubuntu.scss'
import $ from 'jquery';
import Sliders from './sliders';
import Listeners from './listeners';

// import Instafeed from 'instafeed.js';


// $(window).on("load", () => {
//   setTimeout(() => {
//     $('.full-wrap').addClass('visible');
//   }, 2500);
// });


document.addEventListener('DOMContentLoaded', ready);
function ready() {

  Sliders();
  Listeners();
  oldLogic();

  const showMore = document.querySelector('.show-more');
  if (showMore) {
    showMore.addEventListener('click', () => {
      document.querySelector('.rest-of-faq').classList.add('visible');
      showMore.classList.add('hidden');
    });
  }

  // Set current year in footer
  $('#currentYear').text(new Date().getFullYear());

  // stop youtube iframe video
  $('.videoModalClose').on('click', () => {
    $('.youtube_player_iframe').each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  });

  // const feed = new Instafeed({
  //   get: 'user',
  //   userId: '8033473540', //1248861449,
  //   limit: 9,
  //   clientId: process.env.INSTAGRAM_CLIENT_ID,
  //   accessToken: process.env.INSTAGRAM_TOKEN,
  //   template: '<a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
  //   resolution: 'thumbnail',
  //   links: true,
  // });
  // feed.run();

}