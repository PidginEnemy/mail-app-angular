'use strict';

const LoginService = function(store) {

	var authStatus = false,
		storage = localStorage || window.localStorage;

	this.checkCredits = (credits) => {
		if(credits && (credits.name && credits.password) && (credits.name == 'admin' && credits.password == '123')) {
			authStatus = true;
			storage.clear();	/* зачистим старые данные (якобы новая сессия и пора получить данные с сервера) */
		} else {
			authStatus = false;
		}
		store.set('user',{ username:credits.name });
		
		return authStatus;
	}

	this.isAuthorized = () => {
		var user = store.get('user');
		if(user)
			return true;
		else
			return false;
	}

	this.logout = () => {
		store.remove('user');
	}

}

export default LoginService;