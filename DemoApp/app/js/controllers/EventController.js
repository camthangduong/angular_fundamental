'use strict';

// $route used to access the custom prroperties defined in the routeProvider
eventsApp.controller('EventController', function ($scope, eventData, $log, $routeParams, $route) {
    $scope.sortorder = 'name';
    $scope.query = '';    
    // This is print out the custom property
    // console.log($route.current.foo);
    /* eventData.getEvent()
        .success(function (event) { $scope.event = event;})
        .error(function (data, status, headers, config) {
            $log.warn(data, status, headers(), config)
        })*/

    /**
     * Use $resource in EventData     
     */    
    /*eventData.getEvent($routeParams.eventId)
        .$promise
        .then (function (event) {$scope.event = event; console.log(event);})
        .catch(function (response) { console.log(response); });*/
    
    $scope.event = $route.current.locals.event;

    $scope.upVoteSession = function (i_oSession) {
        i_oSession.upVoteCount++;
    };

    $scope.downVoteSession = function (i_oSession) {
        if (i_oSession.upVoteCount == 0) {
            i_oSession.upVoteCount = 0;
        } else {
            i_oSession.upVoteCount--;
        }        
    };

    $scope.reload = function () {
        $route.reload();
    }
});