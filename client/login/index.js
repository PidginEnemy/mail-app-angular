'use strict';

const login = angular.module('login',[]);

login.config(($stateProvider) => {

	$stateProvider.state('login', {
		url: '/login',
		template: '<login></login>'
	});

});

import loginDirective from './loginDirective';
import loginService from './loginService';
import loginController from './loginController';

login.directive('login',loginDirective);
login.service('LoginService',loginService);
login.controller('LoginController',loginController);

export default login;