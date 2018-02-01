$stateProvider
    .state('main', {
        templateUrl: 'view/example.html',
        controller: 'authController',
        resolve: {
          stuff: function(){
             return doSomethingThatReturnsAPromise();
          }
        }
    })