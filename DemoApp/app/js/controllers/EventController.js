'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $log) {
    $scope.sortorder = 'name';
    $scope.query = '';
    /* eventData.getEvent()
        .success(function (event) { $scope.event = event;})
        .error(function (data, status, headers, config) {
            $log.warn(data, status, headers(), config)
        })*/

    /**
     * Use $resource in EventData     
     */    
    eventData.getEvent()
        .$promise
        .then (function (event) {$scope.event = event; console.log(event);})
        .catch(function (response) { console.log(response); });

    $scope.upVoteSession = function (i_oSession) {
        i_oSession.upVoteCount++;
    };

    $scope.downVoteSession = function (i_oSession) {
        if (i_oSession.upVoteCount == 0) {
            i_oSession.upVoteCount = 0;
        } else {
            i_oSession.upVoteCount--;
        }        
    }
});