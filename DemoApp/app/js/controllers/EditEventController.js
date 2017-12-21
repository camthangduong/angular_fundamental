'use strict';

eventsApp.controller('EditEventController', function ($scope, eventData) {
    $scope.saveEvent = function (event, newEventForm) {        
        if (newEventForm.$valid) {
            // Validate the window form
            eventData.save(event)
                .$promise.then (
                    function (response) {console.log('success', response);},
                    function (response) {console.log('failure', response);}
                );
        }
    };
    
    $scope.cancelEdit = function () {
        // Navigate back to the page
        window.location = "/EventDetails.html";
    };
});