/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NotificationView = Backbone.View.extend({
        template: JST['app/scripts/templates/notification.ejs'],

        render: function (str) {
            var $notification = $('#notification');
            $notification.html(this.$el.html(this.template({
                'notificationMessage': str
            })));
            setTimeout(function () {
                $notification.empty();
            }, 2000);
        }
    });

    return NotificationView;
});
