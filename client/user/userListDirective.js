'use strict';

import userListTmpl from './views/user-list.tpl.html';
import userListController from './userListController';

const userList = function() {
	return {
		restrict: 'E',
		template: userListTmpl,
		controller: userListController,
		controllerAs: 'userListCtrl'
	}
};

export default userList;