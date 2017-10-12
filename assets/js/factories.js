app

.factory("crudFactory", function($http){

	var factory = {};

	factory.showClientes = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:1337/cliente'
		});
	};

	factory.showOneCliente = function(id){
		return $http({
			method: 'GET',
			url: 'http://localhost:1337/cliente?id=' + id
		});
	};   

	factory.addCliente = function($scope){
		return $http({
			method: 'POST',
			data: {
				'nombre' : $scope.nombre,
				'apellido' : $scope.apellido,
				'usuario' : $scope.usuario,
				'contrasena' : $scope.contrasena            
			},
			url: 'http://localhost:1337/cliente'
		});
	};

	factory.updateCliente = function($scope){
 
    return $http({
        method: 'PUT',
        data: {
            // 'id' : $scope.id,
            'nombre' : $scope.nombre,
            'apellido' : $scope.apellido,
            'usuario' : $scope.usuario,
            'contrasena' : $scope.contrasena
        },
        url: 'http://localhost:1337/cliente/update/' + $scope.id
    });
};

	factory.deleteCliente = function(id){
    	return $http({
        	method: 'DELETE',
        	// data: { 'id' : id },
        	url: 'http://localhost:1337/cliente/destroy/' + id
    	});
	};

	factory.loginCliente = function(usuario){
		return $http({
			method: 'GET',
			data: {'usuario' : usuario},
			url: 'http://localhost:1337/cliente?usuario='+usuario
		});
	}

	return  factory;
});
