'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
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
            controller : 'EventController',
            resolve : {
                event : function ($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });
        // Set default page
        $routeProvider.otherwise({redirectTo: '/events'});

        // To get rid the # (hash sign in url), we use HTML5 routing
        $locationProvider.html5Mode(true);
    });
