'use strict';

import mailListTmpl from './views/mail-list.tpl.html';
import mailListController from './mailListController';

const mailList = function() {
	return {
		restrict: 'E',
		template: mailListTmpl,
		controller: mailListController,
		controllerAs: 'mailListCtrl'
	}
};

export default mailList;