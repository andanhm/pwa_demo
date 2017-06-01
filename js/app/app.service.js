'use strict';

PwaDemoApp.factory('HealthCareService', ['$http', '$q', function($http, $q) {
    return {
        appointment: function(details) {
            return $http({
                method: 'POST',
                url: '/appointment',
                headers: { 'Content-Type': undefined },
                transformRequest: function(data) {
                    var formData = new FormData();
                    formData.append('patientName', details.email);
                    formData.append('mobileNumber', details.name);
                    formData.append('email', details.subject);
                    formData.append('date', details.message);
                    formData.append('department', details.files[0]);
                    return formData;
                }
            }).then(function(response) {
                    return response.data;
                },
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        getNotification: function() {
            return $http({
                method: 'GET',
                url: '/notification',
            }).then(function(response) {
                    return response.data;
                },
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        enableNotification: function(token) {
            return $http({
                method: 'POST',
                url: '/notification',
                headers: { 'Content-Type': undefined },
                transformRequest: function(data) {
                    var formData = new FormData();
                    formData.append('token', token);
                    return formData;
                }
            }).then(function(response) {
                    return response.data;
                },
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
    };
}]);