'use strict';

eventsApp.filter('durations', function () {
    return function (duration) {
        var output = "";
        switch (duration) {
            case 1:
                output = "Half Hour";
                break;
            case 2:
                output = "1 Hour";
                break;
            case 3:
                output = "Half Day";
                break;
            case 4:
                output = "Full Day";
                break;
        }
        return output;
    }
});