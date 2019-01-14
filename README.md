# CrudChallengeFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To run this application from code to point to different environments use:

**For production**
```
ng serve -c kubernetes
```

**For staging**
```
ng serve -c kubernetes-staging
```

## To run it from containers use

**For production**
```
docker pull omarvides/crud-challenge-ui:1.0.5
docker run -d -ti -p 80:80 omarvides/crud-challenge-ui:1.0.5

```

**For staging**
```
docker pull omarvides/crud-challenge-ui-staging:1.0.5
docker run -d -ti -p 80:80 omarvides/crud-challenge-ui-staging:1.0.5
```

**After running one of the options above, visit http://localhost in your browser**

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
