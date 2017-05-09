# MinersGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Grundidee des Spiels
Es gibt verschiedene Sorten von Metallen, die abgebaut werden können.
Es gibt verschiedene Units, die Metalle in einer bestimmten Zeit fördern können.
Es gibt Geld, mit denen Upgrades und Units gekauft werden können.
Zudem soll es einen Förderturm geben, der das abgebaute Material nach oben befördert. Dieser kann Upgrades erhalten.
Außerdem gibt es einen Umschlagplatz, der zum Verkauf der Metalle dient und ebenfalls ausgebaut werden kann.

## Datenmodell
DataService:{
    minerals:[
        {

            name:"test",
            ...
            in_stock:100
        }
    ],
    units:[
        {
            name:"arbeiter-1",
            type:"miner",
            level:1,
            minerals:[{
                name:"test",
                cpm:5,//abbau pro minute
                epm:25 // energie pro minute in prozent
            }]
        }
    ],
    tranport:{
        level:1
    },
    sale:{
        level:1
    }
}