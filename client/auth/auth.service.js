'use strict';

function authService($auth, $state){

var auth = {//Objeto JSON para crera las variables login entre otras
	login: login,
  logout: logout,
  isAuthenticated: isAuthenticated,
  isAdmin: isAdmin,
  isUser: isUser,
  alluser : alluser
};

  function login(user){
  	$auth.login(user)
  		.then(response => {
  			console.log('Logeado...', response);
  			$state.go('usuarios-list');
  		})
  		.catch(err => {
  			console.log(err,'Error al logearse');
  			$state.go('login');
  		});
  }
	
  function logout(){
   if($auth.isAuthenticated()){
    $auth.logout()
      .then(response => {
        console.log('Adios', response);
        $state.go('main');
      })
      .catch(err => {
        console.log('Error', err);
      });
    }
	}

  function isAuthenticated(){
    if($auth.isAuthenticated()){
      return true;
    }else{
      return false;
    }
  }

  function isAdmin(){
    if($auth.isAuthenticated()){
      if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
        return true;
      }else{
        return false;
      }
      }else{
        return false;
      }
    }

    function isUser(){
      if($auth.isAuthenticated()){
        if($auth.getPayload().roles.indexOf("USER") !== -1){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }

    function alluser(){
      if($auth.isAdmin || $auth.isUser){
        return false;
      }else{
        return true;
      }
    }

  return auth;
}

authService.$inject = ['$auth','$state'];
angular.module('startUpApp')
.factory('authService', authService);
