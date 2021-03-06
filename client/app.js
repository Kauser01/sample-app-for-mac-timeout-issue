angular
    .module("TestApp", [
        'ui.router',
        'ngResource'
    ]).controller('MainCtrl', ['$scope', '$q', '$http', function ($scope, $q, $http) {
        $scope.responseData = " ";
        $scope.testFunction = function (uri, verb, params, data) {
            var timeout = $("#timeout").val();
            console.log("timeout", timeout);
            $("#Loading").text("Waiting for response...");
            var url = window.location.href+ "data?timeout=" + timeout;
            $scope.responseData = " ";
            var req = {
                method: verb,
                url: url,
                timeout:300000
            }
            console.log("Request made for:"+req.url);
            $("#Loading").text("Waiting for response...");
            $http(req).success(function (data, status) {
                $("#Loading").text("Got the response!");
                console.log("Got response for "+req.url+":"+data);
                $scope.responseData = data;
            }).error(function (data, status, headers, config) {
                $scope.responseData = "In Error callback";
               console.log(data);
            });
        };
    }]);