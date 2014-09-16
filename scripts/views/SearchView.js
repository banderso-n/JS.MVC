define(function (require) {
    'use strict';

    var EventEmitter = require('lib/EventEmitter');


    function SearchView ($element) {
        EventEmitter.call(this);

        this.$element = $element;

        this._onInput = this._onInput.bind(this);

        this.init();
    }
    SearchView.prototype = Object.create(EventEmitter.prototype);
    SearchView.prototype.constructor = SearchView;


    SearchView.EVENT_NAME = {
        TERM_CHANGE: 'searchView:termChange'
    };


    SearchView.prototype.init = function () {
        this.enable();
        return this;
    };


    SearchView.prototype.enable = function () {
        this.$element.on('input', this._onInput);
        return this;
    };


    SearchView.prototype._onInput = function (e) {
        this.emit(SearchView.EVENT_NAME.TERM_CHANGE, this.$element.val());
    };


    return SearchView;
});
