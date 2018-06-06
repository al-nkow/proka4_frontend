// import Siema from 'siema';
import $ from 'jquery';

const oldLogic = () => {

  // if (window.pageYOffset === 0) $('#myModal').modal('show');

  // var initSlider = function () {
  //   var beforeAfterSlider = new Siema({
  //     selector: '.j-ba',
  //     duration: 200,
  //     easing: 'ease-out',
  //     perPage: 1,
  //     startIndex: 0,
  //     draggable: true,
  //     multipleDrag: true,
  //     threshold: 20,
  //     loop: true,
  //     rtl: false,
  //     onInit: function () {
  //     },
  //     onChange: function () {
  //     }
  //   });
  //   var prev = document.querySelector('.j-prev');
  //   var next = document.querySelector('.j-next');
  //   prev.addEventListener('click', function () {
  //     beforeAfterSlider.prev()
  //   });
  //   next.addEventListener('click', function () {
  //     beforeAfterSlider.next()
  //   });
  // }
  //
  // initSlider();

  // var ipay = new IPAY({api_token: '7uv1cmsuead84hs43g8qcpdghp'});
  var ipay = new IPAY({api_token: '5dq10g9edj12prahqnlmota77e'});
  // var ipay = new Object;

  var price = 0;
  var program = '';
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  var orderForm = {
    fname: {valid: false},
    lname: {valid: false},
    phone: {valid: false},
    email: {valid: false}
  }

  $('.priceBtn').on('click', function (e) {
    price = e.target.getAttribute('data-price');
    program = e.target.getAttribute('data-option');
    $('#priceModalLabel').text(program);
    $('#priceModal').modal('show');
    if (iOS) document.body.style.position = 'fixed';
  });
  if (iOS) {
    $('#priceModal').on('hidden.bs.modal', function () {
      document.body.style.position = 'inherit';
    })
  }

  $('#show-results').on('click', function () {
    $('#myModal').modal('hide');
    scrollToTarget('#results');
  });

  $('#more').on('click', function () {
    $('#myModal').modal('show');
  });





  // Click 'Pay' button in user details modal
  $('#submitPriceForm').on('click', function () {
    if (!orderForm.valid) return;
    var fname = document.getElementById('pieFirstName').value;
    var lname = document.getElementById('pieLastName').value;
    var phone = document.getElementById('piePhone').value;
    var email = document.getElementById('pieEmail').value;
    var promo = document.getElementById('piePromo').value;

    var start = '21 мая'
    if (!fname || !lname || !phone) {
      alert('Все поля должны быть заполнены!');
      return false;
    }
    var description = 'Программа "' + program + '" ' + price + 'руб. 10 сезон. ' +
      'Участница: ' + fname + ' ' + lname + ', тел.' + phone + ', email: ' + email;
    if (promo) description = description + ', промокод: ' + promo;

    var payControls = {
      amount: price,
      currency: 'RUB',
      order_number: '',
      description: description
    };

    $('#priceModal').modal('hide');
    var cbSuccess = function (order) {
      console.log('Оплата прошла успешно: ', order);
    }
    var cbError = function (order) {
      console.log('ERROR: ', order);
    }
    ipayCheckout(payControls, cbSuccess, cbError);
  });





  // ======= VALIDATION ============
  var checkFormValidity = function () {
    orderForm.valid = orderForm.fname.valid && orderForm.lname.valid
      && orderForm.phone.valid && orderForm.email.valid && $('#pieOffer')[0].checked;
    if (orderForm.valid) {
      $('#submitPriceForm').removeClass('disabled');
    } else {
      $('#submitPriceForm').addClass('disabled');
    }
  }
  var changeInputHandler = function (e, regexp, name) {
    var value = e.target.value;
    orderForm[name].valid = regexp.test(value);
    if (orderForm[name].valid) {
      $(this).removeClass('error');
    } else {
      $(this).addClass('error');
    }
    checkFormValidity();
  };
  $('#pieFirstName').on('change', function (e) {
    changeInputHandler.call(this, e, /^[a-zA-Zа-яА-Я\s]+$/, 'fname');
  });
  $('#pieLastName').on('change', function (e) {
    changeInputHandler.call(this, e, /^[a-zA-Zа-яА-Я\s]+$/, 'lname');
  });
  $('#piePhone').on('change', function (e) {
    changeInputHandler.call(this, e, /^[0-9| ()+-]*$/, 'phone');
  });
  $('#pieEmail').on('change', function (e) {
    changeInputHandler.call(this, e, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email');
  });
  $('#pieOffer').on('change', function () {
    checkFormValidity();
  });
  // ======= eof VALIDATION ============

  function openPayWin() {
    var url = window.location.href;
    var urlArr = url.split('?');
    if (!urlArr[1]) return;
    var params = {};
    var arrParams = urlArr[1].slice(0).split('&');
    arrParams.forEach(function (item) {
      var arrItem = item.split('=');
      params[arrItem[0]] = arrItem[1]
    });
    if (params.pay === '1') {
      $('#program1').click();
    } else if (params.pay === '2') {
      $('#program2').click();
    } else if (params.pay === '3') {
      $('#program3').click();
    }
  }

  openPayWin();

}


export default oldLogic;