define(function (require) {
    'use strict';

    var EventEmitter = require('lib/EventEmitter');
    var Handlebars = require('Handlebars');
    var _emailListTemplate = Handlebars.compile(require('text!templates/emailListTemplate.html'));


    function EmailListView ($element) {
        EventEmitter.call(this);

        this.$element = $element;

        this.$email = $();

        this.activeIndex = -1;

        this.collection;

        this._onEmailClick = this._onEmailClick.bind(this);

    }
    EmailListView.prototype = Object.create(EventEmitter.prototype);
    EmailListView.prototype.constructor = EmailListView;


    EmailListView.CLASS_NAME = {
        EMAIL:              'js-emailList-email',
        EMAIL_IS_ACTIVE:    'email_isActive'
    };

    EmailListView.EVENT_NAME = {
        EMAIL_ACTIVATION: 'emailList:emailActivation'
    };


    EmailListView.prototype.activateIndex = function (index) {
        var previousIndex = this.activeIndex;
        this.activeIndex = Math.max(0, Math.min(index, this.$email.length - 1));
        this.$email.eq(previousIndex).removeClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);
        this.$email.eq(this.activeIndex).addClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);

        this.emit(EmailListView.EVENT_NAME.EMAIL_ACTIVATION, this.collection.models[this.activeIndex]);

        return this;
    };


    EmailListView.prototype.createChildren = function () {
        this.$email = this.$element.find('.' + EmailListView.CLASS_NAME.EMAIL);
        return this;
    };


    EmailListView.prototype.enable = function () {
        this.$email.on('click', this._onEmailClick);
        return this;
    };


    EmailListView.prototype.disable = function () {
        this.$email.off('click', this._onEmailClick);
        return this;
    };


    EmailListView.prototype.render = function () {
        var renderedHTML = _emailListTemplate(this);
        this.$element.empty();
        this.$element.html(renderedHTML);
        this.createChildren();
        this.enable();
        return this;
    };


    EmailListView.prototype._onEmailClick = function (e) {
        var clickedIndex = this.$email.index(e.currentTarget);
        this.activateIndex(clickedIndex);
    };


    return EmailListView;
});
