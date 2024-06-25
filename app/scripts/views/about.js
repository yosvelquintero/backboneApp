/*global define*/

define(["jquery", "underscore", "backbone", "templates"], function (
  $,
  _,
  Backbone,
  JST
) {
  "use strict";

  const AboutView = Backbone.View.extend({
    template: JST["app/scripts/templates/about.ejs"],

    render: function () {
      $("#content").html(this.$el.html(this.template()));
    },
  });

  return AboutView;
});
