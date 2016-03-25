angular.module('starter.controllers', [])

.controller('CercaCtrl', function($scope, $ionicModal, $timeout) {

    $scope.loginData = {};
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/cerca/modalLuogo.html', {
        id: 'luogo',
        scope: $scope
    }).then(function(modal) {
        $scope.modalLuogo = modal;
    });
    $ionicModal.fromTemplateUrl('templates/cerca/modalPrezzo.html', {
        id: 'prezzo',
        scope: $scope
    }).then(function(modal) {
        $scope.modalPrezzo = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeModal = function($string) {
        switch($string){
            case 'luogo':
                $scope.modalLuogo.hide();
                break;
            case 'prezzo':
                $scope.modalPrezzo.hide();
                break;
        }

    };
    // Open the login modal
    $scope.openModal = function($string) {
        switch($string){
            case 'luogo':
                $scope.modalLuogo.show();
                break;
            case 'prezzo':
                $scope.modalPrezzo.show();
                break;
        }
    };
    // Perform the login action when the user submits the login form
    $scope.doLogin = function($string) {
        console.log('Doing login', $string);
        $scope.closeModal($string);
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HomeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('AppCtrl', function($scope) {
    $scope.platform = ionic.Platform.platform();

})

;

