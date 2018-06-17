import $ from 'jquery';

const Listeners = () => {

  const scrollToElement = (id, duration) => {
    $('html, body').animate({
      scrollTop: id ? $(id).offset().top : 0
    }, duration || 2000);
  };

  $('.scrollToTeachers').on('click', () => scrollToElement('#teachers', 1000));
  $('.scrollToFaq').on('click', () => scrollToElement('#faq', 1000));
  $('.scrollToFooter').on('click', () => scrollToElement('#footer', 1000));
  $('.scrollToPay').on('click', () => scrollToElement('#pay', 1000));
  $('.scrollToActions').on('click', () => scrollToElement('#actions', 1000));
  $('.totop').on('click', () => scrollToElement(null, 'slow'));

  $('#show-results').on('click', () => {
    $('#letterModal').modal('hide');
    scrollToElement('#fame', 1000);
  });

  $('.videoModalClose').on('click', () => {
    $('.youtube_player_iframe').each(() => {
      this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  });

  $('.jsMobMenuItem').on('click', () => $('#mobMenu').toggleClass('visible'));

};

export default Listeners;