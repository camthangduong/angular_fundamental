'use strict';

eventsApp.controller('EditEventController', function ($scope) {
    $scope.saveEvent = function (event, newEventForm) {        
        if (newEventForm.$valid) {
            // Validate the window form
            window.alert(event.name);
        }
    };
    
    $scope.cancelEdit = function () {
        // Navigate back to the page
        window.location = "/EventDetails.html";
    };
});