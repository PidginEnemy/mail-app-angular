'use strict';

const MailListController = function($state,$stateParams,MailListService) {

	this.mailList = [];           // массив для писем

  	/* получение списка писем  */
  	this.getMailList = () => {
  		var box = $stateParams.box || 'inbox';
  		MailListService.getMailsFromBox(box).then((res) => {
  			if(angular.isArray(res))
  				this.mailList = res;
  		});
  	}

	/* проверить прочитанное ли письмо */
	this.isMailUnread = (mail) => {
		return (mail.isNew && mail.mailBoxType == 'inbox') ? true : false;
	}

	this.mailItemOnClick = (id) => {
		$state.go('mail.detail',{ box:$stateParams.box, mail_id:id });
	}

	this.mailItemCheckboxClick = () => {
		console.log('1');
	}
		
	/* получим письма */
	this.getMailList();
}

export default MailListController;