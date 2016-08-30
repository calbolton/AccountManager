((): void => {
    /* Controllers */
    //google.load('visualization', '1', {
    //    packages: ['corechart']
    //});

    //google.setOnLoadCallback(function () {
    //    angular.bootstrap(document.body, ['accountManager']);
    //});

    var app = angular.module("accountManager", ['ngRoute', 'ui.autocomplete']);
    //var app = angular.module("accountManager", ['ngRoute']);
       
    app.config(AccountManager.Routes.configureRoutes);  
})();