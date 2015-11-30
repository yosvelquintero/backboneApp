/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var FooterView = Backbone.View.extend({
        template: JST['app/scripts/templates/footer.ejs'],

        render: function () {
            $('#footer').html(this.$el.html(this.template()));
        }
    });

    return FooterView;
});
