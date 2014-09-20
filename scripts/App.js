define(function (require) {
    'use strict';

    var $ = require('jquery');
    var EmailDetailView = require('views/EmailDetailView');
    var EmailListView = require('views/EmailListView');


    function App () {

        this.emailDetailView = new EmailDetailView($('.js-emailDetail'));

        this.emailListView = new EmailListView($('.js-emailList'));

        this._onEmailListChange = this._onEmailListChange.bind(this);

        this.init();
    }


    App.prototype.init = function () {
        this.emailListView.$element.on(EmailListView.EVENT_NAME.CHANGE, this._onEmailListChange);
        return this;
    };


    App.prototype._onEmailListChange = function (e, data) {
        this.emailDetailView.activateId(data.id);
    };


    return App;
});
