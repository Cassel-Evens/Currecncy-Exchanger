import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './currency.js';

function getElements(response) {
  if(response.main) {
    $('#result').text(`The exchange rate is ${response.main.conversion_rates}`);
  } else {
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

// async function makeApiCall(total, currency) {
//   const response = await ExchangeCurrency.getExchange(total, currency);
//   getElements(response);
// }

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    let total = $('#US').val();
    let currency = $('#moneyExchange').val();
    // clearFields();
    (async function() {
      const response = await ExchangeCurrency.getExchange(total, currency);
      getElements(response);
    })();
  });
});