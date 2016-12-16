app.controller('myController', function ($scope, $location, UserContactService) {
    
    var init = function(){
      UserContactService.takeBackupFromLocal();
      $scope.directoryData = UserContactService.directory;
      $scope.initScopeContact();
    }

    $scope.addContact = function(){
      UserContactService.addContact($scope.user, function(){
        $scope.directoryData = UserContactService.directory;
        $scope.initScopeContact();
      });
    }

    $scope.initScopeContact = function(){
      $scope.totalCount = $scope.directoryData.length;
      $scope.user = {
        name: "",
        contact: "",
        address: "",
        index: $scope.totalCount
      }
      $scope.showInsertContacts = false;
    }

    $scope.showInsert = function(){
      $scope.showInsertContacts = true;
    }

    $scope.edit = function(index){
      UserContactService.editThisData(index);
      $location.path('/edit');
    }

    $scope.routeMeToAbout = function(){
      $location.path('/about');
    }

     
     init();

});

///////////Edit Controller////////////////


app.controller('editController', function($scope, $location, UserContactService){

  var init = function(){
    $scope.user = UserContactService.giveMeDataToEdit();
  }

  $scope.editIt = function(){
    UserContactService.updateFromEdit($scope.user);
    $location.path('/');
  }

  init();

});