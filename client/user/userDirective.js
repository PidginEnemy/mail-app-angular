'use strict';

import userTmpl from './views/user.tpl.html';

const user = function() {
	return {
		restrict: 'E',
		template: userTmpl
	}	
};

export default user;