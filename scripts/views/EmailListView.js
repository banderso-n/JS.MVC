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


    EmailListView.prototype.init = function () {
        this.$email.on('click', this._onEmailClick);
        return this;
    };


    EmailListView.prototype.activateId = function (id) {
        this.$email.eq(previousIndex).removeClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);
        this.$email.eq(this.activeIndex).addClass(EmailListView.CLASS_NAME.EMAIL_IS_ACTIVE);

        return this;
    };


    EmailListView.prototype._onEmailClick = function (e) {
        var clickedId = this.$email.index(e.currentTarget); // TODO: Get clickedId
        this.activateId(clickedId);
    };


    return EmailListView;
});
