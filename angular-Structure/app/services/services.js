app.factory('UserContactService', function(){
	var srv = {};

	srv.directory = [];
	srv.editIndex = null;

	srv.takeBackupFromLocal = function(){
		var dir = window.localStorage.getItem('directory');
		if(dir != null){
			srv.directory = JSON.parse(dir);
		}
	}

	srv.backupDirToLocal = function(){
		window.localStorage.setItem('directory', JSON.stringify(srv.directory));
	}


	srv.addContact = function(userObj, callbackSuccess){
		srv.directory.push(userObj);
		srv.backupDirToLocal();
		callbackSuccess();
	}

	srv.editThisData = function(index){
		srv.editIndex = index;
	}

	srv.giveMeDataToEdit = function(){
		if(srv.editIndex != null && srv.directory.length >= srv.editIndex){
			return srv.directory[srv.editIndex];
		}else{
			return {
				name: "",
		        contact: "",
		        address: "",
		        index: null
			};
		}
	}

	srv.updateFromEdit = function(userObj){
		var index = userObj.index;
		if(index <= srv.directory.length){
			srv.directory.splice(index, 1);
			srv.directory.push(userObj);
			srv.backupDirToLocal();
		}
	}

  return srv;
});