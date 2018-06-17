import $ from 'jquery';
import Validation from './validation';

const oldLogic = () => {

  let payFormValidation = new Validation();
  payFormValidation.init();

  const ipay = new IPAY({api_token: process.env.SBER_TOKEN});

  let price = 0;
  let program = '';
  let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


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

  // Click 'Pay' button in user details modal
  $('#submitPriceForm').on('click', () => {
    if (!payFormValidation.orderForm.valid) return;
    let fname = document.getElementById('pieFirstName').value;
    let lname = document.getElementById('pieLastName').value;
    let phone = document.getElementById('piePhone').value;
    let email = document.getElementById('pieEmail').value;
    let promo = document.getElementById('piePromo').value;

    let start = '21 мая';
    if (!fname || !lname || !phone) {
      alert('Все поля должны быть заполнены!');
      return false;
    }
    let description = 'Программа "' + program + '" ' + price + 'руб. 11 сезон. ' +
      'Участница: ' + fname + ' ' + lname + ', тел.' + phone + ', email: ' + email;
    if (promo) description = description + ', промокод: ' + promo;

    let payControls = {
      amount: price,
      currency: 'RUB',
      order_number: '',
      description: description
    };

    $('#priceModal').modal('hide');
    let cbSuccess = function (order) {
      console.log('Оплата прошла успешно: ', order);
    };
    let cbError = function (order) {
      console.log('ERROR: ', order);
    };
    ipayCheckout(payControls, cbSuccess, cbError);
  });

  function openPayWin() {
    let url = window.location.href;
    let urlArr = url.split('?');
    if (!urlArr[1]) return;
    let params = {};
    let arrParams = urlArr[1].slice(0).split('&');
    arrParams.forEach(function (item) {
      let arrItem = item.split('=');
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

};


export default oldLogic;