(function(){
	'use strict';

	class loginCrontroller{

		constructor(authService){
			this.authService = authService;
		}
		$onInit(){		
			console.log('Hola');
		}

		login(){
			console.log('DatosLogin', this.user);
			this.authService.login(this.user);
		}
	}

angular.module('startUpApp')
.component('login',{
	templateUrl:'app/login/login.html',
	controller: loginCrontroller,
	controllerAs:'vm'
	});
})();