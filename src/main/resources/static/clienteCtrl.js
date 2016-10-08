angular.module("vendas").controller(
		"clienteCtrl",
		function($scope, $http) {

			$scope.novoCliente = function(cliente) {
				$http.post("cliente/novo", cliente).success(
						function(resultadoDoResponse) {
							$scope.cliente = resultadoDoResponse;
							carregarCliente()
						});
			};

			function carregarCliente() {
				$http.get("cliente/listar").success(function(carregarClientes) {

					$scope.clientes = carregarClientes;
				});
			}

			$scope.deletarCliente = function(cliente) {
				$http.post("cliente/deletar", cliente).success(
						function(resultadoDoResponse) {
							$scope.cliente = resultadoDoResponse;
							carregarCliente();
						});
			};
			carregarCliente();
		});
