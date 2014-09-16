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


    EmailCollection.prototype.search = function (term) {
        var emailCollection_filtered = new EmailCollection();
        var term_lowerCase = term.toLowerCase();
        emailCollection_filtered.models = this.models.filter(function (model) {
            return model.from.toLowerCase().indexOf(term_lowerCase) !== -1 ||
                model.message.toLowerCase().indexOf(term_lowerCase) !== -1 ||
                model.subject.toLowerCase().indexOf(term_lowerCase) !== -1;
        });
        return emailCollection_filtered;
    };


    return EmailCollection;
});
