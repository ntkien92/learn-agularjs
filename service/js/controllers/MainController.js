app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    console.log(data);
    $scope.articles = data;
  });
}]);
