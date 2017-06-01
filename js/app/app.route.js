'use strict';

PwaDemoApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HealthCareController',
                templateUrl: 'templates/home.html'
            })
            .when('/appointment', {
                controller: 'HealthCareController',
                templateUrl: 'templates/appointment.html'
            })
            .when('/doctors', {
                controller: 'HealthCareController',
                templateUrl: 'templates/doctors.html'
            })
            .when('/notifications', {
                controller: 'HealthCareController',
                templateUrl: 'templates/notifications.html'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);