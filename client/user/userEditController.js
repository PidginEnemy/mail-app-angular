'use strict';

const UserEditController = function($timeout,$state,$stateParams,UserListService) {

	this.user = null;
	this.statusMsg = null;

	this.getUser = () => {
		var id = $stateParams.user_id;
		UserListService.getUserById(id).then((res) => {
			this.user = res;
		});
	}

	this.saveUser = () => {
		UserListService.saveUser(this.user).then((res) => {
			if(!res.msg) {
				console.log(res);
				return;
			}
			this.statusMsg = res.msg;
			$timeout(() => {
				$state.go('user.list');
			},800);
		});
	}

	this.getUser();
};

export default UserEditController;