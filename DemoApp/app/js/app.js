'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        // Config route
        $routeProvider.when('/newEvent', {
            templateUrl : 'templates/NewEvent.html',
            controller : 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl : 'templates/EventList.html',
            controller : 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {
            foo : 'bar', // this is the custom property wil be accessed by using $route service
            templateUrl: 'templates/EventDetails.html',
            controller : 'EventController'
        });
        // Set default page
        $routeProvider.otherwise({redirectTo: '/events'})
    });
