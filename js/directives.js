/* all directives are specified here
 * they are automatically included by specifying 'myDirectives' as a dependency in the app module in app.js
 */
angular.module('myDirectives',[])
    .directive('myDirective',function(){
        return {
            restrict: 'E',
            link: function(scope,elem,attrs){

            }
        };
    });
