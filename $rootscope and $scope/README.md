Understanding $rootscope, $scope and this keyword in AngularJS

There is a root scope, and the root scope has one or more child scopes. 
Each view has its own $scope (which is a child of the root scope), 
so whatever variables one view controller sets on its $scope variable,
those variables are invisible to other controllers.

See this on plnkr:  https://plnkr.co/edit/qSOmfZhCO958GLPFhFgk?p=preview

You can also change the $rootscope inside another controller:
See this too: http://jsfiddle.net/TmPk5/6/