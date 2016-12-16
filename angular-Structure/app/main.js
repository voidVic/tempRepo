/**
 * AngularJS Academy Tutorial 1
 * @author Ankit Sharma (429314) https://voidvic.herokuapp.com
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"})
    // Pages
    .when("/edit", {templateUrl: "partials/edit.html", controller: "editController"})
    // else 404
    //.otherwise("/404", {templateUrl: "partials/404.html", controller: "myController"});
}]);

