function Main($scope) {
  $scope.username = "username";
  $scope.checkUrl = function() {
    var url = $scope.username+".kd.io/";
    $.ajax(url, {
      statusCode: {
        404: function() {
          alert('page not found');
        }
      }
    });
  };
}