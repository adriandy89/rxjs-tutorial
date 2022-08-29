"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const myObserver = {
    next: x => {
        if (!isNaN(x)) {
            console.log('Suma:', x + 10);
        }
        else {
            console.log(`'${x}' is not a number!`);
        }
    },
    error: err => console.error('Error: ', err),
    complete: () => console.log('Terminado!')
};
const myObservable = new rxjs_1.Observable(subscriber => {
    subscriber.next('Hola!');
    subscriber.next(10);
    subscriber.next(20);
    subscriber.error('Error creado!');
});
const myObservable2 = new rxjs_1.Observable(subscriber => {
    subscriber.complete();
});
const myObservable3 = new rxjs_1.Observable(subscriber => {
    subscriber.next(30);
    subscriber.error('Error creado desde 3!');
});
myObservable.subscribe(myObserver);
myObservable2.subscribe(myObserver);
myObservable3.subscribe(myObserver);
