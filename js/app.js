/* The basic structure for an angular module is:
 *
 * angular.module('moduleName',[dependencies]);
 *
 * Our main "app" module will include our controllers, directive, services,
 * and any other built-in angular modules ('ngRoute' and 'ngAnimate' in this example) as dependencies.
 * A dependency is something that we "inject" into a module or other component only when we need it.  Kind of like
 * a switchboard--only turn the switch on when you need to use it.
 */
angular.module('myApp',
    [
        'myControllers',
        'myServices',
        'myDirectives',
        'ngRoute',
        'ngAnimate'
    ]
    ).
    config(['$routeProvider',function($routeProvider){
    /* CONFIG:
     * This just configures routes so you can swap out views and treat them as different "pages".  To add more routes,
     * just copy one of the .when() statements and fill in the new parameters for your new page.
     */
        $routeProvider.
            when('/',{templateUrl: 'partials/home.html',controller: 'HomeCtrl'}).
            when('/page1',{templateUrl: 'partials/page1.html',controller: 'Page1Ctrl'}).
            otherwise({redirectTo: '/'});

        /* The otherwise() statement says to redirect to a specific page if the route can't be found by the url supplied
         * EX: http://myappurl.com/page2 will auto-direct to http://myappurl.com/, because "page2" is not specified as a route
         */
    }]);