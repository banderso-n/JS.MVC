define(function (require) {
    'use strict';


    function EmailListView ($element) {

        this.$element = $element;

        this.$email = this.$element.find('.' + EmailListView.CLASS_NAME.EMAIL);

        this._onEmailClick = this._onEmailClick.bind(this);

        this.init();
    }


    EmailListView.CLASS_NAME = {
        EMAIL:              'js-emailList-email',
        EMAIL_IS_ACTIVE:    'email_isActive'
    };

    EmailListView.DATA_ATTRIBUTE = {
        ID: 'emaillist-id'
    };

    EmailListView.EVENT_NAME = {
        CHANGE: 'emailList:change'
    };


    EmailListView.prototype.init = function () {
        this.$email.on('click', this._onEmailClick);
        return this;
    };


    EmailListView.prototype.activateId = function (id) {
        this.$email.removeClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);
        this.$email.filter('[data-' + EmailListView.DATA_ATTRIBUTE.ID + '="' + id + '"]').addClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);
        this.$element.trigger(EmailListView.EVENT_NAME.CHANGE, { id: id });
        return this;
    };


    EmailListView.prototype._onEmailClick = function (e) {
        var clickedId = $(e.currentTarget).data(EmailListView.DATA_ATTRIBUTE.ID);
        this.activateId(clickedId);
    };


    return EmailListView;
});
