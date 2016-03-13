Controller

Use: It is use to augment te Angular scope.
     It should contain the business logic needed for a single view.
    
Don't Use controller:
    Do not use controllers to:
      Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
      Format input — Use angular form controls instead.
      Filter output — Use angular filters instead.
      Share code or state across controllers — Use angular services instead.
      Manage the life-cycle of other components (for example, to create service instances).
      
Use controller only for variables, methods that're dependent on your view, for everything else(view-independent) things
use services, then include those services using dependeny injection in your controller.

Try keeping your controller as slim as possible.


