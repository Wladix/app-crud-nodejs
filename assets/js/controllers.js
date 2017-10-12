app

.controller("clienteCtrl", function($scope, $mdDialog, $mdToast, crudFactory){

	$scope.showClientes = function(){		  
		crudFactory.showClientes().then(function successCallback(response){			
			$scope.clientes = response.data;			
		}, function errorCallback(response){
			$scope.showToast("No se logro mostrar lista de clientes");
		});
	}

	$scope.showOneCliente = function(id){
    crudFactory.showOneCliente(id).then(function successCallback(response){
 
        $scope.id = response.data.id;
        $scope.nombre = response.data.nombre;
        $scope.apellido = response.data.apellido;
        $scope.usuario = response.data.usuario;
 
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/showOneCliente.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true
        }).then(
            function(){}, 
            // Usuario presiona 'Cancelar'
            function() { 
                $scope.clearForm();
            }
        );
 
    	}, function errorCallback(response){
        	$scope.showToast("No se logro mostrar el registro");
    	});
 
	}

	$scope.showModalAddCliente = function(event){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'partials/createCliente.html',
			parent: angular.element(document.body),
			clickOutsideToClose: true,
			scope: $scope,
			preserveScope: true,
			fullscreen: true
		});
	}

	$scope.addCliente = function(){ 
		crudFactory.addCliente($scope).then(function successCallback(response){
			$scope.showToast(response.data.message);
			$scope.showClientes();
			$scope.cancel();
			$scope.clearForm();

		}, function errorCallback(response){
			$scope.showToast("No se logro agregar al cliente");
		});
	}



$scope.showModalUpdateCliente = function(id){ 
    // Obtenemos el cliente
    crudFactory.showOneCliente(id).then(function successCallback(response){
 
        // Colocamos los valores
        $scope.id = response.data[0].id;
        $scope.nombre = response.data[0].nombre;
        $scope.apellido = response.data[0].apellido;
        $scope.usuario = response.data[0].usuario;
        $scope.contrasena = response.data[0].contrasena;
 
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/updateCliente.html',
            parent: angular.element(document.body),
            // targetEvent: event,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true
        }).then(
            function(){},
 
            // Usuario clickea 'Cancel'
            function() {
            	//Limpiamos el formulario
                $scope.clearForm();
            }
        );
 
    }, function errorCallback(response){
        $scope.showToast("No se logro actualizar al cliente");
    });
 
}

$scope.updateCliente = function(){
 
    crudFactory.updateCliente($scope).then(function successCallback(response){
 
        // Mensaje que el cliente fue actualizado
        $scope.showToast(response.data.message);
 
        // Refrescamos la lista
        $scope.showClientes();
 
        // Cerramos el dialogo
        $scope.cancel();
 
        // Limpiamos el formulario
        $scope.clearForm();
 
    },
    function errorCallback(response) {
        $scope.showToast("No se logro actualizar el cliente");
    });
 
}

$scope.showModalDeleteCliente = function(event, id){
 
    // id a borrar
    $scope.id = id;
 
    // Modal de confirmación
    var confirm = $mdDialog.confirm()
        .title('¿Estas seguro de borrar este cliente?')
        .textContent('Cliente podra ser borrado')
        .targetEvent(event)
        .ok('Si')
        .cancel('No');
 
    // Mostramos modal
    $mdDialog.show(confirm).then(
        // Presionamos SI
        function() {
            // Borramos cliente
            $scope.deleteCliente();
        },
 
        // Presionamos NO
        function() {
            // Ocultamos modal
        }
    );
}

$scope.deleteCliente = function(){
 
    crudFactory.deleteCliente($scope.id).then(function successCallback(response){
 
        // Mensaje que borramos cliente
        $scope.showToast(response.data.message);
 
        // Refrescamos listado
        $scope.showClientes();
 
    }, function errorCallback(response){
        $scope.showToast("No se logro borrar el registro");
    });
 
}

	$scope.clearForm = function(){
		$scope.id = "";
		$scope.nombre = "";
		$scope.apellido = "";
		$scope.usuario = "";
	}

	$scope.showToast = function(message){
		$mdToast.show(
			$mdToast.simple()
			.textContent(message)
			.hideDelay(3000)
			.position("top right")
			);
	}

	function DialogController($scope, $mdDialog) {
		$scope.cancel = function() {
			$mdDialog.cancel();
		};
	}

})

app.controller("loginCtrl", function($scope, $mdDialog, $mdToast, $location, crudFactory){

	$scope.loginCliente = function(){
    crudFactory.loginCliente($scope.usuario).then(function successCallback(response){  
    	if(response.data.length == 0){
    		$scope.showToast('Usuario invalido');
    	}else{  
    		if(response.data[0].contrasena == $scope.contrasena+""){
				$location.path( "/cliente" );
    		}else{
    			$scope.showToast('Contraseña invalida')
    		}
    		
    	}
 		
 		 
    }, function errorCallback(response){
        $scope.showToast("Error al consultar usuario");
    });
 
}

	$scope.showToast = function(message){
		$mdToast.show(
			$mdToast.simple()
			.textContent(message)
			.hideDelay(3000)
			.position("top right")
			);
	}

	$scope.showModalAddCliente = function(event){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'partials/createCliente.html',
			parent: angular.element(document.body),
			clickOutsideToClose: true,
			scope: $scope,
			preserveScope: true,
			fullscreen: true
		});
	}

	$scope.addCliente = function(){ 
		crudFactory.addCliente($scope).then(function successCallback(response){
			$scope.showToast("Usuario creado correctamente, puede ingresar");			
			$scope.cancel();

		}, function errorCallback(response){
			$scope.showToast("No se logro agregar al cliente");
		});
	}

	function DialogController($scope, $mdDialog) {
		$scope.cancel = function() {
			$mdDialog.cancel();
		};
	}

});