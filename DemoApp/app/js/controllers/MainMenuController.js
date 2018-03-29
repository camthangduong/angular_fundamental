'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, eventData) {
        $scope.createEvent = function () {
            $location.url('/newEvent');
        };

        $scope.listEvents = function () {
            $location.url('/events');
        };
    }
);