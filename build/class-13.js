"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const myObserver = {
    next: x => {
        console.log('Suma:', x);
    },
    error: err => console.error('Error: ', err),
    complete: () => console.log('Terminado!')
};
const myObservable = new rxjs_1.Observable(subscriber => {
    subscriber.next('Hola!');
    subscriber.next(10);
    subscriber.next(20);
    subscriber.complete();
});
const myPipe = myObservable.pipe((0, operators_1.filter)((r) => !isNaN(r)), (0, operators_1.map)((x) => x + 10));
myPipe.subscribe(myObserver);
