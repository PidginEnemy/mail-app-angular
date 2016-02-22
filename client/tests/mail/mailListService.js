describe('mailListService', function() {
	
	var MailListService,	
		$httpBackend,
		storage = localStorage || window.localStorage,
		mockMailList = [{
		    "index": 0, 
		    "_id": "56b7863b87022564bd798292", 
		    "name": "Barron Ramos", 
		    "picture": "http://placehold.it/32x32?text=JS", 
		    "text": "Nostrud sunt esse Lorem cupidatat velit anim fugiat ut commodo id ex ipsum do. Ullamco irure minim nisi nisi ut nulla excepteur anim sunt anim. Mollit voluptate adipisicing ipsum laborum. Aliqua deserunt nisi labore commodo culpa aute dolor aliquip.\r\n", 
		    "company": "AUSTEX", 
		    "isNew": true, 
		    "dtReceived": "Tue Oct 20 2015 02:23:45 GMT+0300 (RTZ 2 (\u0437\u0438\u043c\u0430))", 
		    "mailBoxType": "outbox", 
		    "withAttachments": false, 
		    "guid": "05c76f75-99d7-4289-b4f7-2eeb208d9144", 
		    "email": "barronramos@austex.com", 
		    "subject": "Ad voluptate id aliqua ea amet consequat deserunt elit ex laboris minim."
		}];

	beforeEach(inject(function(_MailListService_,_$httpBackend_) {
		MailListService = _MailListService_;
		$httpBackend = _$httpBackend_;

		$httpBackend.whenGET('http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2').respond(mockMailList);
	}));

	it('should get mail list', function(done) {
		MailListService.getAll().then(function(data) {
			expect(data).toEqual(jasmine.any(Array));
			done();
		});
		$httpBackend.flush();
	});

	it('should save list to local storage', function() {
		expect(storage.getItem('mailList')).not.toBe(null);
	});

	it('should get one mail', function() {
		var mail = MailListService.getMailById('56b7863b87022564bd798292');
		expect(mail).toEqual(jasmine.any(Object));
	});

});