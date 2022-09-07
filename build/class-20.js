"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.of)('Hola', 'Como están?', 'Welcome Gente').pipe((0, rxjs_1.map)(v => {
    if (v === 'Welcome Gente') {
        throw 'Saludo Incorrecto: ' + v;
    }
    return v;
}), (0, rxjs_1.catchError)(err => {
    throw 'Error: ' + err;
})).subscribe({
    next: (x) => console.log('Next: ' + x),
    error: (err) => console.log('Err: ' + err),
    complete: () => console.log('complete') // no se ejecuta, error interrumpe
});
/*
Next: Hola
Next: Como están?
Err: Error: Saludo Incorrecto: Welcome Gente
 */ 
