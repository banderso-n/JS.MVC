define(function (require) {
    'use strict';

    var $ = require('jquery');
    var EmailCollection = require('collections/EmailCollection');
    var EmailDetailView = require('views/EmailDetailView');
    var EmailListView = require('views/EmailListView');
    var EmailModel = require('models/EmailModel');
    var SearchView = require('views/SearchView');


    function App () {

        this.emailCollection = new EmailCollection();

        this.emailDetailView = new EmailDetailView($('.js-emailDetail'));

        this.emailListView = new EmailListView($('.js-emailList'));

        this.searchView = new SearchView($('.js-search'));

        this._onEmailActivation = this._onEmailActivation.bind(this);
        this._onSearchTermChange = this._onSearchTermChange.bind(this);

        this.init();
    }


    App.prototype.init = function () {
        var self = this;

        this.enable();

        return this.emailCollection.fetch().done(function () {
            self.emailListView.collection = self.emailCollection;
            self.emailListView.render();
            self.emailListView.activateIndex(0);
        });
    };


    App.prototype.enable = function () {
        this.emailListView.on(EmailListView.EVENT_NAME.EMAIL_ACTIVATION, this._onEmailActivation);
        this.searchView.on(SearchView.EVENT_NAME.TERM_CHANGE, this._onSearchTermChange);
        return this;
    };


    App.prototype.disable = function () {
        this.emailListView.off(EmailListView.EVENT_NAME.EMAIL_ACTIVATION, this._onEmailActivation);
        this.searchView.off(SearchView.EVENT_NAME.TERM_CHANGE, this._onSearchTermChange);
        return this;
    };


    App.prototype._onEmailActivation = function (emailModel) {
        this.emailDetailView.model = emailModel;
        this.emailDetailView.render();
    };


    App.prototype._onSearchTermChange = function (term) {
        this.emailListView.collection = term === '' ? this.emailCollection : this.emailCollection.search(term);
        this.emailListView.render();
    };


    return App;
});
