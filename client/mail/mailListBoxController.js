'use strict';

const MailListBoxController = function(MailListService) {
	this.countNewInbox = MailListService.getCountUnreadMails();
}

export default MailListBoxController;