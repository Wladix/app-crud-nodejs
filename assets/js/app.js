'use strict'

var app = angular.module("app", [

    "ngRoute",
    // "ui.router", 
    "ngMaterial"
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/loginCliente.html', controller: 'loginCtrl'});  
  $routeProvider.when('/cliente', {templateUrl: 'partials/showClientes.html', controller: 'clienteCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

// .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

//     $urlRouterProvider.otherwise('/login');

//     $stateProviders
//         .state('login', {
//             url: '/login',
//             controller: 'loginCtrl',
//             templateUrl: 'partials/loginCliente.html'
//         })

//         .state('cliente', {
//             url: '/cliente',
//             controller: 'clienteCtrl',
//             templateUrl: 'partials/showClientes.html'
//         })
// }]);
