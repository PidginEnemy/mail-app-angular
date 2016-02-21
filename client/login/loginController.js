'use strict';

const LoginController = function(LoginService,$state) {
	
	this.credits = {
		name: null,
		password: null
	}
	
	this.login = () => {
		if(this.credits.name && this.credits.password) {
			if(LoginService.checkCredits(this.credits))
				$state.go('mail.list',{ box:'inbox' });
			else
				alert('You entered invalid login or password');
		} else {
			alert('Enter the login and password');
		}
	}
	
};

export default LoginController;