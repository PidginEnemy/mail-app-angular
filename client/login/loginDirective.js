'use strict';

import loginTmpl from './views/login.tpl.html';
import loginController from './loginController';

const login = function() {
	return {
		restrict: 'E',
		template: loginTmpl,
		controller: loginController,
		controllerAs: 'loginCtrl'
	}
}

export default login;