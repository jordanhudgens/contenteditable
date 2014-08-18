var app = angular.module("MyApp", []);

app.controller('MyController', ['$scope', function($scope) {
    $scope.contenteditable = false;

    $scope.toggleOn = function() {
        $scope.contenteditable = true;
    };

}]);

app.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "Here is the content");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
