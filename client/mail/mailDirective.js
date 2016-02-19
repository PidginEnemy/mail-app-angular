'use strict';

import mailTmpl from './views/mail.tpl.html';

const mail = function() {
	return {
		restrict: 'E',
		template: mailTmpl
	}
};

export default mail;