define(function (require) {
    'use strict';

    var $ = require('jquery');
    var EmailDetailView = require('views/EmailDetailView');
    var EmailListView = require('views/EmailListView');


    function App () {

        this.emailDetailView = new EmailDetailView($('.js-emailDetail'));

        this.emailListView = new EmailListView($('.js-emailList'));

        this.init();
    }


    App.prototype.init = function () {

        return this;
    };


    return App;
});
