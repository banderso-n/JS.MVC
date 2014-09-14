define(function (require) {
    'use strict';

    var EventEmitter = require('lib/EventEmitter');
    var Handlebars = require('Handlebars');
    var _emailDetailTemplate = Handlebars.compile(require('text!templates/emailDetailTemplate.html'));


    function EmailDetailView ($element) {
        EventEmitter.call(this);

        this.$element = $element;

        this.model;

    }
    EmailDetailView.prototype = Object.create(EventEmitter.prototype);
    EmailDetailView.prototype.constructor = EmailDetailView;


    EmailDetailView.prototype.render = function () {
        var renderedHTML = _emailDetailTemplate(this);
        this.$element.empty();
        this.$element.html(renderedHTML);
        return this;
    };


    return EmailDetailView;
});
