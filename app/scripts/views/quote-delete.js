/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var QuoteDeleteView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote-delete.ejs'],

        events: {
            'click a.cancel': 'cancelDelete',
            'click a.confirm': 'confirmDelete'
        },

        cancelDelete: function (e) {
            e.preventDefault();

            this.collection.redirectToQuotes();
        },

        confirmDelete: function (e) {
            e.preventDefault();

            this.model.destroy();
            this.collection.redirectToQuotes();
        },

        render: function () {
            $('#content').html(this.$el.html(this.template({
                'quote': this.model.toJSON()
            })));
        }
    });

    return QuoteDeleteView;
});
