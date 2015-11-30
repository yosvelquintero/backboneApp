/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage-min',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
    }
});

require([
    'backbone',
    'helper',
    'routes/router'
], function (Backbone, Helper, Router) {
    // Helper
    new Helper();

    // Router
    new Router();

    // Bacbone history
    Backbone.history.start();
});
