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
				alert('Вы ввели неправильный логин или пароль');
		} else {
			alert('Введите логин и пароль');
		}
	}
	
};

export default LoginController;