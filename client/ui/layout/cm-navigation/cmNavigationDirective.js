'use strict';

import cmNavigationTmpl from './cm-navigation.tpl.html';
import cmNavigationController from './cmNavigationController';

const cmNavigation = function() {
	return {
		restrict: 'E',
		template: cmNavigationTmpl,
		controller: cmNavigationController,
		controllerAs: 'cmNavCtrl'
	}
};

export default cmNavigation;