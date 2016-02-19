'use strict';

const UserListService = function($http, $q) {
  
  var usersUrl = 'http://www.json-generator.com/api/json/get/bQzpeuaeiG?indent=2',
      storage = localStorage || window.localStorage;
      
  var getUsersListFromStorage = () => {
    return JSON.parse( storage['usersList'] );
  }
  
  var setUsersListToStorage = (list) => {
    storage.setItem('usersList', JSON.stringify(list) );
  }
  
  this.getAll = () => {
    if( storage.getItem('usersList') ) {
      var usersList = getUsersListFromStorage();
      return $q.resolve(usersList);
    } else {
      return $http.get(usersUrl).then((res) => {
        setUsersListToStorage(res.data);
        return res.data;
      }, (err) => {
        return err;  
      });
    }
  }

  this.getUsersFromStorage = () => {
    var usersList = getUsersListFromStorage();
    return $q.resolve(usersList);
  }

  this.getUserById = (id) => {
    var usersList = getUsersListFromStorage(),
        user = null;
    for(var i in usersList) {
      if(usersList[i].id == id)
        user = usersList[i];
    }
    return $q.resolve(user);
  }

  this.saveUser = (user) => {
    var usersList = getUsersListFromStorage();
    for(var i in usersList) {
      if(usersList[i].id == user.id)
        usersList[i] = user;
    }
    setUsersListToStorage(usersList);
    return $q.resolve({ msg: 'Succesfull saving' });
  }
  
};

export default UserListService;