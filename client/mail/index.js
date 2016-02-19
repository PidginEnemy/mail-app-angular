'use strict';

const mail = angular.module('mail', []);

mail.config(($stateProvider) => {
	
	$stateProvider
	.state('mail', {
		abstract: true,
		url: '',
		template: '<mail></mail>',
		resolve: {
			mailList: (MailListService) => {
				return MailListService.getAll();
		    },
		    userList: (UserListService) => {
		    	return UserListService.getAll();
		    }
		}
	})
		.state('mail.list', {
			url: '/mail/:box',
			template: '<mail-list></mail-list>'
		})
		.state('mail.detail', {
			url: '/mail/:box/:mail_id',
			template: '<mail-detail></mail-detail>'
		})
});

import mailDirective from './mailDirective';
import mailListDirective from './mailListDirective';
import mailListBoxDirective from './mailListBoxDirective';
import mailDetailDirective from './mailDetailDirective';
import mailListService from './mailListService';
import mailListController from './mailListController';
import mailDetailController from './mailDetailController';

mail.directive('mail',mailDirective);
mail.directive('mailList',mailListDirective);
mail.directive('mailListBox',mailListBoxDirective);
mail.directive('mailDetail',mailDetailDirective);
mail.service('MailListService',mailListService);
mail.controller('MailListController',mailListController);
mail.controller('MailDetailController',mailDetailController);

export default mail;