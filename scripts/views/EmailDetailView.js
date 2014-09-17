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

        return this;
    };


    return EmailDetailView;
});
