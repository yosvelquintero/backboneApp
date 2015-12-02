/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var QuoteView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote.ejs'],

        render: function () {
            $('#content').html(this.$el.html(this.template({
                'quotes': this.collection.toJSON()
            })));
        }
    });

    return QuoteView;
});
