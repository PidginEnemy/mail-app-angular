'use strict';

import mailListBoxTmpl from './views/mail-list-box.tpl.html';
import mailListBoxController from './mailListBoxController';

const mailListBox = function() {
	return {
		restrict: 'E',
		template: mailListBoxTmpl,
		bindToController: true,
		controller: mailListBoxController,
		controllerAs: 'mailListBoxCtrl'
	}
};

export default mailListBox;
