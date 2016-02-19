'use strict';

import mailDetailTmpl from './views/mail-detail.tpl.html';
import mailDetailController from './mailDetailController';

const mailDetail = function() {
	return {
		restrict: 'E',
		template: mailDetailTmpl,
		controller: mailDetailController,
		controllerAs: 'mailDetailCtrl'
	}
};

export default mailDetail;