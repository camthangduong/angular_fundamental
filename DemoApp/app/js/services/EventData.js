'use strict';
// Create a service
eventsApp.factory('eventData', function () {
    return {
        event : {
            name : 'Angular Boot Camp',
            date : "12/19/2017",
            time : '10:30 AM',
            location : {
                address : 'CaseWare International Inc.',
                city : 'Toronto',
                province : 'ON'
            },
            imageUrl : 'img/angularjs-logo.png',
            sessions : [
                {
                    name : 'Directives Masterclass',
                    creatorName : 'Bob Smith',
                    duration : 1,
                    level : 'Advanced',
                    abstract : 'In this session you will learn the ins and outs of directives!',
                    upVoteCount : 0
                },
                {
                    name : 'Scope for fun and profit',
                    creatorName : 'Jonh Doe',
                    duration : 2,
                    level : 'Introduction',
                    abstract : 'This session will take a closer look at scopes!',
                    upVoteCount : 0
                },
                {
                    name : 'Well Behaved Controllers',
                    creatorName : 'Jane Doe',
                    duration : 4,
                    level : 'Intermediate',
                    abstract : 'Controllers are beginning of everything Angular!',
                    upVoteCount : 0
                }
            ]
        }
    };
});