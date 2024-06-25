/*global define*/

define([
  "underscore",
  "backbone",
  "backboneLocalstorage",
  "models/quote",
], function (_, Backbone, Store, QuoteModel) {
  "use strict";

  const QuoteCollection = Backbone.Collection.extend({
    model: QuoteModel,

    localStorage: new Store("quotes"),

    requestAjaxCall: function (formData) {
      return Backbone.ajax({
        beforeSend: function (xhr) {
          xhr.setRequestHeader("X-ACCESS-TOKEN", "s8Hzfu4Pyit76OfJWqDVsnRV");
        },
        // url: 'https://api-demo.kantox.com/api/companies/api_company_1/orders/quote.json',
        method: "POST",
        data: formData,
        dataType: "json",
        crossDomain: true,
        cache: false,
      })
        .done(function (jqXHR) {
          jqXHR.response = jqXHR;
        })
        .fail(function (jqXHR) {
          jqXHR.response = {
            value_date: formData.value_date,
            market_direction: formData.market_direction,
            status: "success",
            marketDirection: formData.market_direction,
            counterValue: "2124.34",
            counterCurrency: formData.counter_currency,
            amount: formData.amount,
            currency: formData.currency,
            valueDate: formData.value_date,
            rate: "1.0619",
            ratePair: "EURUSD",
            timeStamp: "2015-11-25 10:07:51 UTC", //new Date().getTime()
          };
        });
    },

    redirectToQuotes: function () {
      require(["routes/router"], function (Router) {
        const router = new Router();
        router.navigate("quotes", {
          trigger: true,
        });
      });
    },
  });

  return QuoteCollection;
});
