define(function (require) {
    'use strict';


    function EmailDetailView ($element) {

        this.$element = $element;

        this.$email = $element.find('.' + EmailDetailView.CLASS_NAME.EMAIL);

    }


    EmailDetailView.CLASS_NAME = {
        EMAIL:      'js-emailDetail-email',
        IS_HIDDEN:  'isVisuallyHidden'
    };

    EmailDetailView.DATA_ATTRIBUTE = {
        ID: 'emaildetail-id'
    };


    EmailDetailView.prototype.activateId = function (id) {
        this.$email.addClass(EmailDetailView.CLASS_NAME.IS_HIDDEN);
        this.$email.filter('[data-' + EmailDetailView.DATA_ATTRIBUTE.ID + '="' + id + '"]').removeClass(EmailDetailView.CLASS_NAME.IS_HIDDEN);
        return this;
    };


    return EmailDetailView;
});
