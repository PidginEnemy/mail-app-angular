'use strict';

const MailDetailCtrl = function($state,$stateParams,MailListService) {

	this.mail = null;
	
	this.getMail = () => {
		var id = $stateParams.mail_id;
		this.mail = MailListService.getMailById(id);
	}

	this.backToList = () => {
		$state.go('mail.list',{ box:$stateParams.box });
	}

	this.getMail();
};

export default MailDetailCtrl;