import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './currency.js';

function clearField() {
  $("#US").val("");
}

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    let total = $('#US').val();
    let currency = $('#moneyExchange').val();
    let promise = ExchangeCurrency.getExchange();
    promise.then(function(response) {
      let body = JSON.parse(response);
      let conversionRate = body.conversion_rates[currency];
      $('#result').text(`${total} USD = ${conversionRate * total} ${currency}`);
    }).catch(function(response) {
      $('#showError').text(`There was an error with the request. Status: ${response.status}`);
    });
  });
  clearField();
});