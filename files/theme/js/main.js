requirejs.config({
    baseUrl: '/files/theme/assets/',
    paths: {
        jquery: 'jquery/dist/jquery.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        bootstrap: ['jquery']
    }
});

require(['jquery'], function ($) {

    $(document).ready(function () {
        console.log('JS asset setup working!');
    });

});