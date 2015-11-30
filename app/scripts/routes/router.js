/*global define*/

define([
    'jquery',
    'backbone',
    'views/header',
    'views/footer',
    'views/home',
    'views/about',
    'views/quote',
    'views/quote-create',
    'views/quote-edit',
    'views/quote-delete',
    'views/contact'
], function ($, Backbone, HeaderView, FooterView, HomeView, AboutView, QuoteView, QuoteCreateView, QuoteEditView, QuoteDeleteView, ContactView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '':                     'homeView',
            'about':                'aboutView',
            'quotes':               'quoteView',
            'quotes/create':        'quoteCreateView',
            'quotes/edit/:id':      'quoteEditView',
            'quotes/delete/:id':    'quoteDeleteView',
            'contact':              'contactView',
            '*actions':             'notFoundView'
        },
        initialize: function () {
            this.headerView = new HeaderView();
            this.headerView.render();

            this.footerView = new FooterView();
            this.footerView.render();
        },
        homeView: function () {
            this.homeView = new HomeView();
            this.homeView.render();
        },
        aboutView: function () {
            this.aboutView = new AboutView();
            this.aboutView.render();
        },
        quoteView: function () {
            this.quoteView = new QuoteView();
            this.quoteView.render();
        },
        quoteCreateView: function () {
            this.quoteCreateView = new QuoteCreateView();
            this.quoteCreateView.render();
        },
        quoteEditView: function (id) {
            this.quoteEditView = new QuoteEditView(id);
            this.quoteEditView.render(id);
        },
        quoteDeleteView: function (id) {
            this.quoteDeleteView = new QuoteDeleteView(id);
            this.quoteDeleteView.render(id);
        },
        contactView: function () {
            this.contactView = new ContactView();
            this.contactView.render();
        },
        notFoundView: function () {
            this.navigate('', {
                trigger: true
            });
        }
    });

    return AppRouter;
});
