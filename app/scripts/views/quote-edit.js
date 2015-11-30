/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/quote'
], function ($, _, Backbone, JST, QuoteCollection) {
    'use strict';

    var QuoteEditView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote-edit.ejs'],

        events: {
            'click button.cancel': 'cancelEditQuote',
            'submit .edit-quote': 'editQuote'
        },

        initialize: function () {
            this.collection = new QuoteCollection();
            this.collection.fetch();
        },

        cancelEditQuote: function (e) {
            e.preventDefault();

            this.collection.redirectToQuotes();
        },

        editQuote: function (e) {
            e.preventDefault();

            var self = this,
                $target = $(e.target),
                formData = $target.serializeObject(),
                ajaxCall = this.collection.requestAjaxCall(formData);

            $target.find('button.update').text('Updating...');

            ajaxCall.always(function (jqXHR) {
                self.quote.set(jqXHR.response);
                self.quote.save(null, {
                    success: function () {
                        self.collection.set(self.quote);
                        self.collection.redirectToQuotes();
                    }
                });

            });
        },

        render: function (id) {
            this.quote = this.collection.get(id);
            if (!this.quote) {
                return this.collection.redirectToQuotes();
            }

            $('#content').html(this.$el.html(this.template({
                'quote': this.quote.toJSON()
            })));
        }
    });

    return QuoteEditView;
});
