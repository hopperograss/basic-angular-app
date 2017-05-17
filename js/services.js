/* all services are specified here
 * they are automatically included by specifying 'myServices' as a dependency in the app module in app.js
*/
angular.module('myServices',[])
    .factory('myService',function(){
        return 'something';
    });
