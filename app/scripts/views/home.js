/*global define*/

define(["jquery", "underscore", "backbone", "templates"], function (
  $,
  _,
  Backbone,
  JST
) {
  "use strict";

  const HomeView = Backbone.View.extend({
    template: JST["app/scripts/templates/home.ejs"],

    render: function () {
      $("#content").html(this.$el.html(this.template()));
    },
  });

  return HomeView;
});
