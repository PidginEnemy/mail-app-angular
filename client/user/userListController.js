'use strict';

const UserListController = function($state,UserListService) {
	
	this.usersList = [];
	 
	/* получим юзверей */
	this.getUsers = () => {
		UserListService.getUsersFromStorage().then((res) => {
			if(angular.isArray(res))
    			this.usersList = res;
	    });
	}

  	this.userOnClick = (id) => {
  		$state.go('user.edit',{ user_id: id });
  	}
  
  	this.getUsers();
};

export default UserListController;