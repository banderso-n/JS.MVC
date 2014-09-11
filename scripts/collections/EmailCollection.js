define(function (require) {
    'use strict';

    var EmailModel = require('models/EmailModel');


    function EmailCollection () {

        this.models = [];

    }


    EmailCollection.prototype.fetch = function () {
        var self = this;
        return $.getJSON('data/emails.json').done(function (data) {
            self.models = data.emails.map(function (json) {
                return new EmailModel().fromJSON(json);
            });
        });
    };


    return EmailCollection;
});
