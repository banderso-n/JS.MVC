define(function (require) {
    'use strict';


    function EmailModel () {

        this.from = '';

        this.id = '';

        this.message = '';

        this.subject = '';

        this.sentDate = new Date();

        this.to = '';

    }


    EmailModel.prototype.fromJSON = function (json) {
        this.from = json.from;
        this.id = json.id;
        this.message = json.message;
        this.subject = json.subject;
        this.sentDate = new Date(json.sent);
        this.to = json.to;

        return this;
    };


    return EmailModel;
});
