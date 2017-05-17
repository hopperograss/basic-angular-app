/* all controllers are specified here
 * they are automatically included by specifying 'myControllers' as a dependency in the app module in app.js
 */

angular.module('myControllers',[]).
    controller('NavCtrl',['$scope',function($scope){
        $scope.navItems = [
            {text: 'Home', url: '/' },
            {text: 'Page 1', url: '#!/page1' },
        ];
    }]).
    controller('HomeCtrl',['$scope',function($scope){

    }]).
    controller('Page1Ctrl',['$scope',function($scope){

    }]);

/* A NOTE FOR CONTROLLER/DIRECTIVE/SERVICE/ETC INJECTION
 * -- This would apply to any other method (.service(), .factory(), .directive(), or anything else that injects values)
 *
 * You'll notice that the second argument to each controller is an array, with the names of the function arguments
 * as strings appear first, with the controller function last.  Instead of doing an array, you can just put the function
 * by itself.
 *
 *   controller('myController',function($scope){ ... })
 *
 *     vs
 *
 *   controller('myController',['$scope',function($scope){ ... }])
 *
 * The reason we detail out the function arguments as strings here before the function is so that if our JS code
 * is minimized, Angular will still have a reference to the original name of the arguments and be able to accurately inject angular-specific
 * stuff, such as "$scope".  Otherwise, the code would minify to ...function(a){...}, and angular would have no way of knowing that "a" is
 * supposed to be "$scope", and thus your app would break.  Just good practice to arrange things this way
 */