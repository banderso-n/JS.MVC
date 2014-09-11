require([
    'jquery',
    './App'
], function (
    $,
    App
) {
    'use strict';


    $(function () {

        window.app = new App();

    });
});
