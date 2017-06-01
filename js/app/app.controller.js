'use strict';
PwaDemoApp.controller('HealthCareController', ['$scope', 'Title', 'HealthCareService', function($scope, Title, BlacklistService) {
    Title.set('PWA Demo - Health Care');

    $scope.getNotification = function() {
        $scope.blacklists = [];
        BlacklistService.getBlacklist().then(
            function(response) {
                console.log(response);
            },
            function() {
                // Handle error object error
            });
    }
}]);