angular.module("vendas").controller(
		"produtoCtrl",
		function($scope, $http) {

			$scope.novoProduto = function(produto) {
				$http.post("produto/novo", produto).success(
						function(resultadoDoResponse) {
							$scope.produto = resultadoDoResponse;
							carregarProduto();
						});
			};

			function carregarProduto() {
				$http.get("produto/listar").success(function(carregarProdutos) {

					$scope.produtos = carregarProdutos;
				});
			}

			$scope.deletarProduto = function(produto) {
				$http.post("produto/deletar", produto).success(
						function(resultadoDoResponse) {
							$scope.produto = resultadoDoResponse;
							carregarProduto();
						});
			};
			carregarProduto();
		});
