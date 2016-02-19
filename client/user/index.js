'use strict';

const user = angular.module('user',[]);

user.config(($stateProvider) => {

	$stateProvider
	.state('user', {
		abstract: true,
		url: '',
		template: '<user></user>'
	})
		.state('user.list', {
			url: '/user',
			template: '<user-list></user-list>'
		})
		.state('user.edit', {
			url: '/user/:user_id',
			template: '<user-edit></user-edit>'
		});

});

import userDirective from './userDirective';
import userListDirective from './userListDirective';
import userEditDirective from './userEditDirective';
import userListService from './userListService';
import userListController from './userListController';
import userEditController from './userEditController';

user.directive('user',userDirective);
user.directive('userList',userListDirective);
user.directive('userEdit',userEditDirective);
user.service('UserListService',userListService);
user.controller('UserListController',userListController);
user.controller('UserEditController',userEditController);

export default user;