/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/quote'
], function ($, _, Backbone, JST, QuoteCollection) {
    'use strict';

    var QuoteView = Backbone.View.extend({
        template: JST['app/scripts/templates/quote.ejs'],

        initialize: function () {
            this.collection = new QuoteCollection();
            this.collection.fetch();
        },

        render: function () {
            $('#content').html(this.$el.html(this.template({
                'quotes': this.collection.toJSON()
            })));
        }
    });

    return QuoteView;
});
