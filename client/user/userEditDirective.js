'use strict';

import userEditTmpl from './views/user-edit.tpl.html';
import userEditController from './userEditController';

const userEdit = function() {
	return {
		restrict: 'E',
		template: userEditTmpl,
		controller: userEditController,
		controllerAs: 'userEditCtrl'
	}
};

export default userEdit;