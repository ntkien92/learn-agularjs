app.factory('forecast', ['$http', function($http) {
  return $http.get('https://secret-meadow-3565.herokuapp.com/articles.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
