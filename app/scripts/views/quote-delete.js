/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/notification'
], function ($, _, Backbone, JST, NotificationView) {
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

        initialize: function () {
            this.model.on('remove', function () {
                var notification = new NotificationView();
                notification.render('Quote have been deleted');
            });
        },


        render: function () {
            $('#content').html(this.$el.html(this.template({
                'quote': this.model.toJSON()
            })));
        }
    });

    return QuoteDeleteView;
});
