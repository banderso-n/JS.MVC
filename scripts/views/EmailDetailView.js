define(function (require) {
    'use strict';

    var EventEmitter = require('lib/EventEmitter');


    function EmailDetailView ($element) {
        EventEmitter.call(this);

        this.$element = $element;

        this.model;

    }
    EmailDetailView.prototype = Object.create(EventEmitter.prototype);
    EmailDetailView.prototype.constructor = EmailDetailView;


    EmailDetailView.prototype.render = function () {

    };


    return EmailDetailView;
});
