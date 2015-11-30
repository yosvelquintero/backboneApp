/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var QuoteModel = Backbone.Model.extend({
        defaults: {
            'status': null,
            'marketDirection': null,
            'counterValue': null,
            'counterCurrency': null,
            'amount': null,
            'currency': null,
            'valueDate': null,
            'rate': null,
            'ratePair': null,
            'timeStamp': null
        }
    });

    return QuoteModel;
});
