angular.module('myApp', ['ngAnimate'])
    .controller('ctrlAnimate', function($scope) {
        $scope.listaProductos = [];

        $http.get('productos.json')
        .then(function(json){
            $scope.listaProductos=json.data;
        })
        $scope.agregarProducto = function() {
            $scope.listaProductos.push({
                nombre: $scope.producto
            });

            $scope.producto = '';
        }

        $scope.eliminarProducto = function() {
            $scope.listaProductos.pop();
        }
        
        $scope.obtenerClima = function() {

        }
    })
