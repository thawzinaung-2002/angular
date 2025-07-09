# Hotelinventory

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Notes

For Creating with Module.ts file
ng new projectname/file name --no-standalone


## Directives -> Structural Vs Attribute Directive
*ngIf, *ngFor -> Structural : Modify dom like remove or delete
ngClass, ngStyle -> Attribute : No modify dom


## Pipe
Pipe are used for data transformation like formatting. It's change original object.
eg. DatePipe,...

## Lifecycle
All lifeycle has interface.
After constructor -> ngOnit is called.
Constructor should use only for injection.



## Component Communication

Smart Vs Dump Component
@Input(), @Output()

** Rendering : Browser -> Properties -> Click + Sign -> Rendering -> Paint Flashing
** Angular dev tools for debugging
 changeDetection => OnDefault, OnPush
OnDefault -> Changes from Parent effect to Child
OnPush -> 
- to make sure not modify some data internally in this component (@Input , @Output)
- Immutability when passing data 

OnChanges Interface
- can apply only if @Input property
- SimpleChanges detect changes

DoCheck Interface
- avoid as much as possible
- tracking changes and do if match all application

ViewChild | ViewChildren & AfterViewInit
- ViewChild can access component properties like @Input and @Output
- status : true | false
- true -> child will use parent ngOnit
- false -> ngOnit will undefined and AfterViewInit will see assign value
- AfterViewInit is after all assigned or initialized of itself or others in its own.
- Can access component, ng-tempate, html tag and modify those.
- To access same multiple use viewchildren in AfterViewInit -> static false not work in viewchildren but work in viewchild
to call in ngonit


AfterViewChecked
- detect changes AfterViewInit 

AfterContentInit
- After content is initialized, 
use with <ng-content></ng-content>
use select="selectors" to customize component in content.
@ViewContent is for AfterContentInit.


OnDestroy
- To destroy all subscribtions or sessions or storage for performance


Depedency Injection 
- When service inject : first find in boostrap module of main.js defined
- depedency injection should take in constructor with private modifier
- providedIn -> root, any, platform
- providedIn can be with @Injectable decorator or providers in @NgModule 
- root : get a single service acrooss (Singleton)
- When no Singleton or own instance, put it your own component with providers array
- when service inject, it will find parent of parent till to top module
- when not found, it will go nullinjectorerror


Resolution Modifiers ()
- @Self DI , only this service available here (providers : [DI]) and when no found throws exception
- @Self decorator with service injection will check only its component
- @SkipSelf() will skip self but not parent of parent, rarely to use
- @Optional() DI, will use only in dev but not in production
- When use DI with @Optional() and remove providedIn, it will not throw exception
- @Host() DI is like that @Self

DI Providers
- Class Based Providers (with @Injectable Decorator class)
- Value Providers (Objects as a service)
- Factory

HttpClient , HttpClientModule, Proxy Service, HttpEventType

RxJs 
- RxJs gives you stream of data.
- ShareDisplay Operator is a type of cache request.

HttpInterceptors
- Interceptors are listening between request and response

APP_INITIALIZER
- Load before app initialize

--9:35