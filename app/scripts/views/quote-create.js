/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var QuoteCreateView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote-create.ejs'],

        events: {
            'click button.cancel': 'cancelCreateQuote',
            'submit form.create-quote': 'createQuote'
        },

        cancelCreateQuote: function (e) {
            e.preventDefault();

            this.collection.redirectToQuotes();
        },

        createQuote: function (e) {
            e.preventDefault();

            var self = this,
                $target = $(e.target),
                formData = $target.serializeObject(),
                ajaxCall = this.collection.requestAjaxCall(formData);

            $target.find('button.create').text('Saving...');

            ajaxCall.always(function (jqXHR) {
                self.collection.create(jqXHR.response, {
                    success: function () {
                        self.collection.redirectToQuotes();
                    }
                });
            });
        },

        render: function () {
            $('#content').html(this.$el.html(this.template()));
        }
    });

    return QuoteCreateView;
});
