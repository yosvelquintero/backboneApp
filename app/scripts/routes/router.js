/*global define*/

define([
    'jquery',
    'backbone',
    'collections/quote',
    'views/header',
    'views/footer',
    'views/home',
    'views/about',
    'views/quote',
    'views/quote-create',
    'views/quote-edit',
    'views/quote-delete',
    'views/contact'
], function ($, Backbone, QuoteCollection, HeaderView, FooterView, HomeView, AboutView, QuoteView, QuoteCreateView, QuoteEditView, QuoteDeleteView, ContactView) {
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
        start: function () {
            // Bacbone history
            Backbone.history.start();
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
            var collection = new QuoteCollection();
            collection.fetch();

            this.quoteView = new QuoteView({
                collection: collection
            });
            this.quoteView.render();
        },
        quoteCreateView: function () {
            this.quoteCreateView = new QuoteCreateView({
                collection: new QuoteCollection()
            });
            this.quoteCreateView.render();
        },
        quoteEditView: function (id) {
            var collection = new QuoteCollection();
            collection.fetch();
            var model = collection.get(id);

            if (!model) {
                return collection.redirectToQuotes();
            }

            this.quoteEditView = new QuoteEditView({
                model: model,
                collection: collection
            });
            this.quoteEditView.render();
        },
        quoteDeleteView: function (id) {
            var collection = new QuoteCollection();
            collection.fetch();
            var model = collection.get(id);

            if (!model) {
                return collection.redirectToQuotes();
            }

            this.quoteDeleteView = new QuoteDeleteView({
                model: model,
                collection: collection
            });
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
