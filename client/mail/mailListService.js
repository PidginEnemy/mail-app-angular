'use strict';

const MailListService = function($http,$q) {
  
  var mailServiceUrl = 'http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2',
      storage = localStorage || window.localStorage;
  
  var getMailListFromStorage = () => {
    return JSON.parse(storage['mailList']);
  }
  
  var setMailListToStorage = (list) => {
    storage.setItem('mailList',JSON.stringify(list));
  }

  var prepareMailList = (list) => {
    for(var i in list) {
      list[i].dtReceived = new Date(list[i].dtReceived);
    }
    return list;
  }
  
  /* get mail list from API or from storage */
  this.getAll = () => {

    if(storage.getItem('mailList')) {
    
      var mailList = getMailListFromStorage();
      return $q.resolve(mailList);
    
    } else {
    
      return $http.get(mailServiceUrl).then((res) => {
        var mailList = res.data;
        var preparedList = prepareMailList(mailList);
        setMailListToStorage(preparedList);
        return preparedList;
      }, (err) => {
        return err;
      });

    }
    
  }

  /* get mails from current box */
  this.getMailsFromBox = (box) => {
    var mailList = getMailListFromStorage(),
    mailListFiltered = mailList.filter((item) => {
      return item.mailBoxType == box;
    });
    return $q.resolve(mailListFiltered);
  }

  /* get mail from storage by id */
  this.getMailById = (id) => {
    var mailList = getMailListFromStorage(),
    mail = mailList.filter((item) => {
      return item._id == id;
    });
    return mail[0];
  }

  /* get count unread mails */
  this.getCountUnreadMails = () => {
    var mailList = getMailListFromStorage(),
    mailsF = mailList.filter((item) => {
      return item.mailBoxType == 'inbox' && item.isNew;
    });
    return mailsF.length;
  }
  
};

export default MailListService;

