Angular supports seperation of concerns:
every object should have single and specific responsibility, what that means is. If you're requird to 
send an Ajax request to the server to get some data.
Including that request inside your controller is considered a  bad idea.
Instead use a seperate service say "getdata" which does this task for you.

Now, your this service can be used across different app, to get some data from the server.

In short:
  Services supports Rusability of your code.
  Seperation of concern.
  Single responsibility principle.
  the dependency inversion principle.  

Services are used to organize and share code across your app.

Angular Services are:
  Lazy Instantiated: Angular only instantiate a service when an application component depends on it
  Singleton: Each componenet dependent on a service gets a reference to the single instance generated by the service factory.
  
For every View-independent conponent use services.
