/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/notification'
], function ($, _, Backbone, JST, NotificationView) {
    'use strict';

    var QuoteEditView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote-edit.ejs'],

        events: {
            'click button.cancel': 'cancelEditQuote',
            'submit .edit-quote': 'editQuote'
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
                self.model.set(jqXHR.response);
                self.model.save(null, {
                    success: function () {
                        self.collection.set(self.model);
                        self.collection.redirectToQuotes();
                    }
                });

            });
        },

        initialize: function () {
            this.model.on('change', function () {
                var notification = new NotificationView();
                notification.render('Quote have been edited');
            });
        },

        render: function () {
            $('#content').html(this.$el.html(this.template({
                'quote': this.model.toJSON()
            })));
        }
    });

    return QuoteEditView;
});
