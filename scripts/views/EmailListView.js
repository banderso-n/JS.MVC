define(function (require) {
    'use strict';


    function EmailListView ($element) {

        this.$element = $element;

        this.$email = $element.find('.' + EmailListView.CLASS_NAME.EMAIL);

        this.activeIndex = -1;

        this.collection;

        this._onEmailClick = this._onEmailClick.bind(this);

        this.init();
    }


    EmailListView.CLASS_NAME = {
        EMAIL:              'js-emailList-email',
        EMAIL_IS_ACTIVE:    'email_isActive'
    };

    EmailListView.EVENT_NAME = {
        EMAIL_ACTIVATION: 'emailList:emailActivation'
    };


    EmailListView.prototype.init = function () {
        this.$email.on('click', this._onEmailClick);
        return this;
    };


    EmailListView.prototype.activateIndex = function (index) {
        var previousIndex = this.activeIndex;
        this.activeIndex = Math.max(0, Math.min(index, this.$email.length - 1));
        this.$email.eq(previousIndex).removeClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);
        this.$email.eq(this.activeIndex).addClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);

        this.$element.trigger(EmailListView.EVENT_NAME.EMAIL_ACTIVATION, { model: this.collection.models[this.activeIndex] });

        return this;
    };


    EmailListView.prototype._onEmailClick = function (e) {
        var clickedIndex = this.$email.index(e.currentTarget);
        this.activateIndex(clickedIndex);
    };


    return EmailListView;
});
