'use strict';

eventsApp.controller('EventController', function ($scope, eventData) {
    $scope.sortorder = 'name';
    $scope.query = '';
    $scope.event = eventData.event

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