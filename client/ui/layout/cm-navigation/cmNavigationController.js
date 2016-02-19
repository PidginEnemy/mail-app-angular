'use strict';

const CMNavigationController = function($state,LoginService) {
	this.state = $state;
	this.logout = () => {
		LoginService.logout();
	}
};

export default CMNavigationController;