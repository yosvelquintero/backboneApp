/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/quote'
], function ($, _, Backbone, JST, QuoteCollection) {
    'use strict';

    var QuoteDeleteView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote-delete.ejs'],

        events: {
            'click a.cancel': 'cancelDelete',
            'click a.confirm': 'confirmDelete'
        },

        initialize: function () {
            this.collection = new QuoteCollection();
            this.collection.fetch();
        },

        cancelDelete: function (e) {
            e.preventDefault();

            this.collection.redirectToQuotes();
        },

        confirmDelete: function (e) {
            e.preventDefault();

            this.quote.destroy();
            this.collection.redirectToQuotes();
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

    return QuoteDeleteView;
});
