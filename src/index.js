import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeCurrency } from './../src/currency.js';

$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    const total = $("#US").val();
    const currency = $("#Currency").val();
    (async () => {
      let currencyExchange = new ExchangeCurrency();
      const response = await currencyExchange.getExchange();
      getConversion(response);
    })();
    function getConversion(response) {
      if (response.result === "error") {
        $("#showErros").text("Something went wrong please try again :).");
      } else if(currency === "KZT") {
        $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.KZT*total).toFixed(2)} Kazakhstani Tenge(s)`);
      } else if (currency === "MOP") {
          $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.MOP*total).toFixed(2)} Macanese Pataca(s)`);
      } else if (currency === "SHP") {
          $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.SHP*total).toFixed(2)} Saint Helenian Pound `);
      } else if (currency === "EGP") {
          $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.EGP*total).toFixed(2)} Egyptian Pound(s)`);
      } else if (currency === "ANG") {
          $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.ANG*total).toFixed(2)} Netherlands Antillean Guilder`);
      } else if (currency === "BHD") {
          $('#result').text(`The value of ${total} USD is ${(response.conversion_rates.MDL*total).toFixed(2)} Bahraini Dinar(s)`);
      } else if (currency === 'CZK') {
          $('#results').text(`The value of ${total} USD is ${(response.conversion_rates.CZK*total).toFixed(2)} Czech Koruna(s)`) 
      } else {
          $("#showErrors").text(`Error! Please try again.`);
        }
      }
  });
});