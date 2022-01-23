import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './currency';

// function clearField() {
//   $("#US").val("");
// }

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    let total = $('#US').val();
    let currency = $('#Currency').val();

    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getCurrency();
      getConversion(response);
    })();
  });
});