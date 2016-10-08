angular.module("vendas").config(function ($routeProvider) {
	$routeProvider.when("/produto", {
		templateUrl: "produto.html",
		controller: "produtoCtrl"
	});
	$routeProvider.when("/cliente", {
		templateUrl: "cliente.html",
		controller: "clienteCtrl"
	});
	$routeProvider.otherwise({redirectTo: "/produto"});
});