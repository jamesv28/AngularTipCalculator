app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/details', {
            templateUrl: 'partials/details.html',
            controller: 'detailsController'
        })
        .when('/charges', {
            templateUrl: '../partials/charges.html',
            controller: 'chargesController'
        })
        .when('/earnings', {
            templateUrl: '../partials/earnings.html',
            controller: 'earningsController'
        }).otherwise({
            redirect: '/details'
        });

});