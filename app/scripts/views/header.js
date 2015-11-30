/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        template: JST['app/scripts/templates/header.ejs'],

        render: function () {
            $('#header').html(this.$el.html(this.template()));
        }
    });

    return HeaderView;
});
