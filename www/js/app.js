/*// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js*/
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

 /* // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js*/
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('app', {
    url: '/app',
    abstract: true,
      controller: 'AppCtrl',
    templateUrl: 'templates/menu.html'
  })

  // Each tab has its own nav history stack:
  /*
  .state('app.tabs', {
    url: '/tabs',
      views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'

      }
    }

  })
  */

  .state('app.cerca', {
    url: '/cerca',
    views: {
      'tab-cerca': {
        templateUrl: 'templates/cerca/tab-cerca.html',
        controller: "CercaCtrl"
      }
    }
  })
  .state('app.annunci', {
      url: '/annunci',
      views: {
        'tab-annunci': {
          templateUrl: 'templates/annunci/tab-annunci.html'
        }
      }
    })
  .state('app.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/tab-home.html'

      }
    }
  })
  .state('app.preferiti', {
      url: '/preferiti',
      views: {
        'tab-preferiti': {
          templateUrl: 'templates/preferiti/tab-preferiti.html'
        }
      }
    })
  .state('app.messaggi', {
      url: '/messaggi',
      views: {
        'tab-messaggi': {
          templateUrl: 'templates/messaggi/tab-messaggi.html'
        }
      }
    })

  /*
  .state('app.prova', {
    url: '/tabs/prova',
      views: {
        'tab-home': {
          templateUrl: 'templates/prova.html'
        }
      }
  })*/
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});
