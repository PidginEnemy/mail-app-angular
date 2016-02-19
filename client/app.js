'use strict';

/* STYLES */
import 'static/css/style.scss';

/* JS */
import './ui';
import './login';
import './mail';
import './user';

const catMail = angular.module('catMail',[
	'ui.router',
	'angular-storage',
	'ui',
	'login',
	'mail',
	'user'
]);

catMail.config(($httpProvider,$stateProvider,$urlRouterProvider,storeProvider) => {

	//$httpProvider.interceptors.push('LoginInterceptor');
	$urlRouterProvider.otherwise('/login');

	storeProvider.setStore('sessionStorage');

});

catMail.run(function($rootScope,$state,LoginService) {
	
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
		
		if(toState.name != 'login' && !LoginService.isAuthorized()) {
			event.preventDefault();
			alert('Please, login');
			$state.go('login');
		}
		else if(toState.name == 'login' && LoginService.isAuthorized()) {
			event.preventDefault();
			$state.go('mail.list',{ box: 'inbox' });
		}
	});

});